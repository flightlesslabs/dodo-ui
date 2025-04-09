<script module lang="ts">
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

<Story
  name="Click"
  args={{
    outline: false,
    disabled: false,
    compact: false,
    onclick: (e: Event) => {
      const target = e.target as HTMLButtonElement;

      alert('Button Clicked');
      console.log('Button Clicked', target);
    },
  }}
>
  <Button
    onclick={(e: Event) => {
      const target = e.target as HTMLButtonElement;

      alert('Button Clicked');
      console.log('Button Clicked', target);
    }}
  >
    Click me!
  </Button>
</Story>
