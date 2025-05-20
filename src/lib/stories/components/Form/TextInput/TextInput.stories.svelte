<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import TextInput, { textInputTypeArray } from './TextInput.svelte';
  import type { StoryBookArgTypes } from '$lib/storybook-types.js';
  import { componentRoundnessArray } from '$lib/types/roundness.js';
  import { componentSizeArray } from '$lib/types/size.js';

  export const storyTextInputArgTypes: StoryBookArgTypes = {
    type: {
      control: { type: 'select' },
      options: textInputTypeArray,
    },
    roundness: {
      control: { type: 'select' },
      options: componentRoundnessArray,
    },
    size: {
      control: { type: 'select' },
      options: componentSizeArray,
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

<Story name="No Outline" args={{ outline: false }} />

<Story name="Error" args={{ error: true }} />

<Story name="Disabled" args={{ disabled: true }} />

<Story name="Read only" args={{ readonly: true }} />
