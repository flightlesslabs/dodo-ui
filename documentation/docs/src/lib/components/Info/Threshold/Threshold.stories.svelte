<script module lang="ts">
  import { Money, Text, Threshold, type ThresholdProps } from '@flightlesslabs/dodo-ui';
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import type { ArgTypes } from 'storybook/internal/csf';

  const description = `

A plug-and-play component for comparing a value against a threshold.

 \`\`\`ts
 import { Threshold } from '@flightlesslabs/dodo-ui';
 \`\`\`
`;

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
    parameters: {
      docs: {
        description: {
          component: description,
        },
      },
    },
  });
</script>

<!-- ------------------------------ -->
<!-- Stories -->
<!-- ------------------------------ -->

<Story name="Default" args={{ value: 3000 }} />

<Story name="Below Threshold" args={{ value: -3000, threshold: 0 }} />

<Story name="Above Threshold" args={{ value: 3000, threshold: 0 }} />

<Story name="At Threshold" args={{ value: 0, threshold: 0 }} />

<Story name="Change Threshold" args={{ value: 3000, threshold: 6000 }} />

<Story
  name="Custom Color"
  args={{
    value: 3000,
    threshold: 0,
    colorMap: {
      below: 'warning',
      above: 'primary',
    },
  }}
/>

<Story name="Formatted Info" args={{ value: 3000, threshold: 0 }}>
  <Money value={3000} currency="INR" locale="en-IN" />
</Story>

<Story name="Custom Content" asChild>
  <Threshold value={3000} threshold={0}>
    {#snippet customContent({ status, value, threshold, color, colorMap })}
      given <Text {color}>{value}</Text> is {status}, {threshold} {JSON.stringify(colorMap)}
    {/snippet}
  </Threshold>
</Story>
