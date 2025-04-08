<script lang="ts">
  interface SwatchProps {
    colorPalette: string;
    colorPaletteValue?: string;
    prefix?: string;
  }

  const { colorPalette, colorPaletteValue, prefix = '--dodo-color-' }: SwatchProps = $props();
</script>

<div class="Swatch">
  {#if colorPaletteValue}
    <div
      class="color"
      style={`background-color: var(${prefix}${colorPalette}-${colorPaletteValue});`}
    ></div>
  {:else}
    <div class="color" style={`background-color: var(${prefix}${colorPalette});`}></div>
  {/if}
  <div class="colorPaletteValue">{colorPaletteValue}</div>
</div>

<style lang="scss">
  .Swatch {
    color: var(--dodo-color-default-900);
    display: flex;
    align-items: center;

    .color {
      display: flex;
      width: 30px;
      height: 30px;
      margin-right: 8px;
      border-radius: 4px;
      border: 1px solid oklab(0 0 0 / 0.07);
    }
  }
</style>
