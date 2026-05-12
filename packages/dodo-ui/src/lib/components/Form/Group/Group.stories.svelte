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

<Story name="Fullwidth" args={{ fullWidth: true }}>
  <Button variant="text" outline>Uno</Button>
  <Button variant="text" outline>Dos</Button>
  <Button variant="text" outline>Tres</Button>
</Story>

<Story name="Roundness Pill" args={{ roundness: 'pill' }}>
  <Button variant="text" outline>Uno</Button>
  <Button variant="text" outline>Dos</Button>
  <Button variant="text" outline>Tres</Button>
</Story>

<Story name="TextInputs">
  <TextInput placeholder="type something" />
  <TextInput placeholder="type something" />
  <TextInput placeholder="type something" />
</Story>
