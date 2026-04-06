<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Select from './Select.svelte';
  import type { SelectProps } from './Select.svelte';
  import type { ArgTypes } from 'storybook/internal/csf';

  import { componentSizeOptions } from '$lib/attributes/size.js';
  import { componentRoundnessOptions } from '$lib/attributes/roundness.js';
  import Theme from '$lib/components/Layout/Theme/Theme.svelte';

  const options = [
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
    { value: 'eleven', label: 'Eleven' },
    { value: 'twelve', label: 'Twelve' },
    { value: 'thirteen', label: 'Thirteen' },
    { value: 'fourteen', label: 'Fourteen' },
    { value: 'fifteen', label: 'Fifteen' },
    { value: 'sixteen', label: 'Sixteen' },
    { value: 'seventeen', label: 'Seventeen' },
    { value: 'eighteen', label: 'Eighteen' },
    { value: 'nineteen', label: 'Nineteen' },
    { value: 'twenty', label: 'Twenty' },
    { value: 'twentyOne', label: 'Twenty One' },
    { value: 'twentyTwo', label: 'Twenty Two' },
    { value: 'twentyThree', label: 'Twenty Three' },
    { value: 'twentyFour', label: 'Twenty Four' },
    { value: 'twentyFive', label: 'Twenty Five' },
  ];

  // ------------------------------
  // Storybook ArgTypes
  // ------------------------------
  export const storySelectArgTypes: Partial<ArgTypes<SelectProps>> = {
    // ------------------------------
    // Core
    // ------------------------------
    class: { table: { category: 'API', subcategory: 'Base' } },
    value: {
      control: { type: 'text' },
      table: { category: 'API', subcategory: 'Base' },
    },
    name: { table: { category: 'API', subcategory: 'Base' } },
    options: { table: { category: 'API', subcategory: 'Base' } },
    searchable: {
      control: { type: 'boolean' },
      table: { category: 'API', subcategory: 'Base' },
    },

    // ------------------------------
    // State
    // ------------------------------
    disabled: {
      control: { type: 'boolean' },
      description: 'Disabled state of the input',
      table: { category: 'API', subcategory: 'State', defaultValue: { summary: 'false' } },
    },
    focused: {
      control: { type: 'boolean' },
      description: 'Force focused visual state',
      table: { category: 'API', subcategory: 'State', defaultValue: { summary: 'false' } },
    },
    error: {
      control: { type: 'boolean' },
      description: 'Error visual state',
      table: { category: 'API', subcategory: 'State', defaultValue: { summary: 'false' } },
    },

    // ------------------------------
    // Appearance
    // ------------------------------
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
      table: { category: 'API', subcategory: 'Appearance', defaultValue: { summary: '1' } },
    },
    outline: {
      control: { type: 'boolean' },
      description: 'Render outlined enclosure',
      table: { category: 'API', subcategory: 'Appearance', defaultValue: { summary: 'true' } },
    },

    // ------------------------------
    // Slots (Snippets)
    // ------------------------------
    before: {
      table: { category: 'API', subcategory: 'Slots' },
      description: 'Content rendered before the input',
    },
    after: {
      table: { category: 'API', subcategory: 'Slots' },
      description: 'Content rendered after the input',
    },
  };

  // ------------------------------
  // Storybook Meta
  // ------------------------------
  const { Story } = defineMeta({
    component: Select,
    tags: ['autodocs'],
    argTypes: storySelectArgTypes,
    args: {
      options,
    },
  });
</script>

<!-- ------------------------------ -->
<!-- Stories -->
<!-- ------------------------------ -->

<Story name="Default" args={{ placeholder: 'Select an option' }} />

<Story name="Searchable" args={{ searchable: true, placeholder: 'Search a number' }} />

<Story name="Selected" args={{ placeholder: 'Select an option', value: options[1].value }} />

<Story name="Disabled" args={{ placeholder: 'Select an option', disabled: true }} />

<Story
  name="OnChange (Actions)"
  args={{
    onValueChange: (val: string) => {
      alert('OnChange');
      console.log('OnChange', val);
    },
  }}
/>

<Story name="Light Theme" asChild>
  <Theme type="light">
    <Select {options} />
  </Theme>
</Story>

<Story name="Dark Theme" asChild globals={{ backgrounds: { value: 'dark' } }}>
  <Theme type="dark">
    <Select {options} />
  </Theme>
</Story>
