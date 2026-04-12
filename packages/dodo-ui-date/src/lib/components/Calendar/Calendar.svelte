<script lang="ts" module>
  export type CalendarProps = Omit<CalendarSingleRootProps, 'type'> &
    Omit<CardProps, 'children' | 'ref'>;
</script>

<script lang="ts">
  import { Calendar as CalendarBitsUi, type CalendarSingleRootProps } from 'bits-ui';
  import Header from './Header.svelte';
  import CalendarGrid from './CalendarGrid/CalendarGrid.svelte';
  import { useThemeContext, type CardProps } from '@flightlesslabs/dodo-ui';
  let {
    roundness = 1,
    outline = true,
    class: className = '',
    theme: cardTheme,
    color = 'default',
    variant = 'text',
    shadow = 0,
    active = false,
    weekStartsOn = 1,
    weekdayFormat = 'short',
    fixedWeeks = true,
    value = $bindable(undefined),
    ...restProps
  }: CalendarProps = $props();

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

<CalendarBitsUi.Root
  {...restProps}
  {weekStartsOn}
  {weekdayFormat}
  {fixedWeeks}
  bind:value
  type="single"
  class={popupClasses.join(' ')}
>
  {#snippet children(calendarRootSnippetProps)}
    <Header />
    <CalendarGrid {...calendarRootSnippetProps} />
  {/snippet}
</CalendarBitsUi.Root>
