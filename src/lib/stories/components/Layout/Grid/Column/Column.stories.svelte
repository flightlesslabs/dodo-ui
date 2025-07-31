<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Column, { GridColumnSizeArray } from './Column.svelte';
  import type { StoryBookArgTypes } from '$lib/storybook-types.js';

  export const storyGridColumnArgTypes: StoryBookArgTypes = {
    size: {
      control: { type: 'select' },
      options: GridColumnSizeArray,
    },
  };

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    component: Column,
    tags: ['autodocs'],
    argTypes: storyGridColumnArgTypes,
  });
</script>

<!-- Default Grid Column -->
<Story name="Default">Hola!</Story>
