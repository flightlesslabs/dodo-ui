<script lang="ts" module>
  import type { ComponentSize } from '$lib/attributes/size.js';
  import type { Snippet } from 'svelte';

  /**
   * InputAffix props.
   *
   * Internal-only component used by InputEnclosure to render
   * leading or trailing content (e.g. icons, buttons, prefixes/suffixes).
   *
   * This component is not part of the public API.
   */
  export interface InputAffixProps {
    /** Content rendered inside the affix (icon, button, text, etc.) */
    children?: Snippet;

    /** Visual size token (e.g. small, normal, large) */
    size?: ComponentSize;

    /**
     * Placement of the affix relative to the input.
     *
     * - "before": renders before the input control
     * - "after": renders after the input control
     */
    placement: 'before' | 'after';
  }
</script>

<script lang="ts">
  let { children, size = 'normal', placement }: InputAffixProps = $props();

  /**
   * Computed class list for the InputAffix.
   */
  const classes = $derived(
    ['dodo-ui-InputAffix', `size--${size}`, `placement--${placement}`].filter(Boolean),
  );
</script>

<span class={classes.join(' ')}>
  {@render children?.()}
</span>

<style lang="scss">
  .dodo-ui-InputAffix {
    display: inline-flex;
    height: 100%;
    align-items: center;
    position: relative;
  }
</style>
