<script lang="ts">
  import { colorPaletteValues } from '../utils/color.js';
  import Swatch from './Swatch.svelte';

  interface SwatchesProps {
    colorPalette: string;
    prefix?: string;
    isColorPaletteValues?: boolean;
  }

  const { colorPalette, prefix, isColorPaletteValues = false }: SwatchesProps = $props();
</script>

<ul class="Swatches">
  <b>{colorPalette}</b>

  {#if isColorPaletteValues}
    {#each colorPaletteValues as colorPaletteValue (colorPaletteValue)}
      <li>
        <Swatch {colorPalette} {colorPaletteValue} {prefix} />
      </li>
    {/each}
  {:else}
    <li>
      <Swatch {colorPalette} {prefix} />
    </li>
  {/if}
</ul>

<style lang="scss">
  .Swatches {
    color: var(--dodo-color-default-900);
    margin: 0;
    padding: 0;
    width: 100px;
    margin: 16px 0;

    b {
      text-transform: capitalize;
      margin-bottom: 16px;
      display: block;
      font-weight: 500;
    }

    li {
      display: flex;
      align-items: center;
      margin-bottom: 10px;
    }
  }
</style>
