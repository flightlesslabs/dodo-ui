<script lang="ts" module>
  import type { ComponentColor } from '$lib/types/colors.js';
  import type { ComponentRoundness } from '$lib/types/roundness.js';
  import type { ComponentSize } from '$lib/types/size.js';

  import type { Snippet } from 'svelte';
  import type { ChangeEventHandler } from 'svelte/elements';

  export interface RadioProps {
    /** Radio contents goes here */
    children?: Snippet;
    /** Radio ref */
    ref?: HTMLInputElement;
    /** How large should the radio be? */
    size?: ComponentSize;
    /** What color to use? */
    color?: ComponentColor;
    /** How round should the border radius be? */
    roundness?: ComponentRoundness;
    /** Radio disabled state */
    disabled?: boolean;
    /** Name */
    name?: string;
    /** value */
    value?: string;
    /** selected Value */
    selectedValue?: string;
    /** Id */
    id?: string;
    /** Title (for tooltip) */
    title?: string;
    /** Custom css class*/
    class?: string;
    /** onchange event handler */
    onchange?: ChangeEventHandler<HTMLInputElement>;
  }
</script>

<script lang="ts">
  let {
    children,
    size = 'normal',
    color = 'primary',
    roundness = 'full',
    name,
    id,
    title,
    class: className = '',
    disabled = false,
    ref = $bindable<HTMLInputElement>(),
    onchange,
    value,
    selectedValue,
  }: RadioProps = $props();
</script>

<label
  class:disabled
  class={[
    'dodo-ui-Radio',
    `size--${size}`,
    `color--${color}`,
    `roundness--${roundness}`,
    className,
  ].join(' ')}
  for={id}
>
  <input
    type="radio"
    {name}
    {id}
    {title}
    {disabled}
    {onchange}
    bind:this={ref}
    bind:group={selectedValue}
    {value}
  />
  <div class="Radio">
    <span class="RadioHandle"></span>
  </div>

  {#if children}
    <div class="RadioMessage">
      {@render children()}
    </div>
  {/if}
</label>

<style lang="scss">
  @use 'utils/scss/mixins.scss' as *;

  :global(:root) {
    --dodo-ui-Radio-disabled-color: var(--dodo-color-neutral-400);
    --dodo-ui-Radio-disabled-bg: var(--dodo-color-neutral-200);
    --dodo-ui-Radio-border-disabled-color: var(--dodo-color-neutral-300);

    --dodo-ui-Radio-border-color: var(--dodo-color-neutral-400);

    @include generate-dodo-ui-radio-colors(neutral);
    @include generate-dodo-ui-radio-colors(primary);
    @include generate-dodo-ui-radio-colors(secondary);
    @include generate-dodo-ui-radio-colors(safe);
    @include generate-dodo-ui-radio-colors(warning);
    @include generate-dodo-ui-radio-colors(danger);
  }

  :global(.dodo-theme--dark) {
    --dodo-ui-Radio-disabled-bg: var(--dodo-color-neutral-100);
    --dodo-ui-Radio-disabled-color: var(--dodo-color-neutral-500);
    --dodo-ui-Radio-border-disabled-color: var(--dodo-color-neutral-400);

    --dodo-ui-Radio-border-color: var(--dodo-color-neutral-500);

    @include generate-dodo-ui-radio-colors-dark(neutral);
    @include generate-dodo-ui-radio-colors-dark(primary);
    @include generate-dodo-ui-radio-colors-dark(secondary);
    @include generate-dodo-ui-radio-colors-dark(safe);
    @include generate-dodo-ui-radio-colors-dark(warning);
    @include generate-dodo-ui-radio-colors-dark(danger);
  }

  .dodo-ui-Radio {
    cursor: pointer;
    outline: none;
    display: inline-flex;
    padding: 0;
    margin: 0;
    position: relative;

    input {
      opacity: 0;
      width: 0;
      height: 0;
      position: absolute;

      &:focus-visible {
        & + .Radio {
          outline: 1px solid;
        }
      }

      &:checked {
        &:not([disabled]) {
          & + .Radio {
            .RadioHandle {
              color: var(--dodo-color-constant-white);
            }
          }
        }

        &[disabled] {
          & + .Radio {
            .RadioHandle {
              color: var(--dodo-ui-Radio-disabled-color);
            }
          }
        }
      }
    }

    .RadioHandle {
      color: transparent;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      height: 65%;
      width: 65%;
    }

    .Radio {
      transition: all 150ms;
      text-decoration: none;
      margin: 0;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      font-family: inherit;
      border-style: solid;
      border-width: calc(var(--dodo-ui-element-border-width) * 2);
      border-color: var(--dodo-ui-Radio-border-color);
      outline: 0;
      letter-spacing: 0.3px;
      border-radius: inherit;
      position: relative;
    }

    .RadioMessage {
      display: flex;
      align-items: center;
      margin-left: var(--dodo-ui-space);
      user-select: none;
    }

    &.size {
      &--normal {
        font-size: 1rem;

        .Radio {
          height: calc(var(--dodo-ui-element-height-normal) / 1.2);
          width: calc(var(--dodo-ui-element-height-normal) / 1.2);
        }
      }

      &--small {
        font-size: 0.9rem;

        .Radio {
          height: calc(var(--dodo-ui-element-height-small) / 1.2);
          width: calc(var(--dodo-ui-element-height-small) / 1.2);
        }
      }

      &--large {
        font-size: 1.1rem;

        .Radio {
          height: calc(var(--dodo-ui-element-height-large) / 1.2);
          width: calc(var(--dodo-ui-element-height-large) / 1.2);
        }
      }
    }

    &.roundness {
      &--1 {
        border-radius: var(--dodo-ui-element-roundness-1);
      }

      &--2 {
        border-radius: var(--dodo-ui-element-roundness-2);
      }

      &--3 {
        border-radius: var(--dodo-ui-element-roundness-3);
      }

      &--full {
        border-radius: 50%;
      }
    }

    &.color {
      @include generate-dodo-ui-radio-color(neutral);
      @include generate-dodo-ui-radio-color(primary);
      @include generate-dodo-ui-radio-color(secondary);
      @include generate-dodo-ui-radio-color(safe);
      @include generate-dodo-ui-radio-color(warning);
      @include generate-dodo-ui-radio-color(danger);
    }

    &.disabled {
      cursor: initial;
      color: var(--dodo-ui-Radio-disabled-color);

      .Radio {
        background-color: var(--dodo-ui-Radio-disabled-bg);
        border-color: var(--dodo-ui-Radio-border-disabled-color);
      }

      &:hover {
        color: var(--dodo-ui-Radio-disabled-color);

        .Radio {
          background-color: var(--dodo-ui-Radio-disabled-bg);
        }
      }

      &:active {
        color: var(--dodo-ui-Radio-disabled-color);

        .Radio {
          background-color: var(--dodo-ui-Radio-disabled-bg);
        }
      }
    }
  }
</style>
