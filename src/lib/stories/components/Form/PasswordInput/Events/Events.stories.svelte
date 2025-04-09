<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import { storyPasswordInputArgTypes } from '../PasswordInput.stories.svelte';
  import PasswordInput, { type PasswordInputToggleEvent } from '../PasswordInput.svelte';
  import type {
    TextInputFocusEvent,
    TextInputClipboardEvent,
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
>
  <PasswordInput
    oninput={(e: Event) => {
      const target = e.target as HTMLInputElement;

      console.log('Input Event', target.value);
    }}
  />
</Story>

<Story
  name="Change"
  args={{
    onchange: (e: Event) => {
      const target = e.target as HTMLInputElement;

      console.log('onChange Event', target.value);
    },
  }}
>
  <PasswordInput
    onchange={(e: Event) => {
      const target = e.target as HTMLInputElement;

      console.log('onchange Event', target.value);
    }}
  />
</Story>

<!-- `e: PasswordInputToggleEvent` -->
<Story
  name="Toggle"
  args={{
    ontoggle: (e: PasswordInputToggleEvent) => {
      const target = e.event.target as HTMLButtonElement;

      console.log('ontoggle Event', e, target);
    },
  }}
>
  <PasswordInput
    ontoggle={(e: PasswordInputToggleEvent) => {
      const target = e.event.target as HTMLButtonElement;

      console.log('ontoggle Event', e, target);
    }}
  />
</Story>

<!-- `e: TextInputFocusEvent` -->
<Story
  name="Focus"
  args={{
    onfocus: (e: TextInputFocusEvent) => {
      const target = e.target as HTMLInputElement;

      console.log('onfocus Event', target);
    },
  }}
>
  <PasswordInput
    onfocus={(e: TextInputFocusEvent) => {
      const target = e.target as HTMLInputElement;

      console.log('onfocus Event', target);
    }}
  />
</Story>

<!-- `e: TextInputFocusEvent` -->
<Story
  name="Blur"
  args={{
    onblur: (e: TextInputFocusEvent) => {
      const target = e.target as HTMLInputElement;

      console.log('onblur Event', target);
    },
  }}
>
  <PasswordInput
    onblur={(e: TextInputFocusEvent) => {
      const target = e.target as HTMLInputElement;

      console.log('onblur Event', target);
    }}
  />
</Story>

<!-- `e: TextInputClipboardEvent` -->
<Story
  name="Copy"
  args={{
    oncopy: (e: TextInputClipboardEvent) => {
      const target = e.target as HTMLInputElement;

      console.log('oncopy Event', target);
    },
  }}
>
  <PasswordInput
    oncopy={(e: TextInputClipboardEvent) => {
      const target = e.target as HTMLInputElement;

      console.log('oncopy Event', target);
    }}
  />
</Story>

<!-- `e: TextInputClipboardEvent` -->
<Story
  name="Cut"
  args={{
    oncut: (e: TextInputClipboardEvent) => {
      const target = e.target as HTMLInputElement;

      console.log('oncut Event', target);
    },
  }}
>
  <PasswordInput
    oncut={(e: TextInputClipboardEvent) => {
      const target = e.target as HTMLInputElement;

      console.log('oncut Event', target);
    }}
  />
</Story>

<!-- `e: TextInputClipboardEvent` -->
<Story
  name="Paste"
  args={{
    onpaste: (e: TextInputClipboardEvent) => {
      const target = e.target as HTMLInputElement;

      console.log('onpaste Event', target);
    },
  }}
>
  <PasswordInput
    onpaste={(e: TextInputClipboardEvent) => {
      const target = e.target as HTMLInputElement;

      console.log('onpaste Event', target);
    }}
  />
</Story>
