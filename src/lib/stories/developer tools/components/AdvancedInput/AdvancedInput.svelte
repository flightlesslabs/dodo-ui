<script lang="ts" module>
  import { type ComponentSize, type TextInputType } from '$lib/index.js';
  import type { Snippet } from 'svelte';
  import type {
    ChangeEventHandler,
    ClipboardEventHandler,
    FocusEventHandler,
    FormEventHandler,
    MouseEventHandler,
  } from 'svelte/elements';

  export type AdvancedInputVariant = 'input' | 'button';

  export const advancedInputVariantArray: AdvancedInputVariant[] = ['input', 'button'];

  export type AdvancedInputClickEvent = MouseEvent & {
    currentTarget: EventTarget & HTMLButtonElement;
  };

  export type AdvancedInputFocusEvent = FocusEvent & {
    currentTarget: EventTarget & (HTMLInputElement | HTMLButtonElement);
  };

  export interface AdvancedInputProps {
    /** How large should the button be? */
    size?: ComponentSize;
    /** Input type? */
    type?: TextInputType;
    /** Input ref */
    ref?: HTMLInputElement | HTMLButtonElement;
    /** Input value */
    value?: string | number;
    /** variant */
    variant?: AdvancedInputVariant;
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
    value = $bindable<string | number>(),
    placeholder,
    ref = $bindable<HTMLInputElement | HTMLButtonElement>(),
    readonly = false,
    variant = 'input',
    size = 'normal',
    onclick,
    customInputContent,
  }: AdvancedInputProps = $props();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let customInputContentTyped = customInputContent as any;

  function onclickMod(e: AdvancedInputClickEvent) {
    if (onfocus) {
      onfocus(e);
    }

    if (onclick) {
      onclick(e);
    }
  }
</script>

{#if variant === 'button'}
  <button
    {id}
    class={[
      'dodo-ui-AdvancedInput',
      `size--${size}`,
      `variant--${variant}`,
      `${`${value}`.trim() === '' ? 'placeholder' : ''}`,
      className,
    ].join(' ')}
    bind:this={ref}
    onclick={onclickMod}
    {onblur}
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
    class={['dodo-ui-AdvancedInput', `size--${size}`, `variant--${variant}`, className].join(' ')}
    {type}
    {name}
    {id}
    {disabled}
    {oninput}
    {onchange}
    {onfocus}
    {onblur}
    {onpaste}
    {oncopy}
    {oncut}
    {placeholder}
    bind:value
    bind:this={ref}
    {readonly}
  />
{/if}

<style lang="scss">
  .dodo-ui-AdvancedInput {
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
