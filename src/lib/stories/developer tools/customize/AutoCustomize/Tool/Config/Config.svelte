<script lang="ts">
  import Button from '$lib/stories/components/Form/Button/Button.svelte';
  import { useAutoCustomizeConfigStore } from '../stores/config.svelte.js';
  import ColorTool from './ColorTool/ColorTool.svelte';
  import Export from './Export.svelte';
  import ValueSilder from './ValueSilder/ValueSilder.svelte';
</script>

<div class="Config">
  <ColorTool
    label="Primary Color:"
    onclick={(color) => useAutoCustomizeConfigStore.updateDataColor({ primary: color })}
    selectedColor={useAutoCustomizeConfigStore.data.colors?.primary}
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
    onclick={(color) => useAutoCustomizeConfigStore.updateDataColor({ secondary: color })}
    selectedColor={useAutoCustomizeConfigStore.data.colors?.secondary}
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
    onclick={(color) => useAutoCustomizeConfigStore.updateDataColor({ neutral: color })}
    selectedColor={useAutoCustomizeConfigStore.data.colors?.neutral}
    colors={['gray', 'slate', 'zinc', 'neutral', 'stone']}
  />

  <ColorTool
    label="Safe Color:"
    onclick={(color) => useAutoCustomizeConfigStore.updateDataColor({ safe: color })}
    selectedColor={useAutoCustomizeConfigStore.data.colors?.safe}
    colors={['emerald', 'lime', 'green', 'teal']}
  />

  <ColorTool
    label="Warning Color:"
    onclick={(color) => useAutoCustomizeConfigStore.updateDataColor({ warning: color })}
    selectedColor={useAutoCustomizeConfigStore.data.colors?.warning}
    colors={['amber', 'red', 'rose', 'orange', 'yellow']}
  />

  <ColorTool
    label="Danger Color:"
    onclick={(color) => useAutoCustomizeConfigStore.updateDataColor({ danger: color })}
    selectedColor={useAutoCustomizeConfigStore.data.colors?.danger}
    colors={['red', 'orange', 'amber', 'yellow', 'pink', 'rose']}
  />

  <ValueSilder
    label="Roundness:"
    value={useAutoCustomizeConfigStore.data.components?.roundness || 0}
    min={-4}
    max={7}
    oninput={(value) => useAutoCustomizeConfigStore.updateDataComponents({ roundness: value })}
  />

  <div class="Reset">
    <Button onclick={() => useAutoCustomizeConfigStore.reset()} variant="text" color="danger">
      Reset
    </Button>
  </div>

  <div class="Export">
    <Export />
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

    .Export {
      margin-top: calc(var(--dodo-ui-space) * 4);
    }
  }
</style>
