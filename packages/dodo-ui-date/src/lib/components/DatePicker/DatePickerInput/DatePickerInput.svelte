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
  };
</script>

<script lang="ts">
  import { DatePicker, type DateFieldInputProps, type DatePickerTriggerProps } from 'bits-ui';
  import Icon from '@iconify/svelte';
  import Segments from './Segments.svelte';
  import type { DatePickerFormat } from './utils.js';
  import type {
    ComponentSize,
    ComponentRoundnessShape,
    ComponentAffixPlacement,
  } from '@flightlesslabs/dodo-ui';
  import { InputEnclosure, UtilityButton } from '@flightlesslabs/dodo-ui';
  import type { DateValue } from '@internationalized/date';

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

  const clearButtonClasses = $derived(
    [
      'DatePickerClear',
      'dodo-ui-UtilityButton',
      `size--${size}`,
      'compact',
      'color--primary',
      'roundness--full',
      disabled && 'disabled',
    ].filter(Boolean),
  );

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
</script>

{#snippet triggerButton()}
  <DatePicker.Trigger class={triggerClasses.join(' ')} {...datePickerTriggerProps}>
    {#if customTriggerIcon}
      {@render customTriggerIcon?.()}
    {:else}
      <Icon icon="material-symbols:calendar-month-sharp" />
    {/if}
  </DatePicker.Trigger>
{/snippet}

<InputEnclosure
  {size}
  {disabled}
  {error}
  class={classes.join(' ')}
  focused={forcedFocused || isFocused}
  bind:ref
  {...restProps}
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
      {@render triggerButton()}
    {/if}

    {@render before?.()}
  {/snippet}

  {#snippet after()}
    {#if clearable && value}
      <UtilityButton class={clearButtonClasses.join(' ')} onclick={handleOnClear}>
        <Icon icon="material-symbols:close-rounded" />
      </UtilityButton>
    {/if}

    {#if triggerPlacement === 'after'}
      {@render triggerButton()}
    {/if}

    {@render after?.()}
  {/snippet}
</InputEnclosure>
