<script lang="ts">
  import { Card, Column, Grid, Row } from '@flightlesslabs/dodo-ui';
  import Controls from './Controls.svelte';
  import Colors from './Colors.svelte';
  import Spacing from './Spacing.svelte';
</script>

<div class="Tools">
  <Card class="Card">
    <Grid gap={4}>
      <Row>
        <Column><h2>Customize styles</h2></Column>
      </Row>
      <Colors />
      <Spacing />

      <Column>
        <Controls />
      </Column>
    </Grid>
  </Card>
</div>

<style lang="scss">
  .Tools {
    padding-bottom: 16px;

    @media (min-width: 800px) {
      height: 100%;
      width: 50%;
      max-width: 600px;
      padding-right: 24px;
      padding-bottom: 0;
    }

    h2 {
      margin: 0;
      font-size: 1.2rem;
      font-weight: 500;
    }

    :global(.Card) {
      padding: 16px;
      height: 100%;
      overflow-y: auto;
      overflow-x: hidden;
    }

    :global(h3) {
      margin: 0;
      font-size: 1rem;
      font-weight: 600;
    }
  }
</style>
