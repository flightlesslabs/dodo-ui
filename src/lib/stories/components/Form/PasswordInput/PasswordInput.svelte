<script lang="ts" module>
  import type { ComponentSize } from '$lib/types/size.js';
  import type { ComponentRoundness } from '$lib/types/roundness.js';
  import type { Snippet } from 'svelte';
  import type {
    ChangeEventHandler,
    ClipboardEventHandler,
    FocusEventHandler,
    FormEventHandler,
  } from 'svelte/elements';

  export type PasswordInputToggleEvent = {
    event: Event;
    toggle: boolean;
  };

  export interface PasswordInputProps {
    /** How large should the button be? */
    size?: ComponentSize;
    /** Input ref */
    ref?: HTMLInputElement;
    /** Toggle Password */
    passwordToggle?: boolean;
    /** Default Password Toggle State */
    passwordToggleState?: boolean;
    /** Toggle Password Icon */
    customPasswordToggleIcon?: (toggle: boolean) => Snippet;
    /** How round should the border radius be? */
    roundness?: ComponentRoundness;
    /** Add a border around the button. Default True */
    outline?: boolean;
    /** Input value */
    value?: string;
    /** How round should the border radius be? */
    placeholder?: string;
    /** disabled state */
    disabled?: boolean;
    /** Read only ? */
    readonly?: boolean;
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
</script>

<script lang="ts">
  import Icon from '@iconify/svelte';
  import UtilityButton from '$lib/stories/developer tools/components/UtilityButton/UtilityButton.svelte';
  import InputEnclosure from '$lib/stories/developer tools/components/InputEnclosure/InputEnclosure.svelte';
  import type { TextInputFocusEvent } from '../TextInput/TextInput.svelte';

  let {
    size = 'normal',
    roundness = 1,
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
    passwordToggleState = $bindable<boolean>(),
    value = $bindable<string>(),
    placeholder,
    ontoggle,
    ref = $bindable<HTMLInputElement>(),
    readonly = false,
  }: PasswordInputProps = $props();

  let focused: boolean = $state(false);
  let toggle: boolean = $state(passwordToggleState);

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
  <InputEnclosure {outline} {disabled} {error} {focused} {size} {roundness} {before} {after}>
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
      {readonly}
    />

    {#if passwordToggle && !disabled}
      <div class:after class="passwordToggle">
        <UtilityButton {size} title="Toggle password" onclick={ontoggleMod}>
          {#if customPasswordToggleIcon}
            {@render customPasswordToggleIconTyped(toggle)}
          {:else if toggle}
            <Icon icon="mdi:eye-off" width="24" height="24" />
          {:else}
            <Icon icon="mdi:eye" width="24" height="24" />
          {/if}
        </UtilityButton>
      </div>
    {/if}
  </InputEnclosure>
</div>

<style lang="scss">
  .dodo-ui-PasswordInput {
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

    &.size {
      &--normal {
        input {
          font-size: 1rem;
          padding: 0 calc(var(--dodo-ui-space-small) * 2);
        }

        .passwordToggle {
          &.after {
            margin-right: calc(var(--dodo-ui-space-small) * 2);
          }
        }
      }

      &--small {
        input {
          padding: 0 var(--dodo-ui-space);
          font-size: 0.9rem;
        }

        .passwordToggle {
          &.after {
            margin-right: var(--dodo-ui-space);
          }
        }
      }

      &--large {
        input {
          font-size: 1.1rem;
          padding: 0 calc(var(--dodo-ui-space) * 2);
        }

        .passwordToggle {
          &.after {
            margin-right: calc(var(--dodo-ui-space) * 2);
          }
        }
      }
    }
  }
</style>
