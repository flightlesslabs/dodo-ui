<script lang="ts" module>
  import type { Snippet } from 'svelte';
  import type { MouseEventHandler } from 'svelte/elements';

  export type ButtonLinkTarget =
    | '_self'
    | '_blank'
    | '_parent'
    | '_top'
    | (string & {})
    | undefined
    | null;

  export type ButtonLinkReferrerpolicy = ReferrerPolicy | undefined | null;

  export type ButtonClickEvent = MouseEvent & {
    currentTarget: EventTarget & HTMLButtonElement;
  };

  export const buttonTypeArray = ['button', 'submit', 'reset'] as const;
  export type ButtonType = (typeof buttonTypeArray)[number] | null | undefined;

  /**
   * Button component props
   *
   * Renders a semantic <button> by default, or an <a> element when `href` is provided.
   * Supports design-system tokens for size, color, variant, and roundness.
   */
  export interface ButtonProps {
    /** Button contents */
    children?: Snippet;

    /** Reference to the underlying button or anchor element */
    ref?: HTMLButtonElement | HTMLAnchorElement;

    /** Native button type (ignored when `href` is set) */
    type?: ButtonType;

    /** Visual size token */
    size?: ComponentSize;

    /** Stretch button to full container width */
    fullWidth?: boolean;

    /** Color theme token */
    color?: ComponentColor;

    /** Border radius token (0–3 or "full") */
    roundness?: ComponentRoundness;

    /** Visual variant (e.g. solid, text) */
    variant?: ComponentVariant;

    /** Add a border around the button */
    outline?: boolean;

    /** Compact spacing, typically for icon-only buttons */
    compact?: boolean;

    /** Disabled state */
    disabled?: boolean;

    /** Native name attribute (button only) */
    name?: string;

    /** Native id attribute */
    id?: string;

    /** Tooltip text */
    title?: string;

    /** Custom CSS class names */
    class?: string;

    /** Click handler (button only) */
    onclick?: MouseEventHandler<HTMLButtonElement>;

    /** Accessible label (required for icon-only buttons) */
    'aria-label'?: string;

    /** Render as link when provided */
    href?: string;

    /** Anchor: download attribute */
    download?: unknown;

    /** Anchor: hreflang attribute */
    hreflang?: string | null;

    /** Anchor: media attribute */
    media?: string | null;

    /** Anchor: ping attribute */
    ping?: string | null;

    /** Anchor: rel attribute */
    rel?: string | null;

    /** Anchor: target attribute */
    target?: ButtonLinkTarget;

    /** Anchor: referrer policy */
    referrerpolicy?: ButtonLinkReferrerpolicy;
  }
</script>

<script lang="ts">
  import './Button.scss';
  import { Button as BitsUiButton } from 'bits-ui';
  import type { ComponentSize } from '$lib/attributes/size.js';
  import type { ComponentColor } from '$lib/attributes/color.js';
  import type { ComponentRoundness } from '$lib/attributes/roundness.js';
  import type { ComponentVariant } from '$lib/attributes/variant.js';

  let {
    children,
    size = 'normal',
    color = 'primary',
    roundness = 1,
    variant = 'solid',
    outline = false,
    compact = false,
    fullWidth = false,
    type = 'button',
    name,
    id,
    title,
    class: className = '',
    disabled = false,
    onclick,
    'aria-label': ariaLabel,
    href = undefined,
    download,
    hreflang,
    media,
    ping,
    rel,
    target,
    referrerpolicy,
    ref,
  }: ButtonProps = $props();

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
  <BitsUiButton.Root
    {disabled}
    aria-label={ariaLabel}
    class={classes.join(' ')}
    {ref}
    {id}
    {href}
    {download}
    {hreflang}
    {media}
    {ping}
    {rel}
    {target}
    {referrerpolicy}
  >
    {#if children}
      {@render children()}
    {/if}
  </BitsUiButton.Root>
{:else}
  <BitsUiButton.Root
    {disabled}
    aria-label={ariaLabel}
    class={classes.join(' ')}
    {ref}
    {type}
    {name}
    {id}
    {title}
    {onclick}
  >
    {#if children}
      {@render children()}
    {/if}
  </BitsUiButton.Root>
{/if}
