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
  import { Label } from '@flightlesslabs/dodo-ui';
  import type {
    ComponentColor,
    ComponentRoundnessShape,
    ComponentVariant,
    ComponentSize,
  } from '@flightlesslabs/dodo-ui';

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
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
            <path d="M0 0h24v24H0z" fill="none" />
            <path fill="currentColor" d="M6 13v-2h12v2z" />
          </svg>
        {:else if checked}
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
            <path d="M0 0h24v24H0z" fill="none" />
            <path fill="currentColor" d="m10 16.4l-4-4L7.4 11l2.6 2.6L16.6 7L18 8.4z" />
          </svg>
        {/if}
      </div>
    {/snippet}
  </CheckboxBitUi.Root>

  {#if children}
    <Label class="CheckComponentLabel" for={id}>{@render children?.()}</Label>
  {/if}
</div>
