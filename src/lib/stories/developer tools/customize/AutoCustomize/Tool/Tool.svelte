<script lang="ts">
  import Config from './Config/Config.svelte';
  import Preview from './Preview/Preview.svelte';
</script>

<div class="Tool">
  <Config />
  <Preview />
</div>

<style lang="scss">
  .Tool {
    display: flex;
    flex-wrap: wrap;
  }
</style>
