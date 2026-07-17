<script lang="ts" module>
  import type { Snippet } from 'svelte';

  export type SelectInputCustomSelectedContentContext = {
    value: string | undefined;
    options: SelectOption[];
  };

  export type SelectInputProps = {
    ref: HTMLInputElement | null;
    customAnchor: HTMLDivElement | null;
    options: SelectOption[];
    value: string | undefined;
    size?: ComponentSize;
    roundness?: ComponentRoundnessShape;
    outline?: boolean;
    class?: string;
    error?: boolean;
    focused?: boolean;
    before?: Snippet;
    after?: Snippet;
    searchable: boolean;
    clearable: boolean;
    onclear?: () => void;
    placeholder?: string;
    comboboxInputProps?: ComboboxInputProps;
    comboboxTriggerProps?: ComboboxTriggerProps;
    disabled?: boolean;
    searchValue?: string;
    updateOpenState: (isOpen: boolean) => void;
    customTriggerIcon?: Snippet;
    customSelectedContent?: Snippet<[SelectInputCustomSelectedContentContext]>;
    triggerPlacement?: ComponentAffixPlacement;
    showTriggerButton?: boolean;
    inputEnclosureProps?: InputEnclosureProps;
  };
</script>

<script lang="ts">
  import { Combobox, type ComboboxInputProps, type ComboboxTriggerProps } from 'bits-ui';
  import { InputEnclosure, type ComponentSize } from '@flightlesslabs/dodo-ui';
  import type {
    ComponentAffixPlacement,
    ComponentRoundnessShape,
    InputEnclosureProps,
  } from '@flightlesslabs/dodo-ui';
  import type { SelectOption } from './Select.svelte';
  import SelectTriggerButton from './SelectTriggerButton.svelte';
  import SelectClearButton from './SelectClearButton.svelte';

  let {
    size = 'normal',
    class: className = '',
    disabled = false,
    error = false,
    focused: forcedFocused = false,
    searchable: searchableRaw,
    clearable,
    onclear,
    placeholder,
    comboboxInputProps,
    comboboxTriggerProps,
    // eslint-disable-next-line no-useless-assignment
    searchValue = $bindable<string>(''),
    before: beforeContent,
    after: afterContent,
    updateOpenState,
    value = $bindable(undefined),
    options,
    ref = $bindable(null),
    customAnchor = $bindable(null),
    customTriggerIcon,
    customSelectedContent,
    triggerPlacement = 'after',
    showTriggerButton = true,
    inputEnclosureProps,
    ...restProps
  }: SelectInputProps = $props();

  let defaultValue = $derived(options.find((item) => item.value === value)?.label);

  let searchable = $derived(customSelectedContent ? false : searchableRaw);

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

  function handleTriggerInput() {
    ref?.click();
    ref?.focus();
  }

  const classes = $derived(['dodo-ui-Select', `size--${size}`, className].filter(Boolean));

  const selectInputClasses = $derived(
    ['SelectInput', 'InputBox', customSelectedContent ? 'customContent' : ''].filter(Boolean),
  );
</script>

<InputEnclosure
  {size}
  {disabled}
  {error}
  class={classes.join(' ')}
  focused={forcedFocused || isFocused}
  bind:ref={customAnchor}
  affixSpacingAfter={triggerPlacement === 'after' ? 'tight' : 'default'}
  affixSpacingBefore={triggerPlacement === 'before' ? 'tight' : 'default'}
  {...restProps}
  {...inputEnclosureProps}
>
  {#if customSelectedContent}
    <button class="InputBox SelectInputCustomSelectedContent" onclick={handleTriggerInput}>
      {@render customSelectedContent({ value, options })}
    </button>
  {/if}

  <Combobox.Input
    {...comboboxInputProps}
    clearOnDeselect
    oninput={(e) => {
      searchValue = e.currentTarget.value;
    }}
    onfocus={handleFocus}
    onblur={handleBlur}
    readonly={!searchable}
    onclick={!searchable && !disabled ? () => updateOpenState(true) : undefined}
    {placeholder}
    {defaultValue}
    {disabled}
    class={selectInputClasses.join(' ')}
    bind:ref
  />

  {#snippet before()}
    {#if triggerPlacement === 'before'}
      <SelectTriggerButton
        {disabled}
        {customTriggerIcon}
        {showTriggerButton}
        {size}
        {...comboboxTriggerProps}
      />
    {/if}

    {@render beforeContent?.()}
  {/snippet}

  {#snippet after()}
    <SelectClearButton {disabled} onclick={handleOnClear} {size} {clearable} {value} />

    {#if triggerPlacement === 'after'}
      <SelectTriggerButton
        {disabled}
        {customTriggerIcon}
        {showTriggerButton}
        {size}
        {...comboboxTriggerProps}
      />
    {/if}

    {@render afterContent?.()}
  {/snippet}
</InputEnclosure>
