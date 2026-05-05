<script lang="ts" module>
  export type ModalActionButtonProps = ButtonProps & {
    label: string;
  };

  export type InformDialogCardProps = CardProps & {
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
  import {
    Button,
    type ButtonProps,
    type CardProps,
    type ComponentAlignmentX,
  } from '@flightlesslabs/dodo-ui';
  import type { Snippet } from 'svelte';
  import ModalCard from '../../Modal/ModalCard/ModalCard.svelte';
  import type { ModalContentTitleProps } from '../../Modal/ModalCard/Title.svelte';
  import type { ModalContentDescriptionProps } from '../../Modal/ModalCard/Description.svelte';

  let {
    class: className = '',
    acceptButtonProps,
    // eslint-disable-next-line no-useless-assignment
    open = $bindable(),
    customAcceptButton,
    onaccept,
    clearOnAccept = true,
    ...restProps
  }: InformDialogCardProps = $props();

  const classes = $derived(['dodo-ui-InformDialogCard', className].filter(Boolean));

  const acceptConfig = $derived(() => {
    const { label = 'Accept', ...rest } = acceptButtonProps ?? {};

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
</script>

<ModalCard {...restProps} class={classes.join(' ')}>
  {#snippet controls()}
    {#if customAcceptButton}
      {@render customAcceptButton?.()}
    {:else}
      <Button {...acceptConfig().rest} onclick={handleOnAccept}>{acceptConfig().label}</Button>
    {/if}
  {/snippet}
</ModalCard>
