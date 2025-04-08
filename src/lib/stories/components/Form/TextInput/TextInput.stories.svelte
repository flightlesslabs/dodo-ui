<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import { fn } from '@storybook/test';
  import TextInput from './TextInput.svelte';
  import type { StoryBookArgTypes } from '$lib/storybook-types.js';

  export const storyTextInputArgTypes: StoryBookArgTypes = {
    type: {
      control: { type: 'select' },
      options: ['text', 'tel', 'email', 'password', 'url', 'number'],
    },
    roundness: {
      control: { type: 'select' },
      options: [false, '1x', '2x', '3x'],
    },
    size: {
      control: { type: 'select' },
      options: ['normal', 'small', 'large'],
    },
  };

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    component: TextInput,
    tags: ['autodocs'],
    argTypes: storyTextInputArgTypes,
    args: { value: 'Hello world!' },
  });
</script>

<!-- TextInput with default style -->
<Story name="Default" />

<Story name="Placeholder" args={{ value: '', placeholder: 'Type something...' }} />
