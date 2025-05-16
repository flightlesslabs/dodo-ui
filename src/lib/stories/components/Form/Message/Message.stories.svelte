<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Message from './Message.svelte';
  import type { StoryBookArgTypes } from '$lib/storybook-types.js';

  export const storyMessageArgTypes: StoryBookArgTypes = {
    color: {
      control: { type: 'select' },
      options: ['primary', 'safe', 'warning', 'danger'],
    },
    size: {
      control: { type: 'select' },
      options: ['normal', 'small', 'large'],
    },
  };

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    component: Message,
    tags: ['autodocs'],
    argTypes: storyMessageArgTypes,
  });
</script>

<!-- ⚠️ Test Message: Do not use! -->
<Story
  name="Test Message"
  args={{
    _unsafeChildrenStringForTesting: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  }}
/>

<Story name="Primary">
  <Message>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Message>
</Story>
