<script module>
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

<Story name="Roundness full" />

<Story name="Roundness 1" args={{ roundness: 1 }} />

<Story name="Roundness 2" args={{ roundness: 2 }} />

<Story name="Roundness 3" args={{ roundness: 3 }} />

<Story name="Roundness 0" args={{ roundness: 0 }} />
