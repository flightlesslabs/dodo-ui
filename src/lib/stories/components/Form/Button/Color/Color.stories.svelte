<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import { fn } from '@storybook/test';
  import Button from '../Button.svelte';
  import { storyButtonArgTypes } from '../Button.stories.svelte';

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

<Story name="Primary" args={{ outline: false, disabled: false, compact: false }}>
  <Button>Click me!</Button>
</Story>
<Story name="Secondary" args={{ color: 'secondary' }}>
  <Button color="secondary">Click me!</Button>
</Story>
<Story name="Neutral" args={{ color: 'neutral' }}>
  <Button color="neutral">Click me!</Button>
</Story>
<Story name="Safe" args={{ color: 'safe' }}><Button color="safe">Click me!</Button></Story>
<Story name="Warning" args={{ color: 'warning' }}><Button color="warning">Click me!</Button></Story>
<Story name="Danger" args={{ color: 'danger' }}><Button color="danger">Click me!</Button></Story>

<Story name="Primary Text" args={{ color: 'primary', variant: 'text' }}>
  <Button color="primary" variant="text">Click me!</Button>
</Story>
<Story name="Secondary Text" args={{ color: 'secondary', variant: 'text' }}>
  <Button color="secondary" variant="text">Click me!</Button>
</Story>
<Story name="Neutral Text" args={{ color: 'neutral', variant: 'text' }}>
  <Button color="neutral" variant="text">Click me!</Button>
</Story>
<Story name="Safe Text" args={{ color: 'safe', variant: 'text' }}>
  <Button color="safe" variant="text">Click me!</Button>
</Story>
<Story name="Warning Text" args={{ color: 'warning', variant: 'text' }}>
  <Button color="warning" variant="text">Click me!</Button>
</Story>
<Story name="Danger Text" args={{ color: 'danger', variant: 'text' }}>
  <Button color="danger" variant="text">Click me!</Button>
</Story>

<Story name="Primary Outline" args={{ outline: true, variant: 'text' }}>
  <Button variant="text" outline>Click me!</Button>
</Story>
<Story name="Secondary Outline" args={{ outline: true, color: 'secondary', variant: 'text' }}>
  <Button color="secondary" variant="text" outline>Click me!</Button>
</Story>
<Story name="Neutral Outline" args={{ outline: true, color: 'neutral', variant: 'text' }}>
  <Button color="neutral" variant="text" outline>Click me!</Button>
</Story>
<Story name="Safe Outline" args={{ outline: true, color: 'safe', variant: 'text' }}>
  <Button color="safe" variant="text" outline>Click me!</Button>
</Story>
<Story name="Warning Outline" args={{ outline: true, color: 'warning', variant: 'text' }}>
  <Button color="warning" variant="text" outline>Click me!</Button>
</Story>
<Story name="Danger Outline" args={{ outline: true, color: 'danger', variant: 'text' }}>
  <Button color="danger" variant="text" outline>Click me!</Button>
</Story>
