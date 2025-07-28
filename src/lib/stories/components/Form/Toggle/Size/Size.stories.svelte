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

<Story name="Normal" />
<Story name="Small" args={{ size: 'small' }} />
<Story name="Large" args={{ size: 'large' }} />
