<script lang="ts" module>
  import { type Snippet } from 'svelte';

  export interface GridProps {
    /** Grid contents goes here */
    children?: Snippet;
    /** Grid ref */
    ref?: HTMLDivElement;
    /** Custom css class */
    class?: string;
    /** Grid spacing, affects Coulumns */
    spacing?: number;
    /** Optional Row spacing, default is 0 */
    rowSpacing?: number;
  }
</script>

<script lang="ts">
  let {
    children,
    class: className = '',
    ref = $bindable<HTMLDivElement>(),
    spacing = 1,
    rowSpacing,
  }: GridProps = $props();

  const rowSpacingModified = rowSpacing || rowSpacing === 0 ? rowSpacing : spacing;
</script>

<div
  class={['dodo-ui-Grid', className].join(' ')}
  bind:this={ref}
  style={`--GridSpacing: ${spacing}; --GridRowSpacing: ${rowSpacingModified};`}
>
  {#if children}
    {@render children()}
  {/if}
</div>

<style lang="scss">
  .dodo-ui-Grid {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: calc(var(--GridRowSpacing) * var(--dodo-ui-space));
    grid-auto-flow: row;
  }
</style>
