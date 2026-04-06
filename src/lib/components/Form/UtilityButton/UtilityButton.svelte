<script lang="ts" module>
  import type { Snippet } from 'svelte';
  import type { HTMLButtonAttributes, HTMLAnchorAttributes } from 'svelte/elements';

  /**
   * Shared base props for the UtilityButton component.
   *
   * These props apply to both the <UtilityButton> and <a> render modes.
   */
  interface UtilityButtonBaseProps {
    /** UtilityButton contents */
    children?: Snippet;

    /** Reference to the underlying UtilityButton or anchor element */
    ref?: HTMLButtonElement | HTMLAnchorElement;

    /** Visual size token */
    size?: ComponentSize;

    /** Color theme token */
    color?: ComponentColor;

    /** Border radius token (0–3, "pill", "full") */
    roundness?: ComponentRoundness;

    /** Add a border around the UtilityButton */
    outline?: boolean;

    /** Compact spacing, typically for icon-only UtilityButtons */
    compact?: boolean;

    /** Custom CSS class names */
    class?: string;

    /** Accessible label (required for icon-only UtilityButtons) */
    'aria-label'?: string;
  }

  /**
   * UtilityButton component props (UtilityButton variant).
   *
   * Renders a semantic <UtilityButton> element when `href` is not provided.
   * Inherits all native HTML UtilityButton attributes.
   */
  export type UtilityButtonAsButtonProps = UtilityButtonBaseProps &
    Omit<HTMLButtonAttributes, 'href'> & {
      /** Render as link when provided (not allowed for UtilityButton variant) */
      href?: never;

      /** Disabled state of the UtilityButton */
      disabled?: HTMLButtonAttributes['disabled'];
    };

  /**
   * UtilityButton component props (anchor variant).
   *
   * Renders an <a> element when `href` is provided.
   * Inherits all native HTML anchor attributes, except `type`.
   */
  export type UtilityButtonAsAnchorProps = UtilityButtonBaseProps &
    Omit<HTMLAnchorAttributes, 'type'> & {
      /** Render as link when provided */
      href: HTMLAnchorAttributes['href'];

      /** UtilityButton `type` is not supported when rendering as an anchor */
      type?: never;

      /** Disabled visual state (forwarded to UtilityButton root for styling/ARIA) */
      disabled?: HTMLButtonAttributes['disabled'];
    };

  /**
   * UtilityButton component props.
   *
   * Renders a semantic <UtilityButton> by default, or an <a> element when `href` is provided.
   * Supports design-system tokens for size, color, variant, and roundness.
   *
   * This type is a discriminated union:
   * - When `href` is present, anchor props are enabled and UtilityButton-only props are disabled.
   * - When `href` is absent, UtilityButton props are enabled and anchor-only props are disabled.
   */
  export type UtilityButtonProps = UtilityButtonAsButtonProps | UtilityButtonAsAnchorProps;
</script>

<script lang="ts">
  import { Button as BitsUiUtilityButton } from 'bits-ui';
  import type { ComponentSize } from '$lib/attributes/size.js';
  import type { ComponentColor } from '$lib/attributes/color.js';
  import type { ComponentRoundness } from '$lib/attributes/roundness.js';

  /**
   * UtilityButton component runtime props.
   *
   * These props are destructured from `$props()` and mapped to the underlying
   * Bits UI UtilityButton root component, with semantic rendering based on `href`.
   */
  let {
    children,
    size = 'normal',
    color = 'primary',
    roundness = 1,
    outline = false,
    compact = false,
    class: className = '',
    disabled = false,
    'aria-label': ariaLabel,
    href,
    ref,
    type,
    ...restProps
  }: UtilityButtonProps = $props();

  /**
   * Computed class list for the UtilityButton component.
   */
  const classes = $derived(
    [
      'dodo-ui-UtilityButton',
      `size--${size}`,
      `color--${color}`,
      `roundness--${roundness}`,
      outline && 'outline',
      compact && 'compact',
      className,
    ].filter(Boolean),
  );
</script>

{#if href}
  <!-- Anchor variant -->
  <BitsUiUtilityButton.Root
    {...restProps as Omit<HTMLAnchorAttributes, 'type'>}
    {disabled}
    aria-label={ariaLabel}
    class={classes.join(' ')}
    {ref}
    {href}
  >
    {@render children?.()}
  </BitsUiUtilityButton.Root>
{:else}
  <!-- UtilityButton variant -->
  <BitsUiUtilityButton.Root
    {...restProps as HTMLButtonAttributes}
    {disabled}
    aria-label={ariaLabel}
    class={classes.join(' ')}
    {ref}
    {type}
  >
    {@render children?.()}
  </BitsUiUtilityButton.Root>
{/if}
