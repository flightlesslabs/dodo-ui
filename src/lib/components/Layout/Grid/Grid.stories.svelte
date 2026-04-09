<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Grid from './Grid.svelte';
  import type { GridProps } from './Grid.svelte';
  import type { ArgTypes } from 'storybook/internal/csf';
  import Column from './Column/Column.svelte';
  import Card from '../Card/Card.svelte';
  import Row from './Row/Row.svelte';

  // ------------------------------
  // Storybook ArgTypes
  // ------------------------------
  export const storyGridArgTypes: Partial<ArgTypes<GridProps>> = {
    // ------------------------------
    // Core
    // ------------------------------
    children: { table: { category: 'API', subcategory: 'Base' } },
    class: { table: { category: 'API', subcategory: 'Base' } },
    gap: { table: { category: 'API', subcategory: 'Base', defaultValue: { summary: '1' } } },
  };

  // ------------------------------
  // Storybook Meta
  // ------------------------------
  const { Story } = defineMeta({
    component: Grid,
    tags: ['autodocs'],
    argTypes: storyGridArgTypes,
  });
</script>

<!-- ------------------------------ -->
<!-- Stories -->
<!-- ------------------------------ -->

<!-- Basic 12 column grid -->
<Story name="Default">
  <Column sm={4}>Hello there</Column>
  <Column sm={4}>Hello there</Column>
  <Column sm={4}>Hello there</Column>
  <Column sm={4}>Hello there</Column>
  <Column sm={4}>Hello there</Column>
</Story>

<Story name="Example">
  <Column sm={4}>
    <Card color="primary">
      <p>Hello there</p>
    </Card>
  </Column>
  <Column sm={4}>
    <Card color="primary">
      <p>Hello there</p>
    </Card>
  </Column>
  <Column sm={4}>
    <Card color="primary">
      <p>Hello there</p>
    </Card>
  </Column>
  <Column sm={4}>
    <Card color="primary">
      <p>Hello there</p>
    </Card>
  </Column>
</Story>

<Story name="Grid Row">
  <Row>
    <Column sm={6} md={4} lg={3}>
      <Card color="primary">
        <p>Hello there</p>
      </Card>
    </Column>
    <Column sm={6} md={4} lg={3}>
      <Card color="primary">
        <p>Hello there</p>
      </Card>
    </Column>
    <Column sm={6} md={4} lg={3}>
      <Card color="primary">
        <p>Hello there</p>
      </Card>
    </Column>
  </Row>
  <Row>
    <Column sm={6} md={4} lg={3}>
      <Card color="primary">
        <p>Hello there</p>
      </Card>
    </Column>
    <Column sm={6} md={4} lg={3}>
      <Card color="primary">
        <p>Hello there</p>
      </Card>
    </Column>
    <Column sm={6} md={4} lg={3}>
      <Card color="primary">
        <p>Hello there</p>
      </Card>
    </Column>
  </Row>
</Story>

<Story name="Gap" args={{ gap: 2 }}>
  <Column sm={4}>
    <Card color="primary">
      <p>Hello there</p>
    </Card>
  </Column>
  <Column sm={4}>
    <Card color="primary">
      <p>Hello there</p>
    </Card>
  </Column>
  <Column sm={4}>
    <Card color="primary">
      <p>Hello there</p>
    </Card>
  </Column>
  <Column sm={4}>
    <Card color="primary">
      <p>Hello there</p>
    </Card>
  </Column>
</Story>

<Story name="Responsive">
  <Column sm={6} md={4} lg={3}>
    <Card color="primary">
      <p>Hello there</p>
    </Card>
  </Column>
  <Column sm={6} md={4} lg={3}>
    <Card color="primary">
      <p>Hello there</p>
    </Card>
  </Column>
  <Column sm={6} md={4} lg={3}>
    <Card color="primary">
      <p>Hello there</p>
    </Card>
  </Column>
  <Column sm={6} md={4} lg={3}>
    <Card color="primary">
      <p>Hello there</p>
    </Card>
  </Column>
  <Column sm={6} md={4} lg={3}>
    <Card color="primary">
      <p>Hello there</p>
    </Card>
  </Column>
  <Column sm={6} md={4} lg={3}>
    <Card color="primary">
      <p>Hello there</p>
    </Card>
  </Column>
</Story>

<Story name="Flex">
  <Column md="flex">
    <Card color="primary">
      <p>Hello there</p>
    </Card>
  </Column>
  <Column md={2}>
    <Card color="primary">
      <p>Hello there</p>
    </Card>
  </Column>
  <Column md={2}>
    <Card color="primary">
      <p>Hello there</p>
    </Card>
  </Column>
</Story>
