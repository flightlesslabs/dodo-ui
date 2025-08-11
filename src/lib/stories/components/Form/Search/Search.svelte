<script lang="ts" module>
  import type { ComponentRoundness } from '$lib/types/roundness.js';
  import type { ComponentSize } from '$lib/types/size.js';

  import type { Snippet } from 'svelte';
  import type {
    ChangeEventHandler,
    ClipboardEventHandler,
    FocusEventHandler,
    FormEventHandler,
    KeyboardEventHandler,
  } from 'svelte/elements';

  export interface SearchProps {
    /** Input ref */
    ref?: HTMLInputElement;
    /** How large should the button be? */
    size?: ComponentSize;
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
    /** onsearch event handler */
    onsearch?: () => void;
    /** onclear event handler */
    onclear?: () => void;
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
    /** onkeydown event handler */
    onkeydown?: KeyboardEventHandler<HTMLInputElement>;
    /** onkeypress event handler */
    onkeypress?: KeyboardEventHandler<HTMLInputElement>;
    /** onkeyup event handler */
    onkeyup?: KeyboardEventHandler<HTMLInputElement>;
    /** custom Search Icon */
    customSearchIcon?: () => Snippet;
    /** search Icon Position */
    searchIconPosition?: IconPosition;
  }
</script>

<script lang="ts">
  import InputEnclosure from '$lib/stories/developer tools/components/InputEnclosure/InputEnclosure.svelte';
  import { type DynamicInputFocusEvent } from '$lib/stories/developer tools/components/DynamicInput/DynamicInput.svelte';
  import type { TextInputFocusEvent, TextInputKeyboardEvent } from '../TextInput/TextInput.svelte';
  import UtilityButton from '$lib/stories/developer tools/components/UtilityButton/UtilityButton.svelte';
  import Icon from '@iconify/svelte';
  import UtilityIcon from '$lib/stories/developer tools/components/UtilityIcon/UtilityIcon.svelte';
  import type { IconPosition } from '$lib/types/special.js';

  let {
    size = 'normal',
    roundness = 1,
    outline = true,
    name,
    id,
    class: className = '',
    disabled = false,
    onsearch,
    onclear,
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
    error = false,
    value = $bindable<string>(),
    placeholder,
    ref = $bindable<HTMLInputElement>(),
    readonly = false,
    customSearchIcon,
    searchIconPosition = 'before',
  }: SearchProps = $props();

  let focused: boolean = $state(false);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let customSearchIconTyped = customSearchIcon as any;

  function onfocusMod(e: DynamicInputFocusEvent) {
    const eTyped = e as TextInputFocusEvent;
    if (onfocus) {
      onfocus(eTyped);
    }
  }

  function onblurMod(e: DynamicInputFocusEvent) {
    const eTyped = e as TextInputFocusEvent;

    if (onblur) {
      onblur(eTyped);
    }
  }

  function onkeydownMod(e: TextInputKeyboardEvent) {
    const eTyped = e as TextInputKeyboardEvent;

    if (onkeydown) {
      onkeydown(eTyped);
    }

    if (e.key === 'Enter' && onsearch) {
      e.preventDefault();

      onsearch();
      return;
    }

    if (e.key === 'Escape' && onclear) {
      e.preventDefault();

      onclear();
      return;
    }
  }
</script>

{#snippet searchIcon()}
  <UtilityIcon {size} {disabled}>
    {#if customSearchIconTyped}
      {@render customSearchIconTyped()}
    {:else}
      <Icon icon="material-symbols:search-rounded" width="24" height="24" />
    {/if}
  </UtilityIcon>
{/snippet}

<div
  class:outline
  class:disabled
  class:error
  class:focused
  class={['dodo-ui-Search', `size--${size}`, `roundness--${roundness}`, className].join(' ')}
>
  <InputEnclosure {outline} {disabled} {error} {focused} {size} {roundness} {before} {after}>
    {#if searchIconPosition === 'before'}
      <div class="SearchIcon before">
        {@render searchIcon()}
      </div>
    {/if}

    <input
      type="search"
      {name}
      {id}
      {disabled}
      bind:this={ref}
      bind:focused
      {oninput}
      {onchange}
      onfocus={onfocusMod}
      onblur={onblurMod}
      {onpaste}
      {oncopy}
      {oncut}
      onkeydown={onkeydownMod}
      onkeypress={onkeypress ? (e) => onkeypress(e as TextInputKeyboardEvent) : undefined}
      onkeyup={onkeyup ? (e) => onkeyup(e as TextInputKeyboardEvent) : undefined}
      {placeholder}
      bind:value
      {readonly}
    />

    {#if value && onclear && !disabled}
      <div class="SearchClear">
        <UtilityButton {size} title="Clear" onclick={onclear}>
          <Icon icon="material-symbols:close-small" width="24" height="24" />
        </UtilityButton>
      </div>
    {/if}

    {#if searchIconPosition === 'after'}
      <div class="SearchIcon after">
        {@render searchIcon()}
      </div>
    {/if}
  </InputEnclosure>
</div>

<style lang="scss">
  .dodo-ui-Search {
    input {
      flex: 1;
      border: 0;
      outline: 0;
      height: 100%;
      background-color: transparent;
      font-family: inherit;
      color: inherit;
      letter-spacing: 0.3px;
      margin: 0;

      &::-webkit-search-decoration,
      &::-webkit-search-cancel-button,
      &::-webkit-search-results-button,
      &::-webkit-search-results-decoration {
        display: none;
      }
    }

    .SearchIcon {
      display: flex;
    }

    &.size {
      &--normal {
        .SearchIcon {
          &.before {
            margin-right: calc(calc(var(--dodo-ui-space-small) * 2) * -1);
          }
        }

        input {
          font-size: 1rem;
          padding: 0 calc(var(--dodo-ui-space-small) * 2);
        }
      }

      &--small {
        .SearchIcon {
          &.before {
            margin-right: calc(var(--dodo-ui-space) * -1);
          }
        }

        input {
          padding: 0 var(--dodo-ui-space);
          font-size: 0.9rem;
        }
      }

      &--large {
        .SearchIcon {
          &.before {
            margin-right: calc(calc(var(--dodo-ui-space) * 2) * -1);
          }
        }

        input {
          font-size: 1.1rem;
          padding: 0 calc(var(--dodo-ui-space) * 2);
        }
      }
    }
  }
</style>
