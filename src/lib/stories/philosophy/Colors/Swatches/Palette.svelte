<script lang="ts">
  interface PaletteProps {
    backgroundColor: string;
  }

  const { backgroundColor }: PaletteProps = $props();
</script>

<span class="Palette" style={`background-color: ${backgroundColor};`}></span>

<style lang="scss">
  .Palette {
    display: flex;
    width: 30px;
    height: 30px;
    margin-right: 8px;
    border-radius: 4px;
    border: 1px solid;
    border-color: color-mix(in oklab, var(--dodo-color-default-800) 20%, transparent);
  }
</style>
