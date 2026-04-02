<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Radio from './Radio.svelte';
  import type { RadioProps } from './Radio.svelte';
  import type { ArgTypes } from 'storybook/internal/csf';
  import { componentColorOptions } from '$lib/attributes/color.js';
  import { componentSizeOptions } from '$lib/attributes/size.js';
  import { componentRoundnessOptions } from '$lib/attributes/roundness.js';
  import { componentVariantOptions } from '$lib/attributes/variant.js';
  import Theme from '$lib/components/Layout/Theme/Theme.svelte';
  import RadioGroup from './RadioGroup/RadioGroup.svelte';

  /**
   * Storybook controls for Radio
   */
  export const RadioArgTypes: Partial<ArgTypes<RadioProps>> = {
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
      description: 'Visual variant of the Radio',
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
      options: componentRoundnessOptions,
      description: 'Border radius token',
      table: { category: 'API', subcategory: 'Appearance', defaultValue: { summary: 'full' } },
    },
    outline: {
      control: { type: 'boolean' },
      description: 'Render outlined style',
      table: { category: 'API', subcategory: 'Appearance', defaultValue: { summary: 'true' } },
    },
  };

  const { Story } = defineMeta({
    component: Radio,
    tags: ['autodocs'],
    argTypes: RadioArgTypes,
  });
</script>

<!-- ------------------------------ -->
<!-- Stories -->
<!-- ------------------------------ -->

<Story name="Default" asChild>
  <RadioGroup id="Default">
    <Radio id="Default-1" value="1">One</Radio>
    <Radio id="Default-2" value="2">Two</Radio>
    <Radio id="Default-3" value="3">Three</Radio>
  </RadioGroup>
</Story>

<Story name="Selected" asChild>
  <RadioGroup id="Selected" value="1">
    <Radio id="Selected-1" value="1">One</Radio>
    <Radio id="Selected-2" value="2">Two</Radio>
    <Radio id="Selected-3" value="3">Three</Radio>
  </RadioGroup>
</Story>

<Story name="Horizontal" asChild>
  <RadioGroup orientation="horizontal" id="Horizontal">
    <Radio id="Horizontal-1" value="1">One</Radio>
    <Radio id="Horizontal-2" value="2">Two</Radio>
    <Radio id="Horizontal-3" value="3">Three</Radio>
  </RadioGroup>
</Story>

<Story name="Solid" asChild>
  <RadioGroup id="Solid" value="1">
    <Radio id="Solid-1" value="1" variant="solid">One</Radio>
    <Radio id="Solid-2" value="2" variant="solid">Two</Radio>
    <Radio id="Solid-3" value="3" variant="solid">Three</Radio>
  </RadioGroup>
</Story>

<Story name="NoOutline" asChild>
  <RadioGroup id="NoOutline" value="1">
    <Radio id="NoOutline-1" value="1" outline={false}>One</Radio>
    <Radio id="NoOutline-2" value="2" outline={false}>Two</Radio>
    <Radio id="NoOutline-3" value="3" outline={false}>Three</Radio>
  </RadioGroup>
</Story>

<Story name="Disabled" asChild>
  <RadioGroup disabled id="Disabled" value="1">
    <Radio id="Disabled-1" value="1">One</Radio>
    <Radio id="Disabled-2" value="2">Two</Radio>
    <Radio id="Disabled-3" value="3">Three</Radio>
  </RadioGroup>
</Story>

<Story name="DisabledRadio" asChild>
  <RadioGroup id="DisabledRadio" value="2">
    <Radio id="DisabledRadio-1" value="1" disabled>One (disabled)</Radio>
    <Radio id="DisabledRadio-2" value="2">Two</Radio>
    <Radio id="DisabledRadio-3" value="3">Three</Radio>
  </RadioGroup>
</Story>

<Story name="Primary" asChild>
  <RadioGroup id="Primary" value="1">
    <Radio id="Primary-1" value="1" color="primary">One</Radio>
    <Radio id="Primary-2" value="2" color="primary">Two</Radio>
    <Radio id="Primary-3" value="3" color="primary">Three</Radio>
  </RadioGroup>
</Story>

<Story name="Large" asChild>
  <RadioGroup id="Large" value="1">
    <Radio id="Large-1" value="1" size="large">One</Radio>
    <Radio id="Large-2" value="2" size="large">Two</Radio>
    <Radio id="Large-3" value="3" size="large">Three</Radio>
  </RadioGroup>
</Story>

<Story name="Safe" asChild>
  <RadioGroup id="Safe" value="1">
    <Radio id="Safe-1" value="1" color="safe">One</Radio>
    <Radio id="Safe-2" value="2" color="safe">Two</Radio>
    <Radio id="Safe-3" value="3" color="safe">Three</Radio>
  </RadioGroup>
</Story>

<Story name="Danger" asChild>
  <RadioGroup id="Danger" value="1">
    <Radio id="Danger-1" value="1" color="danger">One</Radio>
    <Radio id="Danger-2" value="2" color="danger">Two</Radio>
    <Radio id="Danger-3" value="3" color="danger">Three</Radio>
  </RadioGroup>
</Story>

<Story name="onValueChange (Actions)">
  <RadioGroup
    id="onValueChange"
    value="1"
    onValueChange={(value: string) => {
      alert('onValueChange');
      console.log('onValueChange', value);
    }}
  >
    <Radio id="onValueChange-1" value="1">One</Radio>
    <Radio id="onValueChange-2" value="2">Two</Radio>
    <Radio id="onValueChange-3" value="3">Three</Radio>
  </RadioGroup>
</Story>

<Story name="Light Theme" asChild>
  <Theme type="light">
    <RadioGroup value="1">
      <Radio id="Light_theme-1" value="1">One</Radio>
      <Radio id="Light_theme-2" value="2">Two</Radio>
      <Radio id="Light_theme-3" value="3">Three</Radio>
    </RadioGroup>
  </Theme>
</Story>

<Story name="Dark Theme" asChild globals={{ backgrounds: { value: 'dark' } }}>
  <Theme type="dark">
    <RadioGroup value="1">
      <Radio id="Dark_theme-1" value="1">One</Radio>
      <Radio id="Dark_theme-2" value="2">Two</Radio>
      <Radio id="Dark_theme-3" value="3">Three</Radio>
    </RadioGroup>
  </Theme>
</Story>
