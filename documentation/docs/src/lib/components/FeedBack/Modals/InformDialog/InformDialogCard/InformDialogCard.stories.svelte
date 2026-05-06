<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import type { ArgTypes } from 'storybook/internal/csf';
  import { componentAlignmentXOptions } from '@flightlesslabs/dodo-ui';

  import { InformDialogCard, type InformDialogCardProps } from '@flightlesslabs/dodo-ui-bits';

  const description = `

InformDialogCard for customizing InformDialog

## 🚀 Installation

\`\`\`bash
pnpm add bits-ui @flightlesslabs/dodo-ui-bits
\`\`\`


For full setup (styles, themes, configuration), see the [Getting Started](https://github.com/flightlesslabs/dodo-ui/tree/main/packages/dodo-ui-bits) guide.

## ✨ Usage

 \`\`\`ts

 import { InformDialogCard } from '@flightlesslabs/dodo-ui-bits';

 <InformDialogCard />
 \`\`\`
 `;

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

    title: {
      table: { category: 'API', subcategory: 'Base' },
    },
    // ------------------------------
    // Slots (Snippets)
    // ------------------------------

    customTitle: { table: { category: 'API', subcategory: 'Slots' } },
  };

  // ------------------------------
  // Storybook Meta
  // ------------------------------
  const { Story } = defineMeta({
    component: InformDialogCard,
    tags: ['autodocs'],
    argTypes: storyInformDialogCardArgTypes,
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
  <InformDialogCard title="Modal title">Hello there</InformDialogCard>
</Story>
