<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import RangeSlider from './RangeSlider.svelte';
  import type { StoryBookArgTypes } from '$lib/storybook-types.js';
  import { componentRoundnessArray } from '$lib/types/roundness.js';
  import { componentSizeArray } from '$lib/types/size.js';
  import { componentColorArray } from '$lib/types/colors.js';

  export const storyRangeSliderArgTypes: StoryBookArgTypes = {
    color: {
      control: { type: 'select' },
      options: componentColorArray,
    },
    roundness: {
      control: { type: 'select' },
      options: componentRoundnessArray,
    },
    thumbRoundness: {
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
    component: RangeSlider,
    tags: ['autodocs'],
    argTypes: storyRangeSliderArgTypes,
  });

  let value = $state<number>(30);
</script>

<!-- RangeSlider with default style -->
<Story
  name="Default"
  args={{
    value,
  }}
/>

<Story
  name="Step"
  args={{
    value,
    step: 10,
  }}
/>

<Story
  name="MinMax"
  args={{
    value,
    min: 0,
    max: 1500,
  }}
/>

<Story
  name="Disabled"
  args={{
    value: 30,
    disabled: true,
  }}
/>
