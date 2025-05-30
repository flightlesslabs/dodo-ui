<script lang="ts" module>
  export interface CalendarProps {
    /** Calendar ref */
    ref?: HTMLDivElement;
    /** Custom css class */
    class?: string;
    /** Selcted date Value */
    value?: Date;
    /** Start Of Week */
    startOfWeek?: CalendarWeekNames;
    /** Define active month to override month selected with value */
    activeMonth?: Date;
    /** Include leading days from the previous month */
    showLastMonth?: boolean;
    /** Include trailing days from the next month */
    showNextMonth?: boolean;
    /** What color to use? */
    color?: ComponentColor;
    /** Show slected */
    showSelected?: boolean;
    /** Show Today  */
    showToday?: boolean;
    /** Set today manually  */
    today?: Date;
    /** Minimum allowed date, rest of the dates will be disabled  */
    minDate?: Date;
    /** Maxium allowed date, rest of the dates will be disabled  */
    maxDate?: Date;
    /** Exclude Dates, these dates will be disabled */
    excludeDates?: Date[];
    /** Include Dates, rest of the dates will be disabled  */
    includeDates?: Date[];
    /** Timezone string (e.g., "America/New_York"). */
    timezone?: string;
    /** Whether to return the time in UTC. If true, overrides timezone. */
    utc?: boolean;
    /** calendarDateChipProps: CalendarDateChip component props */
    calendarDateChipProps?: Partial<CalendarDateChipProps>;
    /** onselect event handler */
    onselect?: (value: Date, dayOfMonth: DateOfMonth, e: ButtonClickEvent) => void;
    /** Custom Calendar Chip Content */
    customCalendarDateChipContent?: (dayOfMonth: DateOfMonth) => Snippet;
    /** Custom Calendar Chip */
    customCalendarDateChip?: (dayOfMonth: DateOfMonth) => Snippet;
    /** Custom Calendar Week Content */
    customCalendarWeekContent?: (week: CalendarWeekOption) => Snippet;
    /** Custom Calendar Week */
    customCalendarWeek?: (week: CalendarWeekOption) => Snippet;
    /** How large should the Component be? */
    size?: ComponentSize;
    /** Weekend days */
    weekendDays?: CalendarWeekNames[];
    /** Color Weekend days */
    weekendDaysColorDays?: boolean;
    /** Show Calendar Controls */
    showCalendarControls?: boolean;
    /** Custom Calendar Controls */
    customCalendarControls?: () => Snippet;

    /** Month Selector Props */
    calendarMonthSelectorProps?: Partial<CalendarMonthSelectorProps>;
    /** Custom MonthSelector */
    customCalendarMonthSelector?: (option: CalendarMonthOption) => Snippet;
    /** Custom MonthSelector Content */
    customCalendarMonthSelectorContent?: (option: CalendarMonthOption) => Snippet;

    /** Month Selector Click */
    onMonthSelectorClick?: (option: CalendarMonthOption, e: ButtonClickEvent) => void;
    /** Year Selector Props */
    calendarYearSelectorProps?: Partial<CalendarYearSelectorProps>;
    /** Custom YearSelector */
    customCalendarYearSelector?: (selectedYear: string) => Snippet;
    /** Custom YearSelector Content */
    customCalendarYearSelectorContent?: (selectedYear: string) => Snippet;
    /** Year Selector Click */
    onYearSelectorClick?: (selectedYear: string, e: ButtonClickEvent) => void;

    /** Calendar Navigation Props */
    calendarNavigationProps?: Partial<CalendarYearSelectorProps>;
    /** Navigation Next */
    onCalendarNavigationNextClick?: MouseEventHandler<HTMLButtonElement>;
    /** Navigation Previous */
    onCalendarNavigationPrevClick?: MouseEventHandler<HTMLButtonElement>;
    /** Custom YearSelector */
    customCalendarNavigation?: () => Snippet;
    /** Custom NavigationNext */
    customCalendarNavigationNext?: () => Snippet;
    /** Custom NavigationPrev */
    customCalendarNavigationPrev?: () => Snippet;
    /** Custom NavigationNext Content */
    customCalendarNavigationNextContent?: () => Snippet;
    /** Custom NavigationPrev Content */
    customCalendarNavigationPrevContent?: () => Snippet;
    /** Next disabled state */
    disabledCalendarNavigationNext?: boolean;
    /** Prev disabled state */
    disabledCalendarNavigationPrev?: boolean;
  }
