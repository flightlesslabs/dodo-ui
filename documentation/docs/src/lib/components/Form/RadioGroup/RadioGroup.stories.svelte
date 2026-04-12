<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import RadioGroup from './RadioGroup.svelte';
  import type { RadioGroupProps } from './RadioGroup.svelte';
  import type { ArgTypes } from 'storybook/internal/csf';
  import Radio from './Radio/Radio.svelte';
  import Theme from '$lib/components/Layout/Theme/Theme.svelte';

  /**
   * Storybook controls for RadioGroup
   */
  export const RadioGroupArgTypes: Partial<ArgTypes<RadioGroupProps>> = {
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
    orientation: {
      control: { type: 'select' },
      options: ['horizontal', 'vertical'],
      table: {
        category: 'API',
        subcategory: 'Base',
        defaultValue: { summary: 'vertical' },
      },
    },
  };

  const { Story } = defineMeta({
    component: RadioGroup,
    tags: ['autodocs'],
    argTypes: RadioGroupArgTypes,
  });

  let myValue = $state<string>('3');
</script>

<!-- ------------------------------ -->
<!-- Stories -->
<!-- ------------------------------ -->

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
  <RadioGroup id="Selected" bind:value={myValue}>
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

<Story name="onValueChange (Actions)" asChild>
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
