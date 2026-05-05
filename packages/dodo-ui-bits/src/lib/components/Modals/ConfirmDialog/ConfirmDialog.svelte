<script lang="ts" module>
  export type ConfirmDialogProps = DialogRootProps & {
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

    /** onreject event */
    onreject?: () => void;

    /** Clear modal on reject */
    clearOnReject?: boolean;

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

    /**
     * Content rendered customRejectButton.
     *
     * Use {#snippet customRejectButton} in Svelte.
     */
    customRejectButton?: Snippet;

    /** onreject Button props */
    rejectButtonProps?: ModalActionButtonProps;
  };
</script>

<script lang="ts">
  import { type DialogContentProps, type DialogOverlayProps, type DialogRootProps } from 'bits-ui';

  import { type CardProps, type ComponentAlignmentX } from '@flightlesslabs/dodo-ui';
  import type { Snippet } from 'svelte';
  import Modal from '../Modal/Modal.svelte';
  import ConfirmDialogCard from './ConfirmDialogCard/ConfirmDialogCard.svelte';
  import type { ModalActionButtonProps } from '../InformDialog/InformDialogCard/InformDialogCard.svelte';

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
    onreject,
    'min-width': minWidth = '400px',
    'max-width': maxWidth = '600px',
    controlsAlignment = 'end',
    customModalCard: customModalCardMod,
    customAcceptButton,
    acceptButtonProps,
    clearOnAccept,
    customRejectButton,
    rejectButtonProps,
    clearOnReject,
    ...restProps
  }: ConfirmDialogProps = $props();

  const classes = $derived(['dodo-ui-ConfirmDialog', className].filter(Boolean));

  function handleOnClear() {
    open = false;

    if (onclear) {
      onclear();
    }
  }
</script>

<Modal {...restProps} class={classes.join(' ')} bind:open>
  {#snippet customModalCard()}
    {#if customModalCardMod}
      {@render customModalCardMod?.()}
    {:else}
      <ConfirmDialogCard
        {...modalCardProps}
        bind:open
        {acceptButtonProps}
        {customAcceptButton}
        {customRejectButton}
        {rejectButtonProps}
        {clearOnReject}
        onclear={handleOnClear}
        {clearable}
        {title}
        {customTitle}
        {children}
        min-width={minWidth}
        max-width={maxWidth}
        {controlsAlignment}
        {onaccept}
        {onreject}
        {clearOnAccept}
      />
    {/if}
  {/snippet}
</Modal>
