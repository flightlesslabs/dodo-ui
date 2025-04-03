<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import { fn } from '@storybook/test';
  import Button from '../Button.svelte';
  import { storyButtonArgTypes } from '../Button.stories.svelte';

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
<Story name="Primary" args={{ color: 'primary' }}><Button color="primary">Click me!</Button></Story>
<Story name="Safe" args={{ color: 'safe' }}><Button color="safe">Click me!</Button></Story>
<Story name="Warning" args={{ color: 'warning' }}><Button color="warning">Click me!</Button></Story>
<Story name="Danger" args={{ color: 'danger' }}><Button color="danger">Click me!</Button></Story>
<Story name="Info" args={{ color: 'info' }}><Button color="info">Click me!</Button></Story>
