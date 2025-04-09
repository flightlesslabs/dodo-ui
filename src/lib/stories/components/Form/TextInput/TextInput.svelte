<script lang="ts" module>
  export type TextInputRoundness = ComponentRoundness | false;
  export type TextInputType = 'text' | 'tel' | 'email' | 'password' | 'url' | 'number';

  export type TextInputFocusEvent = FocusEvent & {
    currentTarget: EventTarget & HTMLInputElement;
  };

  export type TextInputClipboardEvent = ClipboardEvent & {
    currentTarget: EventTarget & HTMLInputElement;
  };
</script>

<script lang="ts">
  import type { ComponentRoundness, ComponentSize } from '$lib/types.js';
  import type { Snippet } from 'svelte';
  import type {
    ChangeEventHandler,
    ClipboardEventHandler,
    FocusEventHandler,
    FormEventHandler,
  } from 'svelte/elements';

  interface TextInputProps {
    /** Input type? */
    type?: TextInputType;
    /** How large should the button be? */
    size?: ComponentSize;
    /** How round should the border radius be? */
    roundness?: TextInputRoundness;
    /** Add a border around the button. Default True */
    outline?: boolean;
    /** Input value */
    value?: string;
    /** How round should the border radius be? */
    placeholder?: string;
    /** Button disabled state */
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
    /** oninput event handler */
    oninput?: FormEventHandler<HTMLInputElement>;
    /** onchange event handler */
    onchange?: ChangeEventHandler<HTMLInputElement>;
    /** onblur event handler */
    onblur?: FocusEventHandler<HTMLInputElement>;
    /** onfocus event handler */
    onfocus?: FocusEventHandler<HTMLInputElement>;
    /** onpaste event handler */
    onpaste?: ClipboardEventHandler<HTMLInputElement>;
    /** oncopy event handler */
    oncopy?: ClipboardEventHandler<HTMLInputElement>;
    /** oncut event handler */
    oncut?: ClipboardEventHandler<HTMLInputElement>;
  }

  let {
    type = 'text',
    size = 'normal',
    roundness = '1x',
    outline = true,
    name,
    id,
    class: className = '',
    disabled = false,
    oninput,
    onchange,
    onblur,
    onfocus,
    onpaste,
    oncopy,
    oncut,
    before,
    after,
    error = false,
    value = $bindable<string>(),
    placeholder,
  }: TextInputProps = $props();

  let focused: boolean = $state(false);

  function onfocusMod(e: TextInputFocusEvent) {
    focused = true;

    if (onfocus) {
      onfocus(e);
    }
  }

  function onblurMod(e: TextInputFocusEvent) {
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
  class={['dodo-ui-TextInput', `size--${size}`, `roundness--${roundness}`, className].join(' ')}
>
  {#if before}
    <span class="content--before">
      {@render before()}
    </span>
  {/if}
  <input
    {type}
    {name}
    {id}
    {disabled}
    {oninput}
    {onchange}
    onfocus={onfocusMod}
    onblur={onblurMod}
    {onpaste}
    {oncopy}
    {oncut}
    {placeholder}
    bind:value
  />
  {#if after}
    <span class="content--after">
      {@render after()}
    </span>
  {/if}
</div>

<style lang="scss">
  :global(:root) {
    --dodo-ui-TextInput-border-color: var(--dodo-color-default-500);
    --dodo-ui-TextInput-focus-border-color: var(--dodo-color-primary-500);
    --dodo-ui-TextInput-error-border-color: var(--dodo-color-danger-500);

    --dodo-ui-TextInput-disabled-color: var(--dodo-color-default-400);
    --dodo-ui-TextInput-disabled-bg: var(--dodo-color-default-200);
  }

  :global(.dodo-theme--dark) {
    --dodo-ui-TextInput-border-color: var(--dodo-color-default-600);
    --dodo-ui-TextInput-focus-border-color: var(--dodo-color-primary-600);
    --dodo-ui-TextInput-error-border-color: var(--dodo-color-danger-600);

    --dodo-ui-TextInput-disabled-bg: var(--dodo-color-default-100);
    --dodo-ui-TextInput-disabled-color: var(--dodo-color-default-500);
  }

  .dodo-ui-TextInput {
    display: flex;
    overflow: hidden;
    color: var(--dodo-color-default-800);
    transition: all 150ms;
    border: 0;

    input {
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
      border-color: var(--dodo-ui-TextInput-border-color);
    }

    &.focused {
      border-color: var(--dodo-ui-TextInput-focus-border-color);
    }

    &.error {
      border-color: var(--dodo-ui-TextInput-error-border-color);
    }

    &.disabled {
      cursor: initial;
      background-color: var(--dodo-ui-TextInput-disabled-bg);
      color: var(--dodo-ui-TextInput-disabled-color);
      border-color: var(--dodo-ui-TextInput-disabled-bg);
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
        input {
          font-size: 1rem;
          padding: 0 16px;
        }

        .content {
          &--before {
            margin-left: 12px;
            margin-right: -6px;
          }

          &--after {
            margin-right: 12px;
            margin-left: -6px;
          }
        }
      }

      &--small {
        height: var(--dodo-ui-element-height-small);
        input {
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
        input {
          font-size: 1.1rem;
          padding: 0 16px;
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
