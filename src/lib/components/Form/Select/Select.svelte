<script lang="ts" module>
  import type { Snippet } from 'svelte';

  export type SelectOption = {
    value: string;
    label: string;
  };

  /**
   * Shared base props for the Select component.
   *
   * These props control the visual wrapper (InputEnclosure) and
   * common text-input behaviors.
   */
  type BaseProps = Omit<ComboboxSingleRootPropsWithoutHTML, 'type'> &
    Omit<SelectSingleRootPropsWithoutHTML, 'type'>;

  export type SelectProps = BaseProps & {
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

    /** Search Result Placeholder */
    searchResultPlaceholder?: string;

    /** bits ui ComboboxInputProps */
    comboboxInputProps?: ComboboxInputProps;

    /** bits ui comboboxTriggerProps */
    comboboxTriggerProps?: ComboboxTriggerProps;
  };
</script>

<script lang="ts">
  import {
    Combobox,
    type ComboboxInputProps,
    type ComboboxSingleRootPropsWithoutHTML,
    type ComboboxTriggerProps,
    type SelectContentProps,
    type SelectSingleRootPropsWithoutHTML,
  } from 'bits-ui';
  import type { ComponentSize } from '$lib/attributes/size.js';
  import type { ComponentRoundnessShape } from '$lib/attributes/roundness.js';
  import SelectInput from './SelectInput.svelte';
  import SelectPopup, { type SelectPopupProps } from './SelectPopup.svelte';

  let {
    size = 'normal',
    roundness = 1,
    outline = true,
    class: className = '',
    popupProps,
    disabled = false,
    error = false,
    focused: forcedFocused = false,
    before,
    after,
    options,
    searchable = false,
    open = $bindable<boolean>(false),
    placeholder,
    allowDeselect = false,
    comboboxInputProps,
    comboboxTriggerProps,
    searchResultPlaceholder,
    ...restProps
  }: SelectProps = $props();

  function updateOpenState(isOpen: boolean) {
    open = isOpen;
  }

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
  {allowDeselect}
  type="single"
  onOpenChange={updateOpenState}
  onOpenChangeComplete={(o) => {
    if (!o) searchValue = '';
  }}
>
  <SelectInput
    {size}
    {roundness}
    {outline}
    {disabled}
    {error}
    class={className}
    {before}
    {after}
    focused={forcedFocused}
    {comboboxInputProps}
    {comboboxTriggerProps}
    {placeholder}
    {searchable}
    {updateOpenState}
    bind:searchValue
  />
  <SelectPopup options={filteredOptions} {searchResultPlaceholder} {...popupProps} />
</Combobox.Root>
