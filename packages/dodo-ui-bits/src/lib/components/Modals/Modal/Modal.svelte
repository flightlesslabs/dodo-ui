<script lang="ts" module>
  export type ModalProps = DialogRootProps & {
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

    /**
     * Content rendered controls the input (prefix).
     *
     * Use {#snippet controls} in Svelte.
     */
    controls?: Snippet;

    /** is modal clearable. */
    clearable?: boolean;

    /** onclear event */
    onclear?: () => void;

    /** max width */
    'max-width'?: string;

    /** min width */
    'min-width'?: string;

    /** Controls Alignment */
    controlsAlignment?: ComponentAlignmentX;
  };
</script>

<script lang="ts">
  import {
    Dialog,
    type DialogContentProps,
    type DialogOverlayProps,
    type DialogRootProps,
  } from 'bits-ui';

  import { type CardProps, type ComponentAlignmentX } from '@flightlesslabs/dodo-ui';
  import type { Snippet } from 'svelte';
  import ModalCard from './ModalCard/ModalCard.svelte';

  let {
    class: className = '',
    contentHolderProps,
    modalCardProps,
    open = $bindable(),
    children,
    title,
    customTitle,
    controls,
    clearable = true,
    onclear,
    overlayProps,
    'min-width': minWidth = '400px',
    'max-width': maxWidth = '600px',
    controlsAlignment = 'end',
    customModalCard,
    ...restProps
  }: ModalProps = $props();

  const classes = $derived(['dodo-ui-Modal', className].filter(Boolean));

  function handleOnClear() {
    open = false;

    if (onclear) {
      onclear();
    }
  }
</script>

<Dialog.Root {...restProps} bind:open>
  <Dialog.Portal>
    <Dialog.Overlay {...overlayProps} class="ModalOverlay" />
    <Dialog.Content {...contentHolderProps} class={classes.join(' ')}>
      {#if customModalCard}
        {@render customModalCard?.()}
      {:else}
        <ModalCard
          {...modalCardProps}
          onclear={handleOnClear}
          {clearable}
          {controls}
          {title}
          {customTitle}
          {children}
          min-width={minWidth}
          max-width={maxWidth}
          {controlsAlignment}
        />
      {/if}
    </Dialog.Content>
  </Dialog.Portal>
</Dialog.Root>
