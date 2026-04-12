<script module lang="ts">
  import { type GridRowProps, Row, Column } from '@flightlesslabs/dodo-ui';
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import type { ArgTypes } from 'storybook/internal/csf';

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
