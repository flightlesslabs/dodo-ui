<script lang="ts" module>
  type ToggleGroupItemBaseProps = ToggleGroupOption & {
    isActive?: boolean;
    customContent?: Snippet;
  };

  type WithoutChildren<T> = Omit<T, 'children'>;

  export type ToggleGroupItemProps = ToggleGroupItemBaseProps &
    WithoutChildren<ToggleGroupItemBitUiProps>;
</script>

<script lang="ts">
  import {
    ToggleGroup as ToggleGroupBitUi,
    type ToggleGroupItemProps as ToggleGroupItemBitUiProps,
  } from 'bits-ui';
  import type { Snippet } from 'svelte';
  import type { ToggleGroupOption } from './ToggleGroup.svelte';
  import type { ButtonAsButtonProps } from '@flightlesslabs/dodo-ui';

  let {
    customContent,
    label,
    isActive = false,
    buttonProps,
    activeButtonProps,
    ...restProps
  }: ToggleGroupItemProps = $props();

  const defaultPropsAllButton: Partial<ButtonAsButtonProps> = {
    size: 'normal',
    roundness: 1,
    outline: false,
    compact: false,
    fullWidth: false,
  };

  const buttonPropsDefaults: Partial<ButtonAsButtonProps> = {
    ...defaultPropsAllButton,
    color: 'primary',
    variant: 'text',
  };
  const activebuttonPropsDefaults: Partial<ButtonAsButtonProps> = {
    ...defaultPropsAllButton,
    color: 'primary',
    variant: 'solid',
  };

  const mergedButtonProps = $derived({ ...buttonPropsDefaults, ...buttonProps });

  const mergedActiveButtonProps = $derived({ ...activebuttonPropsDefaults, ...activeButtonProps });

  const { size, color, variant, roundness, outline, compact, fullWidth } = $derived(
    isActive ? mergedActiveButtonProps : mergedButtonProps,
  );

  const classes = $derived(
    [
      'ToggleGroupItem',
      'dodo-ui-Button',
      `size--${size}`,
      `color--${color}`,
      `variant--${variant}`,
      `roundness--${roundness}`,
      outline && 'outline',
      compact && 'compact',
      fullWidth && 'fullWidth',
    ].filter(Boolean),
  );
</script>

<ToggleGroupBitUi.Item {...restProps} class={classes.join(' ')}>
  {#if customContent}
    {@render customContent?.()}
  {:else}
    {label}
  {/if}
</ToggleGroupBitUi.Item>
