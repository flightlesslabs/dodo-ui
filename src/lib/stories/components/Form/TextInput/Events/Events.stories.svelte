<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import TextInput, {
    type TextInputClipboardEvent,
    type TextInputFocusEvent,
  } from '../TextInput.svelte';
  import { storyTextInputArgTypes } from '../TextInput.stories.svelte';

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    component: TextInput,
    tags: ['autodocs'],
    argTypes: storyTextInputArgTypes,
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
  <TextInput
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
  <TextInput
    onchange={(e: Event) => {
      const target = e.target as HTMLInputElement;

      console.log('onchange Event', target.value);
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
  <TextInput
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
  <TextInput
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
  <TextInput
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
  <TextInput
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
  <TextInput
    onpaste={(e: TextInputClipboardEvent) => {
      const target = e.target as HTMLInputElement;

      console.log('onpaste Event', target);
    }}
  />
</Story>
