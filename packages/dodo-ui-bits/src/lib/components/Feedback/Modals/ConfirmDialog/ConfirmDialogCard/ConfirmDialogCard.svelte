<script lang="ts" module>
  export type ConfirmDialogCardProps = CardProps & {
    /** Slot content */
    children?: Snippet;

    /**
     * title for the modal.
     */
    title?: string;

    /**
     * Content rendered customTitle.
     *
     * Use {#snippet customTitle} in Svelte.
     */
    customTitle?: Snippet;

    /** is modal clearable. */
    clearable?: boolean;

    /** onclear event */
    onclear?: () => void;

    /** onaccept event */
    onaccept?: () => void;

    /** onreject event */
    onreject?: () => void;

    /**
     * Content rendered customAcceptButton.
     *
     * Use {#snippet customAcceptButton} in Svelte.
     */
    customAcceptButton?: Snippet;

    /** onaccept Button props */
    acceptButtonProps?: ModalActionButtonProps;

    /** Clear modal on accept */
    clearOnAccept?: boolean;

    /**
     * Content rendered customRejectButton.
     *
     * Use {#snippet customRejectButton} in Svelte.
     */
    customRejectButton?: Snippet;

    /** onreject Button props */
    rejectButtonProps?: ModalActionButtonProps;

    /** Clear modal on reject */
    clearOnReject?: boolean;

    /** Controls Alignment */
    controlsAlignment?: ComponentAlignmentX;

    /** Modal content title props */
    modalContentTitleProps?: ModalContentTitleProps;

    /** Modal content title props */
    modalContentDescriptionProps?: ModalContentDescriptionProps;

    /** Modal open */
    open?: boolean;
  };
</script>

<script lang="ts">
  import { Button, type CardProps, type ComponentAlignmentX } from '@flightlesslabs/dodo-ui';
  import type { Snippet } from 'svelte';
  import ModalCard from '../../Modal/ModalCard/ModalCard.svelte';
  import type { ModalContentTitleProps } from '../../Modal/ModalCard/Title.svelte';
  import type { ModalContentDescriptionProps } from '../../Modal/ModalCard/Description.svelte';
  import type { ModalActionButtonProps } from '../../InformDialog/InformDialogCard/InformDialogCard.svelte';

  let {
    class: className = '',
    acceptButtonProps,
    rejectButtonProps,
    // eslint-disable-next-line no-useless-assignment
    open = $bindable(),
    customAcceptButton,
    customRejectButton,
    onaccept,
    onreject,
    clearOnAccept = true,
    clearOnReject = true,
    ...restProps
  }: ConfirmDialogCardProps = $props();

  const classes = $derived(['dodo-ui-ConfirmDialogCard', className].filter(Boolean));

  const acceptConfig = $derived(() => {
    const { label = 'Accept', ...rest } = acceptButtonProps ?? {};

    return {
      label,
      rest,
    };
  });

  const rejectConfig = $derived(() => {
    const { label = 'Cancel', ...rest } = rejectButtonProps ?? {};

    return {
      label,
      rest,
    };
  });

  function handleOnAccept() {
    if (clearOnAccept) {
      open = false;
    }

    if (onaccept) {
      onaccept();
    }
  }

  function handleOnReject() {
    if (clearOnReject) {
      open = false;
    }

    if (onreject) {
      onreject();
    }
  }
</script>

<ModalCard {...restProps} class={classes.join(' ')}>
  {#snippet controls()}
    {#if customAcceptButton}
      {@render customAcceptButton?.()}
    {:else}
      <Button {...acceptConfig().rest} onclick={handleOnAccept}>{acceptConfig().label}</Button>
    {/if}

    {#if customRejectButton}
      {@render customRejectButton?.()}
    {:else}
      <Button variant="text" {...rejectConfig().rest} onclick={handleOnReject}>
        {rejectConfig().label}
      </Button>
    {/if}
  {/snippet}
</ModalCard>
