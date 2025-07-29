<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Radio from '../Radio.svelte';
  import { storyRadioArgTypes } from '../Radio.stories.svelte';

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    component: Radio,
    tags: ['autodocs'],
    argTypes: storyRadioArgTypes,
  });
</script>

<Story
  name="Change"
  args={{
    onchange: (e: Event) => {
      const target = e.target as HTMLInputElement;

      alert('onchange Clicked');
      console.log('Radio Clicked', target);
    },
  }}
  asChild
>
  <Radio
    onchange={(e: Event) => {
      const target = e.target as HTMLInputElement;

      alert('onchange Clicked');
      console.log('onchange Clicked', target);
    }}
  />
</Story>
