<script lang="ts" module>
  import type { Snippet } from 'svelte';

  /**
   * Public props for Radio
   */
  export type RadioProps = RadioGroupItemProps & {
    /** Custom CSS class names */
    class?: string;

    /** Slot content */
    children?: Snippet;

    /** Visual size token */
    size?: ComponentSize;

    /** Color theme token */
    color?: ComponentColor;

    /** Border radius token (0–3, "pill", ""full) */
    roundness?: ComponentRoundness;

    /** Visual variant (e.g. solid, text) */
    variant?: ComponentVariant;

    /** Add a border around the button */
    outline?: boolean;
  };
</script>

<script lang="ts">
  import { RadioGroup, type RadioGroupItemProps } from 'bits-ui';
  import type { ComponentSize } from '$lib/attributes/size.js';
  import type { ComponentColor } from '$lib/attributes/color.js';
  import type { ComponentRoundness } from '$lib/attributes/roundness.js';
  import type { ComponentVariant } from '$lib/attributes/variant.js';
  import Icon from '@iconify/svelte';
  import Label from '../../Label/Label.svelte';

  let {
    class: className = '',
    children,
    name,
    size = 'normal',
    color = 'neutral',
    roundness = 'full',
    id,
    outline = true,
    variant = 'text',
    ...restProps
  }: RadioProps = $props();

  /**
   * Computed class list
   */
  const classes = $derived(
    [
      'dodo-ui-Radio',
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
  <RadioGroup.Item {...restProps} {name} {id} class={classesCheckEnclosure.join(' ')}>
    {#snippet children({ checked })}
      <div class="CheckComponentCheckContainer">
        {#if checked}
          <Icon icon="material-symbols:circle" />
        {/if}
      </div>
    {/snippet}
  </RadioGroup.Item>

  {#if children}
    <Label class="CheckComponentLabel" for={id}>{@render children?.()}</Label>
  {/if}
</div>
