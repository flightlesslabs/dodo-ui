<script lang="ts" module>
  import type { ComponentSize } from '$lib/types/size.js';
  import type { ComponentRoundness } from '$lib/types/roundness.js';
  import type { Snippet } from 'svelte';
  import type {
    ChangeEventHandler,
    ClipboardEventHandler,
    FocusEventHandler,
    FormEventHandler,
    MouseEventHandler,
  } from 'svelte/elements';

  export type SelectOption = {
    value: string | number | boolean | null | undefined;
    label: string;
    disabled?: boolean;
  };

  export interface SelectProps {
    /** How large should the button be? */
    size?: ComponentSize;
    /** want a searchable Select? */
    options: SelectOption[];
    /** want a searchable Select? */
    searchable?: boolean;
    /** want a clearable Select? */
    clearable?: boolean;
    /** onselect event handler */
    onselect?: (val: SelectOption) => void;
    /** onclear event handler */
    onclear?: MouseEventHandler<HTMLButtonElement>;
    /** Select ref */
    ref?: HTMLInputElement | HTMLButtonElement;
    /** How round should the border radius be? */
    roundness?: ComponentRoundness;
    /** Add a border around the button. Default True */
    outline?: boolean;
    /** Select value */
    value: SelectOption;
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
    /** onchange event handler */
    onchange?: ChangeEventHandler<HTMLInputElement>;
    /** oninput event handler */
    oninput?: FormEventHandler<HTMLInputElement>;
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
    customInputContent?: (val: SelectOption) => Snippet;
    /** custom Content Formatting for variant button */
    customMenuItemContent?: (val: SelectOption, selected: boolean) => Snippet;
    /** Custom Popup Content */
    customPopupContent?: (options: SelectOption[], selectedOption: SelectOption) => Snippet;
    /** PopperPopup Max height. Use css compatible value */
    popupMaxHeight?: string;
    /** PaperProps: Paper component props for Popup */
    paperProps?: Partial<PaperProps>;
    /** PopperProps: Popper component props */
    popperProps?: Partial<PopperProps>;
    /** MenuProps: Menu component props */
    menuProps?: Partial<MenuProps>;
    /** MenuItem: Menu component props */
    menuItemProps?: Partial<MenuItemProps>;
  }
</script>

<script lang="ts">
  import InputEnclosure from '$lib/stories/developer tools/components/InputEnclosure/InputEnclosure.svelte';
  import UtilityButton from '$lib/stories/developer tools/components/UtilityButton/UtilityButton.svelte';
  import Icon from '@iconify/svelte';
  import {
    AdvancedInput,
    Menu,
    MenuItem,
    Popper,
    type AdvancedInputFocusEvent,
    type MenuItemProps,
    type MenuProps,
    type PaperProps,
    type PopperProps,
  } from '$lib/index.js';

  let {
    size = 'normal',
    roundness = 1,
    outline = true,
    name,
    id,
    class: className = '',
    disabled = false,
    onchange,
    oninput,
    onselect,
    onblur,
    onfocus,
    onpaste,
    oncopy,
    oncut,
    before,
    after,
    error = false,
    value,
    placeholder,
    ref = $bindable<HTMLInputElement | HTMLButtonElement>(),
    readonly = false,
    searchable = false,
    clearable = false,
    onclear,
    options,
    customInputContent: customInputContentInternal,
    customMenuItemContent: customMenuItemContentInternal,
    customPopupContent: customPopupContentInternal,
    popupMaxHeight = '300px',
    paperProps,
    popperProps,
    menuProps,
    menuItemProps,
  }: SelectProps = $props();

  let focused: boolean = $state(false);
  let open: boolean = $state(false);
  const selectedOption = $derived(value);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let customInputContentTyped = customInputContentInternal as any;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let customMenuItemContentTyped = customMenuItemContentInternal as any;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let customPopupContentTyped = customPopupContentInternal as any;

  function onfocusMod(e: AdvancedInputFocusEvent) {
    focused = true;
    open = true;

    if (onfocus) {
      onfocus(e);
    }
  }

  function onblurMod(e: AdvancedInputFocusEvent) {
    focused = false;

    if (onblur) {
      onblur(e);
    }
  }

  function onClickOutside() {
    open = false;
  }

  function onselectMod(val: SelectOption) {
    if (onselect) {
      onselect(val);
    }

    open = false;
  }
</script>

<div class={['dodo-ui-Select', className].join(' ')}>
  <Popper fullWidth {open} {onClickOutside} {...popperProps} {popupMaxHeight} {paperProps}>
    <div
      class:outline
      class:disabled
      class:error
      class:focused
      class={['Select', `size--${size}`, `roundness--${roundness}`, className].join(' ')}
    >
      <InputEnclosure {outline} {disabled} {error} {focused} {size} {roundness} {before} {after}>
        <AdvancedInput
          type="text"
          {name}
          {id}
          {disabled}
          {ref}
          {oninput}
          {onchange}
          onfocus={onfocusMod}
          onblur={onblurMod}
          {onpaste}
          {oncopy}
          {oncut}
          {placeholder}
          value={selectedOption?.label}
          {readonly}
          variant={searchable ? 'input' : 'button'}
        >
          {#snippet customInputContent()}
            {#if customInputContentTyped}
              {@render customInputContentTyped(selectedOption)}
            {:else}
              {selectedOption?.label || placeholder}
            {/if}
          {/snippet}
        </AdvancedInput>

        {#if selectedOption.label && clearable && !disabled}
          <div class:after class="SelectClear">
            <UtilityButton {size} title="Clear" onclick={onclear}>
              <Icon icon="material-symbols:close-small" width="24" height="24" />
            </UtilityButton>
          </div>
        {/if}
      </InputEnclosure>
    </div>

    {#snippet popupChildren()}
      {#if customPopupContentTyped}
        {@render customPopupContentTyped(options, selectedOption)}
      {:else}
        <Menu {...menuProps}>
          {#each options as option (option.value)}
            <MenuItem
              onclick={() => onselectMod(option)}
              type="button"
              disabled={option.disabled}
              selected={selectedOption.value === option.value}
              {...menuItemProps}
            >
              {#if customMenuItemContentTyped}
                {@render customMenuItemContentTyped(option, selectedOption.value === option.value)}
              {:else}
                {option.label}
              {/if}
            </MenuItem>
          {/each}
        </Menu>
      {/if}
    {/snippet}
  </Popper>
</div>

<style lang="scss">
  .dodo-ui-Select {
    .Select {
      &.size {
        &--normal {
          .SelectClear {
            &.after {
              margin-right: calc(var(--dodo-ui-space-small) * 2);
            }
          }
        }

        &--small {
          .SelectClear {
            &.after {
              margin-right: var(--dodo-ui-space);
            }
          }
        }

        &--large {
          .SelectClear {
            &.after {
              margin-right: calc(var(--dodo-ui-space) * 2);
            }
          }
        }
      }
    }
  }
</style>
