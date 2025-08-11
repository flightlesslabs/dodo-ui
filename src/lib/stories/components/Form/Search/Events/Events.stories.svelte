<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import { storySearchArgTypes } from '../Search.stories.svelte';
  import Search from '../Search.svelte';
  import type {
    TextInputFocusEvent,
    TextInputClipboardEvent,
    TextInputKeyboardEvent,
  } from '../../TextInput/TextInput.svelte';

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    component: Search,
    tags: ['autodocs'],
    argTypes: storySearchArgTypes,
  });
</script>

<Story
  name="Search"
  args={{
    onsearch: () => {
      console.log('Search Event');
    },
  }}
/>

<Story
  name="Clear"
  args={{
    onclear: () => {
      console.log('Clear Event');
    },
  }}
/>

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

<!-- `e: TextInputFocusEvent` -->
<Story
  name="Focus"
  args={{
    onfocus: (e: TextInputFocusEvent) => {
      const target = e.target as HTMLInputElement;

      console.log('onfocus Event', target);
    },
  }}
/>

<!-- `e: TextInputFocusEvent` -->
<Story
  name="Blur"
  args={{
    onblur: (e: TextInputFocusEvent) => {
      const target = e.target as HTMLInputElement;

      console.log('onblur Event', target);
    },
  }}
/>

<!-- `e: TextInputClipboardEvent` -->
<Story
  name="Copy"
  args={{
    oncopy: (e: TextInputClipboardEvent) => {
      const target = e.target as HTMLInputElement;

      console.log('oncopy Event', target);
    },
  }}
/>

<!-- `e: TextInputClipboardEvent` -->
<Story
  name="Cut"
  args={{
    oncut: (e: TextInputClipboardEvent) => {
      const target = e.target as HTMLInputElement;

      console.log('oncut Event', target);
    },
  }}
/>

<!-- `e: TextInputClipboardEvent` -->
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
    onkeydown: (e: TextInputKeyboardEvent) => {
      console.log('onkeydown Event', e.key);
    },
  }}
/>

<Story
  name="KeyPress"
  args={{
    onkeypress: (e: TextInputKeyboardEvent) => {
      console.log('onkeypress Event', e.key);
    },
  }}
/>

<Story
  name="KeyUp"
  args={{
    onkeyup: (e: TextInputKeyboardEvent) => {
      console.log('onkeyup Event', e.key);
    },
  }}
/>
