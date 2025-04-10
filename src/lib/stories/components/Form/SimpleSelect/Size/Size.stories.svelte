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

<Story name="Normal" />
<Story name="Small" args={{ size: 'small' }} />
<Story name="Large" args={{ size: 'large' }} />
