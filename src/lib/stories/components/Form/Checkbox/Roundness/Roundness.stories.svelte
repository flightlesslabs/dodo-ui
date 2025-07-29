<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Checkbox from '../Checkbox.svelte';
  import { storyCheckboxArgTypes } from '../Checkbox.stories.svelte';

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    component: Checkbox,
    tags: ['autodocs'],
    argTypes: storyCheckboxArgTypes,
  });
</script>

<Story name="Roundness 1" />

<Story name="Roundness 2" args={{ roundness: 2 }} />

<Story name="Roundness 3" args={{ roundness: 3 }} />

<Story name="Roundness 0" args={{ roundness: 0 }} />

<Story name="Roundness full" args={{ roundness: 'full' }} />
