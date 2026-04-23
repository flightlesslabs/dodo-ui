<script lang="ts" module>
  import type { Snippet } from 'svelte';

  export type SelectInputProps = {
    ref: HTMLDivElement | null;
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
    triggerPlacement?: ComponentAffixPlacement;
    showTriggerButton?: boolean;
  };
</script>

<script lang="ts">
  import { Combobox, type ComboboxInputProps, type ComboboxTriggerProps } from 'bits-ui';
  import { InputEnclosure, UtilityButton, type ComponentSize } from '@flightlesslabs/dodo-ui';
  import type { ComponentAffixPlacement, ComponentRoundnessShape } from '@flightlesslabs/dodo-ui';
  import Icon from '@iconify/svelte';
  import type { SelectOption } from './Select.svelte';

  let {
    size = 'normal',
    class: className = '',
    disabled = false,
    error = false,
    focused: forcedFocused = false,
    searchable,
    clearable,
    onclear,
    placeholder,
    comboboxInputProps,
    comboboxTriggerProps,
    searchValue = $bindable<string>(''),
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    after,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    before,
    updateOpenState,
    value = $bindable(undefined),
    options,
    ref = $bindable(null),
    customTriggerIcon,
    triggerPlacement = 'after',
    showTriggerButton = true,
    ...restProps
  }: SelectInputProps = $props();

  let defaultValue = $derived(options.find((item) => item.value === value)?.label);

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

  const classes = $derived(['dodo-ui-Select', `size--${size}`, className].filter(Boolean));

  const triggerClasses = $derived(
    [
      'dodo-ui-UtilityButton',
      'AffixContentTrigger',
      `size--${size}`,
      'compact',
      'color--primary',
      'roundness--full',
      disabled && 'disabled',
    ].filter(Boolean),
  );

  const clearButtonClasses = $derived(['AffixContentClearButton', 'SelectClear'].filter(Boolean));

  $effect(() => {
    console.log(searchValue);
  });
</script>

{#snippet triggerButton()}
  {#if showTriggerButton}
    <Combobox.Trigger class={triggerClasses.join(' ')} {...comboboxTriggerProps}>
      {#if customTriggerIcon}
        {@render customTriggerIcon?.()}
      {:else}
        <Icon icon="material-symbols:arrow-drop-down-rounded" />
      {/if}
    </Combobox.Trigger>
  {/if}
{/snippet}

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
>
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
    class="InputBox"
  />

  {#snippet before()}
    {#if triggerPlacement === 'before'}
      {@render triggerButton()}
    {/if}

    {@render before?.()}
  {/snippet}

  {#snippet after()}
    {#if clearable && value}
      <UtilityButton
        class={clearButtonClasses.join(' ')}
        roundness="full"
        {size}
        compact
        color="primary"
        {disabled}
        onclick={handleOnClear}
      >
        <Icon icon="material-symbols:close-rounded" />
      </UtilityButton>
    {/if}

    {#if triggerPlacement === 'after'}
      {@render triggerButton()}
    {/if}

    {@render after?.()}
  {/snippet}
</InputEnclosure>
