<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Paper from '../Paper.svelte';
  import { storyPaperArgTypes } from '../Paper.stories.svelte';

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    component: Paper,
    tags: ['autodocs'],
    argTypes: storyPaperArgTypes,
  });
</script>

<Story name="Shadow 0" args={{ height: '100px' }}>Hola!</Story>

<Story name="Shadow 1" args={{ shadow: 1, height: '100px' }}>Hola!</Story>

<Story name="Shadow 2" args={{ shadow: 2, height: '100px' }}>Hola!</Story>

<Story name="Shadow 3" args={{ shadow: 3, height: '100px' }}>Hola!</Story>

<Story name="Shadow 4" args={{ shadow: 4, height: '100px' }}>Hola!</Story>

<Story name="Shadow 5" args={{ shadow: 5, height: '100px' }}>Hola!</Story>
