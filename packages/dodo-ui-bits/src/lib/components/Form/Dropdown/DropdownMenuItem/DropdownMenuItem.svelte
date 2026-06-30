<script lang="ts" module>
  import type { ComponentProps } from 'svelte';

  /**
   * Public props for Dropdown menu item
   */
  export type DropdownMenuItemProps = ComponentProps<typeof DropdownMenuBitUi.Item>;
</script>

<script lang="ts">
  import { DropdownMenu as DropdownMenuBitUi } from 'bits-ui';

  let props: DropdownMenuItemProps = $props();

  const classes = $derived(['dodo-ui-DropdownMenuItem'].filter(Boolean));
</script>

<DropdownMenuBitUi.Item {...props} class={classes.join(' ')} />
