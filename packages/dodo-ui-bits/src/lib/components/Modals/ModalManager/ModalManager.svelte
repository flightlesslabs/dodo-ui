<script lang="ts" module>
  export type ModalManagerProps = {
    /** Optional unique ID, for multiple ModalManager */
    id?: string;
  };
</script>

<script lang="ts">
  import ConfirmDialog from '../ConfirmDialog/ConfirmDialog.svelte';
  import InformDialog from '../InformDialog/InformDialog.svelte';
  import Modal from '../Modal/Modal.svelte';

  import { modals } from './store/modals.svelte.ts';

  let { id }: ModalManagerProps = $props();

  const modalManagerId = $derived(modals._activeModal?.config?.modalManagerId);

  const isMatch = $derived(
    (modalManagerId === undefined && id === undefined) || modalManagerId === id,
  );

  const modalDialogType = $derived(modals._activeModal?.type);

  $effect(() => {
    if (id) {
      modals._addModalManagerId(id);
    }

    return () => {
      if (id) {
        modals._removeModalManagerId(id);
      }
    };
  });
</script>

{#if modalDialogType && isMatch}
  {#if modalDialogType === 'confirm'}
    <ConfirmDialog {...modals._activeModal?.config} open>
      {modals._activeModal?.config.description}
    </ConfirmDialog>
  {:else if modalDialogType === 'inform'}
    <InformDialog {...modals._activeModal?.config} open>
      {modals._activeModal?.config.description}
    </InformDialog>
  {:else}
    <Modal {...modals._activeModal?.config} open>
      {modals._activeModal?.config.description}
    </Modal>
  {/if}
{/if}
