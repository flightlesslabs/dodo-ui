<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Grid from './Grid.svelte';
  import type { StoryBookArgTypes } from '$lib/storybook-types.js';
  import Row from './Row/Row.svelte';
  import Column from './Column/Column.svelte';
  import Paper from '../Paper/Paper.svelte';

  export const storyGridArgTypes: StoryBookArgTypes = {};

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    component: Grid,
    tags: ['autodocs'],
    argTypes: storyGridArgTypes,
  });
</script>

<!-- Default Grid -->
<Story name="Default" asChild>
  <Grid>
    <Column>Hola!</Column>
    <Column>Hola!</Column>
    <Column>Hola!</Column>
  </Grid>
</Story>

<Story name="Example Column" asChild>
  <Grid>
    <Column sm={10}>
      <Paper color="primary"><p>10</p></Paper>
    </Column>
    <Column sm={2}><Paper color="primary"><p>2</p></Paper></Column>
    <Column sm={4}><Paper color="primary"><p>4</p></Paper></Column>
  </Grid>
</Story>

<!-- the Row helps to furher separate Columns -->
<Story name="Example Row" asChild>
  <Grid>
    <Row>
      <Column sm={10}>
        <Paper color="primary"><p>10</p></Paper>
      </Column>
      <Column sm={2}><Paper color="primary"><p>2</p></Paper></Column>
      <Column sm={4}><Paper color="primary"><p>4</p></Paper></Column>
    </Row>
    <Row>
      <Column sm={10}>
        <Paper color="primary"><p>10</p></Paper>
      </Column>
      <Column sm={2}><Paper color="primary"><p>2</p></Paper></Column>
      <Column sm={4}><Paper color="primary"><p>4</p></Paper></Column>
    </Row>
  </Grid>
</Story>

<Story name="Nested" asChild>
  <Grid>
    <Column sm={6}>
      <Paper color="primary"><p>6</p></Paper>
    </Column>
    <Column sm={6}>
      <Grid>
        <Column sm={8}>
          <Paper color="safe"><p>8</p></Paper>
        </Column>
        <Column sm={4}>
          <Paper color="safe"><p>4</p></Paper>
        </Column>
        <Column sm={12}>
          <Paper color="safe"><p>12</p></Paper>
        </Column>
      </Grid>
    </Column>
  </Grid>
</Story>

<Story name="Spacing" asChild>
  <Grid spacing={2}>
    <Row>
      <Column sm={4}>
        <Paper color="primary"><p>4</p></Paper>
      </Column>
      <Column sm={4}><Paper color="primary"><p>4</p></Paper></Column>
      <Column sm={4}><Paper color="primary"><p>4</p></Paper></Column>
    </Row>
    <Row>
      <Column sm={4}>
        <Paper color="primary"><p>4</p></Paper>
      </Column>
      <Column><Paper color="primary"><p>12</p></Paper></Column>
    </Row>
    <Row>
      <Column sm={2}>
        <Paper color="primary"><p>2</p></Paper>
      </Column>
      <Column sm={3}>
        <Paper color="primary"><p>3</p></Paper>
      </Column>
      <Column sm={4}>
        <Paper color="primary"><p>4</p></Paper>
      </Column>
      <Column>
        <Paper color="primary"><p>12</p></Paper>
      </Column>
    </Row>
  </Grid>
</Story>

<Story name="RowSpacing" asChild>
  <Grid rowSpacing={4}>
    <Row>
      <Column sm={4}>
        <Paper color="primary"><p>4</p></Paper>
      </Column>
      <Column sm={4}><Paper color="primary"><p>4</p></Paper></Column>
      <Column sm={4}><Paper color="primary"><p>4</p></Paper></Column>
    </Row>
    <Row>
      <Column sm={4}>
        <Paper color="primary"><p>4</p></Paper>
      </Column>
      <Column><Paper color="primary"><p>12</p></Paper></Column>
    </Row>
    <Row>
      <Column sm={2}>
        <Paper color="primary"><p>2</p></Paper>
      </Column>
      <Column sm={3}>
        <Paper color="primary"><p>3</p></Paper>
      </Column>
      <Column sm={4}>
        <Paper color="primary"><p>4</p></Paper>
      </Column>
      <Column>
        <Paper color="primary"><p>12</p></Paper>
      </Column>
    </Row>
  </Grid>
</Story>
