<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Paper from './Paper.svelte';
  import type { StoryBookArgTypes } from '$lib/storybook-types.js';
  import { componentRoundnessArray } from '$lib/types/roundness.js';
  import { componentShadowArray } from '$lib/types/shadow.js';

  export const storyPaperArgTypes: StoryBookArgTypes = {
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

<!-- ⚠️ Test Paper: Do not use! -->
<Story
  name="Test Paper"
  args={{
    _unsafeChildrenStringForTesting: 'Hola!',
  }}
/>

<!-- Paper with default style -->
<Story name="Default">
  <Paper>Hola!</Paper>
</Story>

<!-- Paper with width and height -->
<Story name="WidthAndHeight">
  <Paper width="200px" height="200px">Hola!</Paper>
</Story>
