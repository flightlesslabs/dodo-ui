<script>
  import { useColorStore } from '$lib/store/colors.svelte';
  import { useResetStore } from '$lib/store/reset.svelte';
  import { useRoundnessStore } from '$lib/store/roundness.svelte';
  import { useSizeStore } from '$lib/store/size.svelte';
  import { useSpaceStore } from '$lib/store/space.svelte';
  import { Button } from '@flightlesslabs/dodo-ui';

  let anyFilterActive = $derived(
    useRoundnessStore.isActive ||
      useSizeStore.isActive ||
      useSpaceStore.isActive ||
      useColorStore.isActive,
  );
</script>

<div class="ResetButton">
  <Button
    variant="text"
    onclick={() => useResetStore.reset()}
    aria-label="Reset"
    disabled={!anyFilterActive}
  >
    Reset
  </Button>
</div>

<style lang="scss">
  .ResetButton {
    margin-top: 24px;
  }
</style>
