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

<Story name="Shadow 1x">
  <Paper>Hola!</Paper>
</Story>

<Story name="Shadow 2x" args={{ shadow: '2x' }}><Paper shadow="2x">Hola!</Paper></Story>

<Story name="Shadow 3x" args={{ shadow: '3x' }}>
  <Paper shadow="3x">Hola!</Paper>
</Story>

<Story name="Shadow 4x" args={{ shadow: '4x' }}>
  <Paper shadow="4x">Hola!</Paper>
</Story>

<Story name="Shadow 5x" args={{ shadow: '5x' }}>
  <Paper shadow="5x">Hola!</Paper>
</Story>

<Story name="Shadow 6x" args={{ shadow: '6x' }}>
  <Paper shadow="6x">Hola!</Paper>
</Story>

<Story name="Shadow 7x" args={{ shadow: '7x' }}>
  <Paper shadow="7x">Hola!</Paper>
</Story>

<Story name="Shadow False" args={{ shadow: false }}>
  <Paper shadow={false}>Hola!</Paper>
</Story>
