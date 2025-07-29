<script lang="ts" module>
  import type { ComponentColor } from '$lib/types/colors.js';
  import type { ComponentRoundness } from '$lib/types/roundness.js';
  import type { ComponentSize } from '$lib/types/size.js';
  import Icon from '@iconify/svelte';

  import type { Snippet } from 'svelte';
  import type { ChangeEventHandler } from 'svelte/elements';

  export interface CheckboxProps {
    /** Checkbox contents goes here */
    children?: Snippet;
    /** Checkbox ref */
    ref?: HTMLInputElement;
    /** How large should the checkbox be? */
    size?: ComponentSize;
    /** What color to use? */
    color?: ComponentColor;
    /** How round should the border radius be? */
    roundness?: ComponentRoundness;
    /** Checkbox disabled state */
    disabled?: boolean;
    /** Name */
    name?: string;
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
    /** indeterminate */
    indeterminate?: boolean;
    /** Check Icon */
    customCheckIcon?: (checked: boolean) => Snippet;
    /** indeterminate Icon */
    customIndeterminateIcon?: (checked: boolean) => Snippet;
  }
</script>

<script lang="ts">
  let {
    children,
    size = 'normal',
    color = 'primary',
    roundness = 1,
    name,
    id,
    title,
    class: className = '',
    disabled = false,
    checked = $bindable<boolean>(),
    indeterminate = false,
    ref = $bindable<HTMLInputElement>(),
    onchange,
    customCheckIcon,
    customIndeterminateIcon,
  }: CheckboxProps = $props();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let customCheckIconTyped = customCheckIcon as any;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let customIndeterminateIconTyped = customIndeterminateIcon as any;
</script>

