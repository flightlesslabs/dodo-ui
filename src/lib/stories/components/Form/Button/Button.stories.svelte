<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import { fn } from '@storybook/test';
  import Button from './Button.svelte';

  export const storyButtonArgTypes = {
    type: {
      control: { type: 'select' },
      options: ['button', 'submit'],
    },
    color: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'safe', 'warning', 'danger', 'info'],
    },
    variant: {
      control: { type: 'select' },
      options: ['text', 'solid'],
    },
    roundness: {
      control: { type: 'select' },
      options: [false, 1, 2, 3, 'full'],
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
  };

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    component: Button,
    tags: ['autodocs'],
    // @ts-ignore
    argTypes: {
      ...storyButtonArgTypes,
    },
    args: {
      onclick: fn(),
    },
  });
</script>

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
