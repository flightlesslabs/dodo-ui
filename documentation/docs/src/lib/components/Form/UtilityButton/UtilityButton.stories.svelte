<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import type { ArgTypes } from 'storybook/internal/csf';
  import {
    type UtilityButtonProps,
    componentColorOptions,
    componentSizeOptions,
    componentRoundnessOptions,
    UtilityButton,
    Theme,
  } from '@flightlesslabs/dodo-ui';

  const description = `
 A flexible small sized button component based on bits-ui [button](https://bits-ui.com/docs/components/button).

 \`\`\`ts
 import { UtilityButton } from '@flightlesslabs/dodo-ui';
 \`\`\`
`;

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

<Story name="Default">Click me!</Story>

<Story
  name="Link Button"
  args={{
    href: 'https://www.w3schools.com/tags/tag_a.asp',
    target: '_blank',
  }}
>
  Click me!
</Story>

<Story
  name="OnClick (Actions)"
  args={{
    onclick: (e: Event) => {
      const target = e.target as HTMLButtonElement;
      alert('Button Clicked');
      console.log('Button Clicked', target);
    },
  }}
>
  Click me
</Story>

<Story name="Color" args={{ color: 'safe' }}>Click me</Story>

<Story name="Outline" args={{ outline: true }}>Click me!</Story>

<Story name="Size" args={{ size: 'large' }}>Click me!</Story>

<Story name="Disabled" args={{ disabled: true }}>Click me!</Story>

<Story name="Submit Button" args={{ type: 'submit' }}>Click me!</Story>

<Story
  name="Compact"
  args={{
    compact: true,
    'aria-label': 'Add item',
  }}
>
  +
</Story>

<Story name="Light Theme" asChild>
  <Theme type="light">
    <UtilityButton>Click me!</UtilityButton>
  </Theme>
</Story>

<Story name="Dark Theme" asChild globals={{ backgrounds: { value: 'dark' } }}>
  <Theme type="dark">
    <UtilityButton>Click me!</UtilityButton>
  </Theme>
</Story>
