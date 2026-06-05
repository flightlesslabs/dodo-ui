<script>
  import { Card } from '@flightlesslabs/dodo-ui';
  import DodoLogo from './DodoLogo.svelte';
  import { Accordion } from '@flightlesslabs/dodo-ui-bits';
  import PageTitle from '../PageTitle.svelte';
  import Colors from './Colors.svelte';
  import Spacing from './Spacing.svelte';
</script>

<aside class="ControlBox">
  <Card class="ControlBoxCard" shadow={2}>
    <header>
      <DodoLogo />
    </header>
    <div class="title">
      <PageTitle>Customize</PageTitle>
    </div>
    <Accordion type="multiple">
      <Colors />
      <Spacing />
    </Accordion>
  </Card>
</aside>

<style lang="scss">
  .ControlBox {
    width: 100%;
    max-height: 600px;
    margin-bottom: 16px;

    @media (min-width: 64rem) {
      width: 40%;
      max-width: 400px;
      height: 100%;
      margin-right: 24px;
      margin-bottom: 0;
      max-height: initial;
    }

    :global(.ControlBoxCard) {
      padding: 16px;
      height: 100%;
      overflow-y: auto;
    }
  }

  header {
    margin-bottom: 16px;
  }

  .title {
    margin-bottom: 36px;
  }
</style>
