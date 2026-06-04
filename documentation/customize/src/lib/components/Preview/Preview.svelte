<script>
  import { Card } from '@flightlesslabs/dodo-ui';
  import PageTitle from '../PageTitle.svelte';
</script>

<div class="Preview">
  <Card class="PreviewCard" shadow={2}><PageTitle>Preview</PageTitle></Card>
</div>

<style lang="scss">
  .Preview {
    width: 100%;
    height: 600px;

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
