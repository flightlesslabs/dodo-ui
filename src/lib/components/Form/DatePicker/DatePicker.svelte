<script lang="ts" module>
  import type { ComponentRoundnessShape } from '$lib/attributes/roundness.js';
  import type { ComponentSize } from '$lib/attributes/size.js';

  export type DatePickerProps = DatePickerRootPropsWithoutHTML & {
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

    /** Select placeholder */
    placeholder?: string;

    /**
     * Date display format for the input segments.
     *
     * Controls the visual order and separators of the date parts
     * (e.g. "dd/mm/yyyy", "mm-dd-yyyy", "yyyy.mm.dd").
     *
     * This only affects how the date is rendered in the input,
     * not the internal parsing or keyboard interaction behavior
     * of the DatePicker.
     */
    dateFormat?: DatePickerFormat;

    /** bits ui dateFieldInputProps */
    dateFieldInputProps?: DateFieldInputProps;

    /** bits ui datePickerTriggerProps */
    datePickerTriggerProps?: DatePickerTriggerProps;

    /** Props for Popup */
    popupProps?: DatePickerPopupProps;
  };
</script>

<script lang="ts">
  import {
    DatePicker as DatePickerBitsUi,
    type DateFieldInputProps,
    type DatePickerRootPropsWithoutHTML,
    type DatePickerTriggerProps,
  } from 'bits-ui';
  import type { Snippet } from 'svelte';
  import DatepickerInput from './DatePickerInput/DatePickerInput.svelte';
  import type { DatePickerFormat } from './DatePickerInput/utils.js';
  import DatePickerPopup, {
    type DatePickerPopupProps,
  } from './DatePickerPopup/DatePickerPopup.svelte';

  let {
    size = 'normal',
    roundness = 1,
    outline = true,
    class: className = '',
    disabled = false,
    error = false,
    focused: forcedFocused = false,
    before,
    after,
    open = $bindable(false),
    value = $bindable(undefined),
    placeholder,
    weekdayFormat = 'short',
    fixedWeeks = true,
    dateFieldInputProps,
    datePickerTriggerProps,
    weekStartsOn = 1,
    dateFormat = 'dd/mm/yyyy',
    popupProps,
    ...restProps
  }: DatePickerProps = $props();
</script>

<DatePickerBitsUi.Root {...restProps} bind:value {weekdayFormat} {weekStartsOn} {fixedWeeks}>
  <DatepickerInput
    {size}
    {roundness}
    {outline}
    class={className}
    {disabled}
    {error}
    {dateFieldInputProps}
    {datePickerTriggerProps}
    focused={forcedFocused}
    {before}
    {after}
    {placeholder}
    {dateFormat}
  />
  <DatePickerPopup {...popupProps} />
</DatePickerBitsUi.Root>
