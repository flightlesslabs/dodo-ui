<script lang="ts" module>
  import type { Snippet } from 'svelte';

  export type DatePickerInputProps = {
    ref: HTMLDivElement | null;
    size?: ComponentSize;
    roundness?: ComponentRoundnessShape;
    outline?: boolean;
    class?: string;
    error?: boolean;
    focused?: boolean;
    before?: Snippet;
    after?: Snippet;
    placeholder?: string;
    dateFieldInputProps?: DateFieldInputProps;
    datePickerTriggerProps?: DatePickerTriggerProps;
    disabled?: boolean;
    dateFormat?: DatePickerFormat;
    customTriggerIcon?: Snippet;
    clearable?: boolean;
    onclear?: () => void;
    value: DateValue | undefined;
    triggerPlacement?: ComponentAffixPlacement;
    showTriggerButton?: boolean;
    inputEnclosureProps?: InputEnclosureProps;
  };
</script>

<script lang="ts">
  import { DatePicker, type DateFieldInputProps, type DatePickerTriggerProps } from 'bits-ui';
  import Segments from './Segments.svelte';
  import type { DatePickerFormat } from './utils.js';
  import type {
    ComponentSize,
    ComponentRoundnessShape,
    ComponentAffixPlacement,
    InputEnclosureProps,
  } from '@flightlesslabs/dodo-ui';
  import { InputEnclosure } from '@flightlesslabs/dodo-ui';
  import type { DateValue } from '@internationalized/date';
  import DatePickerTrigger from './DatePickerTrigger.svelte';
  import DatePickerCloseButton from './DatePickerCloseButton.svelte';

  let {
    size = 'normal',
    class: className = '',
    disabled = false,
    error = false,
    focused: forcedFocused = false,
    placeholder,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    after,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    before,
    dateFieldInputProps,
    datePickerTriggerProps,
    dateFormat = 'dd/mm/yyyy',
    ref = $bindable(null),
    customTriggerIcon,
    clearable,
    onclear,
    value = $bindable(undefined),
    triggerPlacement = 'after',
    showTriggerButton = true,
    inputEnclosureProps,
    ...restProps
  }: DatePickerInputProps = $props();

  let isFocused = $state(false);

  function handleFocus() {
    isFocused = true;
  }

  function handleBlur() {
    isFocused = false;
  }

  function handleOnClear() {
    value = undefined;

    if (onclear) {
      onclear();
    }
  }

  const classes = $derived(['dodo-ui-DatePicker', className].filter(Boolean));
</script>

<InputEnclosure
  {size}
  {disabled}
  {error}
  class={classes.join(' ')}
  focused={forcedFocused || isFocused}
  bind:ref
  affixSpacingAfter={triggerPlacement === 'after' ? 'tight' : 'default'}
  affixSpacingBefore={triggerPlacement === 'before' ? 'tight' : 'default'}
  {...restProps}
  {...inputEnclosureProps}
>
  <DatePicker.Input
    onfocus={handleFocus}
    onblur={handleBlur}
    {placeholder}
    class="InputBox"
    {...dateFieldInputProps}
  >
    {#snippet children({ segments })}
      <Segments {segments} {dateFormat} />
    {/snippet}
  </DatePicker.Input>

  {#snippet before()}
    {#if triggerPlacement === 'before'}
      <DatePickerTrigger
        {size}
        {disabled}
        {customTriggerIcon}
        {showTriggerButton}
        {error}
        {...datePickerTriggerProps}
      />
    {/if}

    {@render before?.()}
  {/snippet}

  {#snippet after()}
    <DatePickerCloseButton {size} {disabled} {value} {clearable} onclick={handleOnClear} />

    {#if triggerPlacement === 'after'}
      <DatePickerTrigger
        {size}
        {disabled}
        {customTriggerIcon}
        {showTriggerButton}
        {error}
        {...datePickerTriggerProps}
      />
    {/if}

    {@render after?.()}
  {/snippet}
</InputEnclosure>
