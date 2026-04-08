<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Card, { cardColorOptions } from './Card.svelte';
  import type { CardProps } from './Card.svelte';
  import type { ArgTypes } from 'storybook/internal/csf';
  import { componentVariantOptions } from '$lib/attributes/variant.js';
  import { componentRoundnessOptions } from '$lib/attributes/roundness.js';
  import { ComponentShadowOptions } from '$lib/attributes/shadow.js';
  import Theme from '../Theme/Theme.svelte';
  import { componentThemeColorsOptions, componentThemeOptions } from '$lib/attributes/theme.js';

  // ------------------------------
  // Storybook ArgTypes
  // ------------------------------
  export const storyCardArgTypes: Partial<ArgTypes<CardProps>> = {
    // ------------------------------
    // Core
    // ------------------------------
    children: { table: { category: 'API', subcategory: 'Base' } },
    class: { table: { category: 'API', subcategory: 'Base' } },

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
    active: {
      control: { type: 'boolean' },
      description: 'Add mouse hover and active effects',
      table: { category: 'API', subcategory: 'Appearance' },
    },
    theme: {
      control: { type: 'select' },
      options: componentThemeColorsOptions,
      description: 'Theme color',
      table: { category: 'API', subcategory: 'Base', defaultValue: { summary: 'undefined' } },
    },
  };

  // ------------------------------
  // Storybook Meta
  // ------------------------------
  const { Story } = defineMeta({
    component: Card,
    tags: ['autodocs'],
    argTypes: storyCardArgTypes,
  });
</script>

<!-- ------------------------------ -->
<!-- Stories -->
<!-- ------------------------------ -->

<Story name="Default"><p>Hello there</p></Story>

<Story name="Primary" args={{ color: 'primary' }}><p>Hello there</p></Story>

<Story name="Active" args={{ color: 'primary', active: true }}><p>Hello there</p></Story>

<Story name="Solid" args={{ color: 'primary', variant: 'solid' }}><p>Hello there</p></Story>

<Story name="Outline" args={{ outline: true, shadow: 0 }}><p>Hello there</p></Story>

<Story name="FixedSize" args={{ height: '200px', width: '250px' }}><p>Hello there</p></Story>

<Story name="Light Theme" args={{ theme: 'light' }}>
  <p>Hello there</p>
</Story>

<Story name="Dark Theme" args={{ theme: 'dark' }} globals={{ backgrounds: { value: 'dark' } }}>
  <p>Hello there</p>
</Story>
