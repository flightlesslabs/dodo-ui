<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import type { ArgTypes } from 'storybook/internal/csf';
  import type { IndicatorProps } from './Indicator.svelte';
  import Indicator from './Indicator.svelte';
  import { componentColorOptions } from '@flightlesslabs/dodo-core-attributes';
  import Theme from '$lib/components/Layout/Theme/Theme.svelte';

  const description = `
 A status indicator (dot) component.

 \`\`\`ts
 import { Indicator } from '@flightlesslabs/dodo-ui';
 \`\`\`
`;

  // ------------------------------
  // Storybook ArgTypes
  // ------------------------------
  export const storyTextArgTypes: Partial<ArgTypes<IndicatorProps>> = {
    // ------------------------------
    // Core
    // ------------------------------
    class: { table: { category: 'API', subcategory: 'Base' } },

    // ------------------------------
    // Appearance
    // ------------------------------
    color: {
      control: { type: 'select' },
      options: componentColorOptions,
      description: 'Color theme token',
      table: { category: 'API', subcategory: 'Appearance', defaultValue: { summary: 'default' } },
    },
    'font-size': { table: { category: 'API', subcategory: 'Appearance' } },

    // ------------------------------
    // Slots (Snippets)
    // ------------------------------
    customIndicatorIcon: {
      table: { category: 'API', subcategory: 'Slots' },
    },
  };

  // ------------------------------
  // Storybook Meta
  // ------------------------------
  const { Story } = defineMeta({
    component: Indicator,
    tags: ['autodocs'],
    argTypes: storyTextArgTypes,
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

<Story name="Default"></Story>

<Story name="Font Size" args={{ 'font-size': '2em' }}></Story>

<Story name="Safe" args={{ color: 'safe' }}></Story>

<Story name="Danger" args={{ color: 'danger' }}></Story>

<Story name="Warning" args={{ color: 'warning' }}></Story>

<Story name="Custom Icon" asChild>
  <Indicator color="danger">
    {#snippet customIndicatorIcon()}
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
        <path d="M0 0h24v24H0z" fill="none" />
        <path
          fill="currentColor"
          d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21z"
        />
      </svg>
    {/snippet}
  </Indicator>
</Story>

<Story name="Light Theme" asChild>
  <Theme type="light">
    <Indicator />
    <Indicator color="safe" />
    <Indicator color="warning" />
    <Indicator color="danger" />
    <Indicator color="primary" />
    <Indicator color="secondary" />
  </Theme>
</Story>

<Story name="Dark Theme" asChild globals={{ backgrounds: { value: 'dark' } }}>
  <Theme type="dark">
    <Indicator />
    <Indicator color="safe" />
    <Indicator color="warning" />
    <Indicator color="danger" />
    <Indicator color="primary" />
    <Indicator color="secondary" />
  </Theme>
</Story>
