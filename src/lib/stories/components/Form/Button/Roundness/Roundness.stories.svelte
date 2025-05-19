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

<Story name="Roundness 1" args={{ outline: false, disabled: false, compact: false }}>
  <Button>Click me!</Button>
</Story>

<Story name="Roundness 2" args={{ outline: false, disabled: false, compact: false, roundness: 2 }}>
  <Button roundness={2}>Click me!</Button>
</Story>

<Story name="Roundness 3" args={{ outline: false, disabled: false, compact: false, roundness: 3 }}>
  <Button roundness={3}>Click me!</Button>
</Story>

<Story name="Roundness 0" args={{ outline: false, disabled: false, compact: false, roundness: 0 }}>
  <Button roundness={0}>Click me!</Button>
</Story>

<!-- Button with 50% roundness usefull for icon (Compact) buttons -->
<Story
  name="Roundness Full"
  args={{ outline: false, disabled: false, compact: false, roundness: 'full' }}
>
  <Button roundness="full">C</Button>
</Story>
