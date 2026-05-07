<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import type { ArgTypes } from 'storybook/internal/csf';
  import type { ToastProps } from './Toast.svelte';
  import Toast from './Toast.svelte';
  import {
    cardColorOptions,
    componentRoundnessOptions,
    ComponentShadowOptions,
    componentThemeColorsOptions,
    componentVariantOptions,
  } from '@flightlesslabs/dodo-ui';

  // ------------------------------
  // Storybook ArgTypes
  // ------------------------------
  export const storyToastArgTypes: Partial<ArgTypes<ToastProps>> = {
    // ------------------------------
    // Core
    // ------------------------------
    class: { table: { category: 'API', subcategory: 'Base' } },
    clearable: {
      control: { type: 'boolean' },
      table: { category: 'API', subcategory: 'Base' },
    },
    title: {
      table: { category: 'API', subcategory: 'Base' },
    },

    // ------------------------------
    // Appearance
    // ------------------------------
    shadow: {
      control: { type: 'select' },
      options: ComponentShadowOptions,
      description: 'Component Shadow',
      table: { category: 'API', subcategory: 'Appearance', defaultValue: { summary: '1' } },
    },
    color: {
      control: { type: 'select' },
      options: cardColorOptions,
      description: 'Color theme token',
      table: { category: 'API', subcategory: 'Appearance', defaultValue: { summary: 'default' } },
    },
    variant: {
      control: { type: 'select' },
      options: componentVariantOptions,
      description: 'Visual variant of the card',
      table: { category: 'API', subcategory: 'Appearance', defaultValue: { summary: 'text' } },
    },
    roundness: {
      control: { type: 'select' },
      options: componentRoundnessOptions,
      description: 'Border radius token',
      table: { category: 'API', subcategory: 'Appearance' },
    },
    outline: {
      control: { type: 'boolean' },
      description: 'Render outlined style',
      table: { category: 'API', subcategory: 'Appearance' },
    },
    theme: {
      control: { type: 'select' },
      options: componentThemeColorsOptions,
      description: 'Theme color',
      table: { category: 'API', subcategory: 'Base', defaultValue: { summary: 'undefined' } },
    },

    // ------------------------------
    // Slots (Snippets)
    // ------------------------------
    customTitle: {
      table: { category: 'API', subcategory: 'Slots' },
    },
  };

  // ------------------------------
  // Storybook Meta
  // ------------------------------
  const { Story } = defineMeta({
    component: Toast,
    tags: ['autodocs'],
    argTypes: storyToastArgTypes,
  });
</script>

<!-- ------------------------------ -->
<!-- Stories -->
<!-- ------------------------------ -->

<Story name="Default" args={{ title: 'Toast title' }}>Hello there</Story>

<Story name="Non Clearble" args={{ title: 'Toast title', clearable: false }}>Hello there</Story>

<Story name="Primary" args={{ title: 'Toast title', color: 'primary', variant: 'solid' }}>
  Hello there
</Story>

<Story name="Secondary" args={{ title: 'Toast title', color: 'secondary', variant: 'solid' }}>
  Hello there
</Story>

<Story name="Neutral" args={{ title: 'Toast title', color: 'neutral', variant: 'solid' }}>
  Hello there
</Story>

<Story name="Safe" args={{ title: 'Toast title', color: 'safe', variant: 'solid' }}>
  Hello there
</Story>

<Story name="Warning" args={{ title: 'Toast title', color: 'warning', variant: 'solid' }}>
  Hello there
</Story>

<Story name="Outline" args={{ title: 'Toast title', outline: true, color: 'primary' }}>
  Hello there
</Story>

<Story name="Danger" args={{ title: 'Toast title', color: 'danger', variant: 'solid' }}>
  Hello there
</Story>

<Story name="Light Theme" args={{ theme: 'light', title: 'Toast title' }}>Hello there</Story>

<Story
  name="Dark Theme"
  args={{ theme: 'dark', title: 'Toast title' }}
  globals={{ backgrounds: { value: 'dark' } }}
>
  Hello there
</Story>
