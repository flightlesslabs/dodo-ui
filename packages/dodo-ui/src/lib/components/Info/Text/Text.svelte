<script lang="ts" module>
  import {
    componentColorDefaultOptions,
    componentColorOptions,
    type ComponentColor,
    type ComponentColorDefault,
  } from '@flightlesslabs/dodo-core-attributes';
  import type { Snippet } from 'svelte';

  export type TextColor = ComponentColor | ComponentColorDefault;

  // Flat options (for Storybook, selects, etc.)
  export const textColorOptions = [
    ...componentColorOptions,
    ...componentColorDefaultOptions,
  ] as const satisfies readonly TextColor[];

  /**
   * Public props for Text
   */
  export type TextProps = {
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
    color?: TextColor;
  };
</script>

<script lang="ts">
  let {
    class: className = '',
    children,
    color = 'default',
    ref = $bindable(null),
  }: TextProps = $props();

  /**
   * Computed class list
   */
  const classes = $derived(['dodo-ui-Text', `color--${color}`, className].filter(Boolean));
</script>

<span bind:this={ref} class={classes.join(' ')}>
  {@render children?.()}
</span>
