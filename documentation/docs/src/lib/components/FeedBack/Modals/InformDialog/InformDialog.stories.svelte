<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import type { ArgTypes } from 'storybook/internal/csf';
  import { Button, componentAlignmentXOptions, Text } from '@flightlesslabs/dodo-ui';

  import {
    InformDialogCard,
    InformDialog,
    type InformDialogProps,
  } from '@flightlesslabs/dodo-ui-bits';

  const description = `

 InformDialog based on Modal

## 🚀 Installation

\`\`\`bash
pnpm add bits-ui @flightlesslabs/dodo-ui-bits
\`\`\`

For full setup (styles, themes, configuration), see the [Getting Started](https://github.com/flightlesslabs/dodo-ui/tree/main/packages/dodo-ui-bits) guide.

## ✨ Usage

 \`\`\`ts

 import { InformDialog } from '@flightlesslabs/dodo-ui-bits';

 <InformDialog />
 \`\`\`

 `;

  // ------------------------------
  // Storybook ArgTypes
  // ------------------------------
  export const storyInformDialogArgTypes: Partial<ArgTypes<InformDialogProps>> = {
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
    component: InformDialog,
    tags: ['autodocs'],
    argTypes: storyInformDialogArgTypes,
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

  <InformDialog bind:open={openDefault} title="Inform Dialog title">
    This is a basic InformDialog with a title and a single action.
  </InformDialog>
</Story>

<Story name="Accept Button Props" asChild>
  <Button onclick={() => (openAcceptButtonProps = true)}>Open</Button>

  <InformDialog
    bind:open={openAcceptButtonProps}
    title="Inform Dialog title"
    acceptButtonProps={{ label: 'Ok', color: 'safe' }}
  >
    This is a basic InformDialog with a title and a single action.
  </InformDialog>
</Story>

<Story name="Custom Accept Button" asChild>
  <Button onclick={() => (openCustomAcceptButton = true)}>Open</Button>

  <InformDialog bind:open={openCustomAcceptButton} title="Inform Dialog title">
    This is a basic InformDialog with a title and a single action.

    {#snippet customAcceptButton()}
      <Button compact onclick={() => (openCustomAcceptButton = false)}>👍</Button>
    {/snippet}
  </InformDialog>
</Story>

<Story name="Controls Alignment" asChild>
  <Button onclick={() => (openControlsAlignment = true)}>Open</Button>

  <InformDialog
    bind:open={openControlsAlignment}
    title="Alignment Example"
    controlsAlignment="start"
  >
    Controls can be aligned differently.
  </InformDialog>
</Story>

<Story name="Custom Title" asChild>
  <Button onclick={() => (openCustomTitle = true)}>Open</Button>

  <InformDialog bind:open={openCustomTitle}>
    {#snippet customTitle()}
      <Text color="danger">⚠ Warning</Text>
    {/snippet}

    This action cannot be undone.
  </InformDialog>
</Story>

<Story name="Custom Modal Card" asChild>
  <Button onclick={() => (openCustomModalcard = true)}>Open</Button>

  <InformDialog bind:open={openCustomModalcard}>
    {#snippet customModalCard()}
      <InformDialogCard
        onclear={() => (openCustomModalcard = false)}
        bind:open={openCustomModalcard}
      >
        <div style="display: flex; flex-direction: column; gap: 12px;">
          <Text>Delete Item</Text>

          <Text>Are you sure you want to delete this item? This action cannot be undone.</Text>
        </div>
      </InformDialogCard>
    {/snippet}
  </InformDialog>
</Story>
