<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import CalendarYearList from './CalendarYearList.svelte';
  import type { StoryBookArgTypes } from '$lib/storybook-types.js';
  import { componentColorArray } from '$lib/types/colors.js';
  import { componentSizeArray } from '$lib/types/size.js';
  import getMoment from '$lib/stories/developer tools/helpers/Time/getMoment/getMoment.js';

  export const storyCalendarYearListArgTypes: StoryBookArgTypes = {
    color: {
      control: { type: 'select' },
      options: componentColorArray,
    },
    size: {
      control: { type: 'select' },
      options: componentSizeArray,
    },
  };

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    component: CalendarYearList,
    tags: ['autodocs'],
    argTypes: storyCalendarYearListArgTypes,
    args: {
      value: getMoment(undefined, undefined, { utc: true }).format('YYYY'),
    },
  });
</script>

<!-- Default CalendarYearList -->
<Story name="Default" />
