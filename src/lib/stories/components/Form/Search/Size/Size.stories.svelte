<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Search from '../Search.svelte';
  import { storySearchArgTypes } from '../Search.stories.svelte';

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    component: Search,
    tags: ['autodocs'],
    argTypes: storySearchArgTypes,
    args: { value: 'Hello world!' },
  });
</script>

<Story name="Normal" />
<Story name="Small" args={{ size: 'small' }} />
<Story name="Large" args={{ size: 'large' }} />
