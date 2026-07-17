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
  import {
    Label,
    type ComponentSize,
    type ComponentRoundness,
    type ComponentColor,
    type ComponentVariant,
  } from '@flightlesslabs/dodo-ui';

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
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              fill="currentColor"
              d="M12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22"
            />
          </svg>
        {/if}
      </div>
    {/snippet}
  </RadioGroup.Item>

  {#if children}
    <Label class="CheckComponentLabel" for={id}>{@render children?.()}</Label>
  {/if}
</div>
