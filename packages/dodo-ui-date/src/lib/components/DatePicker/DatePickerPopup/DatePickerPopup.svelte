<script lang="ts" module>
  export type DatePickerPopupProps = DatePickerContentProps & Omit<CardProps, 'children' | 'ref'>;
</script>

<script lang="ts">
  import { DatePicker, type DatePickerContentProps } from 'bits-ui';
  import Header from './Header.svelte';
  import CalendarGrid from './CalendarGrid.svelte';
  import { type CardProps, useThemeContext } from '@flightlesslabs/dodo-ui';
  let {
    roundness = 1,
    outline = false,
    class: className = '',
    theme: cardTheme,
    color = 'default',
    variant = 'text',
    shadow = 2,
    active = false,
    sideOffset = 10,
    align = 'end',
    ...restProps
  }: DatePickerPopupProps = $props();

  const themeContext = useThemeContext();
  const theme = $derived(cardTheme ? cardTheme : themeContext.theme);

  const popupClasses = $derived(
    [
      'dodo-ui-Card',
      'dodo-ui-Calendar',
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
    {#snippet children(calendarRootSnippetProps)}
      <Header />
      <CalendarGrid {...calendarRootSnippetProps} />
    {/snippet}
  </DatePicker.Calendar>
</DatePicker.Content>
