<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import UtilityButton from './UtilityButton.svelte';
  import type { UtilityButtonProps } from './UtilityButton.svelte';
  import type { ArgTypes } from 'storybook/internal/csf';
  import { componentColorOptions } from '$lib/attributes/color.js';
  import { componentSizeOptions } from '$lib/attributes/size.js';
  import { componentRoundnessOptions } from '$lib/attributes/roundness.js';
  import Theme from '$lib/components/Layout/Theme/Theme.svelte';

  // ------------------------------
  // Storybook ArgTypes
  // ------------------------------
  export const storyUtilityButtonArgTypes: Partial<ArgTypes<UtilityButtonProps>> = {
    // ------------------------------
    // Core
    // ------------------------------
    children: { table: { category: 'API', subcategory: 'Base' } },
    href: {
      control: { type: 'text' },
      description: 'Render as Anchor when provided',
      table: { category: 'API', subcategory: 'Base' },
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Disable interactions',
      table: { category: 'API', subcategory: 'Base' },
    },
    class: { table: { category: 'API', subcategory: 'Base' } },
    type: { table: { category: 'API', subcategory: 'Base' } },

    // ------------------------------
    // Appearance
    // ------------------------------
    color: {
      control: { type: 'select' },
      options: componentColorOptions,
      description: 'Color theme token',
      table: { category: 'API', subcategory: 'Appearance', defaultValue: { summary: 'primary' } },
    },
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
      table: { category: 'API', subcategory: 'Appearance' },
    },
    compact: {
      control: { type: 'boolean' },
      description: 'Compact spacing (icon buttons)',
      table: { category: 'API', subcategory: 'Appearance' },
    },
    outline: {
      control: { type: 'boolean' },
      description: 'Render outlined style',
      table: { category: 'API', subcategory: 'Appearance' },
    },

    // ------------------------------
    // Accessibility
    // ------------------------------
    'aria-label': {
      control: { type: 'text' },
      description: 'Accessible label (required for icon-only buttons)',
      table: { category: 'API', subcategory: 'Accessibility' },
    },

    // ------------------------------
    // Events (Svelte-style)
    // ------------------------------
    onclick: { table: { category: 'API', subcategory: 'Events' }, action: 'click' },
  };

  // ------------------------------
  // Storybook Meta
  // ------------------------------
  const { Story } = defineMeta({
    component: UtilityButton,
    tags: ['autodocs'],
    argTypes: storyUtilityButtonArgTypes,
  });
</script>

<!-- ------------------------------ -->
<!-- Stories -->
<!-- ------------------------------ -->

<!-- A Button to be used with other components. -->
<Story name="Primary">Click me!</Story>

<Story name="Neutral" args={{ color: 'neutral', outline: true }}>Click me!</Story>

<Story
  name="OnClick (Actions)"
  args={{
    onclick: (e: Event) => {
      const target = e.target as HTMLButtonElement;
      alert('UtilityButton Clicked');
      console.log('UtilityButton Clicked', target);
    },
  }}
>
  Click me
</Story>

<Story name="Outline" args={{ outline: true }}>Click me!</Story>

<Story name="Large UtilityButton" args={{ size: 'large' }}>Large</Story>

<Story name="Disabled" args={{ disabled: true }}>Click me!</Story>

<Story name="Safe" args={{ color: 'safe' }}>Safe</Story>

<Story name="Danger / Outline" args={{ color: 'danger', outline: true }}>Danger</Story>

<Story name="Light Theme" asChild>
  <Theme type="light">
    <UtilityButton>Hello</UtilityButton>
  </Theme>
</Story>

<Story name="Dark Theme" asChild globals={{ backgrounds: { value: 'dark' } }}>
  <Theme type="dark">
    <UtilityButton>Hello</UtilityButton>
  </Theme>
</Story>

<Story name="Submit UtilityButton" args={{ type: 'submit' }}>Submit Form</Story>

<Story
  name="Link UtilityButton"
  args={{
    href: 'https://www.w3schools.com/tags/tag_a.asp',
    target: '_blank',
  }}
>
  External Link
</Story>

<Story
  name="Icon Only (A11y Example)"
  args={{
    compact: true,
    roundness: 'full',
    'aria-label': 'Add item',
  }}
>
  +
</Story>
