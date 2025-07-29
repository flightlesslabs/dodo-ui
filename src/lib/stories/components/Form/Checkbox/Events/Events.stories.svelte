<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Checkbox from '../Checkbox.svelte';
  import { storyCheckboxArgTypes } from '../Checkbox.stories.svelte';

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    component: Checkbox,
    tags: ['autodocs'],
    argTypes: storyCheckboxArgTypes,
  });

  let checked = $state(false);
</script>

<Story
  name="Change"
  args={{
    onchange: (e: Event) => {
      const target = e.target as HTMLInputElement;

      alert('onchange Clicked');
      console.log('Checkbox Clicked', target);
    },
    checked,
  }}
  asChild
>
  <Checkbox
    onchange={(e: Event) => {
      const target = e.target as HTMLInputElement;

      alert('onchange Clicked');
      console.log('onchange Clicked', target);
    }}
    {checked}
  />
</Story>
