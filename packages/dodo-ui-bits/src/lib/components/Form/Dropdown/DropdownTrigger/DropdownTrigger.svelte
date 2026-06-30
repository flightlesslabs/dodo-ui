<script lang="ts" module>
  import type { ComponentProps } from 'svelte';

  /**
   * Public props for Dropdown Trigger
   */
  export type DropdownTriggerProps = ComponentProps<typeof DropdownMenuBitUi.Trigger> &
    ButtonAsButtonProps & {
      /** Custom CSS class names */
      class?: string;
    };
</script>

<script lang="ts">
  import { DropdownMenu as DropdownMenuBitUi } from 'bits-ui';
  import type { ButtonAsButtonProps } from '@flightlesslabs/dodo-ui';

  let {
    class: className = '',
    size = 'normal',
    color = 'primary',
    roundness = 1,
    variant = 'solid',
    outline = false,
    compact = false,
    fullWidth = false,
    background = 'subtle',
    ...restProps
  }: DropdownTriggerProps = $props();

  const classes = $derived(
    [
      'dodo-ui-DropdownTrigger',
      'dodo-ui-Button',
      `size--${size}`,
      `color--${color}`,
      `variant--${variant}`,
      `background--${background}`,
      `roundness--${roundness}`,
      outline && 'outline',
      compact && 'compact',
      fullWidth && 'fullWidth',
      className,
    ].filter(Boolean),
  );
</script>

<DropdownMenuBitUi.Trigger {...restProps} class={classes.join(' ')} />
