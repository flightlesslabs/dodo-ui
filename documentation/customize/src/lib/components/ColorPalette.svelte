<script lang="ts" module>
  export type ColorPaletteProps = {
    color: string;
  };
</script>

<script lang="ts">
  let { color }: ColorPaletteProps = $props();
</script>

<span class="ColorPalette" style={`--ColorPalette-color: ${color};`}></span>

<style lang="scss">
  .ColorPalette {
    width: 22px;
    height: 18px;
    background-color: var(--ColorPalette-color);
    border-radius: 4px;
    display: inline-flex;
    margin-right: 8px;
  }
</style>
