<script lang="ts">
  import FormControl from '$lib/stories/components/Form/FormControl/FormControl.svelte';
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
  <FormControl {label}>
    {#each colors as color (color)}
      <ColorButton {color} {onclick} {selectedColor} />
    {/each}
  </FormControl>
</div>

<style lang="scss">
  .ColorTool {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: calc(var(--dodo-ui-space) * 2.5);
    margin-left: -4px;
    margin-right: -4px;
  }
</style>
