<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import type { ArgTypes } from 'storybook/internal/csf';
  import { Button, componentAlignmentXOptions, Text } from '@flightlesslabs/dodo-ui';
  import { ModalCard, Modal, type ModalProps } from '@flightlesslabs/dodo-ui-bits';

  const description = `


a portal based Modal dialog based on bits-ui [dialog](https://bits-ui.com/docs/components/dialog)

## 🚀 Installation

\`\`\`bash
pnpm add bits-ui @flightlesslabs/dodo-ui-bits
\`\`\`


For full setup (styles, themes, configuration), see the [Getting Started](https://github.com/flightlesslabs/dodo-ui/tree/main/packages/dodo-ui-bits) guide.

## ✨ Usage

 \`\`\`ts

 import { Modal } from '@flightlesslabs/dodo-ui-bits';

 <Modal />
 \`\`\`
 `;

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
    controlsAlignment: {
      control: { type: 'select' },
      options: componentAlignmentXOptions,
      table: { category: 'API', subcategory: 'Base', defaultValue: { summary: 'end' } },
    },
    title: {
      table: { category: 'API', subcategory: 'Base' },
    },
    // ------------------------------
    // Slots (Snippets)
    // ------------------------------

    customTitle: { table: { category: 'API', subcategory: 'Slots' } },
    controls: {
      table: { category: 'API', subcategory: 'Slots' },
    },
    customModalCard: {
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
      docs: {
        description: {
          component: description,
        },
      },
    },
  });

  let openDefault = $state<boolean>(false);
  let openControlsAlignment = $state<boolean>(false);
  let openCustomTitle = $state<boolean>(false);
  let openCustomModalcard = $state<boolean>(false);
</script>

<!-- ------------------------------ -->
<!-- Stories -->
<!-- ------------------------------ -->

<Story name="Default" asChild>
  <Button onclick={() => (openDefault = true)}>Open Modal</Button>

  <Modal bind:open={openDefault} title="Modal title">
    This is a basic modal with a title and a single action.

    {#snippet controls()}
      <Button onclick={() => (openDefault = false)}>Okay</Button>
    {/snippet}
  </Modal>
</Story>

<Story name="Controls Alignment" asChild>
  <Button onclick={() => (openControlsAlignment = true)}>Open</Button>

  <Modal bind:open={openControlsAlignment} title="Alignment Example" controlsAlignment="start">
    Controls can be aligned differently.

    {#snippet controls()}
      <Button onclick={() => (openControlsAlignment = false)}>Cancel</Button>
      <Button onclick={() => (openControlsAlignment = false)}>Confirm</Button>
    {/snippet}
  </Modal>
</Story>

<Story name="Custom Title" asChild>
  <Button onclick={() => (openCustomTitle = true)}>Open</Button>

  <Modal bind:open={openCustomTitle}>
    {#snippet customTitle()}
      <Text color="danger">⚠ Warning</Text>
    {/snippet}

    This action cannot be undone.

    {#snippet controls()}
      <Button onclick={() => (openCustomTitle = false)}>Cancel</Button>
      <Button color="danger" onclick={() => (openCustomTitle = false)}>Delete</Button>
    {/snippet}
  </Modal>
</Story>

<Story name="Custom Modal Card" asChild>
  <Button onclick={() => (openCustomModalcard = true)}>Open</Button>

  <Modal bind:open={openCustomModalcard}>
    {#snippet customModalCard()}
      <ModalCard onclear={() => (openCustomModalcard = false)}>
        <div style="display: flex; flex-direction: column; gap: 12px;">
          <Text>Delete Item</Text>

          <Text>Are you sure you want to delete this item? This action cannot be undone.</Text>

          <div style="display: flex; justify-content: flex-end; gap: 8px;">
            <Button onclick={() => (openCustomModalcard = false)}>Cancel</Button>

            <Button color="danger" onclick={() => (openCustomModalcard = false)}>Delete</Button>
          </div>
        </div>
      </ModalCard>
    {/snippet}
  </Modal>
</Story>
