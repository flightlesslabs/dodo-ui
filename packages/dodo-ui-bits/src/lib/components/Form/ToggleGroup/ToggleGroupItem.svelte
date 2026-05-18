<script lang="ts" module>
  export type ToggleGroupItemCustomContentContext = ToggleGroupOption & {
    isActive?: boolean;
  };

  type ToggleGroupItemBaseProps = ToggleGroupOption & {
    isActive?: boolean;
    customContent?: Snippet<[ToggleGroupItemCustomContentContext]>;
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
    inactiveButtonProps,
    ...restProps
  }: ToggleGroupItemProps = $props();

  const defaultPropsAllButton: Partial<ButtonAsButtonProps> = {
    size: 'normal',
    roundness: 1,
    outline: false,
    compact: false,
    fullWidth: false,
    background: 'subtle',
  };

  const inactivebuttonPropsDefaults: Partial<ButtonAsButtonProps> = {
    ...defaultPropsAllButton,
    color: 'primary',
    variant: 'text',
  };

  const activebuttonPropsDefaults: Partial<ButtonAsButtonProps> = {
    ...defaultPropsAllButton,
    color: 'primary',
    variant: 'solid',
  };

  const mergedInactiveButtonProps = $derived({
    ...buttonProps,
    ...inactivebuttonPropsDefaults,
    ...inactiveButtonProps,
  });

  const mergedActiveButtonProps = $derived({
    ...buttonProps,
    ...activebuttonPropsDefaults,
    ...activeButtonProps,
  });

  const { size, color, variant, roundness, outline, compact, fullWidth, background } = $derived(
    isActive ? mergedActiveButtonProps : mergedInactiveButtonProps,
  );

  const classes = $derived(
    [
      'ToggleGroupItem',
      'dodo-ui-Button',
      `size--${size}`,
      `color--${color}`,
      `variant--${variant}`,
      `background--${background}`,
      `roundness--${roundness}`,
      outline && 'outline',
      compact && 'compact',
      fullWidth && 'fullWidth',
    ].filter(Boolean),
  );
</script>

<ToggleGroupBitUi.Item {...restProps} class={classes.join(' ')}>
  {#if customContent}
    {@render customContent?.({
      ...restProps,
      label,
      isActive,
      buttonProps,
      activeButtonProps,
      inactiveButtonProps,
    })}
  {:else}
    {label}
  {/if}
</ToggleGroupBitUi.Item>
