<script lang="ts" module>
  import type { Snippet } from 'svelte';

  export type SelectOption = {
    value: string;
    label: string;
  };

  export type SelectPopupProps = SelectContentProps & {
    /** max height for popup */
    maxHeight?: string;

    /** max width for popup */
    maxWidth?: string;

    /** min height for popup */
    minHeight?: string;

    /** min width for popup */
    minWidth?: string;

    /** height for popup */
    height?: string;

    /** width for popup */
    width?: string;

    /** Popup Shadow */
    shadow?: number;
  };

  /**
   * Shared base props for the Select component.
   *
   * These props control the visual wrapper (InputEnclosure) and
   * common text-input behaviors.
   */
  export type SelectProps = ComboboxSingleRootPropsWithoutHTML & {
    /** Visual size token (e.g. small, normal, large) */
    size?: ComponentSize;

    /** Border radius token (e.g. 1–3, "pill") */
    roundness?: ComponentRoundnessShape;

    /** Render an outlined enclosure (shows border) */
    outline?: boolean;

    /** Custom CSS class names applied to the InputEnclosure */
    class?: string;

    /**
     * Error visual state.
     *
     * When true, applies error styling to the enclosure.
     * Intended for validation errors.
     */
    error?: boolean;

    /**
     * Focused visual state.
     *
     * When true, forces focused styling on the enclosure.
     * Usually controlled automatically via focus/blur.
     */
    focused?: boolean;

    /**
     * Content rendered before the input (prefix).
     *
     * Use {#snippet before} in Svelte.
     */
    before?: Snippet;

    /**
     * Content rendered after the input (suffix).
     *
     * Use {#snippet after} in Svelte.
     */
    after?: Snippet;

    /** Select list data */
    options: SelectOption[];

    /** Props for Popup */
    popupProps?: SelectPopupProps;

    /** is select searchable */
    searchable?: boolean;

    /** Select placeholder */
    placeholder?: string;
  };
</script>

<script lang="ts">
  import {
    Combobox,
    type ComboboxSingleRootPropsWithoutHTML,
    type SelectContentProps,
  } from 'bits-ui';
  import type { ComponentSize } from '$lib/attributes/size.js';
  import type { ComponentRoundnessShape } from '$lib/attributes/roundness.js';
  import InputEnclosure from '../InputEnclosure/InputEnclosure.svelte';
  import Icon from '@iconify/svelte';

  let {
    size = 'normal',
    roundness = 1,
    outline = true,
    class: className = '',
    popupProps = {},
    disabled = false,
    error = false,
    focused: forcedFocused = false,
    before,
    after,
    options,
    searchable = false,
    open = $bindable<boolean>(),
    placeholder,
    ...restProps
  }: SelectProps = $props();

  let {
    class: popupClass = '',
    width: popupWidth,
    height: popupHeight,
    minHeight: popupMinHeight,
    minWidth: popupMinWidth,
    maxHeight: popupMaxHeight,
    maxWidth: popupMaxWidth,
    shadow: popupShadow = 2,
    ...restpopupProps
  } = $derived(popupProps);

  /**
   * Local focus state used to drive InputEnclosure focus styling.
   */
  let isFocused = $state(false);

  function handleFocus() {
    isFocused = true;
  }

  function handleBlur() {
    isFocused = false;
  }

  /**
   * Computed class list for the InputEnclosure component.
   */
  const classes = $derived(['dodo-ui-Select', `size--${size}`, className].filter(Boolean));

  const triggerClasses = $derived(
    [
      'dodo-ui-UtilityButton',
      `size--${size}`,
      'compact',
      'color--primary',
      'roundness--full',
      error && 'error',
      disabled && 'disabled',
    ].filter(Boolean),
  );

  const popupClasses = $derived(
    [
      'dodo-ui-Card',
      'SelectPopup',
      'color--white',
      'roundness--1',
      'variant--text',
      `size--${size}`,
      `dodo-shadow-${popupShadow}`,
      popupClass,
    ].filter(Boolean),
  );

  const popupInlineStyles = $derived(
    [
      popupWidth ? `--SelectPopup-width: ${popupWidth}` : '',
      popupHeight ? `--SelectPopup-height: ${popupHeight}` : '',
      popupMinHeight ? `--SelectPopup-min-height: ${popupMinHeight}` : '',
      popupMinWidth ? `--SelectPopup-min-width: ${popupMinWidth}` : '',
      popupMaxHeight ? `--SelectPopup-max-height: ${popupMaxHeight}` : '',
      popupMaxWidth ? `--SelectPopup-max-width: ${popupMaxWidth}` : '',
    ].filter(Boolean),
  );

  let searchValue = $state('');

  const filteredOptions = $derived(
    searchValue === ''
      ? options
      : options.filter((option) => option.label.toLowerCase().includes(searchValue.toLowerCase())),
  );
</script>

<Combobox.Root
  {...restProps}
  {open}
  type="single"
  onOpenChange={(isOpen) => (open = isOpen)}
  onOpenChangeComplete={(o) => {
    if (!o) searchValue = '';
  }}
>
  <InputEnclosure
    {size}
    {roundness}
    {outline}
    {disabled}
    {error}
    class={classes.join(' ')}
    {before}
    focused={isFocused}
  >
    <Combobox.Input
      oninput={(e) => (searchValue = e.currentTarget.value)}
      onfocus={handleFocus}
      onblur={handleBlur}
      readonly={!searchable}
      onclick={!searchable ? () => (open = true) : undefined}
      {placeholder}
    />

    {#snippet after()}
      <Combobox.Trigger class={triggerClasses.join(' ')}>
        <Icon icon="material-symbols:arrow-drop-down-rounded" />
      </Combobox.Trigger>
      {@render after?.()}
    {/snippet}
  </InputEnclosure>
  <Combobox.Portal>
    <Combobox.Content
      sideOffset={10}
      align="start"
      {...restpopupProps}
      style={popupInlineStyles.join(';')}
      class={popupClasses.join(' ')}
    >
      <Combobox.ScrollUpButton>
        <Icon icon="icon-park-outline:double-up" />
      </Combobox.ScrollUpButton>
      <Combobox.Viewport>
        {#each filteredOptions as option, i (i + option.value)}
          <Combobox.Item value={option.value} label={option.label}>
            {option.label}
          </Combobox.Item>
        {:else}
          <span> No results found, try again. </span>
        {/each}
      </Combobox.Viewport>
      <Combobox.ScrollDownButton>
        <Icon icon="icon-park-outline:double-down" />
      </Combobox.ScrollDownButton>
    </Combobox.Content>
  </Combobox.Portal>
</Combobox.Root>
