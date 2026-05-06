<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import type { ArgTypes } from 'storybook/internal/csf';
  import { Button, componentAlignmentXOptions } from '@flightlesslabs/dodo-ui';
  import { ModalCard, type ModalCardProps } from '@flightlesslabs/dodo-ui-bits';

  const description = `

ModalCard for customizing Modal dialog


## 🚀 Installation

\`\`\`bash
pnpm add bits-ui @flightlesslabs/dodo-ui-bits
\`\`\`


For full setup (styles, themes, configuration), see the [Getting Started](https://github.com/flightlesslabs/dodo-ui/tree/main/packages/dodo-ui-bits) guide.

## ✨ Usage

 \`\`\`ts

 import { ModalCard } from '@flightlesslabs/dodo-ui-bits';

 <ModalCard />
 \`\`\`

 `;

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
  };

  // ------------------------------
  // Storybook Meta
  // ------------------------------
  const { Story } = defineMeta({
    component: ModalCard,
    tags: ['autodocs'],
    argTypes: storyModalCardArgTypes,
    parameters: {
      docs: {
        description: {
          component: description,
        },
      },
    },
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
