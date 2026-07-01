<script lang="ts" module>
  import type { ComponentProps } from 'svelte';

  /**
   * Public props for Dropdown
   */
  export type DropdownMenuProps = ComponentProps<typeof DropdownMenuBitUi.Content> &
    Omit<CardProps, 'ref'>;
</script>

<script lang="ts">
  import { DropdownMenu as DropdownMenuBitUi } from 'bits-ui';
  import { useThemeStore, type CardProps } from '@flightlesslabs/dodo-ui';

  let {
    class: className = '',
    color = 'default',
    variant = 'text',
    active = false,
    roundness = 1,
    shadow = 2,
    outline = false,
    theme: cardTheme,
    width,
    height,
    sideOffset = 10,
    align = 'start',
    'min-height': minHeight,
    'min-width': minWidth,
    'max-height': maxHeight,
    'max-width': maxWidth,
    ...restProps
  }: DropdownMenuProps = $props();

  const theme = $derived(cardTheme || useThemeStore.theme);

  const classes = $derived(
    [
      'dodo-ui-DropdownMenu',
      'dodo-ui-Card',
      'SelectPopup',
      `color--${color}`,
      `variant--${variant}`,
      `roundness--${roundness}`,
      `dodo-shadow-${shadow}`,
      outline && 'outline',
      active && 'active',
      theme ? `dodo-theme--${theme}` : '',
      className,
    ].filter(Boolean),
  );

  const menuInlineStyles = $derived(
    [
      width ? `--dropdown-menu-width: ${width}` : '',
      height ? `--dropdown-menu-height: ${height}` : '',
      minHeight ? `--dropdown-menu-min-height: ${minHeight}` : '',
      minWidth ? `--dropdown-menu-min-width: ${minWidth}` : '',
      maxHeight ? `--dropdown-menu-max-height: ${maxHeight}` : '',
      maxWidth ? `--dropdown-menu-max-width: ${maxWidth}` : '',
    ].filter(Boolean),
  );
</script>

<DropdownMenuBitUi.Content
  {...restProps}
  class={classes.join(' ')}
  style={menuInlineStyles.join(';')}
  {sideOffset}
  {align}
/>
