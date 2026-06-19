<script lang="ts" module>
  export type InformDialogProps = DialogRootProps & {
    /** Custom CSS class names applied to the InputEnclosure */
    class?: string;

    /** Props Modal Content Holder */
    contentHolderProps?: DialogContentProps;

    /** Props Modal Content Card */
    modalCardProps?: CardProps;

    /** Props Modal Overlay */
    overlayProps?: DialogOverlayProps;

    /** Slot content */
    children?: Snippet;

    /**
     * title for the modal.
     */
    title?: string;

    /**
     * Content rendered title.
     *
     * Use {#snippet title} in Svelte.
     */
    customTitle?: Snippet;

    /**
     * Content rendered customModalCard.
     *
     * Use {#snippet customModalCard} in Svelte.
     */
    customModalCard?: Snippet;

    /** is modal clearable. */
    clearable?: boolean;

    /** onclear event */
    onclear?: () => void;

    /** onaccept event */
    onaccept?: () => void;

    /** Clear modal on accept */
    clearOnAccept?: boolean;

    /** max width */
    'max-width'?: string;

    /** min width */
    'min-width'?: string;

    /** Controls Alignment */
    controlsAlignment?: ComponentAlignmentX;

    /**
     * Content rendered customAcceptButton.
     *
     * Use {#snippet customAcceptButton} in Svelte.
     */
    customAcceptButton?: Snippet;

    /** onaccept Button props */
    acceptButtonProps?: ModalActionButtonProps;
  };
</script>

<script lang="ts">
  import { type DialogContentProps, type DialogOverlayProps, type DialogRootProps } from 'bits-ui';

  import { type CardProps, type ComponentAlignmentX } from '@flightlesslabs/dodo-ui';
  import type { Snippet } from 'svelte';
  import Modal from '../Modal/Modal.svelte';
  import InformDialogCard, {
    type ModalActionButtonProps,
  } from './InformDialogCard/InformDialogCard.svelte';

  let {
    class: className = '',
    modalCardProps,
    open = $bindable(),
    children,
    title,
    customTitle,
    clearable = true,
    onclear,
    onaccept,
    'min-width': minWidth = '400px',
    'max-width': maxWidth = '600px',
    controlsAlignment = 'end',
    customModalCard: customModalCardMod,
    customAcceptButton,
    acceptButtonProps,
    clearOnAccept,
    ...restProps
  }: InformDialogProps = $props();

  const classes = $derived(['dodo-ui-InformDialog', className].filter(Boolean));

  function handleOnClear() {
    open = false;

    if (onclear) {
      onclear();
    }
  }
</script>

<Modal {...restProps} {onclear} class={classes.join(' ')} bind:open>
  {#snippet customModalCard()}
    {#if customModalCardMod}
      {@render customModalCardMod?.()}
    {:else}
      <InformDialogCard
        {...modalCardProps}
        bind:open
        {acceptButtonProps}
        {customAcceptButton}
        onclear={handleOnClear}
        {clearable}
        {title}
        {customTitle}
        {children}
        min-width={minWidth}
        max-width={maxWidth}
        {controlsAlignment}
        {onaccept}
        {clearOnAccept}
      />
    {/if}
  {/snippet}
</Modal>