</script>

<script lang="ts">
  import type { ComponentColor } from '$lib/types/colors.js';
  import type { Snippet } from 'svelte';
  import type { ButtonClickEvent } from '../../Form/Button/Button.svelte';
  import type { CalendarDateChipProps } from './CalendarDatesChart/CalendarDateChip/CalendarDateChip.svelte';
  import CalendarDatesChart from './CalendarDatesChart/CalendarDatesChart.svelte';
  import type { DateOfMonth } from './utils/types.js';
  import type {
    CalendarWeekNames,
    CalendarWeekOption,
  } from './CalendarDatesChart/CalendarWeek/CalendarWeek.svelte';
  import type { ComponentSize } from '$lib/types/size.js';
  import CalendarControls from './CalendarControls/CalendarControls.svelte';
  import type {
    CalendarMonthSelectorProps,
    CalendarMonthOption,
  } from './CalendarControls/CalendarMonthSelector/CalendarMonthSelector.svelte';
  import type { CalendarYearSelectorProps } from './CalendarControls/CalendarYearSelector/CalendarYearSelector.svelte';
  import type { MouseEventHandler } from 'svelte/elements';

  let {
    class: className = '',
    ref = $bindable<HTMLDivElement>(),
    value,
    startOfWeek = 'sun',
    timezone,
    utc,
    calendarDateChipProps,
    activeMonth,
    showSelected = true,
    showLastMonth = true,
    showNextMonth = true,
    showToday = true,
    today,
    minDate,
    maxDate,
    excludeDates,
    includeDates,
    onselect,
    customCalendarDateChipContent,
    customCalendarDateChip,
    color,
    customCalendarWeekContent,
    customCalendarWeek,
    size = 'normal',
    weekendDays,
    weekendDaysColorDays = true,
    customCalendarControls,
    showCalendarControls = true,
    calendarMonthSelectorProps,
    customCalendarMonthSelector,
    customCalendarMonthSelectorContent,
    onMonthSelectorClick,
    calendarYearSelectorProps,
    customCalendarYearSelector,
    customCalendarYearSelectorContent,
    onYearSelectorClick,
    calendarNavigationProps,
    customCalendarNavigation,
    customCalendarNavigationNext,
    customCalendarNavigationPrev,
    customCalendarNavigationNextContent,
    customCalendarNavigationPrevContent,
    onCalendarNavigationNextClick,
    onCalendarNavigationPrevClick,
    disabledCalendarNavigationNext,
    disabledCalendarNavigationPrev,
  }: CalendarProps = $props();
</script>

<div class={['dodo-ui-Calendar', className].join(' ')} bind:this={ref}>
  {#if showCalendarControls}
    <CalendarControls
      {activeMonth}
      {value}
      {timezone}
      {utc}
      {color}
      {size}
      {customCalendarMonthSelector}
      {customCalendarMonthSelectorContent}
      {onMonthSelectorClick}
      {calendarMonthSelectorProps}
      {customCalendarControls}
      {calendarYearSelectorProps}
      {customCalendarYearSelector}
      {customCalendarYearSelectorContent}
      {onYearSelectorClick}
      {calendarNavigationProps}
      {customCalendarNavigationNext}
      {customCalendarNavigationPrev}
      {customCalendarNavigationNextContent}
      {customCalendarNavigationPrevContent}
      {onCalendarNavigationNextClick}
      {onCalendarNavigationPrevClick}
      {disabledCalendarNavigationNext}
      {disabledCalendarNavigationPrev}
      {customCalendarNavigation}
    />
  {/if}

  <CalendarDatesChart
    {today}
    {minDate}
    {maxDate}
    {excludeDates}
    {includeDates}
    {showToday}
    {showSelected}
    {showLastMonth}
    {showNextMonth}
    {activeMonth}
    {value}
    {startOfWeek}
    {timezone}
    {utc}
    {calendarDateChipProps}
    {onselect}
    {customCalendarDateChipContent}
    {customCalendarDateChip}
    {color}
    {customCalendarWeekContent}
    {customCalendarWeek}
    {size}
    {weekendDays}
    {weekendDaysColorDays}
  />
</div>

<style lang="scss">
  .dodo-ui-Calendar {
    display: inline-flex;
    flex-direction: column;
  }
</style>
