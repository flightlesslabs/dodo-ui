<script lang="ts" module>
  import type { ComponentRoundness } from '$lib/types/roundness.js';
  import type { ComponentSize } from '$lib/types/size.js';
  import type { Snippet } from 'svelte';

  export interface InputEnclosureProps {
    /** InputEnclosure contents goes here */
    children?: Snippet;
    /** InputEnclosure ref */
    ref?: HTMLDivElement;
    /** How large should the button be? */
    size?: ComponentSize;
    /** How round should the border radius be? */
    roundness?: ComponentRoundness;
    /** Add a border around the button. Default True */
    outline?: boolean;
    /** disabled state */
    disabled?: boolean;
    /** is there any associated Error ? */
    error?: boolean;
    /** is focused */
    focused?: boolean;
    /** Icon before button content */
    before?: Snippet;
    /** Icon after button content */
    after?: Snippet;
    /** Custom css class*/
    class?: string;
  }
</script>

<script lang="ts">
  let {
    size = 'normal',
    roundness = 1,
    outline = true,
    class: className = '',
    disabled = false,
    before,
    after,
    error = false,
    focused = false,
    children,
    ref = $bindable<HTMLDivElement>(),
  }: InputEnclosureProps = $props();
</script>

<div
  class:outline
  class:disabled
  class:error
  class:focused
  class={['dodo-ui-InputEnclosure', `size--${size}`, `roundness--${roundness}`, className].join(
    ' ',
  )}
  bind:this={ref}
>
  {#if before}
    <span class="content--before">
      {@render before()}
    </span>
  {/if}

  {#if children}
    {@render children()}
  {/if}

  {#if after}
    <span class="content--after">
      {@render after()}
    </span>
  {/if}
</div>

<style lang="scss">
  :global(:root) {
    --dodo-ui-InputEnclosure-border-color: var(--dodo-color-neutral-500);
    --dodo-ui-InputEnclosure-focus-border-color: var(--dodo-color-primary-500);
    --dodo-ui-InputEnclosure-error-border-color: var(--dodo-color-danger-500);

    --dodo-ui-InputEnclosure-disabled-color: var(--dodo-color-neutral-400);
    --dodo-ui-InputEnclosure-disabled-bg: var(--dodo-color-neutral-200);
  }

  :global(.dodo-theme--dark) {
    --dodo-ui-InputEnclosure-border-color: var(--dodo-color-neutral-600);
    --dodo-ui-InputEnclosure-focus-border-color: var(--dodo-color-primary-600);
    --dodo-ui-InputEnclosure-error-border-color: var(--dodo-color-danger-600);

    --dodo-ui-InputEnclosure-disabled-bg: var(--dodo-color-neutral-100);
    --dodo-ui-InputEnclosure-disabled-color: var(--dodo-color-neutral-500);
  }

  .dodo-ui-InputEnclosure {
    display: flex;
    overflow: hidden;
    color: var(--dodo-color-neutral-800);
    transition: all 150ms;
    border: 0;

    &.outline {
      border-style: solid;
      border-width: var(--dodo-ui-element-border-width);
      border-color: var(--dodo-ui-InputEnclosure-border-color);
    }

    &.focused {
      border-color: var(--dodo-ui-InputEnclosure-focus-border-color);
    }

    &.error {
      border-color: var(--dodo-ui-InputEnclosure-error-border-color);
    }

    &.disabled {
      cursor: initial;
      background-color: var(--dodo-ui-InputEnclosure-disabled-bg);
      color: var(--dodo-ui-InputEnclosure-disabled-color);
      border-color: var(--dodo-ui-InputEnclosure-disabled-bg);
    }

    .content {
      &--after,
      &--before {
        &:empty {
          display: none;
        }
      }

      &--after,
      &--before {
        display: inline-flex;
        height: 100%;
        align-items: center;
      }
    }

    &.size {
      &--normal {
        height: var(--dodo-ui-element-height-normal);

        .content {
          &--before {
            margin-left: 12px;
            margin-right: -4px;
          }

          &--after {
            margin-right: 12px;
            margin-left: -4px;
          }
        }
      }

      &--small {
        height: var(--dodo-ui-element-height-small);

        .content {
          &--before {
            margin-left: 8px;
            margin-right: -2px;
          }

          &--after {
            margin-right: 8px;
            margin-left: -2px;
          }
        }
      }

      &--large {
        height: var(--dodo-ui-element-height-large);

        .content {
          &--before {
            margin-left: 14px;
            margin-right: -4px;
          }

          &--after {
            margin-right: 14px;
            margin-left: -4px;
          }
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
  }
</style>
