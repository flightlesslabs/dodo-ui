<script lang="ts">
  import { Combobox, type ComboboxTriggerProps } from 'bits-ui';
  import { type ComponentSize } from '@flightlesslabs/dodo-ui';
  import type { Snippet } from 'svelte';

  type SelectTriggerButtonProps = ComboboxTriggerProps & {
    size: ComponentSize;
    customTriggerIcon?: Snippet;
    showTriggerButton: boolean;
  };

  let {
    size,
    disabled,
    customTriggerIcon,
    showTriggerButton,
    ...restProps
  }: SelectTriggerButtonProps = $props();

  const classes = $derived(
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
</script>

{#if showTriggerButton}
  <Combobox.Trigger class={classes.join(' ')} {disabled} {...restProps}>
    {#if customTriggerIcon}
      {@render customTriggerIcon?.()}
    {:else}
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
        <path d="M0 0h24v24H0z" fill="none" />
        <path
          fill="currentColor"
          d="M11.475 14.475L7.85 10.85q-.075-.075-.112-.162T7.7 10.5q0-.2.138-.35T8.2 10h7.6q.225 0 .363.15t.137.35q0 .05-.15.35l-3.625 3.625q-.125.125-.25.175T12 14.7t-.275-.05t-.25-.175"
        />
      </svg>
    {/if}
  </Combobox.Trigger>
{/if}
