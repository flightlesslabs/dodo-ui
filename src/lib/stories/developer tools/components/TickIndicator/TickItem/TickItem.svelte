<script lang="ts" module>
  import {
    componentColorPriorityArray,
    componentColorSeverityArray,
    type ComponentColor,
  } from '$lib/types/colors.js';
  import type { ComponentSize } from '$lib/types/size.js';
  import type { Snippet } from 'svelte';

  export type TickMarkerType = 'line' | 'dot' | 'disc';

  export const tickMarkerTypeArray: TickMarkerType[] = ['line', 'dot', 'disc'];

  export type TickColor = 'default' | 'white' | ComponentColor;

  export const tickColorArray: TickColor[] = [
    'default',
    'white',
    ...componentColorPriorityArray,
    ...componentColorSeverityArray,
  ];

  export type Tick = {
    /** value */
    value: number;
    /** Tick size */
    size?: ComponentSize;
    /** Tick label */
    label?: string;
    /** Tick markerType */
    markerType?: TickMarkerType;
    /** Tick Color */
    color?: TickColor;
  };

  export interface TickItemProps extends Tick {
    /** TickItem ref */
    ref?: HTMLDivElement;
    /** Tick Indicator base size */
    baseSize?: ComponentSize;
    /** Custom css class*/
    class?: string;
    /** Colored Labels */
    coloredLabels?: boolean;
    /** Custom TickItem */
    customTickItem?: (tick: Tick) => Snippet;
    /** Custom TickItem Label */
    customTickItemLabel?: (tick: Tick) => Snippet;
  }
</script>

<script lang="ts">
  let {
    class: className = '',
    ref = $bindable<HTMLDivElement>(),
    customTickItem: customTickItemInternal,
    customTickItemLabel: customTickItemLabelInternal,
    value,
    size = 'normal',
    baseSize = 'normal',
    label,
    markerType = 'line',
    color = 'default',
    coloredLabels = false,
  }: TickItemProps = $props();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let customTickItemTyped = customTickItemInternal as any;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let customTickItemLabelTyped = customTickItemLabelInternal as any;
</script>

<div
  class:coloredLabels
  class={[
    'dodo-ui-TickItem',
    `size--${size}`,
    `baseSize--${baseSize}`,
    `color--${color}`,
    `markerType--${markerType}`,
    className,
  ].join(' ')}
  bind:this={ref}
