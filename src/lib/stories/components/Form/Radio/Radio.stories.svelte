<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Radio from './Radio.svelte';
  import type { StoryBookArgTypes } from '$lib/storybook-types.js';
  import { componentRoundnessArray } from '$lib/types/roundness.js';
  import { componentColorArray } from '$lib/types/colors.js';
  import { componentSizeArray } from '$lib/types/size.js';

  export const storyRadioArgTypes: StoryBookArgTypes = {
    color: {
      control: { type: 'select' },
      options: componentColorArray,
    },
    roundness: {
      control: { type: 'select' },
      options: componentRoundnessArray,
    },
    size: {
      control: { type: 'select' },
      options: componentSizeArray,
    },
  };

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    component: Radio,
    tags: ['autodocs'],
    argTypes: storyRadioArgTypes,
    args: {
      value: 'Car1',
      name: 'radios',
    },
  });
</script>

<!-- Radio with default style -->
<Story name="Primary" />

<Story name="WithText">This is Radio</Story>

<Story name="Selected" args={{ selectedValue: 'Car1' }} />

<Story name="Disabled" args={{ disabled: true }} />
