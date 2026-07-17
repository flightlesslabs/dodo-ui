<script lang="ts" module>
  import { type ComponentColor } from '@flightlesslabs/dodo-core-attributes';
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
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
      <path d="M0 0h24v24H0z" fill="none" />
      <path
        fill="currentColor"
        d="M12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22"
      />
    </svg>
  {/if}
</span>
