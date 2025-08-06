<script lang="ts">
  import { colorPaletteBase } from '$lib/stories/developer tools/philosophy/Colors/utils/color.js';
  import ColorButton from './ColorButton.svelte';

  interface ColorToolProps {
    label?: string;
    colors?: string[];
    selectedColor?: string;
    onclick?: (color: string) => void;
  }

  const { colors = colorPaletteBase, selectedColor, onclick, label }: ColorToolProps = $props();
</script>

<div class="ColorTool">
  <p>{label}</p>
  {#each colors as color (color)}
    <ColorButton {color} {onclick} {selectedColor} />
  {/each}
</div>

<style lang="scss">
  .ColorTool {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: calc(var(--dodo-ui-space) * 2);
    margin-left: -4px;
    margin-right: -4px;

    p {
      margin-top: 0;
      width: 100%;
      font-weight: 400;
      margin-bottom: 8px;

      &:empty {
        display: none;
      }
    }
  }
</style>
