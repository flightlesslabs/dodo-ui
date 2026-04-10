<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Checkbox from './Checkbox.svelte';
  import type { CheckboxProps } from './Checkbox.svelte';
  import type { ArgTypes } from 'storybook/internal/csf';
  import { componentColorOptions } from '$lib/attributes/color.js';
  import { componentSizeOptions } from '$lib/attributes/size.js';
  import { componenRoundnessShapeOptions } from '$lib/attributes/roundness.js';
  import Theme from '$lib/components/Layout/Theme/Theme.svelte';
  import { componentVariantOptions } from '$lib/attributes/variant.js';

  const description = `
 A simple Checkbox component based on bits-ui [checkbox](https://bits-ui.com/docs/components/checkbox).

 \`\`\`ts
 import { Checkbox } from '@flightlesslabs/dodo-ui';
 \`\`\`
`;

  /**
   * Storybook controls for Checkbox
   */
  export const CheckboxArgTypes: Partial<ArgTypes<CheckboxProps>> = {
    // ------------------------------
    // Core
    // ------------------------------
    children: { table: { category: 'API', subcategory: 'Base' } },
    disabled: {
      control: { type: 'boolean' },
      description: 'Disable interactions',
      table: { category: 'API', subcategory: 'Base' },
    },
    class: { table: { category: 'API', subcategory: 'Base' } },

    // ------------------------------
    // Appearance
    // ------------------------------
    color: {
      control: { type: 'select' },
      options: componentColorOptions,
      description: 'Color theme token',
      table: { category: 'API', subcategory: 'Appearance', defaultValue: { summary: 'neutral' } },
    },
    variant: {
      control: { type: 'select' },
      options: componentVariantOptions,
      description: 'Visual variant of the Checkbox',
      table: { category: 'API', subcategory: 'Appearance', defaultValue: { summary: 'text' } },
    },
    size: {
      control: { type: 'select' },
      options: componentSizeOptions,
      description: 'Visual size token',
      table: { category: 'API', subcategory: 'Appearance', defaultValue: { summary: 'normal' } },
    },
    roundness: {
      control: { type: 'select' },
      options: componenRoundnessShapeOptions,
      description: 'Border radius token',
      table: { category: 'API', subcategory: 'Appearance' },
    },
    outline: {
      control: { type: 'boolean' },
      description: 'Render outlined style',
      table: { category: 'API', subcategory: 'Appearance', defaultValue: { summary: 'true' } },
    },
  };

  const { Story } = defineMeta({
    component: Checkbox,
    tags: ['autodocs'],
    argTypes: CheckboxArgTypes,
    parameters: {
      docs: {
        description: {
          component: description,
        },
      },
    },
  });

  let myValue = $state<boolean>(true);
</script>

<!-- ------------------------------ -->
<!-- Stories -->
<!-- ------------------------------ -->

<Story name="Default" args={{ id: 'Default' }}>Check this text</Story>

<Story name="Controlled" asChild>
  <Checkbox id="Checked" bind:checked={myValue}>Check this text</Checkbox>
</Story>

<Story
  name="OnChange (Actions)"
  args={{
    id: 'OnChange_Action',
    onCheckedChange: (checked: boolean) => {
      alert('OnChange');
      console.log('OnChange', checked);
    },
  }}
>
  Check this text
</Story>

<Story name="Indeterminate" args={{ id: 'indeterminate', indeterminate: true }}>
  Check this text
</Story>

<Story name="Color" args={{ id: 'Safe', color: 'safe' }}>Check this text</Story>

<Story name="Solid" args={{ id: 'Solid', variant: 'solid', checked: true }}>Check this text</Story>

<Story name="NoOutline" args={{ id: 'Outline', outline: false }}>Check this text</Story>

<Story name="Size" args={{ id: 'Size', size: 'large' }}>Check this text</Story>

<Story name="Disabled" args={{ disabled: true }}>Check this text</Story>

<Story name="Light Theme" asChild>
  <Theme type="light">
    <Checkbox id="Light_Theme">Check this text</Checkbox>
  </Theme>
</Story>

<Story name="Dark Theme" asChild globals={{ backgrounds: { value: 'dark' } }}>
  <Theme type="dark">
    <Checkbox id="Dark_Theme">Check this text</Checkbox>
  </Theme>
</Story>
