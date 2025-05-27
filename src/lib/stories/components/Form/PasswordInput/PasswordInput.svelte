<script lang="ts" module>
  import type { ComponentSize } from '$lib/types/size.js';
  import type { ComponentRoundness } from '$lib/types/roundness.js';
  import type { Snippet } from 'svelte';
  import type {
    ChangeEventHandler,
    ClipboardEventHandler,
    FocusEventHandler,
    FormEventHandler,
    KeyboardEventHandler,
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
    /** onkeydown event handler */
    onkeydown?: KeyboardEventHandler<HTMLInputElement>;
    /** onkeypress event handler */
    onkeypress?: KeyboardEventHandler<HTMLInputElement>;
    /** onkeyup event handler */
    onkeyup?: KeyboardEventHandler<HTMLInputElement>;
  }
</script>

<script lang="ts">
  import Icon from '@iconify/svelte';
  import UtilityButton from '$lib/stories/developer tools/components/UtilityButton/UtilityButton.svelte';
  import InputEnclosure from '$lib/stories/developer tools/components/InputEnclosure/InputEnclosure.svelte';
  import type { TextInputFocusEvent, TextInputKeyboardEvent } from '../TextInput/TextInput.svelte';
  import { DynamicInput, type DynamicInputFocusEvent } from '$lib/index.js';

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
    onkeydown,
    onkeypress,
    onkeyup,
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

  function onfocusMod(e: DynamicInputFocusEvent) {
    const eTyped = e as TextInputFocusEvent;
    focused = true;

    if (onfocus) {
      onfocus(eTyped);
    }
  }

  function onblurMod(e: DynamicInputFocusEvent) {
    const eTyped = e as TextInputFocusEvent;
    focused = false;

    if (onblur) {
      onblur(eTyped);
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
    <DynamicInput
      type={passwordToggle && toggle ? 'text' : 'password'}
      {name}
      {id}
      {disabled}
      bind:ref
      {oninput}
      {onchange}
      onfocus={onfocusMod}
      onblur={onblurMod}
      {onpaste}
      {oncopy}
      {oncut}
      onkeydown={onkeydown ? (e) => onkeydown(e as TextInputKeyboardEvent) : undefined}
      onkeypress={onkeypress ? (e) => onkeypress(e as TextInputKeyboardEvent) : undefined}
      onkeyup={onkeyup ? (e) => onkeyup(e as TextInputKeyboardEvent) : undefined}
      {placeholder}
      bind:value
      {readonly}
      variant="input"
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
    &.size {
      &--normal {
        .passwordToggle {
          &.after {
            margin-right: calc(var(--dodo-ui-space-small) * 2);
          }
        }
      }

      &--small {
        .passwordToggle {
          &.after {
            margin-right: var(--dodo-ui-space);
          }
        }
      }

      &--large {
        .passwordToggle {
          &.after {
            margin-right: calc(var(--dodo-ui-space) * 2);
          }
        }
      }
    }
  }
</style>
