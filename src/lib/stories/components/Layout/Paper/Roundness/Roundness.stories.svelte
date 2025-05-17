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

<Story name="Roundness 1x" args={{ height: '100px' }}>
  <Paper height="100px">Hola!</Paper>
</Story>

<Story name="Roundness 2x" args={{ roundness: '2x', height: '100px' }}>
  <Paper roundness="2x" height="100px">Hola!</Paper>
</Story>

<Story name="Roundness 3x" args={{ roundness: '3x', height: '100px' }}>
  <Paper roundness="3x" height="100px">Hola!</Paper>
</Story>

<Story name="Roundness False" args={{ roundness: false, height: '100px' }}>
  <Paper roundness={false} height="100px">Hola!</Paper>
</Story>

<Story name="Roundness Full" args={{ roundness: 'full', height: '100px', width: '100%' }}>
  <Paper roundness="full" height="100px" width="100px">Hola!</Paper>
</Story>
