<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import CalendarDatesChart from './CalendarDatesChart.svelte';
  import type { StoryBookArgTypes } from '$lib/storybook-types.js';
  import getMoment from '$lib/stories/developer tools/helpers/Time/getMoment/getMoment.js';
  import { daysOfWeekArray } from '../utils/types.js';

  export const storyCalendarDatesChartArgTypes: StoryBookArgTypes = {
    startOfWeek: {
      control: { type: 'select' },
      options: daysOfWeekArray,
    },
  };

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    component: CalendarDatesChart,
    tags: ['autodocs'],
    argTypes: storyCalendarDatesChartArgTypes,
    args: {
      date: getMoment('01-02-2025', 'DD-MM-YYYY').toDate(),
    },
  });
</script>

<!-- Default CalendarDatesChart -->
<Story name="Default" />
