<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Column, { gridColumnSizeOptions } from './Column.svelte';
  import type { GridColumnProps } from './Column.svelte';
  import type { ArgTypes } from 'storybook/internal/csf';

  // ------------------------------
  // Storybook ArgTypes
  // ------------------------------
  export const storyColumnArgTypes: Partial<ArgTypes<GridColumnProps>> = {
    // ------------------------------
    // Core
    // ------------------------------
    children: { table: { category: 'API', subcategory: 'Base' } },
    class: { table: { category: 'API', subcategory: 'Base' } },

    // ------------------------------
    // Size
    // ------------------------------
    size: {
      control: { type: 'select' },
      options: gridColumnSizeOptions,
      table: { category: 'API', subcategory: 'Size', defaultValue: { summary: '12' } },
    },
    sm: {
      control: { type: 'select' },
      options: gridColumnSizeOptions,
      table: { category: 'API', subcategory: 'Size' },
    },
    md: {
      control: { type: 'select' },
      options: gridColumnSizeOptions,
      table: { category: 'API', subcategory: 'Size' },
    },
    lg: {
      control: { type: 'select' },
      options: gridColumnSizeOptions,
      table: { category: 'API', subcategory: 'Size' },
    },
    xl: {
      control: { type: 'select' },
      options: gridColumnSizeOptions,
      table: { category: 'API', subcategory: 'Size' },
    },
    xxl: {
      control: { type: 'select' },
      options: gridColumnSizeOptions,
      table: { category: 'API', subcategory: 'Size' },
    },
  };

  // ------------------------------
  // Storybook Meta
  // ------------------------------
  const { Story } = defineMeta({
    component: Column,
    tags: ['autodocs'],
    argTypes: storyColumnArgTypes,
  });
</script>

<!-- ------------------------------ -->
<!-- Stories -->
<!-- ------------------------------ -->

<Story name="Default">Hello there</Story>
