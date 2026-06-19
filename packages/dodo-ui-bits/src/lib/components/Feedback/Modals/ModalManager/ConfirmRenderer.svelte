<script lang="ts" module>
  import type { Snippet } from 'svelte';

  export type ModalManagerCustomCardConfirmContext = ModalManagerCustomCardBaseContext &
    ModalDialogConfirmConfig;

  type ConfirmRendererProps = {
    onclear: () => void;
    onaccept: () => void;
    onreject: () => void;
    open: boolean;
    config?: ModalDialogConfirmConfig;
    customCard?: Snippet<[ModalManagerCustomCardConfirmContext]>;
  };
</script>

<script lang="ts">
  import ConfirmDialog from '../ConfirmDialog/ConfirmDialog.svelte';
  import { type ModalDialogConfirmConfig } from './modals.svelte.ts';
  import type { ModalManagerCustomCardBaseContext } from './ModalManager.svelte';

  let { customCard, config, onclear, onaccept, onreject, open }: ConfirmRendererProps = $props();
</script>

{#if customCard}
  <ConfirmDialog {...config} {open} {onclear} {onaccept} {onreject}>
    {#snippet customModalCard()}
      {@render customCard?.({
        ...config,
        ...config?.modalProps,
        onclear,
        onaccept,
        onreject,
        open,
      })}
    {/snippet}
  </ConfirmDialog>
{:else}
  <ConfirmDialog {...config} {...config?.modalProps} {open} {onclear} {onaccept} {onreject}>
    {config?.description}
  </ConfirmDialog>
{/if}
