<script lang="ts" module>
  import type { ComponentSize } from '$lib/types/size.js';
  import type { ComponentRoundness } from '$lib/types/roundness.js';
  import type { ChangeEventHandler, FocusEventHandler, FormEventHandler } from 'svelte/elements';
  import type { ComponentColor } from '$lib/types/colors.js';
  import type { Snippet } from 'svelte';
  import type { Tick } from '$lib/stories/developer tools/components/TickIndicator/TickItem/TickItem.svelte';
  import type { TickIndicatorProps } from '$lib/stories/developer tools/components/TickIndicator/TickIndicator.svelte';
  import TickIndicator from '$lib/stories/developer tools/components/TickIndicator/TickIndicator.svelte';

  export interface RangeSliderProps {
    /** How large should the button be? */
    size?: ComponentSize;
    /** What color to use? */
    color?: ComponentColor;
    /** RangeSlider ref */
    ref?: HTMLInputElement;
    /** How round should the border radius be? */
    roundness?: ComponentRoundness;
    /** How round should the thumb border radius be? */
    thumbRoundness?: ComponentRoundness;
    /** RangeSlider value */
    value: number;
    /** disabled state */
    disabled?: boolean;
    /** Id */
    id?: string;
    /** name */
    name?: string;
    /** Icon before button content */
    before?: Snippet;
    /** Icon after button content */
    after?: Snippet;
    /** Custom css class*/
    class?: string;
    /** oninput event handler */
    oninput?: FormEventHandler<HTMLInputElement>;
    /** onchange event handler */
    onchange?: ChangeEventHandler<HTMLInputElement>;
    /** onblur event handler */
    onblur?: FocusEventHandler<HTMLInputElement>;
    /** onfocus event handler */
    onfocus?: FocusEventHandler<HTMLInputElement>;
    /** Min Value */
    min?: number;
    /** Max Value */
    max?: number;
    /** Value Increment step */
    step?: number;
    /** ticks */
    ticks?: Tick[];
    /** Custom TickItem label */
    customTickIndicator?: (ticks: Tick[]) => Snippet;
    /** Custom TickItem */
    customTickItem?: (tick: Tick) => Snippet;
    /** Custom TickItem Label */
    customTickItemLabel?: (tick: Tick) => Snippet;
    /** tickIndicatorProps */
    tickIndicatorProps?: Partial<TickIndicatorProps>;
  }
</script>

<script lang="ts">
  let {
    color = 'primary',
    size = 'normal',
    roundness = 1,
    thumbRoundness = 'full',
    class: className = '',
    ref = $bindable<HTMLInputElement>(),
    value = $bindable<number>(),
    disabled = false,
    id,
    min = 0,
    max = 100,
    step = 0,
    name,
    oninput,
    onchange,
    onblur,
    onfocus,
    before,
    after,
    ticks,
    customTickIndicator,
    customTickItem,
    customTickItemLabel,
    tickIndicatorProps,
  }: RangeSliderProps = $props();

  const percentageValue = $derived(((value - min) / (max - min)) * 100);
</script>

<div
  class:disabled
  class={[
    'dodo-ui-RangeSlider',
    `size--${size}`,
    `roundness--${roundness}`,
    `thumbRoundness--${thumbRoundness}`,
    `color--${color}`,
    className,
  ].join(' ')}
  style={`--dodo-ui-RangeSlider-value-percent: ${percentageValue};`}
