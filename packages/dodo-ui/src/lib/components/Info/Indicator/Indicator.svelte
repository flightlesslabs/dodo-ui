<script lang="ts" module>
  import { type ComponentColor } from '@flightlesslabs/dodo-core-attributes';
  import Icon from '@iconify/svelte';
  import type { Snippet } from 'svelte';

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

    /** font size for Indicator icon */
    'font-size'?: string;

    /**
     * custom IndicatorIcon.
     *
     * Use {#snippet customIndicatorIcon} in Svelte.
     */
    customIndicatorIcon?: Snippet;
  };
</script>

<script lang="ts">
  let {
    class: className = '',
    color = 'neutral',
    ref = $bindable(null),
    'font-size': fontSize,
    customIndicatorIcon,
  }: IndicatorProps = $props();

  /**
   * Computed class list
   */
  const classes = $derived(['dodo-ui-Indicator', `color--${color}`, className].filter(Boolean));

  const inlineStyles = $derived(
    [fontSize ? `--Indicator-font-size: ${fontSize}` : ''].filter(Boolean),
  );
</script>

<span bind:this={ref} class={classes.join(' ')} style={inlineStyles.join(';')}>
  {#if customIndicatorIcon}
    {@render customIndicatorIcon?.()}
  {:else}
    <Icon icon="material-symbols:circle" />
  {/if}
</span>
