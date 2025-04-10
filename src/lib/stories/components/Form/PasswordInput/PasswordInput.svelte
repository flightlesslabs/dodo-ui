<script lang="ts" module>
  export type PasswordInputToggleEvent = {
    event: Event;
    toggle: boolean;
  };
</script>

<script lang="ts">
  import type { ComponentSize } from '$lib/types.js';
  import type { Snippet } from 'svelte';
  import type {
    ChangeEventHandler,
    ClipboardEventHandler,
    FocusEventHandler,
    FormEventHandler,
  } from 'svelte/elements';
  import type { TextInputFocusEvent, TextInputRoundness } from '../TextInput/TextInput.svelte';
  import Icon from '@iconify/svelte';
  import UtilityButton from '$lib/stories/developer tools/components/UtilityButton/UtilityButton.svelte';

  interface PasswordInputProps {
    /** How large should the button be? */
    size?: ComponentSize;
    /** Input ref */
    ref?: HTMLInputElement;
    /** Toggle Password */
    passwordToggle?: boolean;
    /** Default Password Toggle State */
    defaultPasswordToggleState?: boolean;
    /** Toggle Password Icon */
    customPasswordToggleIcon?: (toggle: boolean) => Snippet;
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
    /** ontoggle event handler */
    ontoggle?: (e: PasswordInputToggleEvent) => void;
  }

  let {
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
    customPasswordToggleIcon,
    error = false,
    passwordToggle = true,
    defaultPasswordToggleState = false,
    value = $bindable<string>(),
    placeholder,
    ontoggle,
    ref = $bindable<HTMLInputElement>(),
  }: PasswordInputProps = $props();

  let focused: boolean = $state(false);
  let toggle: boolean = $state(defaultPasswordToggleState);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let customPasswordToggleIconTyped = customPasswordToggleIcon as any;

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

  function ontoggleMod(e: Event) {
    toggle = !toggle;

    const customEvent: PasswordInputToggleEvent = {
      event: e,
      toggle,
    };

    if (ontoggle) {
      ontoggle(customEvent);
    }
  }
</script>

<div
  class:outline
  class:disabled
  class:error
  class:focused
  class:toggle
  class={['dodo-ui-PasswordInput', `size--${size}`, `roundness--${roundness}`, className].join(' ')}
>
  {#if before}
    <span class="content--before">
      {@render before()}
    </span>
  {/if}
  <input
    type={passwordToggle && toggle ? 'text' : 'password'}
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
    bind:this={ref}
  />

  {#if passwordToggle && !disabled}
    <UtilityButton {size} title="Toggle password" class="passwordToggle" onclick={ontoggleMod}>
      {#if customPasswordToggleIcon}
        {@render customPasswordToggleIconTyped(toggle)}
      {:else if toggle}
        <Icon icon="mdi:eye-off" width="24" height="24" />
      {:else}
        <Icon icon="mdi:eye" width="24" height="24" />
      {/if}
    </UtilityButton>
  {/if}

  {#if after}
    <span class="content--after">
      {@render after()}
    </span>
  {/if}
</div>

<style lang="scss">
  :global(:root) {
    --dodo-ui-PasswordInput-border-color: var(--dodo-color-default-500);
    --dodo-ui-PasswordInput-focus-border-color: var(--dodo-color-primary-500);
    --dodo-ui-PasswordInput-error-border-color: var(--dodo-color-danger-500);

    --dodo-ui-PasswordInput-disabled-color: var(--dodo-color-default-400);
    --dodo-ui-PasswordInput-disabled-bg: var(--dodo-color-default-200);
  }

  :global(.dodo-theme--dark) {
    --dodo-ui-PasswordInput-border-color: var(--dodo-color-default-600);
    --dodo-ui-PasswordInput-focus-border-color: var(--dodo-color-primary-600);
    --dodo-ui-PasswordInput-error-border-color: var(--dodo-color-danger-600);

    --dodo-ui-PasswordInput-disabled-bg: var(--dodo-color-default-100);
    --dodo-ui-PasswordInput-disabled-color: var(--dodo-color-default-500);
  }

  .dodo-ui-PasswordInput {
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
      border-color: var(--dodo-ui-PasswordInput-border-color);
    }

    &.focused {
      border-color: var(--dodo-ui-PasswordInput-focus-border-color);
    }

    &.error {
      border-color: var(--dodo-ui-PasswordInput-error-border-color);
    }

    &.disabled {
      cursor: initial;
      background-color: var(--dodo-ui-PasswordInput-disabled-bg);
      color: var(--dodo-ui-PasswordInput-disabled-color);
      border-color: var(--dodo-ui-PasswordInput-disabled-bg);
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
