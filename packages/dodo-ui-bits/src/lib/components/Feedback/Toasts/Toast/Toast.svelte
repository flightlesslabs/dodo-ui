<script lang="ts" module>
  export type ToastProps = CardProps & {
    /** Slot content */
    children?: Snippet;

    /**
     * title for the toast.
     */
    title?: string;

    /**
     * Content rendered title.
     *
     * Use {#snippet title} in Svelte.
     */
    customTitle?: Snippet;

    /** is toast clearable. */
    clearable?: boolean;

    /** onclear event */
    onclear?: () => void;

    /** Toast content title props */
    toastContentTitleProps?: ToastContentTitleProps;

    /** Toast content title props */
    toastContentDescriptionProps?: ToastContentDescriptionProps;
  };
</script>

<script lang="ts">
  import { Card, useThemeStore, type CardProps } from '@flightlesslabs/dodo-ui';
  import type { Snippet } from 'svelte';
  import Title, { type ToastContentTitleProps } from './Title.svelte';
  import type { ToastContentDescriptionProps } from './Description.svelte';
  import Description from './Description.svelte';
  import ToastCloseButton from './ToastCloseButton.svelte';

  let {
    class: className = '',
    children,
    title,
    customTitle,
    clearable = true,
    onclear,
    toastContentTitleProps,
    toastContentDescriptionProps,
    theme: cardTheme,
    color,
    variant,
    'max-width': maxWidth = '300px',
    'min-width': minWidth = '300px',
    ...restProps
  }: ToastProps = $props();

  const theme = $derived(cardTheme || useThemeStore.theme);

  const classes = $derived(['dodo-ui-Toast', className].filter(Boolean));
</script>

<Card
  {...restProps}
  {theme}
  {variant}
  {color}
  max-width={maxWidth}
  min-width={minWidth}
  class={classes.join(' ')}
>
  <div class="ToastContentHeader">
    {#if clearable || customTitle || title}
      <Title {...toastContentTitleProps} {customTitle} {title} />

      <ToastCloseButton {color} {variant} onclick={onclear} {clearable} />
    {/if}
  </div>

  <Description {...toastContentDescriptionProps} description={children} />
</Card>
