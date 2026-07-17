<script lang="ts">
  import type { ComponentSize } from '@flightlesslabs/dodo-core-attributes';
  import UtilityButton from '../UtilityButton/UtilityButton.svelte';

  interface SearchClearableButtonProps {
    /** Visual size token (e.g. small, normal, large) */
    size: ComponentSize;
    disabled: boolean;
    clearable: boolean;
    onclick: () => void;
    value?: string;
  }

  let {
    value,
    size = 'normal',
    disabled = false,
    clearable = false,
    onclick,
  }: SearchClearableButtonProps = $props();

  const classes = $derived(['SearchClear', 'AffixContentClearButton'].filter(Boolean));
</script>

{#if clearable && value}
  <UtilityButton
    class={classes.join(' ')}
    {onclick}
    roundness="full"
    {size}
    compact
    color="primary"
    {disabled}
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
