<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import { storyRangeSliderArgTypes } from '../RangeSlider.stories.svelte';
  import RangeSlider from '../RangeSlider.svelte';
  import type {
    TextInputFocusEvent,
    TextInputClipboardEvent,
    TextInputKeyboardEvent,
  } from '../../TextInput/TextInput.svelte';

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    component: RangeSlider,
    tags: ['autodocs'],
    argTypes: storyRangeSliderArgTypes,
  });

  let value = $state<number>(0);
</script>

<Story
  name="Input"
  args={{
    value,
    oninput: (e: Event) => {
      const target = e.target as HTMLInputElement;

      console.log('Input Event', target.value);
    },
  }}
/>

<Story
  name="Change"
  args={{
    value,
    onchange: (e: Event) => {
      const target = e.target as HTMLInputElement;

      console.log('onChange Event', target.value);
    },
  }}
/>

<Story
  name="Focus"
  args={{
    value,
    onfocus: (e: TextInputFocusEvent) => {
      const target = e.target as HTMLInputElement;

      console.log('onfocus Event', target);
    },
  }}
/>

<Story
  name="Blur"
  args={{
    value,
    onblur: (e: TextInputFocusEvent) => {
      const target = e.target as HTMLInputElement;

      console.log('onblur Event', target);
    },
  }}
/>
