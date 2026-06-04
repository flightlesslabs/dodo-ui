<script lang="ts">
  let { children } = $props();
</script>

<h2>{@render children()}</h2>

<style lang="scss">
  h2 {
    margin: 0;
    font-size: 1.2rem;
    font-weight: 500;
  }
</style>
