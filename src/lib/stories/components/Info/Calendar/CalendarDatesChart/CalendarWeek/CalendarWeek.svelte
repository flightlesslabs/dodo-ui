<script lang="ts" module>
  export type CalendarWeekNames = 'sun' | 'mon' | 'tue' | 'wed' | 'thu' | 'fri' | 'sat';

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
    customCalendarWeekContent?: (week: CalendarWeekOption) => Snippet;
    /** Custom Calendar Week */
    customCalendarWeek?: (week: CalendarWeekOption) => Snippet;
    /**  Day Name type */
    nameType?: CalendarWeekDayNameType;
  }
</script>

<script lang="ts">
  import type { Snippet } from 'svelte';
  import { DAYS_OF_WEEK } from '../../utils/types.js';

  let {
    class: className = '',
    ref = $bindable<HTMLLIElement>(),
    customCalendarWeekContent: customCalendarWeekContentInternal,
    customCalendarWeek: customCalendarWeekInternal,
    nameType = 'abr2',
  }: CalendarWeekProps = $props();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let customCalendarWeekContentTyped = customCalendarWeekContentInternal as any;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let customCalendarWeekTyped = customCalendarWeekInternal as any;
</script>

{#snippet weekName(week: CalendarWeekOption)}
  {#if nameType === 'abr3'}
    {week.abr3}
  {:else if nameType === 'abr1'}
    {week.abr1}
  {:else if nameType === 'abr2'}
    {week.abr2}
  {:else}
    {week.abr2}
  {/if}
{/snippet}

{#snippet weekContent(week: CalendarWeekOption)}
  {#if customCalendarWeekTyped}
    {@render customCalendarWeekTyped(week)}
  {:else}
    <li>
      {#if customCalendarWeekContentTyped}
        {@render customCalendarWeekContentTyped(week)}
      {:else}
        {@render weekName(week)}
      {/if}
    </li>
  {/if}
{/snippet}

<li class={['dodo-ui-CalendarWeek', className].join(' ')} bind:this={ref}>
  <ul>
    {#each calendarWeekOptions as week (week.value)}
      {@render weekContent(week)}
    {/each}
  </ul>
</li>

<style lang="scss">
  .dodo-ui-CalendarWeek {
    display: block;
    padding: 0;
    margin: 0;
    margin-bottom: 8px;
    color: var(--dodo-color-neutral-700);

    li {
      display: inline-flex;
      width: 30px;
      justify-content: center;
      font-size: 0.8rem;
      font-family: inherit;
      color: inherit;
      text-transform: capitalize;
    }

    ul {
      padding: 0;
      display: flex;
      margin: 0;
    }
  }
</style>
