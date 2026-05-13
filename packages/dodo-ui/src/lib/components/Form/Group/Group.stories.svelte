<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import type { ArgTypes } from 'storybook/internal/csf';
  import type { GroupProps } from './Group.svelte';
  import Group from './Group.svelte';
  import { componentRoundnessOptions } from '@flightlesslabs/dodo-core-attributes';
  import Button from '../Button/Button.svelte';
  import TextInput from '../TextInput/TextInput.svelte';

  const description = `
 An input/button Group component .

 \`\`\`ts
 import { Group } from '@flightlesslabs/dodo-ui';
 \`\`\`
`;

  // ------------------------------
  // Storybook ArgTypes
  // ------------------------------
  export const storyGroupArgTypes: Partial<ArgTypes<GroupProps>> = {
    // ------------------------------
    // Core
    // ------------------------------
    children: { table: { category: 'API', subcategory: 'Base' } },
    class: { table: { category: 'API', subcategory: 'Base' } },
    attached: { table: { category: 'API', subcategory: 'Base' } },

    // ------------------------------
    // Appearance
    // ------------------------------
    roundness: {
      control: { type: 'select' },
      options: componentRoundnessOptions,
      description: 'Border radius token',
      table: { category: 'API', subcategory: 'Appearance' },
    },
    fullWidth: {
      control: { type: 'boolean' },
      table: { category: 'API', subcategory: 'Appearance' },
    },
    flex: {
      control: { type: 'boolean' },
      table: { category: 'API', subcategory: 'Appearance' },
    },
    gap: { table: { category: 'API', subcategory: 'Appearance' } },
    outline: { table: { category: 'API', subcategory: 'Appearance' } },
  };

  // ------------------------------
  // Storybook Meta
  // ------------------------------
  const { Story } = defineMeta({
    component: Group,
    tags: ['autodocs'],
    argTypes: storyGroupArgTypes,
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

<Story name="Default">
  <Button variant="text" outline>Uno</Button>
  <Button variant="text" outline>Dos</Button>
  <Button variant="text" outline>Tres</Button>
</Story>

<Story name="Attached" args={{ attached: true }}>
  <Button variant="text" outline>Uno</Button>
  <Button variant="text" outline>Dos</Button>
  <Button variant="text" outline>Tres</Button>
</Story>

<Story name="Fullwidth" args={{ fullWidth: true, attached: true, flex: true }}>
  <Button variant="text" outline>Uno</Button>
  <Button variant="text" outline>Dos</Button>
  <Button variant="text" outline>Tres</Button>
</Story>

<Story name="Outline" args={{ outline: true }}>
  <Button variant="text" outline>Uno</Button>
  <Button variant="text" outline>Dos</Button>
  <Button variant="text" outline>Tres</Button>
</Story>

<Story name="Long List" args={{ gap: 3 }}>
  <Button variant="text" outline>Item</Button>
  <Button variant="text" outline>Item</Button>
  <Button variant="text" outline>Item</Button>
  <Button variant="text" outline>Item</Button>
  <Button variant="text" outline>Item</Button>
  <Button variant="text" outline>Item</Button>
  <Button variant="text" outline>Item</Button>
  <Button variant="text" outline>Item</Button>
  <Button variant="text" outline>Item</Button>
  <Button variant="text" outline>Item</Button>
  <Button variant="text" outline>Item</Button>
  <Button variant="text" outline>Item</Button>
  <Button variant="text" outline>Item</Button>
  <Button variant="text" outline>Item</Button>
  <Button variant="text" outline>Item</Button>
  <Button variant="text" outline>Item</Button>
  <Button variant="text" outline>Item</Button>
  <Button variant="text" outline>Item</Button>
  <Button variant="text" outline>Item</Button>
  <Button variant="text" outline>Item</Button>
  <Button variant="text" outline>Item</Button>
  <Button variant="text" outline>Item</Button>
  <Button variant="text" outline>Item</Button>
  <Button variant="text" outline>Item</Button>
  <Button variant="text" outline>Item</Button>
  <Button variant="text" outline>Item</Button>
  <Button variant="text" outline>Item</Button>
  <Button variant="text" outline>Item</Button>
  <Button variant="text" outline>Item</Button>
  <Button variant="text" outline>Item</Button>
  <Button variant="text" outline>Item</Button>
  <Button variant="text" outline>Item</Button>
  <Button variant="text" outline>Item</Button>
</Story>

<Story name="TextInputs" args={{ attached: true }}>
  <TextInput placeholder="type something" />
  <TextInput placeholder="type something" />
  <TextInput placeholder="type something" />
</Story>
