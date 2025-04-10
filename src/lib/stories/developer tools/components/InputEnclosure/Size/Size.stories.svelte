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

<Story name="Normal" />
<Story name="Small" args={{ size: 'small' }} />
<Story name="Large" args={{ size: 'large' }} />
