<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import CalendarControls from './CalendarControls.svelte';
  import type { StoryBookArgTypes } from '$lib/storybook-types.js';
  import getMoment from '$lib/stories/developer tools/helpers/Time/getMoment/getMoment.js';
  import { componentColorArray } from '$lib/types/colors.js';
  import { componentSizeArray } from '$lib/types/size.js';

  export const storyCalendarControlsArgTypes: StoryBookArgTypes = {
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
    component: CalendarControls,
    tags: ['autodocs'],
    argTypes: storyCalendarControlsArgTypes,
  });

  let value = $state(getMoment().toDate());
</script>

<!-- Default CalendarControls -->
<Story
  name="Default"
  args={{
    value,
  }}
/>
