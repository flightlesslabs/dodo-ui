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

  /**
   * Storybook controls for Checkbox
   */
  export const CheckboxArgTypes: Partial<ArgTypes<CheckboxProps>> = {
    // ------------------------------
    // Core
    // ------------------------------
    children: { table: { category: 'API', subcategory: 'Base' } },
    ref: { table: { category: 'API', subcategory: 'Base' } },
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
      table: { category: 'API', subcategory: 'Appearance', defaultValue: { summary: 'primary' } },
    },
    variant: {
      control: { type: 'select' },
      options: componentVariantOptions,
      description: 'Visual variant of the Checkbox',
      table: { category: 'API', subcategory: 'Appearance', defaultValue: { summary: 'solid' } },
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
      table: { category: 'API', subcategory: 'Appearance' },
    },
  };

  const { Story } = defineMeta({
    component: Checkbox,
    tags: ['autodocs'],
    argTypes: CheckboxArgTypes,
  });
</script>

<!-- ------------------------------ -->
<!-- Stories -->
<!-- ------------------------------ -->

<Story name="Default" args={{ id: 'Default' }}>Check this text</Story>

<Story name="Checked" args={{ id: 'Checked', checked: true }}>Check this text</Story>

<Story name="Solid" args={{ id: 'Solid', variant: 'solid', checked: true }}>Check this text</Story>

<Story name="Outline" args={{ id: 'Outline', outline: true }}>Check this text</Story>

<Story name="Indeterminate" args={{ id: 'indeterminate', indeterminate: true, outline: true }}>
  Check this text
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

<Story name="Primary" args={{ id: 'Primary', color: 'primary', outline: true }}
  >Check this text</Story
>

<Story name="Large" args={{ id: 'Large', size: 'large', outline: true }}>Check this text</Story>

<Story name="Disabled" args={{ disabled: true, outline: true }}>Check this text</Story>

<Story name="Safe" args={{ id: 'Safe', color: 'safe' }}>Check this text</Story>

<Story name="Danger / Outline" args={{ id: 'Danger-Outline', color: 'danger', outline: true }}>
  Check this text
</Story>

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