>
  {#if before}
    <span class="content--before">
      {@render before()}
    </span>
  {/if}

  <div class="RangeSliderContainer">
    <input
      type="range"
      class="NativeRangeSlider"
      {min}
      {max}
      {step}
      {oninput}
      {onchange}
      {onblur}
      {onfocus}
      {id}
      {name}
      {disabled}
      bind:this={ref}
      bind:value
    />

    {#if ticks?.length}
      <TickIndicator
        {ticks}
        {customTickIndicator}
        {customTickItem}
        {customTickItemLabel}
        {min}
        {max}
        {color}
        {size}
        {...tickIndicatorProps}
      />
    {/if}
  </div>

  {#if after}
    <span class="content--after">
      {@render after()}
    </span>
  {/if}
</div>

<style lang="scss">
  @use 'utils/scss/mixins.scss' as *;

  :global(:root) {
    --dodo-ui-RangeSlider-track-bg: var(--dodo-color-neutral-200);
    --dodo-ui-RangeSlider-track-filled-disabled-bg: var(--dodo-color-neutral-300);
    --dodo-ui-RangeSlider-thumb-disabled-bg: var(--dodo-color-neutral-300);

    @include generate-dodo-ui-range-slider-colors(neutral);
    @include generate-dodo-ui-range-slider-colors(primary);
    @include generate-dodo-ui-range-slider-colors(secondary);
    @include generate-dodo-ui-range-slider-colors(safe);
    @include generate-dodo-ui-range-slider-colors(warning);
    @include generate-dodo-ui-range-slider-colors(danger);
  }

  :global(.dodo-theme--dark) {
    --dodo-ui-RangeSlider-track-bg: var(--dodo-color-neutral-400);
    --dodo-ui-RangeSlider-track-filled-disabled-bg: var(--dodo-color-neutral-500);
    --dodo-ui-RangeSlider-thumb-disabled-bg: var(--dodo-color-neutral-500);

    @include generate-dodo-ui-range-slider-colors-dark(neutral);
    @include generate-dodo-ui-range-slider-colors-dark(primary);
    @include generate-dodo-ui-range-slider-colors-dark(secondary);
    @include generate-dodo-ui-range-slider-colors-dark(safe);
    @include generate-dodo-ui-range-slider-colors-dark(warning);
    @include generate-dodo-ui-range-slider-colors-dark(danger);
  }

  .dodo-ui-RangeSlider {
    display: flex;

    .RangeSliderContainer {
      flex: 1;
      display: flex;
      flex-direction: column;
    }

    .NativeRangeSlider {
      -webkit-appearance: none;
      appearance: none;
      background: transparent;
      cursor: pointer;
      margin: 0;
      padding: 0;
      overflow: hidden;
      display: flex;
      align-items: center;

      &:focus {
        outline: none;
      }

      &::-webkit-slider-thumb {
        -webkit-appearance: none; /* Override default look */
        appearance: none;
        border: 0;
        transition: all 150ms;
      }

      &::-moz-range-thumb {
        border: 0;
        transition: all 150ms;
      }
    }

    .content {
      &--before {
        display: flex;
        align-items: center;
        justify-content: center;
      }

      &--after {
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }

    &.size {
      &--normal {
        min-height: var(--dodo-ui-element-height-normal);
        .NativeRangeSlider {
          height: var(--dodo-ui-element-height-normal);

          &::-webkit-slider-runnable-track {
            height: var(--dodo-ui-track-element-height-normal);
          }

          &::-moz-range-track {
            height: var(--dodo-ui-track-element-height-normal);
          }

          &::-moz-range-progress {
            height: var(--dodo-ui-track-element-height-normal);
          }

          // Thumb
          &::-webkit-slider-thumb {
            margin-top: -0.5em;
            height: calc(var(--dodo-ui-element-height-normal) / 2);
            width: calc(var(--dodo-ui-element-height-normal) / 2);
          }

          &::-moz-range-thumb {
            height: calc(var(--dodo-ui-element-height-normal) / 2);
            width: calc(var(--dodo-ui-element-height-normal) / 2);
          }
        }

        .content {
          &--before {
            margin-right: 12px;
          }

          &--after {
            margin-left: 12px;
          }
        }
      }

      &--small {
        min-height: var(--dodo-ui-element-height-small);

        .NativeRangeSlider {
          height: var(--dodo-ui-element-height-small);

          &::-webkit-slider-runnable-track {
            height: var(--dodo-ui-track-element-height-small);
          }

          &::-moz-range-track {
            height: var(--dodo-ui-track-element-height-small);
          }

          &::-moz-range-progress {
            height: var(--dodo-ui-track-element-height-small);
          }

          // Thumb
          &::-webkit-slider-thumb {
            margin-top: -0.45em;
            height: calc(var(--dodo-ui-element-height-small) / 2);
            width: calc(var(--dodo-ui-element-height-small) / 2);
          }

          &::-moz-range-thumb {
            height: calc(var(--dodo-ui-element-height-small) / 2);
            width: calc(var(--dodo-ui-element-height-small) / 2);
          }
        }

        .content {
          &--before {
            margin-right: 8px;
          }

          &--after {
            margin-left: 8px;
          }
        }
      }

      &--large {
        min-height: var(--dodo-ui-element-height-large);

        .NativeRangeSlider {
          height: var(--dodo-ui-element-height-large);

          &::-webkit-slider-runnable-track {
            height: var(--dodo-ui-track-element-height-large);
          }

          &::-moz-range-track {
            height: var(--dodo-ui-track-element-height-large);
          }

          &::-moz-range-progress {
            height: var(--dodo-ui-track-element-height-large);
          }

          // Thumb
          &::-webkit-slider-thumb {
            margin-top: -0.6em;
            height: calc(var(--dodo-ui-element-height-large) / 2);
            width: calc(var(--dodo-ui-element-height-large) / 2);
          }

          &::-moz-range-thumb {
            height: calc(var(--dodo-ui-element-height-large) / 2);
            width: calc(var(--dodo-ui-element-height-large) / 2);
          }
        }

        .content {
          &--before {
            margin-right: 14px;
          }

          &--after {
            margin-left: 14px;
          }
        }
      }
    }

    &.color {
      @include generate-dodo-ui-range-slider-color(neutral);
      @include generate-dodo-ui-range-slider-color(primary);
      @include generate-dodo-ui-range-slider-color(secondary);
      @include generate-dodo-ui-range-slider-color(safe);
      @include generate-dodo-ui-range-slider-color(warning);
      @include generate-dodo-ui-range-slider-color(danger);
    }

    &.roundness {
      &--1 {
        .NativeRangeSlider {
          &::-webkit-slider-runnable-track {
            border-radius: var(--dodo-ui-element-roundness-1);
          }

          &::-moz-range-track {
            border-radius: var(--dodo-ui-element-roundness-1);
          }

          &::-moz-range-progress {
            border-radius: var(--dodo-ui-element-roundness-1);
          }
        }
      }

      &--2 {
        .NativeRangeSlider {
          &::-webkit-slider-runnable-track {
            border-radius: var(--dodo-ui-element-roundness-2);
          }

          &::-moz-range-track {
            border-radius: var(--dodo-ui-element-roundness-2);
          }

          &::-moz-range-progress {
            border-radius: var(--dodo-ui-element-roundness-2);
          }
        }
      }

      &--3 {
        .NativeRangeSlider {
          &::-webkit-slider-runnable-track {
            border-radius: var(--dodo-ui-element-roundness-3);
          }

          &::-moz-range-track {
            border-radius: var(--dodo-ui-element-roundness-3);
          }

          &::-moz-range-progress {
            border-radius: var(--dodo-ui-element-roundness-3);
          }
        }
      }
    }

    &.thumbRoundness {
      &--1 {
        .NativeRangeSlider {
          // Thumb
          &::-webkit-slider-thumb {
            border-radius: var(--dodo-ui-element-roundness-1);
          }

          &::-moz-range-thumb {
            border-radius: var(--dodo-ui-element-roundness-1);
          }
        }
      }

      &--2 {
        .NativeRangeSlider {
          // Thumb
          &::-webkit-slider-thumb {
            border-radius: var(--dodo-ui-element-roundness-2);
          }

          &::-moz-range-thumb {
            border-radius: var(--dodo-ui-element-roundness-2);
          }
        }
      }

      &--3 {
        .NativeRangeSlider {
          // Thumb
          &::-webkit-slider-thumb {
            border-radius: var(--dodo-ui-element-roundness-3);
          }

          &::-moz-range-thumb {
            border-radius: var(--dodo-ui-element-roundness-3);
          }
        }
      }

      &--full {
        .NativeRangeSlider {
          // Thumb
          &::-webkit-slider-thumb {
            border-radius: 50%;
          }

          // Thumb
          &::-moz-range-thumb {
            border-radius: 50%;
          }
        }
      }
    }

    .NativeRangeSlider {
      &[disabled] {
        cursor: initial;

        &::-webkit-slider-runnable-track {
          background: linear-gradient(
            to right,
            var(--dodo-ui-RangeSlider-track-filled-disabled-bg) 0%,
            var(--dodo-ui-RangeSlider-track-filled-disabled-bg)
              calc(var(--dodo-ui-RangeSlider-value-percent, 50%) * 1%),
            var(--dodo-ui-RangeSlider-track-bg)
              calc(var(--dodo-ui-RangeSlider-value-percent, 50%) * 1%),
            var(--dodo-ui-RangeSlider-track-bg) 100%
          );
        }

        &::-moz-range-progress {
          background: var(--dodo-ui-RangeSlider-track-filled-disabled-bg);
        }

        &::-webkit-slider-thumb {
          background: var(--dodo-ui-RangeSlider-thumb-disabled-bg);

          &:hover {
            background: var(--dodo-ui-RangeSlider-thumb-disabled-bg);
          }

          &:focus-visible {
            background: var(--dodo-ui-RangeSlider-thumb-disabled-bg);
          }

          &:active {
            background: var(--dodo-ui-RangeSlider-thumb-disabled-bg);
          }
        }

        &::-moz-range-thumb {
          background: var(--dodo-ui-RangeSlider-thumb-disabled-bg);

          &:active {
            background: var(--dodo-ui-RangeSlider-thumb-disabled-bg);
          }
        }
      }
    }
  }
</style>
