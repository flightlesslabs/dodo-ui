<script>
  import { Button, Card } from '@flightlesslabs/dodo-ui';
  import DodoLogo from './DodoLogo.svelte';
  import { Accordion } from '@flightlesslabs/dodo-ui-bits';
  import PageTitle from '../PageTitle.svelte';
  import Colors from './Colors.svelte';
  import Spacing from './Spacing.svelte';
  import Icon from '@iconify/svelte';
  import { useResetStore } from '$lib/store/reset.svelte';
  import { useSpaceStore } from '$lib/store/space.svelte';
  import { useSizeStore } from '$lib/store/size.svelte';
  import { useRoundnessStore } from '$lib/store/roundness.svelte';
  import { useColorStore } from '$lib/store/colors.svelte';

  let anyFilterActive = $derived(
    useRoundnessStore.isActive ||
      useSizeStore.isActive ||
      useSpaceStore.isActive ||
      useColorStore.isActive,
  );
</script>

<aside class="ControlBox">
  <Card class="ControlBoxCard" shadow={2}>
    <header>
      <DodoLogo />
      <Button
        compact
        roundness="full"
        variant="text"
        onclick={() => useResetStore.reset()}
        class="ResetButton"
        aria-label="Reset"
        disabled={!anyFilterActive}
      >
        <Icon icon="material-symbols:refresh-rounded" />
      </Button>
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
    display: flex;
    align-items: center;
    justify-content: space-between;

    :global(.ResetButton) {
      font-size: 1.3rem;
    }
  }

  .title {
    margin-bottom: 36px;
  }
</style>
