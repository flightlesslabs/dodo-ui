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
    colors={[
      'violet',
      'red',
      'orange',
      'amber',
      'yellow',
      'lime',
      'green',
      'emerald',
      'teal',
      'cyan',
      'blue',
      'indigo',
      'purple',
      'fuchsia',
      'pink',
      'rose',
    ]}
  />

  <ColorTool
    label="Secondary Color:"
    onclick={(color) => useAutoCustomizeConfigStore.updateData({ secondaryColor: color })}
    selectedColor={useAutoCustomizeConfigStore.data.secondaryColor}
    colors={[
      'blue',
      'red',
      'orange',
      'amber',
      'yellow',
      'lime',
      'green',
      'emerald',
      'teal',
      'cyan',
      'indigo',
      'violet',
      'purple',
      'fuchsia',
      'pink',
      'rose',
    ]}
  />

  <ColorTool
    label="Neutral Color:"
    onclick={(color) => useAutoCustomizeConfigStore.updateData({ neutralColor: color })}
    selectedColor={useAutoCustomizeConfigStore.data.neutralColor}
    colors={['gray', 'slate', 'zinc', 'neutral', 'stone']}
  />

  <ColorTool
    label="Safe Color:"
    onclick={(color) => useAutoCustomizeConfigStore.updateData({ safeColor: color })}
    selectedColor={useAutoCustomizeConfigStore.data.safeColor}
    colors={['emerald', 'lime', 'green', 'teal']}
  />

  <ColorTool
    label="Warning Color:"
    onclick={(color) => useAutoCustomizeConfigStore.updateData({ warningColor: color })}
    selectedColor={useAutoCustomizeConfigStore.data.warningColor}
    colors={['amber', 'red', 'rose', 'orange', 'yellow']}
  />

  <ColorTool
    label="Danger Color:"
    onclick={(color) => useAutoCustomizeConfigStore.updateData({ dangerColor: color })}
    selectedColor={useAutoCustomizeConfigStore.data.dangerColor}
    colors={['red', 'orange', 'amber', 'yellow', 'pink', 'rose']}
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
