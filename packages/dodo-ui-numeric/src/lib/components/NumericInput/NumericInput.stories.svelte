<script module lang="ts">
  import { componentRoundnessOptions, componentSizeOptions, Theme } from '@flightlesslabs/dodo-ui';
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import type { ArgTypes } from 'storybook/internal/csf';
  import { NumberFormatStyle } from 'svelte-number-format';
  import type { NumericInputProps } from './NumericInput.svelte';
  import NumericInput from './NumericInput.svelte';

  // ------------------------------
  // Storybook ArgTypes
  // ------------------------------
  export const storyTextInputArgTypes: Partial<ArgTypes<NumericInputProps>> = {
    children: {
      table: { disable: true },
      control: false,
    },

    // ------------------------------
    // Core
    // ------------------------------
    class: { table: { category: 'API', subcategory: 'Base' } },
    placeholder: {
      control: { type: 'text' },
      table: { category: 'API', subcategory: 'Base' },
    },
    value: {
      control: { type: 'number' },
      table: { category: 'API', subcategory: 'Base' },
    },
    name: { table: { category: 'API', subcategory: 'Base' } },
    locale: { table: { category: 'API', subcategory: 'Base' } },
    options: { table: { category: 'API', subcategory: 'Base' } },

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
    component: NumericInput,
    tags: ['autodocs'],
    argTypes: storyTextInputArgTypes,
  });

  let myValue = $state<number | null>(20);
</script>

<!-- ------------------------------ -->
<!-- Stories -->
<!-- ------------------------------ -->

<Story name="Default" args={{ placeholder: 'Type something…' }} />

<Story name="Controlled" asChild>
  <NumericInput placeholder="Type something…" bind:value={myValue} />
</Story>

<Story
  name="Positive Number"
  args={{
    value: 20,
    placeholder: 'Type something…',
    options: {
      valueRange: {
        min: 0,
      },
    },
  }}
/>

<Story
  name="No Comma Grouping"
  args={{
    value: 300000,
    placeholder: 'Type something…',
    options: {
      useGrouping: false,
    },
  }}
/>

<Story
  name="No Decimals"
  args={{
    value: 50,
    placeholder: 'Type something…',
    options: {
      precision: 0,
    },
  }}
/>

<Story
  name="Currency Format USD"
  args={{
    value: 300000,
    placeholder: 'Type something…',
    locale: 'en-US',
    options: {
      formatStyle: NumberFormatStyle.Currency,
      currency: 'USD',
      precision: 2,
    },
  }}
/>

<Story
  name="Currency Format INR"
  args={{
    value: 300000,
    placeholder: 'Type something…',
    locale: 'en-IN',
    options: {
      formatStyle: NumberFormatStyle.Currency,
      currency: 'INR',
      precision: 2,
    },
  }}
/>

<Story
  name="Percentage"
  args={{
    value: 0.35,
    placeholder: 'Type something…',
    options: {
      formatStyle: NumberFormatStyle.Percent,
      precision: 0,
      valueRange: {
        min: 0,
        max: 1,
      },
    },
  }}
/>

<Story
  name="Min Max"
  args={{
    value: 50,
    placeholder: 'Type betweem 50 - 500',
    options: {
      valueRange: {
        min: 50,
        max: 500,
      },
    },
  }}
/>

<Story
  name="Four Decimals"
  args={{
    value: 50.9999,
    placeholder: 'Type something…',
    options: {
      precision: 4,
    },
  }}
/>

<Story
  name="onInput (Actions)"
  args={{
    onInput: (raw: number | null, formatted: string | null) => {
      console.log('NumericInput', raw, formatted);
    },
  }}
/>

<Story
  name="onChange (Actions)"
  args={{
    onChange: (raw: number | null, formatted: string | null) => {
      console.log('NumericInput', raw, formatted);
    },
  }}
/>

<Story name="Focused" args={{ placeholder: 'Focused state…', focused: true }} />

<Story name="Error" args={{ placeholder: 'Error state…', error: true }} />

<Story name="Large" args={{ placeholder: 'Type something…', size: 'large' }} />

<Story name="Pill Shape" args={{ placeholder: 'Type something…', roundness: 'pill' }} />

<Story name="Disabled" args={{ placeholder: 'Disabled state…', disabled: true }} />

<Story name="With Before (Prefix Icon)" asChild>
  <NumericInput placeholder="Type something…">
    {#snippet before()}
      <span style="color: #888; padding-left: 8px">📅</span>
    {/snippet}
  </NumericInput>
</Story>

<Story name="With After (Suffix Text)" asChild>
  <NumericInput placeholder="Type something…">
    {#snippet after()}
      <span style="color: #888; padding-right: 8px">(x)</span>
    {/snippet}
  </NumericInput>
</Story>

<Story name="Light Theme" asChild>
  <Theme type="light">
    <NumericInput placeholder="Type something…" />
  </Theme>
</Story>

<Story name="Dark Theme" asChild globals={{ backgrounds: { value: 'dark' } }}>
  <Theme type="dark">
    <NumericInput placeholder="Type something…" />
  </Theme>
</Story>
