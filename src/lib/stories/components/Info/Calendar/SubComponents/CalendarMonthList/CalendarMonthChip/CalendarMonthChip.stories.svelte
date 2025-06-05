<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import CalendarMonthChip from './CalendarMonthChip.svelte';
  import type { StoryBookArgTypes } from '$lib/storybook-types.js';
  import { componentColorArray } from '$lib/types/colors.js';
  import { componentSizeArray } from '$lib/types/size.js';
  import { componentRoundnessArray } from '$lib/types/roundness.js';

  export const storyCalendarMonthChipArgTypes: StoryBookArgTypes = {
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
    component: CalendarMonthChip,
    tags: ['autodocs'],
    argTypes: storyCalendarMonthChipArgTypes,
    args: {
      value: 'jan',
    },
  });
</script>

<!-- Default CalendarMonthChip -->
<Story name="Default" />

<Story name="Selected" args={{ selected: true }} />

<Story name="Disabled" args={{ disabled: true }} />
