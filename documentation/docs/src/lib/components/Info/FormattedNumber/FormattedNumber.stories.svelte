<script module lang="ts">
  import { FormattedNumber, type FormattedNumberProps } from '@flightlesslabs/dodo-ui';
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import type { ArgTypes } from 'storybook/internal/csf';

  const description = `
A lightweight wrapper around 'Intl.NumberFormat' that formats numbers. based on locale and formatting options (currency, percent, unit, etc.).

\`\`\`ts
import { FormattedNumber } from '@flightlesslabs/dodo-ui';
\`\`\`
`;

  // ------------------------------
  // Storybook ArgTypes
  // ------------------------------
  export const storyTextInputArgTypes: Partial<ArgTypes<FormattedNumberProps>> = {
    // ------------------------------
    // Core
    // ------------------------------
    class: { table: { category: 'API', subcategory: 'Base' } },
    value: {
      control: { type: 'number' },
      table: { category: 'API', subcategory: 'Base' },
    },
    locale: { table: { category: 'API', subcategory: 'Base' } },
    options: { table: { category: 'API', subcategory: 'Base' } },
  };

  // ------------------------------
  // Storybook Meta
  // ------------------------------
  const { Story } = defineMeta({
    component: FormattedNumber,
    tags: ['autodocs'],
    argTypes: storyTextInputArgTypes,
    parameters: {
      docs: {
        description: {
          component: description,
        },
      },
    },
  });

  let currencyValue = $state<number | null>(300000.789);
</script>

<!-- ------------------------------ -->
<!-- Stories -->
<!-- ------------------------------ -->

<Story name="Default" args={{ value: currencyValue }} />

<Story
  name="Currency INR"
  args={{
    value: currencyValue,
    locale: 'en-IN',
    options: {
      style: 'currency',
      currency: 'INR',
    },
  }}
/>

<Story
  name="Currency USD"
  args={{
    value: currencyValue,
    locale: 'en-US',
    options: {
      style: 'currency',
      currency: 'USD',
    },
  }}
/>

<Story
  name="Percent"
  args={{
    value: 0.76,
    options: {
      style: 'percent',
    },
  }}
/>

<Story
  name="No Decimals"
  args={{
    value: currencyValue,
    options: {
      maximumFractionDigits: 0,
    },
  }}
/>

<Story
  name="No Commas"
  args={{
    value: currencyValue,
    options: {
      useGrouping: false,
    },
  }}
/>

<Story
  name="Kilometers"
  args={{
    value: 50,
    options: {
      style: 'unit',
      unit: 'kilometer',
      unitDisplay: 'long',
    },
  }}
/>

<Story
  name="Celsius"
  args={{
    value: 50,
    options: {
      style: 'unit',
      unit: 'celsius',
    },
  }}
/>
