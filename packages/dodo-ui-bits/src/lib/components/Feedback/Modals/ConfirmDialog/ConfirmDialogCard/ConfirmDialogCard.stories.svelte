<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import type { ArgTypes } from 'storybook/internal/csf';
  import type { ConfirmDialogCardProps } from './ConfirmDialogCard.svelte';
  import ConfirmDialogCard from './ConfirmDialogCard.svelte';
  import { componentAlignmentXOptions } from '@flightlesslabs/dodo-ui';

  // ------------------------------
  // Storybook ArgTypes
  // ------------------------------
  export const storyConfirmDialogCardArgTypes: Partial<ArgTypes<ConfirmDialogCardProps>> = {
    // ------------------------------
    // Core
    // ------------------------------
    class: { table: { category: 'API', subcategory: 'Base' } },
    clearable: {
      control: { type: 'boolean' },
      table: { category: 'API', subcategory: 'Base' },
    },
    controlsAlignment: {
      control: { type: 'select' },
      options: componentAlignmentXOptions,
      table: { category: 'API', subcategory: 'Base', defaultValue: { summary: 'end' } },
    },

    // ------------------------------
    // Slots (Snippets)
    // ------------------------------
    title: {
      table: { category: 'API', subcategory: 'Slots' },
    },
  };

  // ------------------------------
  // Storybook Meta
  // ------------------------------
  const { Story } = defineMeta({
    component: ConfirmDialogCard,
    tags: ['autodocs'],
    argTypes: storyConfirmDialogCardArgTypes,
  });
</script>

<!-- ------------------------------ -->
<!-- Stories -->
<!-- ------------------------------ -->

<Story name="Default" asChild>
  <ConfirmDialogCard title="Modal title">Hello there</ConfirmDialogCard>
</Story>
