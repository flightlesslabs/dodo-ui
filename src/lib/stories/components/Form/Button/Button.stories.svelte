<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import { fn } from '@storybook/test';
  import Button from './Button.svelte';
  import type { StoryBookArgTypes } from '$lib/storybook-types.js';

  export const storyButtonArgTypes: StoryBookArgTypes = {
    type: {
      control: { type: 'select' },
      options: ['button', 'submit'],
    },
    color: {
      control: { type: 'select' },
      options: ['default', 'primary', 'safe', 'warning', 'danger', 'info'],
    },
    variant: {
      control: { type: 'select' },
      options: ['text', 'solid'],
    },
    roundness: {
      control: { type: 'select' },
      options: [false, '1x', '2x', '3x', 'full'],
    },
    size: {
      control: { type: 'select' },
      options: ['normal', 'small', 'large'],
    },
  };

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    component: Button,
    tags: ['autodocs'],
    argTypes: storyButtonArgTypes,
    args: {
      onclick: fn(),
    },
  });
</script>

<!-- ⚠️ Test Button: Do not use! -->
<Story
  name="Test Button"
  args={{
    outline: false,
    disabled: false,
    compact: false,
    _unsafeChildrenStringForTesting: 'Click me!',
  }}
/>

<!-- Button with default style -->
<Story name="Default" args={{ outline: false, disabled: false, compact: false }}>
  <Button>Click me!</Button>
</Story>

<Story name="Disabled" args={{ disabled: true }}>
  <Button disabled>Click me!</Button>
</Story>

<!-- Button with border around it -->
<Story name="Outline" args={{ outline: true }}>
  <Button outline>Click me!</Button>
</Story>

<!-- Form submit button -->
<Story name="Sumbit Button" args={{ type: 'submit' }}>
  <Button type="submit">Submit Form</Button>
</Story>

<!-- Anchor Link styled like a Button -->
<Story
  name="Link Button"
  args={{ href: 'https://www.w3schools.com/tags/tag_a.asp', target: '_blank' }}
>
  <Button href="https://www.w3schools.com/tags/tag_a.asp" target="_blank">Link</Button>
</Story>
