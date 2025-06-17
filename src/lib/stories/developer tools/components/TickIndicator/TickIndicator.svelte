<script lang="ts" module>
  import type { Snippet } from 'svelte';
  import type { Tick, TickColor, TickMarkerType } from './TickItem/TickItem.svelte';
  import type { ComponentSize } from '$lib/types/size.js';
  import TickItem from './TickItem/TickItem.svelte';

  export interface TickIndicatorProps {
    /** TickIndicator ref */
    ref?: HTMLUListElement;
    /** ticks */
    ticks: Tick[];
    /** Custom css class*/
    class?: string;
    /** Tick Color */
    color?: TickColor;
    /** Tick markerType */
    markerType?: TickMarkerType;
    /** Tick size */
    size?: ComponentSize;
    /** Custom TickItem label */
    customTickIndicator?: (ticks: Tick[]) => Snippet;
    /** Custom TickItem */
    customTickItem?: (tick: Tick) => Snippet;
    /** Custom TickItem Label */
    customTickItemLabel?: (tick: Tick) => Snippet;
    /** Min Value */
    min?: number;
    /** Max Value */
    max?: number;
    /** Colored Labels */
    coloredLabels?: boolean;
  }
</script>

<script lang="ts">
  let {
    class: className = '',
    ref = $bindable<HTMLUListElement>(),
    color = 'default',
    markerType = 'line',
    size = 'normal',
    customTickItem,
    customTickItemLabel,
    customTickIndicator: customTickIndicatorInternal,
    ticks,
    min = 0,
    max = 100,
    coloredLabels = false,
  }: TickIndicatorProps = $props();

  function getPosition(value: number) {
    return ((value - min) / (max - min)) * 100;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let customTickIndicatorTyped = customTickIndicatorInternal as any;
</script>

<ul class={['dodo-ui-TickIndicator', `size--${size}`, className].join(' ')} bind:this={ref}>
  {#if customTickIndicatorTyped}
    {@render customTickIndicatorTyped(ticks)}
  {:else}
    {#each ticks as tick, index (index)}
      <li style={`left: ${getPosition(tick.value)}%;`}>
        <TickItem
          {color}
          {markerType}
          baseSize={size}
          {customTickItem}
          {customTickItemLabel}
          {coloredLabels}
          {...tick}
        />
      </li>
    {/each}
  {/if}
</ul>

<style lang="scss">
  .dodo-ui-TickIndicator {
    margin: 0;
    padding: 0;
    display: flex;
    width: 100%;
    position: relative;
    min-height: var(--dodo-ui-space);

    li {
      display: block;
      position: absolute;
      margin: 0;
      padding: 0;
      bottom: 0;
      height: 100%;
    }

    &.size {
      &--normal {
        height: var(--dodo-ui-element-height-normal);
      }

      &--small {
        height: var(--dodo-ui-element-height-small);
      }

      &--large {
        height: var(--dodo-ui-element-height-large);
      }
    }
  }
</style>
