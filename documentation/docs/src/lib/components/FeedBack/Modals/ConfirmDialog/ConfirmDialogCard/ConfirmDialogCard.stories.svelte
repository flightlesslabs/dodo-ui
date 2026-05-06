<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import type { ArgTypes } from 'storybook/internal/csf';
  import { componentAlignmentXOptions } from '@flightlesslabs/dodo-ui';
  import { ConfirmDialogCard, type ConfirmDialogCardProps } from '@flightlesslabs/dodo-ui-bits';

  const description = `

  ConfirmDialogCard for customizing ConfirmDialog


## 🚀 Installation

\`\`\`bash
pnpm add bits-ui @flightlesslabs/dodo-ui-bits
\`\`\`


For full setup (styles, themes, configuration), see the [Getting Started](https://github.com/flightlesslabs/dodo-ui/tree/main/packages/dodo-ui-bits) guide.

## ✨ Usage

 \`\`\`ts

 import { ConfirmDialogCard } from '@flightlesslabs/dodo-ui-bits';

 <ConfirmDialogCard />
 \`\`\`

 `;

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
  <ConfirmDialogCard title="Modal title">Hello there</ConfirmDialogCard>
</Story>
