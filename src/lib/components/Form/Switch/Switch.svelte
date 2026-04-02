<script lang="ts" module>
  import type { Snippet } from 'svelte';

  /**
   * Public props for Switch
   */
  export type SwitchProps = SwitchRootProps & {
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
  import { Switch as SwitchBitUi, type SwitchRootProps } from 'bits-ui';
  import Label from '../Label/Label.svelte';
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
    roundness = 'pill',
    id,
    outline = true,
    variant = 'text',
    ...restProps
  }: SwitchProps = $props();

  /**
   * Computed class list
   */
  const classes = $derived(
    [
      'dodo-ui-Switch',
      `size--${size}`,
      `color--${color}`,
      `variant--${variant}`,
      `roundness--${roundness}`,
      outline && 'outline',
      className,
    ].filter(Boolean),
  );

  const classesCheckEnclosure = $derived(
    [
      'CheckEnclosure',
      'CheckEnclosureBackdrop',
      `color--${color}`,
      `variant--${variant}`,
      outline && 'outline',
    ].filter(Boolean),
  );
</script>

<div class={classes.join(' ')}>
  <SwitchBitUi.Root {...restProps} {name} {id} class={classesCheckEnclosure.join(' ')}>
    <SwitchBitUi.Thumb class="CheckThumb">
      <span class="CheckThumbInternal"></span>
    </SwitchBitUi.Thumb>
  </SwitchBitUi.Root>

  {#if children}
    <Label class="CheckComponentLabel" for={id}>{@render children?.()}</Label>
  {/if}
</div>
