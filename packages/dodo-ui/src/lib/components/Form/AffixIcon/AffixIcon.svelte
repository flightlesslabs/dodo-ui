<script lang="ts" module>
  import {
    componentColorDefaultOptions,
    componentColorOptions,
    type ComponentColor,
    type ComponentColorDefault,
    type ComponentRoundness,
    type ComponentSize,
    type ComponentVariant,
  } from '@flightlesslabs/dodo-core-attributes';
  import type { Snippet } from 'svelte';

  export type AffixIconColor = ComponentColor | ComponentColorDefault;

  export const AffixIconColorOptions = [
    ...componentColorOptions,
    ...componentColorDefaultOptions,
  ] as const satisfies readonly AffixIconColor[];

  /**
   * Public props for AffixIcon
   */
  export type AffixIconProps = {
    /** Custom CSS class names */
    class?: string;

    /**
     * Reference to the underlying <span> element.
     * Useful for DOM access (e.g. measuring, focusing, etc.).
     */
    ref?: HTMLSpanElement | null;

    /** Slot content */
    children?: Snippet;

    /** Color theme token */
    color?: AffixIconColor;

    /** Visual size token */
    size?: ComponentSize;

    /** Border radius token (0–3, "pill", "full") */
    roundness?: ComponentRoundness;

    /** Add a border around the UtilityButton */
    outline?: boolean;

    /** Compact spacing, typically for icon-only UtilityButtons */
    compact?: boolean;

    /** Visual variant (e.g. solid, text) */
    variant?: ComponentVariant;
  };
</script>

<script lang="ts">
  let {
    class: className = '',
    children,
    color = 'default',
    ref = $bindable(null),
    size = 'normal',
    roundness = 1,
    outline = false,
    compact = false,
    variant = 'text',
  }: AffixIconProps = $props();

  /**
   * Computed class list
   */
  const classes = $derived(
    [
      'dodo-ui-AffixIcon',
      `size--${size}`,
      `color--${color}`,
      `roundness--${roundness}`,
      `variant--${variant}`,
      outline && 'outline',
      compact && 'compact',
      className,
    ].filter(Boolean),
  );
</script>

<span bind:this={ref} class={classes.join(' ')}>
  {@render children?.()}
</span>
