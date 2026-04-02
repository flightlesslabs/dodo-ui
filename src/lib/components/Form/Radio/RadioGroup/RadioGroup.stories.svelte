<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import RadioGroup from './RadioGroup.svelte';
  import type { RadioGroupProps } from './RadioGroup.svelte';
  import type { ArgTypes } from 'storybook/internal/csf';
  import Radio from '../Radio.svelte';

  /**
   * Storybook controls for RadioGroup
   */
  export const RadioGroupArgTypes: Partial<ArgTypes<RadioGroupProps>> = {
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
</script>

<!-- ------------------------------ -->
<!-- Stories -->
<!-- ------------------------------ -->

<Story name="Default" args={{ id: 'Default' }} asChild>
  <RadioGroup>
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

<Story name="Horizontal" args={{ id: 'Horizontal' }} asChild>
  <RadioGroup orientation="horizontal" value="1">
    <Radio id="Horizontal-1" value="1">One</Radio>
    <Radio id="Horizontal-2" value="2">Two</Radio>
    <Radio id="Horizontal-3" value="3">Three</Radio>
  </RadioGroup>
</Story>

<Story name="Disabled" asChild>
  <RadioGroup disabled id="Disabled" value="1">
    <Radio id="Disabled-1" value="1">One</Radio>
    <Radio id="Disabled-2" value="2">Two</Radio>
    <Radio id="Disabled-3" value="3">Three</Radio>
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
