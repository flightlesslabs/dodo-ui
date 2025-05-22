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
    value: SelectOption | undefined;
    /** How round should the border radius be? */
    placeholder?: string;
    /** Placeholder if there are no options found*/
    optionsPlaceholder?: string;
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
    /** custom Content Formatting for variant button */
    customPlaceholderMenuItemContent?: () => Snippet;
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
  import type { TextInputInputEvent } from '../TextInput/TextInput.svelte';
  import type { ButtonClickEvent } from '../Button/Button.svelte';

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
    options: optionsRaw,
    customInputContent: customInputContentInternal,
    customMenuItemContent: customMenuItemContentInternal,
    customPopupContent: customPopupContentInternal,
    customPlaceholderMenuItemContent: customPlaceholderMenuItemContentInternal,
    popupMaxHeight = '300px',
    paperProps,
    popperProps,
    menuProps,
    menuItemProps,
    optionsPlaceholder = 'No Options',
  }: SelectProps = $props();

  let focused: boolean = $state(false);
  let open: boolean = $state(false);
  let onInputStart: boolean = $state(false);
  const selectedOption = $derived(value);
  let searchTerm = $state(value?.label.trim() || '');
  let options = $state(optionsRaw);

  $effect(() => {
    if (!onInputStart) {
      options = optionsRaw;
      return;
    }

    const searchTermSimplified = searchTerm.trim().toLowerCase();

    if (!searchTermSimplified) {
      options = optionsRaw;
      return;
    }

    options = optionsRaw.filter((item) =>
      item.label.trim().toLowerCase().includes(searchTermSimplified),
    );
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let customInputContentTyped = customInputContentInternal as any;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let customMenuItemContentTyped = customMenuItemContentInternal as any;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let customPopupContentTyped = customPopupContentInternal as any;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let customPlaceholderMenuItemContentTyped = customPlaceholderMenuItemContentInternal as any;

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
    searchTerm = selectedOption?.label || '';
    open = false;
    onInputStart = false;
  }

  function onselectMod(val: SelectOption) {
    searchTerm = val.label;
    open = false;
    onInputStart = false;

    if (onselect) {
      onselect(val);
    }
  }

  function oninputMod(e: TextInputInputEvent) {
    const target = e.target as HTMLInputElement;
    searchTerm = target.value;
    onInputStart = true;

    if (oninput) {
      oninput(e);
    }
  }

  function onclearMod(e: ButtonClickEvent) {
    searchTerm = '';
    onInputStart = false;

    if (onclear) {
      onclear(e);
    }
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
          oninput={oninputMod}
          {onchange}
          onfocus={onfocusMod}
          onblur={onblurMod}
          {onpaste}
          {oncopy}
          {oncut}
          {placeholder}
          value={searchable ? searchTerm : selectedOption?.label}
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

        {#if selectedOption?.label && clearable && !disabled}
          <div class:after class="SelectClear">
            <UtilityButton {size} title="Clear" onclick={onclearMod}>
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
          {#if options.length}
            {#each options as option (option.value)}
              <MenuItem
                onclick={() => onselectMod(option)}
                type="button"
                disabled={option.disabled}
                selected={selectedOption?.value === option.value}
                {...menuItemProps}
              >
                {#if customMenuItemContentTyped}
                  {@render customMenuItemContentTyped(
                    option,
                    selectedOption?.value === option.value,
                  )}
                {:else}
                  {option.label}
                {/if}
              </MenuItem>
            {/each}
          {:else}
            <MenuItem type="text" disabled={true} {...menuItemProps}>
              {#if customPlaceholderMenuItemContentTyped}
                {@render customPlaceholderMenuItemContentTyped()}
              {:else}
                {optionsPlaceholder}
              {/if}
            </MenuItem>
          {/if}
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
