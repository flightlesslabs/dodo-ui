<script lang="ts" module>
  export type ModalCardProps = CardProps & {
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
     * Content rendered controls.
     *
     * Use {#snippet controls} in Svelte.
     */
    controls?: Snippet;

    /** is modal clearable. */
    clearable?: boolean;

    /** onclear event */
    onclear?: () => void;

    /** Controls Alignment */
    controlsAlignment?: ComponentAlignmentX;

    /** Modal content title props */
    modalContentTitleProps?: ModalContentTitleProps;

    /** Modal content title props */
    modalContentDescriptionProps?: ModalContentDescriptionProps;
  };
</script>

<script lang="ts">
  import {
    Card,
    UtilityButton,
    type CardProps,
    type ComponentAlignmentX,
  } from '@flightlesslabs/dodo-ui';
  import type { Snippet } from 'svelte';
  import Icon from '@iconify/svelte';
  import Title, { type ModalContentTitleProps } from './Title.svelte';
  import type { ModalContentDescriptionProps } from './Description.svelte';
  import Description from './Description.svelte';
  import Controls from './Controls.svelte';

  let {
    class: className = '',
    children,
    title,
    customTitle,
    controls,
    clearable = true,
    onclear,
    controlsAlignment = 'end',
    modalContentTitleProps,
    modalContentDescriptionProps,
    ...restProps
  }: ModalCardProps = $props();

  const classes = $derived(['dodo-ui-ModalCard', className].filter(Boolean));
</script>

<Card {...restProps} class={classes.join(' ')}>
  <div class="ModalContentHeader">
    {#if clearable || customTitle || title}
      <Title {...modalContentTitleProps} {customTitle} {title} />

      {#if clearable}
        <UtilityButton
          class="ModalClose"
          onclick={onclear}
          roundness="full"
          compact
          color="primary"
        >
          <Icon icon="ri:close-large-fill" />
        </UtilityButton>
      {/if}
    {/if}
  </div>

  <Description {...modalContentDescriptionProps} description={children} />

  <Controls {controls} alignmentX={controlsAlignment} />
</Card>