>
  {#if customTickItemTyped}
    {@render customTickItemTyped({
      value,
      size,
      label,
      markerType,
      color,
    })}
  {:else}
    <span class="marker"></span>
    <span class="label">
      {#if customTickItemLabelTyped}
        {@render customTickItemLabelTyped({
          value,
          size,
          label,
          markerType,
          color,
        })}
      {:else if label}
        {label}
      {/if}
    </span>
  {/if}
</div>

<style lang="scss">
  @use 'utils/scss/mixins.scss' as *;

  :global(:root) {
    --dodo-ui-Tick-default-bg: var(--dodo-color-neutral-500);
    --dodo-ui-Tick-white-bg: var(--dodo-color-constant-white);
    --dodo-ui-TickLabel-default-color: var(--dodo-color-neutral-800);
    --dodo-ui-TickLabel-white-color: var(--dodo-color-white);

    --dodo-ui-Tick-baseSize: 1;

    --dodo-ui-Tick-height: calc(
      calc(var(--dodo-ui-track-element-height-normal) * 2) * var(--dodo-ui-Tick-baseSize)
    );
    --dodo-ui-Tick-width: calc(
      calc(var(--dodo-ui-track-element-height-normal) / 2) * var(--dodo-ui-Tick-baseSize)
    );

    @include generate-dodo-ui-tick-colors(neutral);
    @include generate-dodo-ui-tick-colors(primary);
    @include generate-dodo-ui-tick-colors(secondary);
    @include generate-dodo-ui-tick-colors(safe);
    @include generate-dodo-ui-tick-colors(warning);
    @include generate-dodo-ui-tick-colors(danger);
  }

  :global(.dodo-theme--dark) {
    --dodo-ui-Tick-default-bg: var(--dodo-color-neutral-500);
    --dodo-ui-TickLabel-default-color: var(--dodo-color-neutral-700);
    --dodo-ui-TickLabel-white-color: var(--dodo-color-white);

    @include generate-dodo-ui-tick-colors-dark(neutral);
    @include generate-dodo-ui-tick-colors-dark(primary);
    @include generate-dodo-ui-tick-colors-dark(secondary);
    @include generate-dodo-ui-tick-colors-dark(safe);
    @include generate-dodo-ui-tick-colors-dark(warning);
    @include generate-dodo-ui-tick-colors-dark(danger);
  }

  .dodo-ui-TickItem {
    display: inline-flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    position: relative;
    // Largest tick height
    min-height: calc(
      calc(var(--dodo-ui-track-element-height-large) * 2) * var(--dodo-ui-Tick-baseSize)
    );

    .marker {
      display: block;
      height: var(--dodo-ui-Tick-height);
      width: var(--dodo-ui-Tick-width);
      border-style: solid;
      border-width: 0;
      border-color: transparent;
    }

    .label {
      position: absolute;
      top: calc(calc(var(--dodo-ui-track-element-height-large) * 3) * var(--dodo-ui-Tick-baseSize));
      &:empty {
        display: none;
      }
    }

    &.baseSize {
      &--normal {
        font-size: 1rem;
        --dodo-ui-Tick-baseSize: 1;
      }

      &--small {
        font-size: 0.9rem;
        --dodo-ui-Tick-baseSize: 0.95;
      }

      &--large {
        font-size: 1.1rem;
        --dodo-ui-Tick-baseSize: 1.2;
      }
    }

    &.color {
      &--default {
        .marker {
          background-color: var(--dodo-ui-Tick-default-bg);
          border-color: var(--dodo-ui-Tick-default-bg);
        }

        &.coloredLabels {
          .label {
            color: var(--dodo-ui-TickLabel-default-bg);
          }
        }
      }

      &--white {
        .marker {
          background-color: var(--dodo-ui-Tick-white-bg);
          border-color: var(--dodo-ui-Tick-white-bg);
        }

        &.coloredLabels {
          .label {
            color: var(--dodo-ui-TickLabel-white-bg);
          }
        }
      }

      @include generate-dodo-ui-tick-color(neutral);
      @include generate-dodo-ui-tick-color(primary);
      @include generate-dodo-ui-tick-color(secondary);
      @include generate-dodo-ui-tick-color(safe);
      @include generate-dodo-ui-tick-color(warning);
      @include generate-dodo-ui-tick-color(danger);
    }

    &.markerType {
      &--line {
        &.size--small {
          --dodo-ui-Tick-height: calc(
            calc(var(--dodo-ui-track-element-height-small) * 2) * var(--dodo-ui-Tick-baseSize)
          );
          --dodo-ui-Tick-width: calc(
            calc(var(--dodo-ui-track-element-height-small) / 3) * var(--dodo-ui-Tick-baseSize)
          );
        }

        &.size--large {
          --dodo-ui-Tick-height: calc(
            calc(var(--dodo-ui-track-element-height-large) * 2) * var(--dodo-ui-Tick-baseSize)
          );
          --dodo-ui-Tick-width: calc(
            calc(var(--dodo-ui-track-element-height-large) / 2) * var(--dodo-ui-Tick-baseSize)
          );
        }
      }

      &--dot {
        .marker {
          border-radius: 50%;
        }

        &.size--normal {
          --dodo-ui-Tick-height: calc(
            calc(var(--dodo-ui-track-element-height-normal) * 2) * var(--dodo-ui-Tick-baseSize)
          );
          --dodo-ui-Tick-width: calc(
            calc(var(--dodo-ui-track-element-height-normal) * 2) * var(--dodo-ui-Tick-baseSize)
          );
        }

        &.size--small {
          --dodo-ui-Tick-height: calc(
            calc(var(--dodo-ui-track-element-height-small) * 2) * var(--dodo-ui-Tick-baseSize)
          );
          --dodo-ui-Tick-width: calc(
            calc(var(--dodo-ui-track-element-height-small) * 2) * var(--dodo-ui-Tick-baseSize)
          );
        }

        &.size--large {
          --dodo-ui-Tick-height: calc(
            calc(var(--dodo-ui-track-element-height-large) * 2) * var(--dodo-ui-Tick-baseSize)
          );
          --dodo-ui-Tick-width: calc(
            calc(var(--dodo-ui-track-element-height-large) * 2) * var(--dodo-ui-Tick-baseSize)
          );
        }
      }

      &--disc {
        .marker {
          border-radius: 50%;
          background-color: transparent;
        }

        &.size--normal {
          --dodo-ui-Tick-height: calc(
            calc(var(--dodo-ui-track-element-height-normal) * 2.5) * var(--dodo-ui-Tick-baseSize)
          );
          --dodo-ui-Tick-width: calc(
            calc(var(--dodo-ui-track-element-height-normal) * 2.5) * var(--dodo-ui-Tick-baseSize)
          );

          .marker {
            border-width: calc(var(--dodo-ui-track-element-height-normal) * 0.5);
          }
        }

        &.size--small {
          --dodo-ui-Tick-height: calc(
            calc(var(--dodo-ui-track-element-height-small) * 2) * var(--dodo-ui-Tick-baseSize)
          );
          --dodo-ui-Tick-width: calc(
            calc(var(--dodo-ui-track-element-height-small) * 2) * var(--dodo-ui-Tick-baseSize)
          );

          .marker {
            border-width: calc(var(--dodo-ui-track-element-height-small) * 0.5);
          }
        }

        &.size--large {
          --dodo-ui-Tick-height: calc(
            calc(var(--dodo-ui-track-element-height-large) * 2.5) * var(--dodo-ui-Tick-baseSize)
          );
          --dodo-ui-Tick-width: calc(
            calc(var(--dodo-ui-track-element-height-large) * 2.5) * var(--dodo-ui-Tick-baseSize)
          );

          .marker {
            border-width: calc(var(--dodo-ui-track-element-height-large) * 0.5);
          }
        }
      }
    }
  }
</style>
