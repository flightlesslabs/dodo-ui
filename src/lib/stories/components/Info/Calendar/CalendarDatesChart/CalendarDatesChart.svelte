<script lang="ts" module>
  export interface CalendarDatesChartProps {
    /** CalendarDatesChart ref */
    ref?: HTMLUListElement;
    /** Custom css class */
    class?: string;
    /** date */
    date: Date;
    /** date */
    format?: GetMomentFormat;
    /** Start Of Week */
    startOfWeek?: DAYS_OF_WEEK;
    /** Timezone string (e.g., "America/New_York"). */
    timezone?: string;
    /** Whether to return the time in UTC. If true, overrides timezone. */
    utc?: boolean;
  }
</script>

<script lang="ts">
  import { type GetMomentFormat } from '$lib/stories/developer tools/helpers/Time/getMoment/getMoment.js';
  import getDatesOfMonth from '../utils/getDatesOfMonth.js';
  import type { DAYS_OF_WEEK } from '../utils/types.js';

  let {
    class: className = '',
    ref = $bindable<HTMLUListElement>(),
    date,
    format,
    startOfWeek,
    timezone,
    utc,
  }: CalendarDatesChartProps = $props();

  const daysGroup =
    getDatesOfMonth(date, {
      format,
      startOfWeek,
      timezone,
      utc,
    }) || [];
</script>

<ul class={['dodo-ui-CalendarDatesChart', className].join(' ')} bind:this={ref}>
  <li class="heading">
    <ul>
      <li>Su</li>
      <li>Mo</li>
      <li>Tu</li>
      <li>We</li>
      <li>Th</li>
      <li>Fr</li>
      <li>Sa</li>
    </ul>
  </li>
  {#each daysGroup as group, index (index)}
    <li class="week">
      <ul>
        {#each group as day (day.id)}
          <li class="day">
            <button class="chip">
              {day.dayNumber}
            </button>
          </li>
        {/each}
      </ul>
    </li>
  {/each}
</ul>

<style lang="scss">
  .dodo-ui-CalendarDatesChart {
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;

    ul {
      padding: 0;
      display: flex;
      margin: 0;
    }

    .heading {
      display: block;
      padding: 0;
      margin: 0;
      margin-bottom: 8px;

      li {
        display: inline-flex;
        width: 30px;
        justify-content: center;
        font-size: 0.8rem;
        font-family: inherit;
        color: inherit;
      }
    }

    .week {
      display: block;
      padding: 0;
      margin: 0;
    }

    .day {
      display: inline-flex;
      width: 30px;
      height: 30px;
      font-size: 0.8rem;
      justify-content: center;
      align-items: center;
    }

    .chip {
      cursor: pointer;
      outline: none;
      transition: all 150ms;
      text-decoration: none;
      margin: 0;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      font-family: inherit;
      color: inherit;
      background-color: transparent;
      transition: all 50ms;
      width: 100%;
      height: 100%;
      font-size: 0.8rem;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: var(--dodo-ui-element-roundness-1);
      outline: 0;
      border: 0;

      &:hover {
        background-color: var(--dodo-color-primary-200);
      }
    }
  }
</style>
