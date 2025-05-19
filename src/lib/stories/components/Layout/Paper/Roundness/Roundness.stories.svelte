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

<Story name="Roundness 1" args={{ height: '100px' }}>
  <Paper height="100px">Hola!</Paper>
</Story>

<Story name="Roundness 2" args={{ roundness: 2, height: '100px' }}>
  <Paper roundness={2} height="100px">Hola!</Paper>
</Story>

<Story name="Roundness 3" args={{ roundness: 3, height: '100px' }}>
  <Paper roundness={3} height="100px">Hola!</Paper>
</Story>

<Story name="Roundness 0" args={{ roundness: 0, height: '100px' }}>
  <Paper roundness={0} height="100px">Hola!</Paper>
</Story>

<Story name="Roundness Full" args={{ roundness: 'full', height: '100px', width: '100%' }}>
  <Paper roundness="full" height="100px" width="100px">Hola!</Paper>
</Story>
