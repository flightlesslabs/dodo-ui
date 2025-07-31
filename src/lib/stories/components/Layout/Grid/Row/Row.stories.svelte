<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Row from './Row.svelte';
  import type { StoryBookArgTypes } from '$lib/storybook-types.js';
  import Column from '../Column/Column.svelte';

  export const storyGridRowArgTypes: StoryBookArgTypes = {};

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    component: Row,
    tags: ['autodocs'],
    argTypes: storyGridRowArgTypes,
  });
</script>

<!-- Default Grid Row -->
<Story name="Default" asChild>
  <Row>
    <Column>Hola!</Column>
    <Column>Hola!</Column>
  </Row>
</Story>
