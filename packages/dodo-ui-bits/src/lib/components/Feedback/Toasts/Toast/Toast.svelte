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
  import {
    Card,
    cardColorOptions,
    useThemeStore,
    UtilityButton,
    type CardProps,
  } from '@flightlesslabs/dodo-ui';
  import { componentColorOptions, convertOption } from '@flightlesslabs/dodo-core-attributes';
  import type { Snippet } from 'svelte';
  import Icon from '@iconify/svelte';
  import Title, { type ToastContentTitleProps } from './Title.svelte';
  import type { ToastContentDescriptionProps } from './Description.svelte';
  import Description from './Description.svelte';

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
    ...restProps
  }: ToastProps = $props();

  const theme = $derived(cardTheme || useThemeStore.theme);

  const classes = $derived(['dodo-ui-Toast', className].filter(Boolean));

  const utilityButtonColor = $derived(
    convertOption(cardColorOptions, componentColorOptions, color || 'primary', 'primary'),
  );
</script>

<Card {...restProps} {theme} {variant} {color} max-width={maxWidth} class={classes.join(' ')}>
  <div class="ToastContentHeader">
    {#if clearable || customTitle || title}
      <Title {...toastContentTitleProps} {customTitle} {title} />

      {#if clearable}
        <UtilityButton
          class="ToastClose"
          onclick={onclear}
          roundness="full"
          compact
          color={utilityButtonColor}
          theme={variant === 'solid' ? 'dark' : undefined}
        >
          <Icon icon="ri:close-large-fill" />
        </UtilityButton>
      {/if}
    {/if}
  </div>

  <Description {...toastContentDescriptionProps} description={children} />
</Card>
