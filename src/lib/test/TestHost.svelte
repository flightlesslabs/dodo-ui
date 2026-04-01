<script lang="ts">
  import type { Snippet } from 'svelte';

  type Props = {
    Component: any;
    props?: Record<string, any>;
    children?: Snippet | string; // ✅ make optional
  };

  let { Component, props = {}, children }: Props = $props();
</script>

<Component {...props}>
  {#if typeof children === 'string'}
    {@html children}
  {:else if children}
    {@render children()}
  {/if}
</Component>
