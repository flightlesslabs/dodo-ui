<script lang="ts" module>
  export type ModalContentCardProps = CardProps & {
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
  };
</script>

<script lang="ts">
  import { Dialog } from 'bits-ui';

  import { Button, Card, type CardProps } from '@flightlesslabs/dodo-ui';
  import type { Snippet } from 'svelte';
  import Icon from '@iconify/svelte';

  let {
    class: className = '',
    children,
    title,
    controls,
    clearable = true,
    onclear,
    ...restProps
  }: ModalContentCardProps = $props();

  const classes = $derived(['ModalContentCard', className].filter(Boolean));
</script>

<Card {...restProps} class={classes.join(' ')}>
  <div class="ModalContentHeader">
    {#if title}
      <Dialog.Title class="ModalContentTitle">
        {@render title?.()}
      </Dialog.Title>
    {/if}

    {#if clearable}
      <Button
        class="ModalClose"
        onclick={onclear}
        roundness="full"
        compact
        variant="text"
        color="neutral"
      >
        <Icon icon="material-symbols:close-rounded" />
      </Button>
    {/if}
  </div>

  {#if children}
    <Dialog.Description class="ModalContentDescription">
      {@render children?.()}
    </Dialog.Description>
  {/if}

  {#if controls}
    <div class="ModalContentControls">
      {@render controls?.()}
    </div>
  {/if}
</Card>
