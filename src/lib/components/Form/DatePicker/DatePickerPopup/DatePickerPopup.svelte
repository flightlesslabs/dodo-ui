<script lang="ts" module>
  import type { CardProps } from '$lib/components/Layout/Card/Card.svelte';
  import { useThemeContext } from '$lib/components/Layout/Theme/ThemeSystem/context.js';

  export type DatePickerPopupProps = DatePickerContentProps & Omit<CardProps, 'children' | 'ref'>;
</script>

<script lang="ts">
  import { DatePicker, type DatePickerContentProps } from 'bits-ui';
  import Header from './Header.svelte';
  let {
    roundness = 1,
    outline = true,
    class: className = '',
    theme: cardTheme,
    color = 'default',
    variant = 'text',
    shadow = 2,
    active = false,
    sideOffset = 6,
    align = 'end',
    ...restProps
  }: DatePickerPopupProps = $props();

  const themeContext = useThemeContext();
  const theme = $derived(cardTheme ? cardTheme : themeContext.theme);

  const popupClasses = $derived(
    [
      'dodo-ui-Card',
      'DatePickerPopup',
      `color--${color}`,
      `variant--${variant}`,
      `roundness--${roundness}`,
      `dodo-shadow-${shadow}`,
      outline && 'outline',
      active && 'active',
      theme ? `dodo-theme--${theme}` : '',
      className,
    ].filter(Boolean),
  );
</script>

<DatePicker.Content class={popupClasses.join(' ')} {...restProps} {sideOffset} {align}>
  <DatePicker.Calendar>
    {#snippet children({ months, weekdays })}
      <Header />
      <div>
        {#each months as month (month.value)}
          <DatePicker.Grid>
            <DatePicker.GridHead>
              <DatePicker.GridRow>
                {#each weekdays as day (day)}
                  <DatePicker.HeadCell>
                    <div>{day.slice(0, 2)}</div>
                  </DatePicker.HeadCell>
                {/each}
              </DatePicker.GridRow>
            </DatePicker.GridHead>
            <DatePicker.GridBody>
              {#each month.weeks as weekDates (weekDates)}
                <DatePicker.GridRow>
                  {#each weekDates as date (date)}
                    <DatePicker.Cell {date} month={month.value}>
                      <DatePicker.Day>
                        <div></div>
                        {date.day}
                      </DatePicker.Day>
                    </DatePicker.Cell>
                  {/each}
                </DatePicker.GridRow>
              {/each}
            </DatePicker.GridBody>
          </DatePicker.Grid>
        {/each}
      </div>
    {/snippet}
  </DatePicker.Calendar>
</DatePicker.Content>
