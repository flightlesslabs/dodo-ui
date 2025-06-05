<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import CalendarMonthList from './CalendarMonthList.svelte';
  import type { StoryBookArgTypes } from '$lib/storybook-types.js';
  import { componentColorArray } from '$lib/types/colors.js';
  import { componentSizeArray } from '$lib/types/size.js';

  export const storyCalendarMonthListArgTypes: StoryBookArgTypes = {
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
    component: CalendarMonthList,
    tags: ['autodocs'],
    argTypes: storyCalendarMonthListArgTypes,
    args: {
      value: 'jan',
    },
  });
</script>

<!-- Default CalendarMonthList -->
<Story name="Default" />

<Story
  name="DisabledMonths"
  args={{
    disabledMonths: ['feb', 'jul'],
  }}
/>
