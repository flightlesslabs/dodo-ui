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

<Story name="Normal" />
<Story name="Small" args={{ size: 'small' }} />
<Story name="Large" args={{ size: 'large' }} />
