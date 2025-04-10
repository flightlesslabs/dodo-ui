<script lang="ts" module>
  export type SimpleSelectRoundness = ComponentRoundness | false;

  export type SimpleSelectFocusEvent = FocusEvent & {
    currentTarget: EventTarget & HTMLSelectElement;
  };

  export type SimpleSelectOption = {
    value: string;
    label: string;
    disabled?: boolean;
  };
</script>

<script lang="ts">
  import type { ComponentRoundness, ComponentSize } from '$lib/types.js';
  import type { Snippet } from 'svelte';
  import type { ChangeEventHandler, FocusEventHandler } from 'svelte/elements';

  interface SimpleSelectProps {
    /** Select ref */
    ref?: HTMLSelectElement;
    /** How large should the button be? */
    size?: ComponentSize;
    /** How round should the border radius be? */
    roundness?: SimpleSelectRoundness;
    /** How round should the border radius be? */
    options: SimpleSelectOption[];
    /** Add a border around the button. Default True */
    outline?: boolean;
    /** Select value */
    value?: string;
    /** How round should the border radius be? */
    placeholder?: string;
    /** disabled state */
    disabled?: boolean;
    /** is there any associated Error ? */
    error?: boolean;
    /** Name */
    name?: string;
    /** Id */
    id?: string;
    /** Icon before button content */
    before?: Snippet;
    /** Icon after button content */
    after?: Snippet;
    /** Custom css class*/
    class?: string;
    /** onchange event handler */
    onchange?: ChangeEventHandler<HTMLSelectElement>;
    /** onblur event handler */
    onblur?: FocusEventHandler<HTMLSelectElement>;
    /** onfocus event handler */
    onfocus?: FocusEventHandler<HTMLSelectElement>;
  }

  let {
    size = 'normal',
    roundness = '1x',
    outline = true,
    name,
    id,
    class: className = '',
    disabled = false,
    onchange,
    onblur,
    onfocus,
    before,
    after,
    error = false,
    value,
    placeholder,
    ref = $bindable<HTMLSelectElement>(),
    options,
  }: SimpleSelectProps = $props();

  let focused: boolean = $state(false);

  function onfocusMod(e: SimpleSelectFocusEvent) {
    focused = true;

    if (onfocus) {
      onfocus(e);
    }
  }

  function onblurMod(e: SimpleSelectFocusEvent) {
    focused = false;

    if (onblur) {
      onblur(e);
    }
  }
</script>

<div
  class:outline
  class:disabled
  class:error
  class:focused
  class={['dodo-ui-SimpleSelect', `size--${size}`, `roundness--${roundness}`, className].join(' ')}
>
  {#if before}
    <span class="content--before">
      {@render before()}
    </span>
  {/if}
  <select
    {name}
    {id}
    {disabled}
    {onchange}
    onfocus={onfocusMod}
    onblur={onblurMod}
    {placeholder}
    bind:this={ref}
  >
    {#each options as option (option.value)}
      <option value={option.value} disabled={option.disabled} selected={value === option.value}>
        {option.label}
      </option>
    {/each}
  </select>
  {#if after}
    <span class="content--after">
      {@render after()}
    </span>
  {/if}
</div>

<style lang="scss">
  :global(:root) {
    --dodo-ui-SimpleSelect-border-color: var(--dodo-color-default-500);
    --dodo-ui-SimpleSelect-focus-border-color: var(--dodo-color-primary-500);
    --dodo-ui-SimpleSelect-error-border-color: var(--dodo-color-danger-500);

    --dodo-ui-SimpleSelect-disabled-color: var(--dodo-color-default-400);
    --dodo-ui-SimpleSelect-disabled-bg: var(--dodo-color-default-200);
  }

  :global(.dodo-theme--dark) {
    --dodo-ui-SimpleSelect-border-color: var(--dodo-color-default-600);
    --dodo-ui-SimpleSelect-focus-border-color: var(--dodo-color-primary-600);
    --dodo-ui-SimpleSelect-error-border-color: var(--dodo-color-danger-600);

    --dodo-ui-SimpleSelect-disabled-bg: var(--dodo-color-default-100);
    --dodo-ui-SimpleSelect-disabled-color: var(--dodo-color-default-500);
  }

  .dodo-ui-SimpleSelect {
    display: flex;
    overflow: hidden;
    color: var(--dodo-color-default-800);
    transition: all 150ms;
    border: 0;

    select {
      flex: 1;
      border: 0;
      outline: 0;
      height: 100%;
      background-color: transparent;
      font-family: inherit;
      color: inherit;
      letter-spacing: 0.3px;
    }

    &.outline {
      border-style: solid;
      border-width: var(--dodo-ui-element-border-width);
      border-color: var(--dodo-ui-SimpleSelect-border-color);
    }

    &.focused {
      border-color: var(--dodo-ui-SimpleSelect-focus-border-color);
    }

    &.error {
      border-color: var(--dodo-ui-SimpleSelect-error-border-color);
    }

    &.disabled {
      cursor: initial;
      background-color: var(--dodo-ui-SimpleSelect-disabled-bg);
      color: var(--dodo-ui-SimpleSelect-disabled-color);
      border-color: var(--dodo-ui-SimpleSelect-disabled-bg);
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
        select {
          font-size: 1rem;
          padding: 0 12px;
        }

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
        select {
          padding: 0 8px;
          font-size: 0.9rem;
        }

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
        select {
          font-size: 1.1rem;
          padding: 0 14px;
        }

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
      &--1x {
        border-radius: var(--dodo-ui-element-roundness-1x);
      }

      &--2x {
        border-radius: var(--dodo-ui-element-roundness-2x);
      }

      &--3x {
        border-radius: var(--dodo-ui-element-roundness-3x);
      }
    }
  }
</style>
