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

<Story name="Shadow 1x" args={{ height: '100px' }}>
  <Paper height="100px">Hola!</Paper>
</Story>

<Story name="Shadow 2x" args={{ shadow: '2x', height: '100px' }}>
  <Paper shadow="2x" height="100px">Hola!</Paper>
</Story>

<Story name="Shadow 3x" args={{ shadow: '3x', height: '100px' }}>
  <Paper shadow="3x" height="100px">Hola!</Paper>
</Story>

<Story name="Shadow 4x" args={{ shadow: '4x', height: '100px' }}>
  <Paper shadow="4x" height="100px">Hola!</Paper>
</Story>

<Story name="Shadow 5x" args={{ shadow: '5x', height: '100px' }}>
  <Paper shadow="5x" height="100px">Hola!</Paper>
</Story>

<Story name="Shadow False" args={{ shadow: false, height: '100px' }}>
  <Paper shadow={false} height="100px">Hola!</Paper>
</Story>
