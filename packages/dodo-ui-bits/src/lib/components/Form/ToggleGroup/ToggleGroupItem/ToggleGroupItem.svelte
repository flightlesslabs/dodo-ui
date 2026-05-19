<script lang="ts" module>
  type ToggleGroupItemBaseProps = {
    /** option value */
    value: string;

    /** Disable this option */
    disabled?: boolean;

    /** Common props applied to all buttons */
    buttonProps?: Partial<ButtonAsButtonProps>;

    /** Props applied when NOT active */
    inactiveButtonProps?: Partial<ButtonAsButtonProps>;

    /** Props applied when active */
    activeButtonProps?: Partial<ButtonAsButtonProps>;

    /** is the item in active list */
    isActive?: boolean;

    /** Custom CSS class names applied to the ToggleGroupItem */
    class?: string;
  };

  export type ToggleGroupItemProps = ToggleGroupItemBaseProps & ToggleGroupItemBitUiProps;
</script>

<script lang="ts">
  import {
    ToggleGroup as ToggleGroupBitUi,
    type ToggleGroupItemProps as ToggleGroupItemBitUiProps,
  } from 'bits-ui';
  import type { ButtonAsButtonProps } from '@flightlesslabs/dodo-ui';

  let {
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
    ...inactivebuttonPropsDefaults,
    ...buttonProps,
    ...inactiveButtonProps,
  });

  const mergedActiveButtonProps = $derived({
    ...activebuttonPropsDefaults,
    ...buttonProps,
    ...activeButtonProps,
  });

  const { size, color, variant, roundness, outline, compact, fullWidth, background } = $derived(
    isActive ? mergedActiveButtonProps : mergedInactiveButtonProps,
  );

  const classes = $derived(
    [
      'dodo-ui-ToggleGroupItem',
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

<ToggleGroupBitUi.Item {...restProps} class={classes.join(' ')} />
