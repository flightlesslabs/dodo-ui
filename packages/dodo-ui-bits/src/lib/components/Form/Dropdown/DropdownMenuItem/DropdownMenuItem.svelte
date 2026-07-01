<script lang="ts" module>
  import type { ComponentProps } from 'svelte';

  /**
   * Public props for Dropdown menu item
   */
  export type DropdownMenuItemProps = ComponentProps<typeof DropdownMenuBitUi.Item> & {
    /** Bottom outline for menu item */
    outline?: boolean;
  };
</script>

<script lang="ts">
  import { DropdownMenu as DropdownMenuBitUi } from 'bits-ui';

  let { class: className = '', outline = false, ...restProps }: DropdownMenuItemProps = $props();

  const classes = $derived(
    ['dodo-ui-DropdownMenuItem', outline && 'outline', className].filter(Boolean),
  );
</script>

<DropdownMenuBitUi.Item {...restProps} class={classes.join(' ')} />
