<script lang="ts" module>
  import type { ComponentColor } from '@flightlesslabs/dodo-core-attributes';

  export type ColorPalettePickProps = {
    componentColor: ComponentColor;
  };
</script>

<script lang="ts">
  import ColorPalette from './ColorPalette.svelte';

  let { componentColor }: ColorPalettePickProps = $props();
  let color = $derived(`var(--dodo-color-base-${componentColor}-500)`);
</script>

<ColorPalette {color} />
