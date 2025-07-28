<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Toggle from '../Toggle.svelte';
  import { storyToggleArgTypes } from '../Toggle.stories.svelte';

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    component: Toggle,
    tags: ['autodocs'],
    argTypes: storyToggleArgTypes,
  });
</script>

<Story name="Default" />

<Story name="Roundness 1" args={{ roundness: 1 }} />

<Story name="Roundness 2" args={{ roundness: 2 }} />

<Story name="Roundness 3" />

<Story name="Roundness 0" args={{ roundness: 0 }} />
