<script lang="ts" module>
  import type { Snippet } from 'svelte';

  export type ModalManagerCustomCardModalContext = ModalManagerCustomCardBaseContext &
    ModalDialogModalConfig;

  type ModalRendererProps = {
    onclear: () => void;
    open: boolean;
    config?: ModalDialogModalConfig;
    customCard?: Snippet<[ModalManagerCustomCardModalContext]>;
  };
</script>

<script lang="ts">
  import Modal from '../Modal/Modal.svelte';

  import { type ModalDialogModalConfig } from './modals.svelte.ts';
  import type { ModalManagerCustomCardBaseContext } from './ModalManager.svelte';

  let { onclear, open, config, customCard }: ModalRendererProps = $props();
</script>

{#if customCard}
  <Modal {...config} {open} {onclear}>
    {#snippet customModalCard()}
      {@render customCard?.({
        ...config,
        ...config?.modalProps,
        onclear,
        open,
      })}
    {/snippet}
  </Modal>
{:else}
  <Modal {...config} {...config?.modalProps} {open} {onclear}>
    {config?.description}
  </Modal>
{/if}
