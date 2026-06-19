<script lang="ts" module>
  import type { Snippet } from 'svelte';

  export type ModalManagerCustomCardInformContext = ModalManagerCustomCardBaseContext &
    ModalDialogInformConfig;

  type InformRendererProps = {
    onclear: () => void;
    onaccept: () => void;
    open: boolean;
    config?: ModalDialogInformConfig;
    customCard?: Snippet<[ModalManagerCustomCardInformContext]>;
  };
</script>

<script lang="ts">
  import InformDialog from '../InformDialog/InformDialog.svelte';
  import { type ModalDialogInformConfig } from './modals.svelte.ts';
  import type { ModalManagerCustomCardBaseContext } from './ModalManager.svelte';

  let { customCard, config, onclear, onaccept, open }: InformRendererProps = $props();
</script>

{#if customCard}
  <InformDialog {...config} {open} {onclear} {onaccept}>
    {#snippet customModalCard()}
      {@render customCard?.({
        ...config,
        ...config?.modalProps,
        onclear,
        onaccept,
        open,
      })}
    {/snippet}
  </InformDialog>
{:else}
  <InformDialog {...config} {...config?.modalProps} {open} {onclear} {onaccept}>
    {config?.description}
  </InformDialog>
{/if}
