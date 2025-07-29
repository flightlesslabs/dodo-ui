<script lang="ts" module>
  import type { ComponentColor } from '$lib/types/colors.js';
  import type { ComponentRoundness } from '$lib/types/roundness.js';
  import type { ComponentSize } from '$lib/types/size.js';

  import type { Snippet } from 'svelte';
  import type { ChangeEventHandler } from 'svelte/elements';

  export interface ToggleProps {
    /** Toggle contents goes here */
    children?: Snippet;
    /** Toggle ref */
    ref?: HTMLInputElement;
    /** How large should the toggle be? */
    size?: ComponentSize;
    /** What color to use? */
    color?: ComponentColor;
    /** How round should the border radius be? */
    roundness?: ComponentRoundness;
    /** Toggle disabled state */
    disabled?: boolean;
    /** Name */
    name?: string;
    /** value */
    value?: string;
    /** Id */
    id?: string;
    /** Title (for tooltip) */
    title?: string;
    /** Custom css class*/
    class?: string;
    /** onchange event handler */
    onchange?: ChangeEventHandler<HTMLInputElement>;
    /** checked */
    checked?: boolean;
  }
</script>

<script lang="ts">
  let {
    children,
    size = 'normal',
    color = 'primary',
    roundness = 3,
    name,
    id,
    title,
    class: className = '',
    disabled = false,
    checked = $bindable<boolean>(),
    ref = $bindable<HTMLInputElement>(),
    onchange,
    value,
  }: ToggleProps = $props();
</script>

<label
  class:disabled
  class={[
    'dodo-ui-Toggle',
    `size--${size}`,
    `color--${color}`,
    `roundness--${roundness}`,
    className,
  ].join(' ')}
  for={id}
