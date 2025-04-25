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

<Story name="Roundness 1x">
  <Paper>Hola!</Paper>
</Story>

<Story name="Roundness 2x" args={{ roundness: '2x' }}><Paper roundness="2x">Hola!</Paper></Story>

<Story name="Roundness 3x" args={{ roundness: '3x' }}>
  <Paper roundness="3x">Hola!</Paper>
</Story>

<Story name="Roundness False" args={{ roundness: false }}>
  <Paper roundness={false}>Hola!</Paper>
</Story>

<Story name="Roundness Full" args={{ roundness: 'full' }}>
  <Paper roundness="full">Hola!</Paper>
</Story>