{#snippet checkIconContent()}
  {#if size === 'small'}
    <Icon icon="material-symbols:check-rounded" width="24" height="24" />
  {:else if size === 'large'}
    <Icon icon="material-symbols:check-rounded" width="30" height="30" />
  {:else}
    <Icon icon="material-symbols:check-rounded" width="28" height="28" />
  {/if}
{/snippet}

{#snippet indeterminateIconContent()}
  {#if size === 'small'}
    <Icon icon="material-symbols:check-indeterminate-small-rounded" width="28" height="28" />
  {:else if size === 'large'}
    <Icon icon="material-symbols:check-indeterminate-small-rounded" width="34" height="34" />
  {:else}
    <Icon icon="material-symbols:check-indeterminate-small-rounded" width="32" height="32" />
  {/if}
{/snippet}

<label
  class:disabled
  class={[
    'dodo-ui-Checkbox',
    `size--${size}`,
    `color--${color}`,
    `roundness--${roundness}`,
    className,
  ].join(' ')}
  for={id}
>
  <input type="checkbox" {name} {id} {title} {disabled} {onchange} bind:this={ref} bind:checked />
  <div class="Checkbox">
    <div class="CheckboxIcon">
      {#if indeterminate && customIndeterminateIconTyped}
        {@render customIndeterminateIconTyped(checked)}
      {:else if indeterminate}
        {@render indeterminateIconContent()}
      {:else if customCheckIconTyped}
        {@render customCheckIconTyped(checked)}
      {:else}
        {@render checkIconContent()}
      {/if}
    </div>
  </div>

  {#if children}
    <div class="CheckboxMessage">
      {@render children()}
    </div>
  {/if}
</label>

<style lang="scss">
  @use 'utils/scss/mixins.scss' as *;

  :global(:root) {
    --dodo-ui-Checkbox-disabled-color: var(--dodo-color-neutral-400);
    --dodo-ui-Checkbox-disabled-bg: var(--dodo-color-neutral-200);
    --dodo-ui-Checkbox-border-disabled-color: var(--dodo-color-neutral-300);

    --dodo-ui-Checkbox-border-color: var(--dodo-color-neutral-400);

    @include generate-dodo-ui-checkbox-colors(neutral);
    @include generate-dodo-ui-checkbox-colors(primary);
    @include generate-dodo-ui-checkbox-colors(secondary);
    @include generate-dodo-ui-checkbox-colors(safe);
    @include generate-dodo-ui-checkbox-colors(warning);
    @include generate-dodo-ui-checkbox-colors(danger);
  }

  :global(.dodo-theme--dark) {
    --dodo-ui-Checkbox-disabled-bg: var(--dodo-color-neutral-100);
    --dodo-ui-Checkbox-disabled-color: var(--dodo-color-neutral-500);
    --dodo-ui-Checkbox-border-disabled-color: var(--dodo-color-neutral-400);

    --dodo-ui-Checkbox-border-color: var(--dodo-color-neutral-500);

    @include generate-dodo-ui-checkbox-colors-dark(neutral);
    @include generate-dodo-ui-checkbox-colors-dark(primary);
    @include generate-dodo-ui-checkbox-colors-dark(secondary);
    @include generate-dodo-ui-checkbox-colors-dark(safe);
    @include generate-dodo-ui-checkbox-colors-dark(warning);
    @include generate-dodo-ui-checkbox-colors-dark(danger);
  }

  .dodo-ui-Checkbox {
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

      &:checked {
        &:not([disabled]) {
          & + .Checkbox {
            .CheckboxIcon {
              color: var(--dodo-color-constant-white);
            }
          }
        }

        &[disabled] {
          & + .Checkbox {
            :global(.CheckboxIcon) {
              color: var(--dodo-ui-Checkbox-disabled-color);
            }
          }
        }
      }
    }

    .CheckboxIcon {
      color: transparent;
      display: flex;
      width: 100%;
      height: 100%;
      align-items: center;
      justify-content: center;
    }

    .Checkbox {
      transition: all 150ms;
      text-decoration: none;
      margin: 0;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      font-family: inherit;
      border-style: solid;
      border-width: calc(var(--dodo-ui-element-border-width) * 2);
      border-color: var(--dodo-ui-Checkbox-border-color);
      outline: 0;
      letter-spacing: 0.3px;
      border-radius: inherit;
      position: relative;
    }

    .CheckboxMessage {
      display: flex;
      align-items: center;
      margin-left: var(--dodo-ui-space);
      user-select: none;
    }

    &.size {
      &--normal {
        font-size: 1rem;

        .Checkbox {
          height: calc(var(--dodo-ui-element-height-normal) / 1.2);
          width: calc(var(--dodo-ui-element-height-normal) / 1.2);
        }
      }

      &--small {
        font-size: 0.9rem;

        .Checkbox {
          height: calc(var(--dodo-ui-element-height-small) / 1.2);
          width: calc(var(--dodo-ui-element-height-small) / 1.2);
        }
      }

      &--large {
        font-size: 1.1rem;

        .Checkbox {
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
      @include generate-dodo-ui-checkbox-color(neutral);
      @include generate-dodo-ui-checkbox-color(primary);
      @include generate-dodo-ui-checkbox-color(secondary);
      @include generate-dodo-ui-checkbox-color(safe);
      @include generate-dodo-ui-checkbox-color(warning);
      @include generate-dodo-ui-checkbox-color(danger);
    }

    &.disabled {
      cursor: initial;
      color: var(--dodo-ui-Checkbox-disabled-color);

      .Checkbox {
        background-color: var(--dodo-ui-Checkbox-disabled-bg);
        border-color: var(--dodo-ui-Checkbox-border-disabled-color);
      }

      &:hover {
        color: var(--dodo-ui-Checkbox-disabled-color);

        .Checkbox {
          background-color: var(--dodo-ui-Checkbox-disabled-bg);
        }
      }

      &:active {
        color: var(--dodo-ui-Checkbox-disabled-color);

        .Checkbox {
          background-color: var(--dodo-ui-Checkbox-disabled-bg);
        }
      }
    }
  }
</style>
