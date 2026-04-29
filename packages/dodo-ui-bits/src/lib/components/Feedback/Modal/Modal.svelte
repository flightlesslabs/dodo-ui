<script lang="ts" module>
  export type ModalProps = DialogRootProps & {
    /** Custom CSS class names applied to the InputEnclosure */
    class?: string;

    /** Props Modal Content Holder */
    contentHolderProps?: DialogContentProps;

    /** Props Modal Content Card */
    contentCardProps?: CardProps;

    /** Props Modal Overlay */
    overlayProps?: DialogOverlayProps;

    /** Slot content */
    children?: Snippet;

    /**
     * Content rendered title the input (prefix).
     *
     * Use {#snippet title} in Svelte.
     */
    title?: Snippet;

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
  };
</script>

<script lang="ts">
  import {
    Dialog,
    type DialogContentProps,
    type DialogOverlayProps,
    type DialogRootProps,
  } from 'bits-ui';

  import { type CardProps } from '@flightlesslabs/dodo-ui';
  import type { Snippet } from 'svelte';
  import ModalContentCard from './ModalContentCard.svelte';

  let {
    class: className = '',
    contentHolderProps,
    contentCardProps,
    open = $bindable(),
    children,
    title,
    controls,
    clearable = true,
    onclear,
    overlayProps,
    'min-width': minWidth = '400px',
    'max-width': maxWidth = '600px',
    ...restProps
  }: ModalProps = $props();

  const classes = $derived(['dodo-ui-Modal', clearable && 'clearable', className].filter(Boolean));

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
      <ModalContentCard
        {...contentCardProps}
        onclear={handleOnClear}
        {clearable}
        {controls}
        {title}
        {children}
        min-width={minWidth}
        max-width={maxWidth}
      />
    </Dialog.Content>
  </Dialog.Portal>
</Dialog.Root>
