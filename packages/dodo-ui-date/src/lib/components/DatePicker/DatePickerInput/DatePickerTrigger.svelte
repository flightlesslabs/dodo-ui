<script lang="ts">
  import { DatePicker, type DatePickerTriggerProps as DatePickerTriggerPropsBitsUi } from 'bits-ui';
  import type { ComponentSize } from '@flightlesslabs/dodo-ui';
  import type { Snippet } from 'svelte';

  type DatePickerTriggerProps = DatePickerTriggerPropsBitsUi & {
    size: ComponentSize;
    customTriggerIcon?: Snippet;
    showTriggerButton: boolean;
    error: boolean;
  };

  let {
    size,
    disabled,
    customTriggerIcon,
    showTriggerButton,
    error,
    ...restProps
  }: DatePickerTriggerProps = $props();

  const classes = $derived(
    [
      'dodo-ui-UtilityButton',
      'AffixContentTrigger',
      `size--${size}`,
      'compact',
      'color--primary',
      'roundness--full',
      error && 'error',
      disabled && 'disabled',
    ].filter(Boolean),
  );
</script>

{#if showTriggerButton}
  <DatePicker.Trigger class={classes.join(' ')} {...restProps}>
    {#if customTriggerIcon}
      {@render customTriggerIcon?.()}
    {:else}
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
        <path d="M0 0h24v24H0z" fill="none" />
        <path
          fill="currentColor"
          d="M11 14v-2h2v2zm-4 0v-2h2v2zm8 0v-2h2v2zm-4 4v-2h2v2zm-4 0v-2h2v2zm8 0v-2h2v2zM3 22V4h3V2h2v2h8V2h2v2h3v18zm2-2h14V10H5z"
        />
      </svg>
    {/if}
  </DatePicker.Trigger>
{/if}
