<script lang="ts" module>
  import type { Snippet } from 'svelte';

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

  export type UtilityButtonAsButtonProps = UtilityButtonBaseProps & ButtonAsButtonPropsBase;

  export type UtilityButtonAsAnchorProps = UtilityButtonBaseProps & ButtonAsAnchorPropsBase;

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
