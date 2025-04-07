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

<Story
  name="Roundness1"
  args={{ outline: false, disabled: false, compact: false, roundness: 'full' }}
>
  <Button roundness="full">Click me!</Button>
</Story>

<Story name="Roundness2" args={{ outline: false, disabled: false, compact: false, roundness: 2 }}>
  <Button roundness={2}>Click me!</Button>
</Story>

<Story name="Roundness3" args={{ outline: false, disabled: false, compact: false, roundness: 3 }}>
  <Button roundness={3}>Click me!</Button>
</Story>

<Story
  name="RoundnessFalse"
  args={{ outline: false, disabled: false, compact: false, roundness: false }}
>
  <Button roundness={false}>Click me!</Button>
</Story>

<Story
  name="RoundnessFull"
  args={{ outline: false, disabled: false, compact: false, roundness: 'full' }}
>
  <Button roundness="full">C</Button>
</Story>
