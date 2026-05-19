<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import type { ArgTypes } from 'storybook/internal/csf';
  import { componentRoundnessOptions } from '@flightlesslabs/dodo-ui';

  import { type ToggleGroupProps, ToggleGroup } from '@flightlesslabs/dodo-ui-bits';

  const description = `
 ToggleGroup component based on bits-ui [toggle-group](https://bits-ui.com/docs/components/toggle-group).

## 🚀 Installation

   \`\`\`bash
  pnpm add bits-ui @flightlesslabs/dodo-ui-bits
   \`\`\`

 For full setup (styles, themes, configuration), see the [Getting Started](https://github.com/flightlesslabs/dodo-ui/tree/main/packages/dodo-ui-bits) guide.

## ✨ Usage

 \`\`\`ts
 import { ToggleGroup } from '@flightlesslabs/dodo-ui-bits';

 <ToggleGroup />
 \`\`\`
`;

  const options1 = [
    { value: 'one', label: 'Uno' },
    { value: 'two', label: 'Dos' },
  ];

  const options2 = [
    { value: 'one', label: 'One' },
    { value: 'two', label: 'Two' },
    { value: 'three', label: 'Three' },
    { value: 'four', label: 'Four' },
    { value: 'five', label: 'Five' },
    { value: 'six', label: 'Six' },
    { value: 'seven', label: 'Seven' },
    { value: 'eight', label: 'Eight' },
    { value: 'nine', label: 'Nine' },
    { value: 'ten', label: 'Ten' },
  ];

  // ------------------------------
  // Storybook ArgTypes
  // ------------------------------
  export const storyToggleGroupArgTypes: Partial<ArgTypes<ToggleGroupProps>> = {
    // ------------------------------
    // Core
    // ------------------------------
    class: { table: { category: 'API', subcategory: 'Base' } },
    value: {
      control: { type: 'text' },
      table: { category: 'API', subcategory: 'Base' },
    },
    options: { table: { category: 'API', subcategory: 'Base' } },
    type: {
      control: { type: 'text' },
      table: { category: 'API', subcategory: 'Base' },
    },
    attached: { table: { category: 'API', subcategory: 'Base' } },

    // ------------------------------
    // State
    // ------------------------------
    disabled: {
      control: { type: 'boolean' },
      description: 'Disabled state of the input',
      table: { category: 'API', subcategory: 'State', defaultValue: { summary: 'false' } },
    },

    // ------------------------------
    // Appearance
    // ------------------------------
    roundness: {
      control: { type: 'select' },
      options: componentRoundnessOptions,
      description: 'Border radius token',
      table: { category: 'API', subcategory: 'Appearance', defaultValue: { summary: '1' } },
    },
    outline: {
      control: { type: 'boolean' },
      description: 'Render outlined enclosure',
      table: { category: 'API', subcategory: 'Appearance', defaultValue: { summary: 'true' } },
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
    buttonProps: { table: { category: 'API', subcategory: 'Appearance' } },
    activeButtonProps: { table: { category: 'API', subcategory: 'Appearance' } },

    // ------------------------------
    // Slots (Snippets)
    // ------------------------------

    customContent: {
      table: { category: 'API', subcategory: 'Slots' },
    },
  };

  // ------------------------------
  // Storybook Meta
  // ------------------------------
  const { Story } = defineMeta({
    component: ToggleGroup,
    tags: ['autodocs'],
    argTypes: storyToggleGroupArgTypes,
    parameters: {
      docs: {
        description: {
          component: description,
        },
      },
    },
  });

  let value1 = $state(options1[0].value);
  let value2 = $state([options1[0].value]);
  let value3 = $state(undefined);
</script>

<!-- ------------------------------ -->
<!-- Stories -->
<!-- ------------------------------ -->

<Story name="Default" args={{ type: 'single', options: options1, value: value1 }} />

<Story name="Controlled" asChild>
  <ToggleGroup options={options1} type="single" bind:value={value1} />
</Story>

<Story name="Attached" asChild>
  <ToggleGroup options={options1} type="single" bind:value={value1} attached />
</Story>

<Story name="Allow Deselect" asChild>
  <ToggleGroup options={options1} type="single" bind:value={value3} allowDeselect />
</Story>

<Story name="Mutiple" asChild>
  <ToggleGroup options={options2} type="multiple" bind:value={value2} outline />
</Story>

<Story name="Full Width and flex" asChild>
  <ToggleGroup options={options1} type="single" bind:value={value1} fullWidth flex />
</Story>

<Story name="Button Style" asChild>
  <ToggleGroup
    options={options1}
    type="single"
    bind:value={value1}
    buttonProps={{
      color: 'safe',
    }}
    activeButtonProps={{
      color: 'safe',
    }}
  />
</Story>
