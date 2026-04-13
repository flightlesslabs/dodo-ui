<script lang="ts" module>
  import { componentColorOptions, type ComponentColor } from '$lib/attributes/color.js';
  import type { Snippet } from 'svelte';

  export const TEXT_COLOR = {
    all: ['default'],
  } as const;

  export type TextColor = ComponentColor | (typeof TEXT_COLOR.all)[number];

  // Flat options (for Storybook, selects, etc.)
  export const textColorOptions = [
    ...componentColorOptions,
    ...TEXT_COLOR.all,
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
