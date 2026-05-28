<script lang="ts">
  import Preview from './Preview/Preview.svelte';
  import Tools from './Tools/Tools.svelte';
</script>

<div class="CustomizeTool">
  <Tools />
  <Preview />
</div>

<style lang="scss">
  .CustomizeTool {
    height: 100%;

    @media (min-width: 800px) {
      display: flex;
    }
  }
</style>
