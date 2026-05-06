<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import type { ArgTypes } from 'storybook/internal/csf';
  import { Button, componentAlignmentXOptions, Text } from '@flightlesslabs/dodo-ui';

  import {
    ConfirmDialog,
    ConfirmDialogCard,
    type ConfirmDialogProps,
  } from '@flightlesslabs/dodo-ui-bits';

  const description = `

ConfirmDialog based on Modal

## 🚀 Installation

\`\`\`bash
pnpm add bits-ui @flightlesslabs/dodo-ui-bits
\`\`\`


For full setup (styles, themes, configuration), see the [Getting Started](https://github.com/flightlesslabs/dodo-ui/tree/main/packages/dodo-ui-bits) guide.

## ✨ Usage

 \`\`\`ts

 import { ConfirmDialog } from '@flightlesslabs/dodo-ui-bits';

 <ConfirmDialog />
 \`\`\`

 `;

  // ------------------------------
  // Storybook ArgTypes
  // ------------------------------
  export const storyConfirmDialogArgTypes: Partial<ArgTypes<ConfirmDialogProps>> = {
    // ------------------------------
    // Core
    // ------------------------------
    class: { table: { category: 'API', subcategory: 'Base' } },
    clearOnAccept: {
      control: { type: 'boolean' },
      table: { category: 'API', subcategory: 'Base', defaultValue: { summary: 'true' } },
    },
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
    customModalCard: {
      table: { category: 'API', subcategory: 'Slots' },
    },
  };

  // ------------------------------
  // Storybook Meta
  // ------------------------------
  const { Story } = defineMeta({
    component: ConfirmDialog,
    tags: ['autodocs'],
    argTypes: storyConfirmDialogArgTypes,
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
  let openAcceptButtonProps = $state<boolean>(false);
  let openCustomAcceptButton = $state<boolean>(false);
  let openControlsAlignment = $state<boolean>(false);
  let openCustomTitle = $state<boolean>(false);
  let openCustomModalcard = $state<boolean>(false);
</script>

<!-- ------------------------------ -->
<!-- Stories -->
<!-- ------------------------------ -->

<Story name="Default" asChild>
  <Button onclick={() => (openDefault = true)}>Open</Button>

  <ConfirmDialog bind:open={openDefault} title="Confirm Dialog title">
    This is a basic ConfirmDialog with a title and a single action.
  </ConfirmDialog>
</Story>

<Story name="Accept Button Props" asChild>
  <Button onclick={() => (openAcceptButtonProps = true)}>Open</Button>

  <ConfirmDialog
    bind:open={openAcceptButtonProps}
    title="Confirm Dialog title"
    acceptButtonProps={{ label: 'Ok', color: 'safe' }}
  >
    This is a basic ConfirmDialog with a title and a single action.
  </ConfirmDialog>
</Story>

<Story name="Custom Accept Button" asChild>
  <Button onclick={() => (openCustomAcceptButton = true)}>Open</Button>

  <ConfirmDialog bind:open={openCustomAcceptButton} title="Confirm Dialog title">
    This is a basic ConfirmDialog with a title and a single action.

    {#snippet customAcceptButton()}
      <Button compact onclick={() => (openCustomAcceptButton = false)}>👍</Button>
    {/snippet}
  </ConfirmDialog>
</Story>

<Story name="Controls Alignment" asChild>
  <Button onclick={() => (openControlsAlignment = true)}>Open</Button>

  <ConfirmDialog
    bind:open={openControlsAlignment}
    title="Alignment Example"
    controlsAlignment="start"
  >
    Controls can be aligned differently.
  </ConfirmDialog>
</Story>

<Story name="Custom Title" asChild>
  <Button onclick={() => (openCustomTitle = true)}>Open</Button>

  <ConfirmDialog bind:open={openCustomTitle}>
    {#snippet customTitle()}
      <Text color="danger">⚠ Warning</Text>
    {/snippet}

    This action cannot be undone.
  </ConfirmDialog>
</Story>

<Story name="Custom Modal Card" asChild>
  <Button onclick={() => (openCustomModalcard = true)}>Open</Button>

  <ConfirmDialog bind:open={openCustomModalcard}>
    {#snippet customModalCard()}
      <ConfirmDialogCard
        onclear={() => (openCustomModalcard = false)}
        bind:open={openCustomModalcard}
      >
        <div style="display: flex; flex-direction: column; gap: 12px;">
          <Text>Delete Item</Text>

          <Text>Are you sure you want to delete this item? This action cannot be undone.</Text>
        </div>
      </ConfirmDialogCard>
    {/snippet}
  </ConfirmDialog>
</Story>
