<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import { storyDynamicInputArgTypes } from '../DynamicInput.stories.svelte';
  import DynamicInput, {
    type DynamicInputFocusEvent,
    type DynamicInputKeyboardEvent,
  } from '../DynamicInput.svelte';
  import type { TextInputClipboardEvent } from '$lib/stories/components/Form/TextInput/TextInput.svelte';

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    component: DynamicInput,
    tags: ['autodocs'],
    argTypes: storyDynamicInputArgTypes,
    args: { value: 'Hello world!' },
  });
</script>

<Story
  name="Input"
  args={{
    oninput: (e: Event) => {
      const target = e.target as HTMLInputElement;

      console.log('Input Event', target.value);
    },
  }}
/>

<Story
  name="Change"
  args={{
    onchange: (e: Event) => {
      const target = e.target as HTMLInputElement;

      console.log('onChange Event', target.value);
    },
  }}
/>

<Story
  name="Focus"
  args={{
    onfocus: (e: DynamicInputFocusEvent) => {
      const target = e.target as HTMLInputElement;

      console.log('onfocus Event', target);
    },
  }}
/>

<Story
  name="Blur"
  args={{
    onblur: (e: DynamicInputFocusEvent) => {
      const target = e.target as HTMLInputElement;

      console.log('onblur Event', target);
    },
  }}
/>

<Story
  name="Copy"
  args={{
    oncopy: (e: TextInputClipboardEvent) => {
      const target = e.target as HTMLInputElement;

      console.log('oncopy Event', target);
    },
  }}
/>

<Story
  name="Cut"
  args={{
    oncut: (e: TextInputClipboardEvent) => {
      const target = e.target as HTMLInputElement;

      console.log('oncut Event', target);
    },
  }}
/>

<Story
  name="Paste"
  args={{
    onpaste: (e: TextInputClipboardEvent) => {
      const target = e.target as HTMLInputElement;

      console.log('onpaste Event', target);
    },
  }}
/>

<Story
  name="KeyDown"
  args={{
    onkeydown: (e: DynamicInputKeyboardEvent) => {
      console.log('onkeydown Event', e.key);
    },
  }}
/>

<Story
  name="KeyPress"
  args={{
    onkeypress: (e: DynamicInputKeyboardEvent) => {
      console.log('onkeypress Event', e.key);
    },
  }}
/>

<Story
  name="KeyUp"
  args={{
    onkeyup: (e: DynamicInputKeyboardEvent) => {
      console.log('onkeyup Event', e.key);
    },
  }}
/>
