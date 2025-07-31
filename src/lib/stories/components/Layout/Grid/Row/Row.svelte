<script lang="ts" module>
  import { type Snippet } from 'svelte';

  export interface GridRowProps {
    /** GridRow contents goes here */
    children?: Snippet;
    /** GridRow ref */
    ref?: HTMLDivElement;
    /** Custom css class */
    class?: string;
  }
</script>

<script lang="ts">
  let {
    children,
    class: className = '',
    ref = $bindable<HTMLDivElement>(),
  }: GridRowProps = $props();
</script>

<div class={['dodo-ui-GridRow', className].join(' ')} bind:this={ref}>
  {#if children}
    {@render children()}
  {/if}
</div>

<style lang="scss">
  .dodo-ui-GridRow {
    grid-column: span 12;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: calc(var(--GridSpacing) * var(--dodo-ui-space));
    grid-auto-flow: row;
  }
</style>
