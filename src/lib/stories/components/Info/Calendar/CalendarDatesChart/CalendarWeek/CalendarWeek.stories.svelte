<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import CalendarWeek from './CalendarWeek.svelte';
  import type { StoryBookArgTypes } from '$lib/storybook-types.js';
  import { componentSizeArray } from '$lib/types/size.js';

  export const storyCalendarWeekArgTypes: StoryBookArgTypes = {
    size: {
      control: { type: 'select' },
      options: componentSizeArray,
    },
  };

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    component: CalendarWeek,
    tags: ['autodocs'],
    argTypes: storyCalendarWeekArgTypes,
  });
</script>

<!-- Default CalendarWeek -->
<Story name="Default" />
