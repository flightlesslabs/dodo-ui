<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import type { ArgTypes } from 'storybook/internal/csf';
  import { type TextProps, Text, textColorOptions, Theme } from '@flightlesslabs/dodo-ui';

  const description = `
 A typography component with color option.

 \`\`\`ts
 import { Text } from '@flightlesslabs/dodo-ui';
 \`\`\`
`;

  // ------------------------------
  // Storybook ArgTypes
  // ------------------------------
  export const storyTextArgTypes: Partial<ArgTypes<TextProps>> = {
    // ------------------------------
    // Core
    // ------------------------------
    children: { table: { category: 'API', subcategory: 'Base' } },
    class: { table: { category: 'API', subcategory: 'Base' } },

    // ------------------------------
    // Appearance
    // ------------------------------
    color: {
      control: { type: 'select' },
      options: textColorOptions,
      description: 'Color theme token',
      table: { category: 'API', subcategory: 'Appearance', defaultValue: { summary: 'default' } },
    },
  };

  // ------------------------------
  // Storybook Meta
  // ------------------------------
  const { Story } = defineMeta({
    component: Text,
    tags: ['autodocs'],
    argTypes: storyTextArgTypes,
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

<Story name="Default">Hola! amigo</Story>

<Story name="Primary" args={{ color: 'primary' }}>Hola! amigo</Story>

<Story name="Danger" args={{ color: 'danger' }}>Hola! amigo</Story>

<Story name="Safe" args={{ color: 'safe' }}>Hola! amigo</Story>

<Story name="Light Theme" asChild>
  <Theme type="light">
    <Text color="primary">Hola! amigo</Text>
  </Theme>
</Story>

<Story name="Dark Theme" asChild globals={{ backgrounds: { value: 'dark' } }}>
  <Theme type="dark">
    <Text color="primary">Hola! amigo</Text>
  </Theme>
</Story>
