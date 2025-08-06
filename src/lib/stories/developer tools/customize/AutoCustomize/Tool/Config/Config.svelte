<script lang="ts">
  import Button from '$lib/stories/components/Form/Button/Button.svelte';
  import { useAutoCustomizeConfigStore } from '../stores/config.svelte.js';
  import ColorTool from './ColorTool/ColorTool.svelte';
</script>

<div class="Config">
  <ColorTool
    label="Primary Color:"
    onclick={(color) => useAutoCustomizeConfigStore.updateData({ primaryColor: color })}
    selectedColor={useAutoCustomizeConfigStore.data.primaryColor}
  />

  <div class="Reset">
    <Button onclick={() => useAutoCustomizeConfigStore.reset()}>Reset</Button>
  </div>
</div>

<style lang="scss">
  @use '../../../../../../styles/scss' as *;

  .Config {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: calc(var(--dodo-ui-space) * 2);

    @media (min-width: $breakpoints-lg) {
      max-width: 300px;
      height: calc(100vh - 130px);
      overflow: auto;
    }
  }
</style>
