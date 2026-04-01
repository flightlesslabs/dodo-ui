<script lang="ts">
  let { Component, props = {}, children } = $props();
</script>

<Component {...props}>
  {#if typeof children === 'string'}
    {@html children}
  {:else if children}
    {@render children()}
  {/if}
</Component>
