<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import type { ArgTypes } from 'storybook/internal/csf';
  import type { IndicatorProps } from './Indicator.svelte';
  import Indicator from './Indicator.svelte';
  import {
    componentColorOptions,
    componentSizeOptions,
  } from '@flightlesslabs/dodo-core-attributes';
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
    size: {
      control: { type: 'select' },
      options: componentSizeOptions,
      description: 'Visual size token',
      table: { category: 'API', subcategory: 'Appearance', defaultValue: { summary: 'normal' } },
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

<Story name="Large" args={{ size: 'large' }}></Story>

<Story name="Safe" args={{ color: 'safe' }}></Story>

<Story name="Danger" args={{ color: 'danger' }}></Story>

<Story name="Warning" args={{ color: 'warning' }}></Story>

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
