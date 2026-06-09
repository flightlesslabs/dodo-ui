<script>
  import { Card } from '@flightlesslabs/dodo-ui';
  import DodoLogo from './DodoLogo.svelte';
  import { Accordion } from '@flightlesslabs/dodo-ui-bits';
  import PageTitle from '../PageTitle.svelte';
  import Colors from './Colors.svelte';
  import Spacing from './Spacing.svelte';
  import Controls from './Controls/Controls.svelte';
</script>

<aside class="ControlBox">
  <Card class="ControlBoxCard" shadow={2}>
    <div class="top">
      <header>
        <DodoLogo />
        <div class="title">
          <PageTitle>Customize</PageTitle>
        </div>
      </header>
      <Accordion type="multiple">
        <Colors />
        <Spacing />
      </Accordion>
    </div>

    <Controls />
  </Card>
</aside>

<style lang="scss">
  .ControlBox {
    width: 100%;
    margin-bottom: 16px;

    @media (min-width: 64rem) {
      width: 40%;
      max-width: 400px;
      height: 100%;
      margin-right: 24px;
      margin-bottom: 0;
    }

    :global(.ControlBoxCard) {
      padding: 16px;
      height: 100%;
      overflow-y: auto;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  }

  header {
    margin-bottom: 16px;
    display: flex;
    align-items: center;

    :global(.ResetButton) {
      font-size: 1.3rem;
    }

    .title {
      margin-left: 16px;
    }
  }
</style>
