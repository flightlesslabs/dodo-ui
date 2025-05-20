<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Paper, { paperColorArray } from './Paper.svelte';
  import type { StoryBookArgTypes } from '$lib/storybook-types.js';
  import { componentRoundnessArray } from '$lib/types/roundness.js';
  import { componentShadowArray } from '$lib/types/shadow.js';
  import { componentWeightArray } from '$lib/types/weight.js';

  export const storyPaperArgTypes: StoryBookArgTypes = {
    color: {
      control: { type: 'select' },
      options: paperColorArray,
    },
    variant: {
      control: { type: 'select' },
      options: componentWeightArray,
    },
    roundness: {
      control: { type: 'select' },
      options: componentRoundnessArray,
    },
    shadow: {
      control: { type: 'select' },
      options: componentShadowArray,
    },
  };

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    component: Paper,
    tags: ['autodocs'],
    argTypes: storyPaperArgTypes,
  });
</script>

<!-- Paper with default style -->
<Story name="Default">Hola!</Story>

<!-- Paper with width and height -->
<Story name="WidthAndHeight" args={{ width: '200px', height: '200px', color: 'primary' }}>
  Hola!
</Story>

<!-- Paper with Custom Backgroun and Border colors -->
<Story
  name="Custom Color"
  args={{ height: '100px', customBackgroundColor: '#ffdfad', customBorderColor: '#fbc674' }}
>
  Hola!
</Story>
