<script lang="ts">
  import type { ComponentSize } from '@flightlesslabs/dodo-ui';
  import { UtilityButton } from '@flightlesslabs/dodo-ui';
  import type { DateValue } from '@internationalized/date';

  type DatePickerCloseButtonProps = {
    size: ComponentSize;
    clearable?: boolean;
    onclick?: () => void;
    value: DateValue | undefined;
    disabled: boolean;
  };

  let {
    size,
    disabled = false,
    clearable = false,
    value = $bindable(undefined),
    onclick,
  }: DatePickerCloseButtonProps = $props();

  const classes = $derived(['AffixContentClearButton', 'DatePickerClear'].filter(Boolean));
</script>

{#if clearable && value}
  <UtilityButton
    class={classes.join(' ')}
    roundness="full"
    {size}
    compact
    color="primary"
    {disabled}
    {onclick}
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
      <path d="M0 0h24v24H0z" fill="none" />
      <path
        fill="currentColor"
        d="m12 13.4l-4.9 4.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l4.9 4.9l4.9-4.9q.275-.275.7-.275t.7.275t.275.7t-.275.7L13.4 12l4.9 4.9q.275.275.275.7t-.275.7t-.7.275t-.7-.275z"
      />
    </svg>
  </UtilityButton>
{/if}
