<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import type { ArgTypes } from 'storybook/internal/csf';
  import type { ModalProps } from './Modal.svelte';
  import Modal from './Modal.svelte';
  import { Button } from '@flightlesslabs/dodo-ui';

  // ------------------------------
  // Storybook ArgTypes
  // ------------------------------
  export const storyModalArgTypes: Partial<ArgTypes<ModalProps>> = {
    // ------------------------------
    // Core
    // ------------------------------
    class: { table: { category: 'API', subcategory: 'Base' } },
    clearable: {
      control: { type: 'boolean' },
      table: { category: 'API', subcategory: 'Base' },
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
    component: Modal,
    tags: ['autodocs'],
    argTypes: storyModalArgTypes,
    parameters: {
      layout: 'fullscreen',
    },
  });

  let openDefault = $state<boolean>(false);
</script>

<!-- ------------------------------ -->
<!-- Stories -->
<!-- ------------------------------ -->

<Story name="Default" asChild>
  <Button onclick={() => (openDefault = true)}>Open</Button>

  <Modal bind:open={openDefault}>
    {#snippet title()}
      Hello there
    {/snippet}

    Hello there

    {#snippet controls()}
      <Button onclick={() => (openDefault = false)}>Okay</Button>
    {/snippet}
  </Modal>
</Story>
