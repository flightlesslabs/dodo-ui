<script lang="ts" module>
  import type { Snippet } from 'svelte';
  import type { HTMLLabelAttributes } from 'svelte/elements';

  /**
   * Public props for Label
   */
  export interface LabelProps extends HTMLLabelAttributes {
    /** Custom CSS class names */
    class?: string;

    /** Slot content */
    children?: Snippet;

    /** Reference to the underlying root div element */
    ref?: HTMLLabelElement | null;
  }
</script>

<script lang="ts">
  let {
    class: className = '',
    children,
    ref = $bindable(null),
    ...restProps
  }: LabelProps = $props();

  /**
   * Computed class list
   */
  const classes = $derived(['dodo-ui-Label', className].filter(Boolean));
</script>

<label {...restProps} class={classes.join(' ')} bind:this={ref}>
  {@render children?.()}
</label>
