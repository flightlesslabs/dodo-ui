<script lang="ts" module>
  import type { Snippet } from 'svelte';

  export type GroupProps = {
    /** Group contents */
    children?: Snippet;

    /** Border radius token (0–3, "pill", "full") */
    roundness?: ComponentRoundness;

    /** Custom CSS class names */
    class?: string;

    /**
     * Reference to the underlying <div> element.
     * Useful for DOM access (e.g. measuring, focusing, etc.).
     */
    ref?: HTMLDivElement | null;

    /** Stretch container to full container width */
    fullWidth?: boolean;
  };
</script>

<script lang="ts">
  import type { ComponentRoundness } from '@flightlesslabs/dodo-core-attributes';

  let {
    roundness = 1,
    class: className = '',
    ref = $bindable(null),
    children,
    fullWidth = false,
  }: GroupProps = $props();

  const classes = $derived(
    ['dodo-ui-Group', `roundness--${roundness}`, fullWidth && 'fullWidth', className].filter(
      Boolean,
    ),
  );
</script>

<div bind:this={ref} class={classes.join(' ')}>
  {@render children?.()}
</div>
