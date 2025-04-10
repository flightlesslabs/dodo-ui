<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
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

<Story name="Roundness 1x" />

<Story name="Roundness 2x" args={{ roundness: '2x' }} />

<Story name="Roundness 3x" args={{ roundness: '3x' }} />

<Story name="Roundness False" args={{ roundness: false }} />
