<script lang="ts" module>
  import type { Snippet } from 'svelte';

  export type SelectInputProps = {
    size?: ComponentSize;
    roundness?: ComponentRoundnessShape;
    outline?: boolean;
    class?: string;
    error?: boolean;
    focused?: boolean;
    before?: Snippet;
    after?: Snippet;
    searchable: boolean;
    placeholder?: string;
    comboboxInputProps?: ComboboxInputProps;
    comboboxTriggerProps?: ComboboxTriggerProps;
    disabled?: boolean;
    searchValue?: string;
    updateOpenState: (isOpen: boolean) => void;
  };
</script>

<script lang="ts">
  import { Combobox, type ComboboxInputProps, type ComboboxTriggerProps } from 'bits-ui';
  import InputEnclosure from '../InputEnclosure/InputEnclosure.svelte';
  import type { ComponentSize } from '$lib/attributes/size.js';
  import type { ComponentRoundnessShape } from '$lib/attributes/roundness.js';
  import Icon from '@iconify/svelte';

  let {
    size = 'normal',
    class: className = '',
    disabled = false,
    error = false,
    focused: forcedFocused = false,
    searchable = false,
    placeholder,
    comboboxInputProps,
    comboboxTriggerProps,
    searchValue = $bindable<string>(''),
    after,
    updateOpenState,
    ...restProps
  }: SelectInputProps = $props();

  let isFocused = $state(false);

  function handleFocus() {
    isFocused = true;
  }

  function handleBlur() {
    isFocused = false;
  }

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
</script>

<InputEnclosure
  {size}
  {disabled}
  {error}
  class={classes.join(' ')}
  focused={forcedFocused || isFocused}
  {...restProps}
>
  <Combobox.Input
    oninput={(e) => {
      searchValue = e.currentTarget.value;
    }}
    onfocus={handleFocus}
    onblur={handleBlur}
    readonly={!searchable}
    onclick={!searchable && !disabled ? () => updateOpenState(true) : undefined}
    {placeholder}
    {...comboboxInputProps}
  />

  {#snippet after()}
    <Combobox.Trigger class={triggerClasses.join(' ')} {...comboboxTriggerProps}>
      <Icon icon="material-symbols:arrow-drop-down-rounded" />
    </Combobox.Trigger>
    {@render after?.()}
  {/snippet}
</InputEnclosure>
