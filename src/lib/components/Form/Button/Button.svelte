<script lang="ts" module>
  import type { Snippet } from 'svelte';
  import type { HTMLButtonAttributes, HTMLAnchorAttributes } from 'svelte/elements';

  /**
   * Shared base props for the Button component.
   *
   * These props apply to both the <button> and <a> render modes.
   */
  interface ButtonBaseProps {
    /** Button contents */
    children?: Snippet;

    /** Reference to the underlying button or anchor element */
    ref?: HTMLButtonElement | HTMLAnchorElement;

    /** Visual size token */
    size?: ComponentSize;

    /** Stretch button to full container width */
    fullWidth?: boolean;

    /** Color theme token */
    color?: ComponentColor;

    /** Border radius token (0–3, "pill", "full") */
    roundness?: ComponentRoundness;

    /** Visual variant (e.g. solid, text) */
    variant?: ComponentVariant;

    /** Add a border around the button */
    outline?: boolean;

    /** Compact spacing, typically for icon-only buttons */
    compact?: boolean;

    /** Custom CSS class names */
    class?: string;

    /** Accessible label (required for icon-only buttons) */
    'aria-label'?: string;
  }

  /**
   * Button component props (button variant).
   *
   * Renders a semantic <button> element when `href` is not provided.
   * Inherits all native HTML button attributes.
   */
  export type ButtonAsButtonProps = ButtonBaseProps &
    Omit<HTMLButtonAttributes, 'href'> & {
      /** Render as link when provided (not allowed for button variant) */
      href?: never;

      /** Disabled state of the button */
      disabled?: HTMLButtonAttributes['disabled'];
    };

  /**
   * Button component props (anchor variant).
   *
   * Renders an <a> element when `href` is provided.
   * Inherits all native HTML anchor attributes, except `type`.
   */
  export type ButtonAsAnchorProps = ButtonBaseProps &
    Omit<HTMLAnchorAttributes, 'type'> & {
      /** Render as link when provided */
      href: HTMLAnchorAttributes['href'];

      /** Button `type` is not supported when rendering as an anchor */
      type?: never;

      /** Disabled visual state (forwarded to button root for styling/ARIA) */
      disabled?: HTMLButtonAttributes['disabled'];
    };

  /**
   * Button component props.
   *
   * Renders a semantic <button> by default, or an <a> element when `href` is provided.
   * Supports design-system tokens for size, color, variant, and roundness.
   *
   * This type is a discriminated union:
   * - When `href` is present, anchor props are enabled and button-only props are disabled.
   * - When `href` is absent, button props are enabled and anchor-only props are disabled.
   */
  export type ButtonProps = ButtonAsButtonProps | ButtonAsAnchorProps;
</script>

<script lang="ts">
  import './Button.scss';
  import { Button as BitsUiButton } from 'bits-ui';
  import type { ComponentSize } from '$lib/attributes/size.js';
  import type { ComponentColor } from '$lib/attributes/color.js';
  import type { ComponentRoundness } from '$lib/attributes/roundness.js';
  import type { ComponentVariant } from '$lib/attributes/variant.js';

  /**
   * Button component runtime props.
   *
   * These props are destructured from `$props()` and mapped to the underlying
   * Bits UI Button root component, with semantic rendering based on `href`.
   */
  let {
    children,
    size = 'normal',
    color = 'primary',
    roundness = 1,
    variant = 'solid',
    outline = false,
    compact = false,
    fullWidth = false,
    class: className = '',
    disabled = false,
    'aria-label': ariaLabel,
    href,
    ref,
    type,
    ...restProps
  }: ButtonProps = $props();

  /**
   * Computed class list for the Button component.
   */
  const classes = $derived(
    [
      'dodo-ui-Button',
      `size--${size}`,
      `color--${color}`,
      `variant--${variant}`,
      `roundness--${roundness}`,
      outline && 'outline',
      compact && 'compact',
      fullWidth && 'fullWidth',
      className,
    ].filter(Boolean),
  );
</script>

{#if href}
  <!-- Anchor variant -->
  <BitsUiButton.Root
    {...restProps as Omit<HTMLAnchorAttributes, 'type'>}
    {disabled}
    aria-label={ariaLabel}
    class={classes.join(' ')}
    {ref}
    {href}
  >
    {@render children?.()}
  </BitsUiButton.Root>
{:else}
  <!-- Button variant -->
  <BitsUiButton.Root
    {...restProps as HTMLButtonAttributes}
    {disabled}
    aria-label={ariaLabel}
    class={classes.join(' ')}
    {ref}
    {type}
  >
    {@render children?.()}
  </BitsUiButton.Root>
{/if}
