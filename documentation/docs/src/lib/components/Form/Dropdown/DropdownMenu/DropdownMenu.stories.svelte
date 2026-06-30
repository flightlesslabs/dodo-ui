<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import type { ArgTypes } from 'storybook/internal/csf';
  import type { DropdownMenuProps } from '@flightlesslabs/dodo-ui-bits';
  import { Dropdown, DropdownMenu, DropdownMenuItem } from '@flightlesslabs/dodo-ui-bits';

  // ------------------------------
  // Storybook ArgTypes
  // ------------------------------
  export const storySelectArgTypes: Partial<ArgTypes<DropdownMenuProps>> = {
    // ------------------------------
    // Core
    // ------------------------------
    class: { table: { category: 'API', subcategory: 'Base' } },
  };

  // ------------------------------
  // Storybook Meta
  // ------------------------------
  const { Story } = defineMeta({
    component: DropdownMenu,
    tags: ['autodocs'],
    argTypes: storySelectArgTypes,
  });
</script>

<!-- ------------------------------ -->
<!-- Stories -->
<!-- ------------------------------ -->

<Story name="Default" asChild>
  <Dropdown>
    Dropdown

    {#snippet customMenu()}
      <DropdownMenu>
        <DropdownMenuItem>Uno</DropdownMenuItem>
        <DropdownMenuItem>Dos</DropdownMenuItem>
        <DropdownMenuItem>Tres</DropdownMenuItem>
      </DropdownMenu>
    {/snippet}
  </Dropdown>
</Story>
