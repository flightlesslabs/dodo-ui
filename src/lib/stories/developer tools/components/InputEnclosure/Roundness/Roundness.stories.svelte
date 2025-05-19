<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import InputEnclosure from '../InputEnclosure.svelte';
  import { storyInputEnclosureArgTypes } from '../InputEnclosure.stories.svelte';

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    component: InputEnclosure,
    tags: ['autodocs'],
    argTypes: storyInputEnclosureArgTypes,
  });
</script>

<Story name="Roundness 1" />

<Story name="Roundness 2" args={{ roundness: 2 }} />

<Story name="Roundness 3" args={{ roundness: 3 }} />

<Story name="Roundness 0" args={{ roundness: 0 }} />
