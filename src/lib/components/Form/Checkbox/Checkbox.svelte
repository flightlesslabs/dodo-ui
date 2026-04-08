<script lang="ts" module>
  import type { Snippet } from 'svelte';

  /**
   * Public props for Checkbox
   */
  export type CheckboxProps = CheckboxRootProps & {
    /** Custom CSS class names */
    class?: string;

    /** Slot content */
    children?: Snippet;

    /** Visual size token */
    size?: ComponentSize;

    /** Color theme token */
    color?: ComponentColor;

    /** Border radius token (0–3, "pill") */
    roundness?: ComponentRoundnessShape;

    /** Visual variant (e.g. solid, text) */
    variant?: ComponentVariant;

    /** Add a border around the button */
    outline?: boolean;
  };
</script>

<script lang="ts">
  import { Checkbox as CheckboxBitUi, type CheckboxRootProps } from 'bits-ui';
  import Label from '../Label/Label.svelte';
  import Icon from '@iconify/svelte';
  import type { ComponentSize } from '$lib/attributes/size.js';
  import type { ComponentColor } from '$lib/attributes/color.js';
  import type { ComponentRoundnessShape } from '$lib/attributes/roundness.js';
  import type { ComponentVariant } from '$lib/attributes/variant.js';

  let {
    class: className = '',
    children,
    name,
    size = 'normal',
    color = 'neutral',
    roundness = 1,
    id,
    outline = true,
    variant = 'text',
    checked = $bindable(false),
    indeterminate = $bindable(false),
    ref = $bindable(null),
    ...restProps
  }: CheckboxProps = $props();

  /**
   * Computed class list
   */
  const classes = $derived(
    [
      'dodo-ui-Checkbox',
      `size--${size}`,
      `color--${color}`,
      `variant--${variant}`,
      `roundness--${roundness}`,
      outline && 'outline',
      className,
    ].filter(Boolean),
  );

  const classesCheckEnclosure = $derived(
    ['CheckEnclosure', `color--${color}`, `variant--${variant}`, outline && 'outline'].filter(
      Boolean,
    ),
  );
</script>

<div class={classes.join(' ')}>
  <CheckboxBitUi.Root
    {...restProps}
    {name}
    {id}
    bind:checked
    bind:indeterminate
    bind:ref
    class={classesCheckEnclosure.join(' ')}
  >
    {#snippet children({ checked, indeterminate })}
      <div class="CheckComponentCheckContainer">
        {#if indeterminate}
          <Icon icon="material-symbols:check-indeterminate-small" />
        {:else if checked}
          <Icon icon="material-symbols:check-small" />
        {/if}
      </div>
    {/snippet}
  </CheckboxBitUi.Root>

  {#if children}
    <Label class="CheckComponentLabel" for={id}>{@render children?.()}</Label>
  {/if}
</div>
