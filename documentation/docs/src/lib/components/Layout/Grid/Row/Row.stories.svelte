<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Row from './Row.svelte';
  import type { GridRowProps } from './Row.svelte';
  import type { ArgTypes } from 'storybook/internal/csf';
  import Column from '../Column/Column.svelte';

  // ------------------------------
  // Storybook ArgTypes
  // ------------------------------
  export const storyRowArgTypes: Partial<ArgTypes<GridRowProps>> = {
    // ------------------------------
    // Core
    // ------------------------------
    children: { table: { category: 'API', subcategory: 'Base' } },
    class: { table: { category: 'API', subcategory: 'Base' } },
  };

  // ------------------------------
  // Storybook Meta
  // ------------------------------
  const { Story } = defineMeta({
    component: Row,
    tags: ['autodocs'],
    argTypes: storyRowArgTypes,
  });
</script>

<!-- ------------------------------ -->
<!-- Stories -->
<!-- ------------------------------ -->

<Story name="Default">
  <Column sm={4}>Hello there</Column>
  <Column sm={4}>Hello there</Column>
  <Column sm={4}>Hello there</Column>
  <Column sm={4}>Hello there</Column>
  <Column sm={4}>Hello there</Column>
</Story>
