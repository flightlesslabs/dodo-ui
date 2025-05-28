<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import CalendarDateChip from './CalendarDateChip.svelte';
  import type { StoryBookArgTypes } from '$lib/storybook-types.js';
  import getMoment from '$lib/stories/developer tools/helpers/Time/getMoment/getMoment.js';
  import { componentRoundnessArray } from '$lib/types/roundness.js';

  export const storyCalendarDatesChartArgTypes: StoryBookArgTypes = {
    roundness: {
      control: { type: 'select' },
      options: componentRoundnessArray,
    },
  };

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    component: CalendarDateChip,
    tags: ['autodocs'],
    argTypes: storyCalendarDatesChartArgTypes,
    args: {
      dayOfMonth: {
        id: '1',
        dayNumber: getMoment().daysInMonth(),
        date: getMoment().toDate(),
        isCurrentMonth: true,
      },
    },
  });
</script>

<!-- Default CalendarDateChip -->
<Story name="Default" />
