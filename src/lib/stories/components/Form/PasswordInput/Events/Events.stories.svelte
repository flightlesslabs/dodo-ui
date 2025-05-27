<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import { storyPasswordInputArgTypes } from '../PasswordInput.stories.svelte';
  import PasswordInput, { type PasswordInputToggleEvent } from '../PasswordInput.svelte';
  import type {
    TextInputFocusEvent,
    TextInputClipboardEvent,
    TextInputKeyboardEvent,
  } from '../../TextInput/TextInput.svelte';

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    component: PasswordInput,
    tags: ['autodocs'],
    argTypes: storyPasswordInputArgTypes,
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
  name="Toggle"
  args={{
    ontoggle: (e: PasswordInputToggleEvent) => {
      const target = e.event.target as HTMLButtonElement;

      console.log('ontoggle Event', e, target);
    },
  }}
/>

<Story
  name="Focus"
  args={{
    onfocus: (e: TextInputFocusEvent) => {
      const target = e.target as HTMLInputElement;

      console.log('onfocus Event', target);
    },
  }}
/>

<Story
  name="Blur"
  args={{
    onblur: (e: TextInputFocusEvent) => {
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
