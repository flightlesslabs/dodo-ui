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

<Story name="Default" args={{ outline: false, disabled: false, compact: false }}>
  <Button>Click me!</Button>
</Story>
<Story name="Primary" args={{ color: 'primary' }}><Button color="primary">Click me!</Button></Story>
<Story name="Secondary" args={{ color: 'secondary' }}>
  <Button color="secondary">Click me!</Button>
</Story>
<Story name="Safe" args={{ color: 'safe' }}><Button color="safe">Click me!</Button></Story>
<Story name="Warning" args={{ color: 'warning' }}><Button color="warning">Click me!</Button></Story>
<Story name="Danger" args={{ color: 'danger' }}><Button color="danger">Click me!</Button></Story>

<Story
  name="Default Solid"
  args={{ outline: false, disabled: false, compact: false, variant: 'solid' }}
>
  <Button variant="solid">Click me!</Button>
</Story>
<Story name="Primary Solid" args={{ color: 'primary', variant: 'solid' }}>
  <Button color="primary" variant="solid">Click me!</Button>
</Story>
<Story name="Secondary Solid" args={{ color: 'secondary', variant: 'solid' }}>
  <Button color="secondary" variant="solid">Click me!</Button>
</Story>
<Story name="Safe Solid" args={{ color: 'safe', variant: 'solid' }}>
  <Button color="safe" variant="solid">Click me!</Button>
</Story>
<Story name="Warning Solid" args={{ color: 'warning', variant: 'solid' }}>
  <Button color="warning" variant="solid">Click me!</Button>
</Story>
<Story name="Danger Solid" args={{ color: 'danger', variant: 'solid' }}>
  <Button color="danger" variant="solid">Click me!</Button>
</Story>

<Story name="Default Outline" args={{ outline: true, disabled: false, compact: false }}>
  <Button outline>Click me!</Button>
</Story>
<Story name="Primary Outline" args={{ outline: true, color: 'primary' }}>
  <Button color="primary" outline>Click me!</Button>
</Story>
<Story name="Secondary Outline" args={{ outline: true, color: 'secondary' }}>
  <Button color="secondary" outline>Click me!</Button>
</Story>
<Story name="Safe Outline" args={{ outline: true, color: 'safe' }}>
  <Button color="safe" outline>Click me!</Button>
</Story>
<Story name="Warning Outline" args={{ outline: true, color: 'warning' }}>
  <Button color="warning" outline>Click me!</Button>
</Story>
<Story name="Danger Outline" args={{ outline: true, color: 'danger' }}>
  <Button color="danger" outline>Click me!</Button>
</Story>
