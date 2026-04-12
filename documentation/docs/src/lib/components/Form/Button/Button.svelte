<script lang="ts" module>
  import type { Snippet } from 'svelte';

  /**
   * Shared base props for the Button component.
   *
   * These props apply to both the <button> and <a> render modes.
   */
  interface ButtonBaseProps {
    /** Button contents */
    children?: Snippet;

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
  export type ButtonAsButtonProps = ButtonBaseProps & ButtonAsButtonPropsBase;

  export type ButtonAsAnchorProps = ButtonBaseProps & ButtonAsAnchorPropsBase;

  export type ButtonProps = ButtonAsButtonProps | ButtonAsAnchorProps;
</script>

<script lang="ts">
  import type { ComponentSize } from '$lib/attributes/size.js';
  import type { ComponentColor } from '$lib/attributes/color.js';
  import type { ComponentRoundness } from '$lib/attributes/roundness.js';
  import type { ComponentVariant } from '$lib/attributes/variant.js';
  import type { ButtonAsAnchorProps as ButtonAsAnchorPropsBase } from './ButtonAsAnchor.svelte';
  import ButtonAsAnchor from './ButtonAsAnchor.svelte';
  import type { ButtonAsButtonProps as ButtonAsButtonPropsBase } from './ButtonAsButton.svelte';
  import ButtonAsButton from './ButtonAsButton.svelte';

  let {
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
    ref = $bindable(null),
    type,
    ...restProps
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
