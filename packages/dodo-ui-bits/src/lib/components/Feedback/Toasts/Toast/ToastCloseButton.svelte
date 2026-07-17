<script lang="ts">
  import { cardColorOptions, UtilityButton, type CardColor } from '@flightlesslabs/dodo-ui';
  import {
    componentColorOptions,
    convertOption,
    type ComponentVariant,
  } from '@flightlesslabs/dodo-core-attributes';

  type ToastCloseButtonProps = {
    clearable: boolean;
    onclick?: () => void;
    variant: ComponentVariant | undefined;
    color: CardColor | undefined;
  };

  let { clearable = true, onclick, color, variant }: ToastCloseButtonProps = $props();

  const utilityButtonColor = $derived(
    convertOption(cardColorOptions, componentColorOptions, color || 'primary', 'primary'),
  );
</script>

{#if clearable}
  <UtilityButton
    class="ToastClose"
    {onclick}
    roundness="full"
    compact
    color={utilityButtonColor}
    theme={variant === 'solid' ? 'dark' : undefined}
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
      <path d="M0 0h24v24H0z" fill="none" />
      <path
        fill="currentColor"
        d="M10.586 12L2.793 4.207l1.414-1.414L12 10.586l7.793-7.793l1.414 1.414L13.414 12l7.793 7.793l-1.414 1.414L12 13.414l-7.793 7.793l-1.414-1.414z"
      />
    </svg>
  </UtilityButton>
{/if}
