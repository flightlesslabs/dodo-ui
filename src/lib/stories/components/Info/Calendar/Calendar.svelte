<script lang="ts" module>
  export interface CalendarProps {
    /** Calendar ref */
    ref?: HTMLDivElement;
    /** Custom css class */
    class?: string;
    /** Selcted date Value */
    value?: Date;
    /** date */
    format?: GetMomentFormat;
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
  }
</script>

<script lang="ts">
  import getMoment, {
    type GetMomentFormat,
  } from '$lib/stories/developer tools/helpers/Time/getMoment/getMoment.js';
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

  let {
    class: className = '',
    ref = $bindable<HTMLDivElement>(),
    value,
    format,
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
  }: CalendarProps = $props();

  const dateMoment = getMoment(activeMonth || value, format, { timezone, utc });
  const heading = dateMoment.format('MMM YYYY');
</script>

<div class={['dodo-ui-Calendar', className].join(' ')} bind:this={ref}>
  <h3>{heading}</h3>
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
    {format}
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
  />
</div>

<style lang="scss">
  .dodo-ui-Calendar {
    h3 {
      font-size: 0.9rem;
      font-weight: 600;
    }
  }
</style>
