<script lang="ts" module>
  export type TextInputRoundness = ComponentRoundness | false;
  export type TextInputType = 'text' | 'tel' | 'email' | 'password' | 'url' | 'number';
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
    error?: string | boolean;
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

  const isError = $derived(error ? true : false);
  let isFocused: boolean = $state(false);

  function onfocusMod(
    e: FocusEvent & {
      currentTarget: EventTarget & HTMLInputElement;
    },
  ) {
    isFocused = true;

    if (onfocus) {
      onfocus(e);
    }
  }

  function onblurMod(
    e: FocusEvent & {
      currentTarget: EventTarget & HTMLInputElement;
    },
  ) {
    isFocused = false;

    if (onblur) {
      onblur(e);
    }
  }
</script>

<div
  class:outline
  class:disabled
  class:isError
  class:isFocused
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
  }

  :global(.dodo-theme--dark) {
    --dodo-ui-TextInput-border-color: var(--dodo-color-default-600);
    --dodo-ui-TextInput-focus-border-color: var(--dodo-color-primary-600);
    --dodo-ui-TextInput-error-border-color: var(--dodo-color-danger-600);
  }

  .dodo-ui-TextInput {
    display: flex;
    box-sizing: border-box;
    overflow: hidden;
    color: var(--dodo-color-default-800);
    transition: all 150ms;

    input {
      flex: 1;
      box-sizing: border-box;
      border: 0;
      outline: 0;
      height: 100%;
      background-color: transparent;
      font-family: inherit;
      color: inherit;
    }

    &.outline {
      border: 1px solid;
      border-color: var(--dodo-ui-TextInput-border-color);
    }

    &.isFocused {
      border-color: var(--dodo-ui-TextInput-focus-border-color);
    }

    &.isError {
      border-color: var(--dodo-ui-TextInput-error-border-color);
    }

    &.size {
      &--normal {
        height: var(--dodo-ui-element-height-normal);
        input {
          font-size: 1rem;
          padding: 0 16px;
        }
      }

      &--small {
        height: var(--dodo-ui-element-height-small);
        input {
          padding: 0 8px;
          font-size: 0.9rem;
        }
      }

      &--large {
        height: var(--dodo-ui-element-height-large);
        input {
          font-size: 1.1rem;
          padding: 0 16px;
        }
      }
    }

    &.roundness {
      &--1x {
        border-radius: var(--dodo-ui-element-roundness-1);
      }

      &--2x {
        border-radius: var(--dodo-ui-element-roundness-2);
      }

      &--3x {
        border-radius: var(--dodo-ui-element-roundness-3);
      }
    }

    .content {
      &--after,
      &--before {
        display: inline-flex;
        height: 100%;
        align-items: center;
      }

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
</style>
