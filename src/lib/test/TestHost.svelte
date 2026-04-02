<script lang="ts">
  import type { Snippet } from 'svelte';

  type Props = {
    /* eslint-disable @typescript-eslint/no-explicit-any */
    Component: any;
    /* eslint-disable @typescript-eslint/no-explicit-any */
    props?: Record<string, any>;
    children?: Snippet | string; // ✅ make optional
  };

  let { Component, props = {}, children }: Props = $props();
</script>

<Component {...props}>
  {#if typeof children === 'string'}
    <!-- eslint-disable-next-line svelte/no-at-html-tags -->
    {@html children}
  {:else if children}
    {@render children()}
  {/if}
</Component>
