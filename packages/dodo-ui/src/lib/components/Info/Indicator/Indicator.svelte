<script lang="ts" module>
  import { type ComponentColor, type ComponentSize } from '@flightlesslabs/dodo-core-attributes';

  /**
   * Public props for Indicator
   */
  export type IndicatorProps = {
    /** Custom CSS class names */
    class?: string;

    /**
     * Reference to the underlying <span> element.
     * Useful for DOM access (e.g. measuring, focusing, etc.).
     */
    ref?: HTMLSpanElement | null;

    /** Color theme token */
    color?: ComponentColor;

    /** Visual size token */
    size?: ComponentSize;
  };
</script>

<script lang="ts">
  let {
    class: className = '',
    color = 'neutral',
    ref = $bindable(null),
    size = 'normal',
  }: IndicatorProps = $props();

  /**
   * Computed class list
   */
  const classes = $derived(
    ['dodo-ui-Indicator', `color--${color}`, `size--${size}`, className].filter(Boolean),
  );
</script>

<span bind:this={ref} class={classes.join(' ')}></span>
