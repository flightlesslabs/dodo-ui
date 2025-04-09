<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import { fn } from '@storybook/test';
  import Button from '../Button.svelte';
  import { storyButtonArgTypes } from '../Button.stories.svelte';
  import type { ButtonClickEvent } from '../Button.svelte';

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

<!-- Click Event: `e: ButtonClickEvent` -->
<Story
  name="Click Event"
  args={{
    outline: false,
    disabled: false,
    compact: false,
    onclick: (e: ButtonClickEvent) => {
      alert('Button Clicked');
      console.log('Button Clicked', e);
    },
  }}
>
  <Button
    onclick={(e: ButtonClickEvent) => {
      alert('Button Clicked');
      console.log('Button Clicked', e);
    }}
  >
    Click me!
  </Button>
</Story>
