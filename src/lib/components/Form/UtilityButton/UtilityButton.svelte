<script lang="ts" module>
  import type { Snippet } from 'svelte';

  /**
   * Shared base props for the UtilityButton component.
   *
   * These props apply to both the <UtilityButton> and <a> render modes.
   */
  interface UtilityButtonBaseProps {
    /** UtilityButton contents */
    children?: Snippet;

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
  export type UtilityButtonAsButtonProps = UtilityButtonBaseProps & ButtonAsButtonPropsBase;

  /**
   * UtilityButton component props (anchor variant).
   *
   * Renders an <a> element when `href` is provided.
   * Inherits all native HTML anchor attributes, except `type`.
   */
  export type UtilityButtonAsAnchorProps = UtilityButtonBaseProps & ButtonAsAnchorPropsBase;

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
  import type { ComponentSize } from '$lib/attributes/size.js';
  import type { ComponentColor } from '$lib/attributes/color.js';
  import type { ComponentRoundness } from '$lib/attributes/roundness.js';
  import ButtonAsAnchor from '../Button/ButtonAsAnchor.svelte';
  import type { ButtonAsAnchorProps as ButtonAsAnchorPropsBase } from '../Button/ButtonAsAnchor.svelte';
  import ButtonAsButton from '../Button/ButtonAsButton.svelte';
  import type { ButtonAsButtonProps as ButtonAsButtonPropsBase } from '../Button/ButtonAsButton.svelte';

  /**
   * UtilityButton component runtime props.
   *
   * These props are destructured from `$props()` and mapped to the underlying
   * Bits UI UtilityButton root component, with semantic rendering based on `href`.
   */
  let {
    size = 'normal',
    color = 'primary',
    roundness = 1,
    outline = false,
    compact = false,
    class: className = '',
    disabled = false,
    'aria-label': ariaLabel,
    href,
    type,
    ref = $bindable(null),
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
  <ButtonAsAnchor
    {...restProps as ButtonAsAnchorPropsBase}
    {disabled}
    aria-label={ariaLabel}
    class={classes.join(' ')}
    bind:ref
    {href}
  />
{:else}
  <ButtonAsButton
    {...restProps as ButtonAsButtonPropsBase}
    {disabled}
    aria-label={ariaLabel}
    class={classes.join(' ')}
    bind:ref
    {type}
  />
{/if}
