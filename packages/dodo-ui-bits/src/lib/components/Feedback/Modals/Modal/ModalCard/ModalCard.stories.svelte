<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import type { ArgTypes } from 'storybook/internal/csf';
  import type { ModalCardProps } from './ModalCard.svelte';
  import ModalCard from './ModalCard.svelte';
  import { Button, componentAlignmentXOptions } from '@flightlesslabs/dodo-ui';

  // ------------------------------
  // Storybook ArgTypes
  // ------------------------------
  export const storyModalCardArgTypes: Partial<ArgTypes<ModalCardProps>> = {
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
    controls: {
      table: { category: 'API', subcategory: 'Slots' },
    },
  };

  // ------------------------------
  // Storybook Meta
  // ------------------------------
  const { Story } = defineMeta({
    component: ModalCard,
    tags: ['autodocs'],
    argTypes: storyModalCardArgTypes,
  });
</script>

<!-- ------------------------------ -->
<!-- Stories -->
<!-- ------------------------------ -->

<Story name="Default" asChild>
  <ModalCard title="Modal title">
    Hello there

    {#snippet controls()}
      <Button>Okay</Button>
    {/snippet}
  </ModalCard>
</Story>
