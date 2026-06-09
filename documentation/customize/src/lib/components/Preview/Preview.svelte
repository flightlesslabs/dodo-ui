<script>
  import { Card, Column, Grid } from '@flightlesslabs/dodo-ui';
  import PageTitle from '../PageTitle.svelte';
  import Playground from './PlayGround/PlayGround.svelte';
</script>

<div class="Preview">
  <Card class="PreviewCard" shadow={2}>
    <Grid gap={2}>
      <Column>
        <PageTitle>Preview</PageTitle>
      </Column>

      <Column>
        <Playground />
      </Column>
    </Grid>
  </Card>
</div>

<style lang="scss">
  .Preview {
    width: 100%;

    @media (min-width: 64rem) {
      flex: 1;
      height: 100%;
    }

    :global(.PreviewCard) {
      padding: 16px;
      height: 100%;
      overflow-y: auto;
    }
  }
</style>
