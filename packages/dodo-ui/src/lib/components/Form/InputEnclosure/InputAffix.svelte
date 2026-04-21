<script lang="ts" module>
  import type {
    ComponentSize,
    ComponentAffixPlacement,
  } from '@flightlesslabs/dodo-core-attributes';
  import type { Snippet } from 'svelte';

  export type InpuAffixSpacing = 'default' | 'tight';

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
    placement: ComponentAffixPlacement;

    /**
     * Controls the spacing between the affix content
     * and the input field.
     */
    affixSpacing?: InpuAffixSpacing;
  }
</script>

<script lang="ts">
  let {
    children,
    size = 'normal',
    placement,
    affixSpacing = 'default',
  }: InputAffixProps = $props();

  /**
   * Computed class list for the InputAffix.
   */
  const classes = $derived(
    [
      'dodo-ui-InputAffix',
      `size--${size}`,
      `placement--${placement}`,
      `affixSpacing--${affixSpacing}`,
    ].filter(Boolean),
  );
</script>

<span class={classes.join(' ')}>
  {@render children?.()}
</span>
