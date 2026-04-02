<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Switch from './Switch.svelte';
  import type { SwitchProps } from './Switch.svelte';
  import type { ArgTypes } from 'storybook/internal/csf';
  import { componentColorOptions } from '$lib/attributes/color.js';
  import { componentSizeOptions } from '$lib/attributes/size.js';
  import { componenRoundnessShapeOptions } from '$lib/attributes/roundness.js';
  import Theme from '$lib/components/Layout/Theme/Theme.svelte';
  import { componentVariantOptions } from '$lib/attributes/variant.js';

  /**
   * Storybook controls for Switch
   */
  export const SwitchArgTypes: Partial<ArgTypes<SwitchProps>> = {
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
      table: { category: 'API', subcategory: 'Appearance', defaultValue: { summary: 'neutral' } },
    },
    variant: {
      control: { type: 'select' },
      options: componentVariantOptions,
      description: 'Visual variant of the Switch',
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
    component: Switch,
    tags: ['autodocs'],
    argTypes: SwitchArgTypes,
  });
</script>

<!-- ------------------------------ -->
<!-- Stories -->
<!-- ------------------------------ -->

<Story name="Default" args={{ id: 'Default' }}>Check this text</Story>

<Story name="Checked" args={{ id: 'Checked', checked: true }}>Check this text</Story>

<Story name="Solid" args={{ id: 'Solid', variant: 'solid', checked: true }}>Check this text</Story>

<Story name="NoOutline" args={{ id: 'Outline', outline: false }}>Check this text</Story>

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

<Story name="Primary" args={{ id: 'Primary', color: 'primary' }}>Check this text</Story>

<Story name="Large" args={{ id: 'Large', size: 'large' }}>Check this text</Story>

<Story name="Disabled" args={{ disabled: true }}>Check this text</Story>

<Story name="Safe" args={{ id: 'Safe', color: 'safe' }}>Check this text</Story>

<Story name="Danger / Outline" args={{ id: 'Danger-Outline', color: 'danger' }}>
  Check this text
</Story>

<Story name="Light Theme" asChild>
  <Theme type="light">
    <Switch id="Light_Theme">Check this text</Switch>
  </Theme>
</Story>

<Story name="Dark Theme" asChild globals={{ backgrounds: { value: 'dark' } }}>
  <Theme type="dark">
    <Switch id="Dark_Theme">Check this text</Switch>
  </Theme>
</Story>
