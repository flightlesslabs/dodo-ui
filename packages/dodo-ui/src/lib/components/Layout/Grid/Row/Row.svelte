<script lang="ts" module>
  import type { Snippet } from 'svelte';

  export interface GridRowProps {
    /** Custom CSS class names */
    class?: string;

    /** GridRow contents go here*/
    children?: Snippet;
  }
</script>

<script lang="ts">
  let { class: className = '', children }: GridRowProps = $props();

  const classes = $derived(['dodo-ui-Grid-Row', className].filter(Boolean));
</script>

<div class={classes.join(' ')}>
  {@render children?.()}
</div>
