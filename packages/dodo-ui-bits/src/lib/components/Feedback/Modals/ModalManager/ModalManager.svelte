<script lang="ts" module>
  import type { Snippet } from 'svelte';

  export type ModalManagerCustomCardBaseContext = {
    open: boolean;
    onclear: () => void;
  };

  export type ModalManagerProps = {
    /** Optional unique ID, for multiple ModalManager */
    id?: string;

    /**
     * Content rendered customCardModal.
     *
     * Use {#snippet customCardModal} in Svelte.
     */
    customCardModal?: Snippet<[ModalManagerCustomCardModalContext]>;

    /**
     * Content rendered customCardConfirm.
     *
     * Use {#snippet customCardConfirm} in Svelte.
     */
    customCardConfirm?: Snippet<[ModalManagerCustomCardConfirmContext]>;

    /**
     * Content rendered customCardInform.
     *
     * Use {#snippet customCardInform} in Svelte.
     */
    customCardInform?: Snippet<[ModalManagerCustomCardInformContext]>;
  };
</script>

<script lang="ts">
  import { type ConfirmDialogProps } from '../ConfirmDialog/ConfirmDialog.svelte';
  import { type InformDialogProps } from '../InformDialog/InformDialog.svelte';

  import { modals, type ModalDialogConfirmConfig } from './modals.svelte.ts';
  import ModalRenderer, { type ModalManagerCustomCardModalContext } from './ModalRenderer.svelte';
  import ConfirmRenderer, {
    type ModalManagerCustomCardConfirmContext,
  } from './ConfirmRenderer.svelte';
  import InformRenderer, {
    type ModalManagerCustomCardInformContext,
  } from './InformRenderer.svelte';

  let { id, customCardModal, customCardConfirm, customCardInform }: ModalManagerProps = $props();

  const modalManagerId = $derived(modals._activeModal?.config?.modalManagerId);

  const isMatch = $derived(
    (modalManagerId === undefined && id === undefined) || modalManagerId === id,
  );

  const modalDialogType = $derived(modals._activeModal?.type);
  const config = $derived(modals._activeModal?.config || {});
  const { onclear } = $derived(config.modalProps || {});
  const { clearOnAccept = true } = $derived<InformDialogProps>(config.modalProps || {});
  const { clearOnReject = true } = $derived<ConfirmDialogProps>(config.modalProps || {});

  let open = $derived(modalDialogType ? true : false);

  function handleOnClear() {
    modals.clear();

    if (onclear) {
      onclear();
    }
  }

  function handleOnAccept() {
    const onaccept = (modals._activeModal?.config as ModalDialogConfirmConfig).onaccept;

    if (clearOnAccept) {
      modals.clear();
    }

    if (onaccept) {
      onaccept();
    }
  }

  function handleOnReject() {
    const onreject = (modals._activeModal?.config as ModalDialogConfirmConfig).onreject;

    if (clearOnReject) {
      modals.clear();
    }

    if (onreject) {
      onreject();
    }
  }
</script>

{#if modalDialogType && isMatch}
  {#if modalDialogType === 'confirm'}
    <ConfirmRenderer
      {open}
      {config}
      customCard={customCardConfirm}
      onclear={handleOnClear}
      onaccept={handleOnAccept}
      onreject={handleOnReject}
    />
  {:else if modalDialogType === 'inform'}
    <InformRenderer
      {open}
      {config}
      customCard={customCardInform}
      onclear={handleOnClear}
      onaccept={handleOnAccept}
    />
  {:else}
    <ModalRenderer {open} {config} customCard={customCardModal} onclear={handleOnClear} />
  {/if}
{/if}
