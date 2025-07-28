<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Toggle from '../Toggle.svelte';
  import { storyToggleArgTypes } from '../Toggle.stories.svelte';

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    component: Toggle,
    tags: ['autodocs'],
    argTypes: storyToggleArgTypes,
  });

  let checked = $state(false);
</script>

<Story
  name="Change"
  args={{
    onchange: (e: Event) => {
      const target = e.target as HTMLInputElement;

      alert('onchange Clicked');
      console.log('Toggle Clicked', target);
    },
    checked,
  }}
  asChild
>
  <Toggle
    onchange={(e: Event) => {
      const target = e.target as HTMLInputElement;

      alert('onchange Clicked');
      console.log('onchange Clicked', target);
    }}
    {checked}
  />
</Story>
