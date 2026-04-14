<script module lang="ts">
  import { currencyCodes } from '@flightlesslabs/currency';
  import { Money, type MoneyProps } from '@flightlesslabs/dodo-ui';
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import type { ArgTypes } from 'storybook/internal/csf';

  const description = `
Formats numeric values as localized currency using the built-in \`Intl.NumberFormat\` API.

\`\`\`ts
import { Money } from '@flightlesslabs/dodo-ui';
\`\`\`
`;

  // ------------------------------
  // Storybook ArgTypes
  // ------------------------------
  export const storyTextInputArgTypes: Partial<ArgTypes<MoneyProps>> = {
    // ------------------------------
    // Core
    // ------------------------------
    value: {
      control: { type: 'number' },
      table: { category: 'API', subcategory: 'Base' },
    },
    currency: {
      control: { type: 'select' },
      options: currencyCodes,
      table: { category: 'API', subcategory: 'Base' },
    },
    locale: { table: { category: 'API', subcategory: 'Base' } },
    options: { table: { category: 'API', subcategory: 'Base' } },
  };

  // ------------------------------
  // Storybook Meta
  // ------------------------------
  const { Story } = defineMeta({
    component: Money,
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

<Story name="USD" args={{ value: currencyValue, currency: 'USD' }} />

<Story name="Indian Ruppee" args={{ value: currencyValue, currency: 'INR', locale: 'en-IN' }} />

<Story
  name="No Decimals"
  args={{
    locale: 'en-IN',
    value: currencyValue,
    currency: 'INR',
    options: {
      maximumFractionDigits: 0,
    },
  }}
/>

<Story
  name="No Commas"
  args={{
    locale: 'en-IN',
    value: currencyValue,
    currency: 'INR',
    options: {
      useGrouping: false,
    },
  }}
/>
