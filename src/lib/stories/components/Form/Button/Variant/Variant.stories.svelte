<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Button from '../Button.svelte';
  import { storyButtonArgTypes } from '../Button.stories.svelte';

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    component: Button,
    tags: ['autodocs'],
    argTypes: storyButtonArgTypes,
  });
</script>

<Story name="Solid">Click me!</Story>

<Story name="Text" args={{ variant: 'text' }}>Click me!</Story>

<Story name="Text Outline" args={{ variant: 'text', outline: true }}>Click me!</Story>
