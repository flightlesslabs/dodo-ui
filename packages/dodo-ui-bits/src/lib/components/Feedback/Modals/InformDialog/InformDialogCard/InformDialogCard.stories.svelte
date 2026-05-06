<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import type { ArgTypes } from 'storybook/internal/csf';
  import type { InformDialogCardProps } from './InformDialogCard.svelte';
  import InformDialogCard from './InformDialogCard.svelte';
  import { componentAlignmentXOptions } from '@flightlesslabs/dodo-ui';

  // ------------------------------
  // Storybook ArgTypes
  // ------------------------------
  export const storyInformDialogCardArgTypes: Partial<ArgTypes<InformDialogCardProps>> = {
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
    component: InformDialogCard,
    tags: ['autodocs'],
    argTypes: storyInformDialogCardArgTypes,
  });
</script>

<!-- ------------------------------ -->
<!-- Stories -->
<!-- ------------------------------ -->

<Story name="Default" asChild>
  <InformDialogCard title="Modal title">Hello there</InformDialogCard>
</Story>
