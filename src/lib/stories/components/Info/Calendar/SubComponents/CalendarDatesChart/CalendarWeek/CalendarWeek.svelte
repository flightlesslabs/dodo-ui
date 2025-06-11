<script lang="ts" module>
  export type CalendarWeekNames = 'sun' | 'mon' | 'tue' | 'wed' | 'thu' | 'fri' | 'sat';

  export const calendarWeekNamesArray: CalendarWeekNames[] = [
    'sun',
    'mon',
    'tue',
    'wed',
    'thu',
    'fri',
    'sat',
  ];

  export type CalendarWeekOption = {
    value: DAYS_OF_WEEK;
    abr3: CalendarWeekNames;
    abr1: string;
    abr2: string;
    fullName: string;
  };

  export const calendarWeekOptions: CalendarWeekOption[] = [
    {
      value: DAYS_OF_WEEK.SUN,
      abr3: 'sun',
      abr1: 's',
      abr2: 'su',
      fullName: 'sunday',
    },
    {
      value: DAYS_OF_WEEK.MON,
      abr3: 'mon',
      abr1: 'm',
      abr2: 'mo',
      fullName: 'monday',
    },
    {
      value: DAYS_OF_WEEK.TUE,
      abr3: 'tue',
      abr1: 't',
      abr2: 'tu',
      fullName: 'tuesday',
    },
    {
      value: DAYS_OF_WEEK.WED,
      abr3: 'wed',
      abr1: 'w',
      abr2: 'we',
      fullName: 'wednesday',
    },
    {
      value: DAYS_OF_WEEK.THU,
      abr3: 'thu',
      abr1: 't',
      abr2: 'th',
      fullName: 'thursday',
    },
    {
      value: DAYS_OF_WEEK.FRI,
      abr3: 'fri',
      abr1: 'f',
      abr2: 'fr',
      fullName: 'friday',
    },
    {
      value: DAYS_OF_WEEK.SAT,
      abr3: 'sat',
      abr1: 's',
      abr2: 'sa',
      fullName: 'saturday',
    },
  ];

  export type CalendarWeekDayNameType = 'abr3' | 'abr1' | 'abr2';

  export interface CalendarWeekProps {
    /** CalendarDatesChart ref */
    ref?: HTMLLIElement;
    /** Custom css class */
    class?: string;
    /** Custom Calendar Week Content */
    customCalendarWeekContent?: (option: CalendarWeekOption) => Snippet;
    /** Custom Calendar Week */
    customCalendarWeek?: (option: CalendarWeekOption) => Snippet;
    /**  Day Name type */
    nameType?: CalendarWeekDayNameType;
    /** Start Of Week */
    startOfWeek?: CalendarWeekNames;
    /** How large should the component be? */
    size?: ComponentSize;
    /** Weekend days */
    weekendDays?: CalendarWeekNames[];
  }
</script>

<script lang="ts">
  import type { Snippet } from 'svelte';
  import { DAYS_OF_WEEK } from '../../../utils/types.js';
  import type { ComponentSize } from '$lib/types/size.js';
  import WeekDay from './WeekDay.svelte';

  let {
    class: className = '',
    ref = $bindable<HTMLLIElement>(),
    customCalendarWeekContent,
    customCalendarWeek: customCalendarWeekInternal,
    nameType = 'abr2',
    startOfWeek = 'sun',
    size = 'normal',
    weekendDays,
  }: CalendarWeekProps = $props();

  function getOrderedWeekOptions(startOfWeek: CalendarWeekNames) {
    const selectedOption =
      calendarWeekOptions.find((item) => item.abr3 === startOfWeek) || calendarWeekOptions[0];

    return [
      ...calendarWeekOptions.slice(selectedOption.value),
      ...calendarWeekOptions.slice(0, selectedOption.value),
    ];
  }

  const orderedCalendarWeekOptions = $derived(getOrderedWeekOptions(startOfWeek));

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let customCalendarWeekTyped = customCalendarWeekInternal as any;
</script>

<li class={['dodo-ui-CalendarWeek', `size--${size}`, className].join(' ')} bind:this={ref}>
  <ul>
    {#each orderedCalendarWeekOptions as option (option.value)}
      {#if customCalendarWeekTyped}
        {@render customCalendarWeekTyped(option)}
      {:else}
        <WeekDay weekOption={option} {nameType} {weekendDays} {customCalendarWeekContent} {size} />
      {/if}
    {/each}
  </ul>
</li>

<style lang="scss">
  .dodo-ui-CalendarWeek {
    display: block;
    padding: 0;
    margin: 0;
    margin-bottom: 8px;

    ul {
      padding: 0;
      display: flex;
      margin: 0;
    }
  }
</style>
