<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import CalendarDatesChart from '../CalendarDatesChart.svelte';
  import { storyCalendarDatesChartArgTypes } from '../CalendarDatesChart.stories.svelte';
  import getMoment from '$lib/stories/developer tools/helpers/Time/getMoment/getMoment.js';

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

<Story name="Normal" />
<Story name="Small" args={{ size: 'small' }} />
<Story name="Large" args={{ size: 'large' }} />
