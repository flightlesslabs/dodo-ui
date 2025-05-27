<script lang="ts" module>
  import { type ComponentSize, type TextInputType } from '$lib/index.js';
  import type { Snippet } from 'svelte';
  import type {
    ChangeEventHandler,
    ClipboardEventHandler,
    FocusEventHandler,
    FormEventHandler,
    KeyboardEventHandler,
    MouseEventHandler,
  } from 'svelte/elements';

  export type DynamicInputVariant = 'input' | 'button';

  export const dynamicInputVariantArray: DynamicInputVariant[] = ['input', 'button'];

  export type DynamicInputClickEvent = MouseEvent & {
    currentTarget: EventTarget & HTMLButtonElement;
  };

  export type DynamicInputFocusEvent = FocusEvent & {
    currentTarget: EventTarget & (HTMLInputElement | HTMLButtonElement);
  };

  export type DynamicInputKeyboardEvent = KeyboardEvent & {
    currentTarget: EventTarget & (HTMLInputElement | HTMLButtonElement);
  };

  export interface DynamicInputProps {
    /** How large should the button be? */
    size?: ComponentSize;
    /** Input type? */
    type?: TextInputType;
    /** Input ref */
    ref?: HTMLInputElement | HTMLButtonElement;
    /** Input value */
    value?: string | number;
    /** is focused, set focused */
    focused?: boolean;
    /** variant */
    variant?: DynamicInputVariant;
    /** How round should the border radius be? */
    placeholder?: string;
    /** disabled state */
    disabled?: boolean;
    /** Read only ? */
    readonly?: boolean;
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
    /** The onclick event handler */
    onclick?: MouseEventHandler<HTMLButtonElement>;
    /** oninput event handler */
    oninput?: FormEventHandler<HTMLInputElement>;
    /** onchange event handler */
    onchange?: ChangeEventHandler<HTMLInputElement>;
    /** onblur event handler */
    onblur?: FocusEventHandler<HTMLInputElement | HTMLButtonElement>;
    /** onfocus event handler */
    onfocus?: FocusEventHandler<HTMLInputElement | HTMLButtonElement>;
    /** onpaste event handler */
    onpaste?: ClipboardEventHandler<HTMLInputElement>;
    /** oncopy event handler */
    oncopy?: ClipboardEventHandler<HTMLInputElement>;
    /** oncut event handler */
    oncut?: ClipboardEventHandler<HTMLInputElement>;
    /** onkeydown event handler */
    onkeydown?: KeyboardEventHandler<HTMLInputElement | HTMLButtonElement>;
    /** onkeypress event handler */
    onkeypress?: KeyboardEventHandler<HTMLInputElement | HTMLButtonElement>;
    /** onkeyup event handler */
    onkeyup?: KeyboardEventHandler<HTMLInputElement | HTMLButtonElement>;
    /** custom Content Formatting for variant button */
    customInputContent?: (value: string | number) => Snippet;
  }
</script>

<script lang="ts">
  let {
    type = 'text',
    name,
    id,
    class: className = '',
    disabled = false,
    onchange,
    oninput,
    onblur,
    onfocus,
    onpaste,
    oncopy,
    oncut,
    onkeydown,
    onkeypress,
    onkeyup,
    value = $bindable<string | number>(),
    focused = $bindable<boolean>(),
    placeholder,
    ref = $bindable<HTMLInputElement | HTMLButtonElement>(),
    readonly = false,
    variant = 'input',
    size = 'normal',
    onclick,
    customInputContent,
  }: DynamicInputProps = $props();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let customInputContentTyped = customInputContent as any;

  function onclickMod(e: DynamicInputClickEvent) {
    if (onfocus) {
      onfocus(e);
    }

    if (onclick) {
      onclick(e);
    }
  }

  function onfocusMod(e: DynamicInputFocusEvent) {
    focused = true;

    if (onfocus) {
      onfocus(e);
    }
  }

  function onblurMod(e: DynamicInputFocusEvent) {
    focused = false;

    if (onblur) {
      onblur(e);
    }
  }
</script>

{#if variant === 'button'}
  <button
    {id}
    class={[
      'dodo-ui-DynamicInput',
      `size--${size}`,
      `variant--${variant}`,
      `${!value ? 'placeholder' : ''}`,
      className,
    ].join(' ')}
    bind:this={ref}
    onclick={onclickMod}
    {onkeydown}
    {onkeypress}
    {onkeyup}
    onfocus={onfocusMod}
    onblur={onblurMod}
    {disabled}
  >
    {#if customInputContentTyped}
      {@render customInputContentTyped(value)}
    {:else}
      {`${value}` || placeholder}
    {/if}
  </button>
{:else}
  <input
    class={['dodo-ui-DynamicInput', `size--${size}`, `variant--${variant}`, className].join(' ')}
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
    {onkeydown}
    {onkeypress}
    {onkeyup}
    {placeholder}
    bind:value
    bind:this={ref}
    {readonly}
  />
{/if}

<style lang="scss">
  .dodo-ui-DynamicInput {
    flex: 1;
    border: 0;
    outline: 0;
    height: 100%;
    background-color: transparent;
    font-family: inherit;
    color: inherit;
    letter-spacing: 0.3px;

    margin: 0;

    &.variant {
      &--button {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        cursor: pointer;

        &.placeholder {
          opacity: 0.6;
        }
      }
    }

    &.size {
      &--normal {
        font-size: 1rem;
        padding: 0 calc(var(--dodo-ui-space-small) * 2);
      }

      &--small {
        padding: 0 var(--dodo-ui-space);
        font-size: 0.9rem;
      }

      &--large {
        font-size: 1.1rem;
        padding: 0 calc(var(--dodo-ui-space) * 2);
      }
    }
  }
</style>
