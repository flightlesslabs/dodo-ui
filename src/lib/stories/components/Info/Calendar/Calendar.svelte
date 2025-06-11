<script lang="ts" module>
  export type CalendarActiveSection = 'date' | 'month' | 'year';

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
    /** Show Month Selector */
    showCalendarMonthSelector?: boolean;
    /** Show Year Selector */
    showCalendarYearSelector?: boolean;
    /** Show Navigator */
    showCalendarNavigator?: boolean;

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

    /** Calendar Month select */
    onselectMonth?: (value: CalendarMonthNames, e: ButtonClickEvent) => void;
    /** Calendar Month cancel */
    oncancelMonth?: (e: ButtonClickEvent) => void;
    /** Custom Calendar Chip Content */
    customCalendarMonthChipContent?: (value: CalendarMonthNames) => Snippet;
    /** Custom Calendar Chip */
    customCalendarMonthChip?: (value: CalendarMonthNames) => Snippet;
    /** disabled Months */
    disabledMonths?: CalendarMonthNames[];
    /** calendarMonthChipProps: calendarMonthChip component props */
    calendarMonthChipProps?: Partial<CalendarMonthChipProps>;
    /** show month list controls */
    showControlsMonthList?: boolean;

    /** calendarYearChipProps: calendarYearChip component props */
    calendarYearChipProps?: Partial<CalendarYearChipProps>;
    /** Calendar Year select */
    onselectYear?: (value: string, e: ButtonClickEvent) => void;
    /** Calendar Year cancel */
    oncancelYear?: (e: ButtonClickEvent) => void;
    /** Custom Calendar Chip Content */
    customCalendarYearChipContent?: (value: string) => Snippet;
    /** Custom Calendar Chip */
    customCalendarYearChip?: (value: string) => Snippet;
    /** show Year list controls */
    showControlsYearList?: boolean;

    /** calendar Top Content*/
    calendarTopContent?: (activeSection: CalendarActiveSection) => Snippet;
    /** calendar Bottom Content*/
    calendarBottomContent?: (activeSection: CalendarActiveSection) => Snippet;

    /** Range value */
    rangeValue?: [Date, Date];
  }
</script>

<script lang="ts">
  import type { ComponentColor } from '$lib/types/colors.js';
  import type { Snippet } from 'svelte';
  import type { ButtonClickEvent } from '../../Form/Button/Button.svelte';
  import type { DateOfMonth } from './utils/types.js';
  import type { ComponentSize } from '$lib/types/size.js';
  import type { MouseEventHandler } from 'svelte/elements';
  import getMoment from '$lib/stories/developer tools/helpers/Time/getMoment/getMoment.js';
  import {
    type CalendarWeekNames,
    type CalendarDateChipProps,
    type CalendarWeekOption,
    CalendarDatesChart,
    CalendarControls,
    type CalendarMonthOption,
    type CalendarMonthSelectorProps,
    type CalendarYearSelectorProps,
    type CalendarMonthNames,
    calendarMonthOptions,
    MONTHS,
    type CalendarMonthChipProps,
    type CalendarYearChipProps,
  } from '$lib/index.js';
  import CalendarMonthList from './SubComponents/CalendarMonthList/CalendarMonthList.svelte';
  import CalendarYearList from './SubComponents/CalendarYearList/CalendarYearList.svelte';

  let {
    class: className = '',
    ref = $bindable<HTMLDivElement>(),
    value,
    startOfWeek = 'sun',
    timezone,
    utc,
    calendarDateChipProps,
    activeMonth: activeMonthRaw,
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
    disabledCalendarNavigationNext: disabledCalendarNavigationNextRaw,
    disabledCalendarNavigationPrev: disabledCalendarNavigationPrevRaw,
    showCalendarMonthSelector,
    showCalendarYearSelector,
    showCalendarNavigator,
    onselectMonth,
    customCalendarMonthChipContent,
    customCalendarMonthChip,
    disabledMonths,
    calendarMonthChipProps,
    calendarYearChipProps,
    onselectYear,
    customCalendarYearChipContent,
    customCalendarYearChip,
    oncancelMonth,
    oncancelYear,
    showControlsMonthList = true,
    showControlsYearList = true,
    calendarTopContent: calendarTopContentInternal,
    calendarBottomContent: calendarBottomContentInternal,
  }: CalendarProps = $props();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let calendarTopContentTyped = calendarTopContentInternal as any;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let calendarBottomContentTyped = calendarBottomContentInternal as any;

  let activeMonth = $derived<Date | undefined>(
    activeMonthRaw ||
      value ||
      getMoment(undefined, undefined, { timezone, utc }).startOf('month').startOf('day').toDate(),
  );

  const disabledCalendarNavigationNext = $derived(disabledCalendarNavigationNextRaw);
  const disabledCalendarNavigationPrev = $derived(disabledCalendarNavigationPrevRaw);

  let activeSection = $state<CalendarActiveSection>('date');

  function onCalendarNavigationNextClickMod(e: ButtonClickEvent) {
    activeMonth = getMoment(activeMonth, undefined, { timezone, utc })
      .add(1, 'month')
      .startOf('month')
      .startOf('day')
      .toDate();

    if (onCalendarNavigationNextClick) {
      onCalendarNavigationNextClick(e);
    }
  }

  function onCalendarNavigationPrevClickMod(e: ButtonClickEvent) {
    activeMonth = getMoment(activeMonth, undefined, { timezone, utc })
      .subtract(1, 'month')
      .startOf('month')
      .startOf('day')
      .toDate();

    if (onCalendarNavigationPrevClick) {
      onCalendarNavigationPrevClick(e);
    }
  }

  function onMonthSelectorClickMod(option: CalendarMonthOption, e: ButtonClickEvent) {
    activeSection = 'month';

    if (onMonthSelectorClick) {
      onMonthSelectorClick(option, e);
    }
  }

  function onYearhSelectorClickMod(selectedYear: string, e: ButtonClickEvent) {
    activeSection = 'year';

    if (onYearSelectorClick) {
      onYearSelectorClick(selectedYear, e);
    }
  }

  function onselectMonthMod(value: CalendarMonthNames, e: ButtonClickEvent) {
    const monthValue =
      calendarMonthOptions.find((item) => item.abr3 === value)?.value || MONTHS.JAN;

    activeMonth = getMoment(activeMonth, undefined, { timezone, utc })
      .set('month', monthValue)
      .startOf('month')
      .startOf('day')
      .toDate();

    activeSection = 'date';

    if (onselectMonth) {
      onselectMonth(value, e);
    }
  }

  function onselectYearMod(value: string, e: ButtonClickEvent) {
    activeMonth = getMoment(activeMonth, undefined, { timezone, utc })
      .set('year', Number(value))
      .startOf('month')
      .startOf('day')
      .toDate();

    activeSection = 'date';

    if (onselectYear) {
      onselectYear(value, e);
    }
  }

  function oncancelMonthMod(e: ButtonClickEvent) {
    activeSection = 'date';

    if (oncancelMonth) {
      oncancelMonth(e);
    }
  }

  function oncancelYearMod(e: ButtonClickEvent) {
    activeSection = 'date';

    if (oncancelYear) {
      oncancelYear(e);
    }
  }