>
  <input
    type="checkbox"
    {name}
    {id}
    {title}
    {disabled}
    {onchange}
    bind:this={ref}
    bind:checked
    {value}
  />
  <div class="Toggle">
    <span class="ToggleHandle"></span>
  </div>

  {#if children}
    <div class="ToggleMessage">
      {@render children()}
    </div>
  {/if}
</label>

<style lang="scss">
  @use 'utils/scss/mixins.scss' as *;

  :global(:root) {
    --dodo-ui-Toggle-disabled-color: var(--dodo-color-neutral-400);
    --dodo-ui-Toggle-disabled-bg: var(--dodo-color-neutral-200);
    --dodo-ui-Toggle-border-disabled-color: var(--dodo-color-neutral-300);

    --dodo-ui-Toggle-border-color: var(--dodo-color-neutral-400);

    --dodo-ui-ToggleHandle-bg: var(--dodo-color-neutral-500);
    --dodo-ui-ToggleHandle-disabled-bg: var(--dodo-color-neutral-400);

    @include generate-dodo-ui-toggle-colors(neutral);
    @include generate-dodo-ui-toggle-colors(primary);
    @include generate-dodo-ui-toggle-colors(secondary);
    @include generate-dodo-ui-toggle-colors(safe);
    @include generate-dodo-ui-toggle-colors(warning);
    @include generate-dodo-ui-toggle-colors(danger);
  }

  :global(.dodo-theme--dark) {
    --dodo-ui-Toggle-disabled-bg: var(--dodo-color-neutral-100);
    --dodo-ui-Toggle-disabled-color: var(--dodo-color-neutral-500);
    --dodo-ui-Toggle-border-disabled-color: var(--dodo-color-neutral-400);

    --dodo-ui-Toggle-border-color: var(--dodo-color-neutral-500);

    --dodo-ui-ToggleHandle-bg: var(--dodo-color-neutral-300);
    --dodo-ui-ToggleHandle-disabled-bg: var(--dodo-color-neutral-200);

    @include generate-dodo-ui-toggle-colors-dark(neutral);
    @include generate-dodo-ui-toggle-colors-dark(primary);
    @include generate-dodo-ui-toggle-colors-dark(secondary);
    @include generate-dodo-ui-toggle-colors-dark(safe);
    @include generate-dodo-ui-toggle-colors-dark(warning);
    @include generate-dodo-ui-toggle-colors-dark(danger);
  }

  .dodo-ui-Toggle {
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
        & + .Toggle {
          outline: 1px solid;
        }
      }

      &:checked {
        & + .Toggle {
          .ToggleHandle {
            transform: translateX(var(--ToggleHandle-offset));
          }
        }

        &:not([disabled]) {
          & + .Toggle {
            .ToggleHandle {
              background-color: var(--dodo-color-constant-white);
            }
          }
        }
      }
    }

    .Toggle {
      transition: all 150ms;
      text-decoration: none;
      margin: 0;
      display: inline-flex;
      justify-content: flex-start;
      align-items: center;
      font-family: inherit;
      border-style: solid;
      outline: 0;
      letter-spacing: 0.3px;
      padding: 0 var(--dodo-ui-space-small);
      border-radius: inherit;
      position: relative;
      border-width: calc(var(--dodo-ui-element-border-width) * 2);
      border-color: var(--dodo-ui-Toggle-border-color);
    }

    .ToggleMessage {
      display: flex;
      align-items: center;
      margin-left: var(--dodo-ui-space);
      user-select: none;
    }

    .ToggleHandle {
      display: flex;
      border-radius: 50%;
      transition: all 150ms;
      height: var(--ToggleHandle-size);
      width: var(--ToggleHandle-size);
      background-color: var(--dodo-ui-ToggleHandle-bg);
      position: absolute;
      right: initial;
    }

    &.size {
      &--normal {
        font-size: 1rem;
        --ToggleHandle-size: calc(var(--dodo-ui-element-height-normal) / 1.8);
        --ToggleHandle-offset: calc(var(--dodo-ui-element-height-normal) / 1.7);

        .Toggle {
          height: calc(var(--dodo-ui-element-height-normal) / 1.2);
          width: calc(var(--dodo-ui-element-height-normal) * 1.5);
        }
      }

      &--small {
        font-size: 0.9rem;
        --ToggleHandle-size: calc(var(--dodo-ui-element-height-small) / 1.8);
        --ToggleHandle-offset: calc(var(--dodo-ui-element-height-small) / 1.9);

        .Toggle {
          height: calc(var(--dodo-ui-element-height-small) / 1.2);
          width: calc(var(--dodo-ui-element-height-small) * 1.5);
        }
      }

      &--large {
        font-size: 1.1rem;
        --ToggleHandle-size: calc(var(--dodo-ui-element-height-large) / 1.8);
        --ToggleHandle-offset: calc(var(--dodo-ui-element-height-large) / 1.6);

        .Toggle {
          height: calc(var(--dodo-ui-element-height-large) / 1.2);
          width: calc(var(--dodo-ui-element-height-large) * 1.5);
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
    }

    &.color {
      @include generate-dodo-ui-toggle-color(neutral);
      @include generate-dodo-ui-toggle-color(primary);
      @include generate-dodo-ui-toggle-color(secondary);
      @include generate-dodo-ui-toggle-color(safe);
      @include generate-dodo-ui-toggle-color(warning);
      @include generate-dodo-ui-toggle-color(danger);
    }

    &.disabled {
      cursor: initial;
      color: var(--dodo-ui-Toggle-disabled-color);

      .Toggle {
        background-color: var(--dodo-ui-Toggle-disabled-bg);
        border-color: var(--dodo-ui-Toggle-border-disabled-color);
      }

      .ToggleHandle {
        background-color: var(--dodo-ui-ToggleHandle-disabled-bg);
      }

      &:hover {
        color: var(--dodo-ui-Toggle-disabled-color);

        .Toggle {
          background-color: var(--dodo-ui-Toggle-disabled-bg);
        }
      }

      &:active {
        color: var(--dodo-ui-Toggle-disabled-color);

        .Toggle {
          background-color: var(--dodo-ui-Toggle-disabled-bg);
        }
      }
    }
  }
</style>
