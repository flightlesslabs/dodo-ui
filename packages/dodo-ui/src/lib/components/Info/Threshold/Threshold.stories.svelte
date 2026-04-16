<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import type { ArgTypes } from 'storybook/internal/csf';
  import type { ThresholdProps } from './Threshold.svelte';
  import Threshold from './Threshold.svelte';
  import Text from '../Text/Text.svelte';
  import Money from '../Money/Money.svelte';

  // ------------------------------
  // Storybook ArgTypes
  // ------------------------------
  export const storyThresholdArgTypes: Partial<ArgTypes<ThresholdProps>> = {
    // ------------------------------
    // Core
    // ------------------------------
    children: { table: { category: 'API', subcategory: 'Base' } },
    class: { table: { category: 'API', subcategory: 'Base' } },
    value: {
      control: { type: 'number' },
      table: { category: 'API', subcategory: 'Base' },
    },
    threshold: {
      control: { type: 'number' },
      table: { category: 'API', subcategory: 'Base', defaultValue: { summary: '0' } },
    },

    // ------------------------------
    // Appearance
    // ------------------------------
    colorMap: {
      table: { category: 'API', subcategory: 'Appearance' },
    },
  };

  // ------------------------------
  // Storybook Meta
  // ------------------------------
  const { Story } = defineMeta({
    component: Threshold,
    tags: ['autodocs'],
    argTypes: storyThresholdArgTypes,
  });
</script>

<!-- ------------------------------ -->
<!-- Stories -->
<!-- ------------------------------ -->

<Story name="Default" args={{ value: 3000 }} />

<Story name="Below Threshold" args={{ value: -3000 }} />

<Story name="Above Threshold" args={{ value: 3000 }} />

<Story name="At Threshold" args={{ value: 0 }} />

<Story name="Change Threshold" args={{ value: 3000, threshold: 6000 }} />

<Story name="Formatted Info" args={{ value: 3000 }}>
  <Money value={3000} currency="INR" locale="en-IN" />
</Story>

<Story name="Custom Content" asChild>
  <Threshold value={3000}>
    {#snippet customContent({ status, value, threshold, color })}
      given <Text {color}>{value}</Text> is {status}, {threshold}
    {/snippet}
  </Threshold>
</Story>
