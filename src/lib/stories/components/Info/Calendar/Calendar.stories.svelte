<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Calendar from './Calendar.svelte';
  import type { StoryBookArgTypes } from '$lib/storybook-types.js';
  import { daysOfWeekArray } from './utils/types.js';
  import getMoment from '$lib/stories/developer tools/helpers/Time/getMoment/getMoment.js';

  export const storyCalendarArgTypes: StoryBookArgTypes = {
    startOfWeek: {
      control: { type: 'select' },
      options: daysOfWeekArray,
    },
  };

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    component: Calendar,
    tags: ['autodocs'],
    argTypes: storyCalendarArgTypes,
    args: {
      date: getMoment('01-02-2025', 'DD-MM-YYYY').toDate(),
    },
  });
</script>

<!-- Default Calendar -->
<Story name="Default" />
