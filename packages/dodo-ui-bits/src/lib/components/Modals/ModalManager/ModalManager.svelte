<script lang="ts" module>
  export type ModalManagerProps = {
    /** Optional unique ID, for multiple ModalManager */
    id?: string;
  };
</script>

<script lang="ts">
  import ConfirmDialog, { type ConfirmDialogProps } from '../ConfirmDialog/ConfirmDialog.svelte';
  import InformDialog, { type InformDialogProps } from '../InformDialog/InformDialog.svelte';
  import Modal from '../Modal/Modal.svelte';

  import { modals } from './modals.svelte.ts';

  let { id }: ModalManagerProps = $props();

  $effect(() => {
    if (!id) {
      return;
    }

    modals._addModalManagerId(id);

    return () => {
      modals._removeModalManagerId(id);
    };
  });

  const modalManagerId = $derived(modals._activeModal?.config?.modalManagerId);

  const isMatch = $derived(
    (modalManagerId === undefined && id === undefined) || modalManagerId === id,
  );

  const modalDialogType = $derived(modals._activeModal?.type);
  const config = $derived(modals._activeModal?.config || {});
  const { onclear } = $derived(config.modalProps || {});
  const { onaccept, clearOnAccept = true } = $derived<InformDialogProps>(config.modalProps || {});
  const { onreject, clearOnReject = true } = $derived<ConfirmDialogProps>(config.modalProps || {});

  let open = $derived(modalDialogType ? true : false);

  function handleOnClear() {
    modals.clear();

    if (onclear) {
      onclear();
    }
  }

  function handleOnAccept() {
    if (clearOnAccept) {
      modals.clear();
    }

    if (onaccept) {
      onaccept();
    }
  }

  function handleOnReject() {
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
    <ConfirmDialog
      {...modals._activeModal?.config}
      {open}
      onclear={handleOnClear}
      onaccept={handleOnAccept}
      onreject={handleOnReject}
    >
      {modals._activeModal?.config.description}
    </ConfirmDialog>
  {:else if modalDialogType === 'inform'}
    <InformDialog
      {...modals._activeModal?.config}
      {open}
      onclear={handleOnClear}
      onaccept={handleOnAccept}
    >
      {modals._activeModal?.config.description}
    </InformDialog>
  {:else}
    <Modal {...modals._activeModal?.config} {open} onclear={handleOnClear}>
      {modals._activeModal?.config.description}
    </Modal>
  {/if}
{/if}
