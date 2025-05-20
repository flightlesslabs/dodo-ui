<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import { type SimpleSelectFocusEvent } from '../SimpleSelect.svelte';
  import SimpleSelect from '../SimpleSelect.svelte';
  import {
    storySimpleSelectArgTypes,
    storySimpleSelectOptions,
  } from '../SimpleSelect.stories.svelte';

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    component: SimpleSelect,
    tags: ['autodocs'],
    argTypes: storySimpleSelectArgTypes,
    args: { options: storySimpleSelectOptions },
  });
</script>

<Story
  name="Change"
  args={{
    onchange: (e: Event) => {
      const target = e.target as HTMLSelectElement;

      console.log('onChange Event', target.value);
    },
  }}
/>

<!-- `e: SimpleSelectFocusEvent` -->
<Story
  name="Focus"
  args={{
    onfocus: (e: SimpleSelectFocusEvent) => {
      const target = e.target as HTMLSelectElement;

      console.log('onfocus Event', target);
    },
  }}
/>

<!-- `e: SimpleSelectFocusEvent` -->
<Story
  name="Blur"
  args={{
    onblur: (e: SimpleSelectFocusEvent) => {
      const target = e.target as HTMLSelectElement;

      console.log('onblur Event', target);
    },
  }}
/>
