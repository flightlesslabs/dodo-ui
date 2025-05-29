<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import CalendarDatesChart from './CalendarDatesChart.svelte';
  import type { StoryBookArgTypes } from '$lib/storybook-types.js';
  import getMoment from '$lib/stories/developer tools/helpers/Time/getMoment/getMoment.js';
  import { componentColorArray } from '$lib/types/colors.js';
  import { calendarWeekNamesArray } from './CalendarWeek/CalendarWeek.svelte';

  export const storyCalendarDatesChartArgTypes: StoryBookArgTypes = {
    startOfWeek: {
      control: { type: 'select' },
      options: calendarWeekNamesArray,
    },
    color: {
      control: { type: 'select' },
      options: componentColorArray,
    },
  };

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    component: CalendarDatesChart,
    tags: ['autodocs'],
    argTypes: storyCalendarDatesChartArgTypes,
    args: {
      value: getMoment().toDate(),
    },
  });
</script>

<!-- Default CalendarDatesChart -->
<Story name="Default" />

<Story
  name="ActiveMonth"
  args={{
    activeMonth: getMoment('01-02-2025', 'DD-MM-YYYY').toDate(),
  }}
/>

<Story
  name="HideSelected"
  args={{
    showSelected: false,
  }}
/>

<Story
  name="HideLastMonth"
  args={{
    value: getMoment('01-03-2025', 'DD-MM-YYYY').toDate(),
    showLastMonth: false,
  }}
/>

<Story
  name="HideNextMonth"
  args={{
    value: getMoment('01-03-2025', 'DD-MM-YYYY').toDate(),
    showNextMonth: false,
  }}
/>
