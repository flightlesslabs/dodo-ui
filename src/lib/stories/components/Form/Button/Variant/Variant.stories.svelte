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

<Story name="Text" args={{ outline: false, disabled: false, compact: false }}>
  <Button>Click me!</Button>
</Story>
<Story name="Solid" args={{ variant: 'solid' }}><Button variant="solid">Click me!</Button></Story>
