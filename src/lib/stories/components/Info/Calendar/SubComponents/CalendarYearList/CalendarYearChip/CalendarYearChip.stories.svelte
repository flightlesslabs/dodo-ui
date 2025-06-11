<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import CalendarYearChip from './CalendarYearChip.svelte';
  import type { StoryBookArgTypes } from '$lib/storybook-types.js';
  import { componentColorArray } from '$lib/types/colors.js';
  import { componentSizeArray } from '$lib/types/size.js';
  import { componentRoundnessArray } from '$lib/types/roundness.js';
  import getMoment from '$lib/stories/developer tools/helpers/Time/getMoment/getMoment.js';

  export const storyCalendarYearChipArgTypes: StoryBookArgTypes = {
    color: {
      control: { type: 'select' },
      options: componentColorArray,
    },
    size: {
      control: { type: 'select' },
      options: componentSizeArray,
    },
    roundness: {
      control: { type: 'select' },
      options: componentRoundnessArray,
    },
  };

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    component: CalendarYearChip,
    tags: ['autodocs'],
    argTypes: storyCalendarYearChipArgTypes,
    args: {
      value: getMoment(undefined, undefined, { utc: true }).format('YYYY'),
    },
  });
</script>

<!-- Default CalendarYearChip -->
<Story name="Default" />

<Story name="Selected" args={{ selected: true }} />

<Story name="Disabled" args={{ disabled: true }} />