</script>

{#snippet daysSection()}
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
      onMonthSelectorClick={onMonthSelectorClickMod}
      {calendarMonthSelectorProps}
      {customCalendarControls}
      {calendarYearSelectorProps}
      {customCalendarYearSelector}
      {customCalendarYearSelectorContent}
      onYearSelectorClick={onYearhSelectorClickMod}
      {calendarNavigationProps}
      {customCalendarNavigationNext}
      {customCalendarNavigationPrev}
      {customCalendarNavigationNextContent}
      {customCalendarNavigationPrevContent}
      onCalendarNavigationNextClick={onCalendarNavigationNextClickMod}
      onCalendarNavigationPrevClick={onCalendarNavigationPrevClickMod}
      {disabledCalendarNavigationNext}
      {disabledCalendarNavigationPrev}
      {customCalendarNavigation}
      {showCalendarMonthSelector}
      {showCalendarYearSelector}
      {showCalendarNavigator}
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
{/snippet}

{#snippet monthSection()}
  <CalendarMonthList
    value={getMoment(activeMonth, undefined, { timezone, utc })
      .format('MMM')
      .toLowerCase() as CalendarMonthNames}
    onselect={onselectMonthMod}
    {size}
    {color}
    {customCalendarMonthChipContent}
    {customCalendarMonthChip}
    {disabledMonths}
    {calendarMonthChipProps}
    oncancel={oncancelMonthMod}
    showControls={showControlsMonthList}
  />
{/snippet}

{#snippet yearSection()}
  <CalendarYearList
    value={getMoment(activeMonth, undefined, { timezone, utc }).format('YYYY')}
    {size}
    {color}
    {minDate}
    {maxDate}
    {customCalendarYearChip}
    {customCalendarYearChipContent}
    {calendarYearChipProps}
    onselect={onselectYearMod}
    oncancel={oncancelYearMod}
    showControls={showControlsYearList}
  />
{/snippet}

<div class={['dodo-ui-Calendar', className].join(' ')} bind:this={ref}>
  {#if calendarTopContentTyped}
    {@render calendarTopContentTyped(activeSection)}
  {/if}

  {#if activeSection === 'month'}
    {@render monthSection()}
  {:else if activeSection === 'year'}
    {@render yearSection()}
  {:else}
    {@render daysSection()}
  {/if}

  {#if calendarBottomContentTyped}
    {@render calendarBottomContentTyped(activeSection)}
  {/if}
</div>

<style lang="scss">
  .dodo-ui-Calendar {
    display: inline-flex;
    flex-direction: column;
  }
</style>
