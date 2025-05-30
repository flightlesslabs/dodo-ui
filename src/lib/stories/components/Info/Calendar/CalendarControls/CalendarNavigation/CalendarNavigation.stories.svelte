<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import CalendarNavigation from './CalendarNavigation.svelte';
  import type { StoryBookArgTypes } from '$lib/storybook-types.js';
  import getMoment from '$lib/stories/developer tools/helpers/Time/getMoment/getMoment.js';
  import { componentColorArray } from '$lib/types/colors.js';
  import { componentSizeArray } from '$lib/types/size.js';
  import { componentRoundnessArray } from '$lib/types/roundness.js';

  export const storyCalendarNavigationArgTypes: StoryBookArgTypes = {
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
    component: CalendarNavigation,
    tags: ['autodocs'],
    argTypes: storyCalendarNavigationArgTypes,
  });
</script>

<!-- Default CalendarNavigation -->
<Story name="Default" />

<Story
  name="Disabled"
  args={{
    disabledCalendarNavigationNext: true,
    disabledCalendarNavigationPrev: true,
  }}
/>
