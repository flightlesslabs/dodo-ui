<script lang="ts" module>
  export interface CalendarProps {
    /** Calendar ref */
    ref?: HTMLDivElement;
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
  import getMoment, {
    type GetMomentFormat,
  } from '$lib/stories/developer tools/helpers/Time/getMoment/getMoment.js';
  import CalendarDatesChart from './CalendarDatesChart/CalendarDatesChart.svelte';
  import type { DAYS_OF_WEEK } from './utils/types.js';

  let {
    class: className = '',
    ref = $bindable<HTMLDivElement>(),
    date,
    format,
    startOfWeek,
    timezone,
    utc,
  }: CalendarProps = $props();

  const dateMoment = getMoment(date, format, { timezone, utc });
  const heading = dateMoment.format('MMM YYYY');
</script>

<div class={['dodo-ui-Calendar', className].join(' ')} bind:this={ref}>
  <h3>{heading}</h3>
  <CalendarDatesChart {date} {format} {startOfWeek} {timezone} {utc} />
</div>

<style lang="scss">
  .dodo-ui-Calendar {
    h3 {
      font-size: 0.9rem;
      font-weight: 600;
    }
  }
</style>
