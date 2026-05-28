<script lang="ts">
  import { Card, Column, Grid } from '@flightlesslabs/dodo-ui';
  import { useCustomizeStore } from '../customize.svelte';
  import PreviewComponents from './PreviewComponents.svelte';
</script>

<div class="Preview">
  <Card class="Card">
    <Grid gap={2}>
      <Column>
        <h2>Preview</h2>
      </Column>
      <Column>
        <Card shadow={0} outline class="PreviewCard">
          <div style={useCustomizeStore.allMappings}>
            <PreviewComponents />
          </div>
        </Card>
      </Column>
    </Grid>
  </Card>
</div>

<style lang="scss">
  .Preview {
    flex: 1;

    @media (min-width: 800px) {
      height: 100%;
    }

    :global(.Card) {
      padding: 16px;
      height: 100%;
      overflow-y: auto;
      overflow-x: hidden;
    }

    :global(.PreviewCard) {
      padding: 8px;
    }

    h2 {
      margin: 0;
      font-size: 1.2rem;
      font-weight: 500;
    }
  }
</style>
