<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Button from './Button.svelte';
  import type { ButtonProps } from './Button.svelte';
  import type { ArgTypes } from 'storybook/internal/csf';
  import { componentColorOptions } from '$lib/attributes/color.js';
  import { componentVariantOptions } from '$lib/attributes/variant.js';
  import { componentSizeOptions } from '$lib/attributes/size.js';
  import { componentRoundnessOptions } from '$lib/attributes/roundness.js';
  import Theme from '$lib/components/Layout/Theme/Theme.svelte';

  const description = `
 A flexible Button component based on bits-ui [button](https://bits-ui.com/docs/components/button).
 \`\`\`ts
 import { Button } from '@flightlesslabs/dodo-ui';
 \`\`\`
`;

  // ------------------------------
  // Storybook ArgTypes
  // ------------------------------
  export const storyButtonArgTypes: Partial<ArgTypes<ButtonProps>> = {
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
    variant: {
      control: { type: 'select' },
      options: componentVariantOptions,
      description: 'Visual variant of the button',
      table: { category: 'API', subcategory: 'Appearance', defaultValue: { summary: 'solid' } },
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
    fullWidth: {
      control: { type: 'boolean' },
      description: 'Stretch button to full container width',
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
    component: Button,
    tags: ['autodocs'],
    argTypes: storyButtonArgTypes,
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

<!-- Anchor link styled as a button -->
<Story
  name="Link Button"
  args={{
    href: 'https://www.w3schools.com/tags/tag_a.asp',
    target: '_blank',
  }}
>
  Click me!
</Story>

<!-- Onclick action -->
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

<!-- Button color variation, safe color -->
<Story name="Color" args={{ color: 'safe' }}>Click me</Story>

<!-- Button variant variation, text variant -->
<Story name="Text" args={{ variant: 'text' }}>Click me!</Story>

<!-- Button with outline -->
<Story name="Outline" args={{ variant: 'text', outline: true }}>Click me!</Story>

<!-- Button size variation, Large Size -->
<Story name="Size" args={{ size: 'large' }}>Click me!</Story>

<!-- Button Disabled state -->
<Story name="Disabled" args={{ disabled: true }}>Click me!</Story>

<!-- Button type Submit Button -->
<Story name="Submit Button" args={{ type: 'submit' }}>Click me!</Story>

<!-- Button variation fullWidth button -->
<Story name="Full Width" args={{ fullWidth: true }}>Click me!</Story>

<!-- Button variation compact button with A11y support -->
<Story
  name="Compact"
  args={{
    compact: true,
    'aria-label': 'Add item',
  }}
>
  +
</Story>

<!-- Button in Light Theme -->
<Story name="Light Theme" asChild>
  <Theme type="light">
    <Button>Click me!</Button>
  </Theme>
</Story>

<!-- Button in Dark Theme -->
<Story name="Dark Theme" asChild globals={{ backgrounds: { value: 'dark' } }}>
  <Theme type="dark">
    <Button>Click me!</Button>
  </Theme>
</Story>
