<script lang="ts" module>
  import type { Snippet } from 'svelte';

  export interface GridProps {
    /** Custom CSS class names */
    class?: string;

    /** Grid contents go here*/
    children?: Snippet;

    /** Grid spacing, affects Coulumns */
    gap?: number;
  }
</script>

<script lang="ts">
  let { class: className = '', gap = 1, children }: GridProps = $props();

  function normalizeGap(value: number) {
    return value === 0 ? 0 : value / 2;
  }

  const gapHalf = $derived(normalizeGap(gap));

  const classes = $derived(['dodo-ui-Grid', className].filter(Boolean));

  const inlineStyles = $derived([`--Grid-gap: ${gapHalf}`].filter(Boolean));
</script>

<div class={classes.join(' ')} style={inlineStyles.join(';')}>
  {@render children?.()}
</div>
