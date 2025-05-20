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

<Story name="Primary">Click me!</Story>
<Story name="Secondary" args={{ color: 'secondary' }}>Click me!</Story>
<Story name="Neutral" args={{ color: 'neutral' }}>Click me!</Story>
<Story name="Safe" args={{ color: 'safe' }}>Click me!</Story>
<Story name="Warning" args={{ color: 'warning' }}>Click me!</Story>
<Story name="Danger" args={{ color: 'danger' }}>Click me!</Story>

<Story name="Primary Text" args={{ color: 'primary', variant: 'text' }}>Click me!</Story>
<Story name="Secondary Text" args={{ color: 'secondary', variant: 'text' }}>Click me!</Story>
<Story name="Neutral Text" args={{ color: 'neutral', variant: 'text' }}>Click me!</Story>
<Story name="Safe Text" args={{ color: 'safe', variant: 'text' }}>Click me!</Story>
<Story name="Warning Text" args={{ color: 'warning', variant: 'text' }}>Click me!</Story>
<Story name="Danger Text" args={{ color: 'danger', variant: 'text' }}>Click me!</Story>

<Story name="Primary Outline" args={{ variant: 'text', outline: true }}>Click me!</Story>
<Story name="Secondary Outline" args={{ color: 'secondary', variant: 'text', outline: true }}>
  Click me!
</Story>
<Story name="Neutral Outline" args={{ color: 'neutral', variant: 'text', outline: true }}>
  Click me!
</Story>
<Story name="Safe Outline" args={{ color: 'safe', variant: 'text', outline: true }}>
  Click me!
</Story>
<Story name="Warning Outline" args={{ color: 'warning', variant: 'text', outline: true }}>
  Click me!
</Story>
<Story name="Danger Outline" args={{ color: 'danger', variant: 'text', outline: true }}>
  Click me!
</Story>
