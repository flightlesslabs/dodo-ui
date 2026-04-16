<script lang="ts" module>
  import type { Snippet } from 'svelte';
  import Text, { type TextColor } from '../Text/Text.svelte';
  import {
    compareValueWithThreshold,
    type ThresholdStatus,
  } from './compareValueWithThreshold/compareValueWithThreshold.ts';

  export type ThresholdColorMap = Record<ThresholdStatus, TextColor>;

  export type ThresholdCustomContentContext = {
    status: ThresholdStatus;
    value: number;
    threshold: number;
    color: TextColor;
    colorMap: ThresholdColorMap;
  };

  export const defaultThresholdColorMap: ThresholdColorMap = {
    below: 'danger',
    at: 'default',
    above: 'safe',
  };

  /**
   * Public props for Threshold
   */
  export type ThresholdProps = {
    /**
     * The numeric value to evaluate against the threshold.
     */
    value: number;

    /**
     * The reference value used for comparison.
     */
    threshold?: number;

    /** Custom CSS class names */
    class?: string;

    /** Slot content */
    children?: Snippet;

    /**
     * Advanced render function for full control over the output.
     */
    customContent?: Snippet<[ThresholdCustomContentContext]>;

    /**
     * Optional color mapping to override the default status-to-color behavior.
     */
    colorMap?: Partial<ThresholdColorMap>;
  };
</script>

<script lang="ts">
  let {
    class: className = '',
    children,
    customContent,
    value,
    threshold = 0,
    colorMap,
  }: ThresholdProps = $props();

  const status = $derived(compareValueWithThreshold(value, threshold));
  const colorMapUsed = $derived({ ...defaultThresholdColorMap, ...colorMap });

  const color = $derived<TextColor>(colorMapUsed[status]);

  /**
   * Computed class list
   */
  const classes = $derived(['dodo-ui-Threshold', className].filter(Boolean));
</script>

{#if customContent}
  {@render customContent?.({ status, value, threshold, color, colorMap: colorMapUsed })}
{:else if children}
  <Text class={classes.join(' ')} {color}>{@render children?.()}</Text>
{:else}
  <Text class={classes.join(' ')} {color}>{value}</Text>
{/if}
