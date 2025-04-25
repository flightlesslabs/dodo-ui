<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Paper from './Paper.svelte';
  import type { StoryBookArgTypes } from '$lib/storybook-types.js';

  export const storyPaperArgTypes: StoryBookArgTypes = {
    roundness: {
      control: { type: 'select' },
      options: [false, '1x', '2x', '3x', 'full'],
    },
    shadow: {
      control: { type: 'select' },
      options: [false, '1x', '2x', '3x', '4x', '5x', '6x', '7x'],
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
