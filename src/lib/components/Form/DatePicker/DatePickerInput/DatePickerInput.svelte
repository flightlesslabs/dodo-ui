<script lang="ts" module>
  import type { Snippet } from 'svelte';

  export type DatePickerInputProps = {
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
  };
</script>

<script lang="ts">
  import { DatePicker, type DateFieldInputProps, type DatePickerTriggerProps } from 'bits-ui';
  import type { ComponentSize } from '$lib/attributes/size.js';
  import type { ComponentRoundnessShape } from '$lib/attributes/roundness.js';
  import Icon from '@iconify/svelte';
  import Segments from './Segments.svelte';
  import InputEnclosure from '../../InputEnclosure/InputEnclosure.svelte';
  import type { DatePickerFormat } from './utils.js';

  let {
    size = 'normal',
    class: className = '',
    disabled = false,
    error = false,
    focused: forcedFocused = false,
    placeholder,
    after,
    dateFieldInputProps,
    datePickerTriggerProps,
    dateFormat = 'dd/mm/yyyy',
    ...restProps
  }: DatePickerInputProps = $props();

  let isFocused = $state(false);

  function handleFocus() {
    isFocused = true;
  }

  function handleBlur() {
    isFocused = false;
  }

  const classes = $derived(['dodo-ui-DatePicker', `size--${size}`, className].filter(Boolean));

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

<InputEnclosure
  {size}
  {disabled}
  {error}
  class={classes.join(' ')}
  focused={forcedFocused || isFocused}
  {...restProps}
>
  <DatePicker.Input
    onfocus={handleFocus}
    onblur={handleBlur}
    {placeholder}
    {...dateFieldInputProps}
  >
    {#snippet children({ segments })}
      <Segments {segments} {dateFormat} />
    {/snippet}
  </DatePicker.Input>

  {#snippet after()}
    <DatePicker.Trigger class={triggerClasses.join(' ')} {...datePickerTriggerProps}>
      <Icon icon="material-symbols:calendar-month-sharp" />
    </DatePicker.Trigger>
    {@render after?.()}
  {/snippet}
</InputEnclosure>
