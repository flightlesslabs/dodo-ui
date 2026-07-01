<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import type { ArgTypes } from 'storybook/internal/csf';
  import type { DropdownMenuItemProps } from '@flightlesslabs/dodo-ui-bits';
  import { Dropdown, DropdownMenu, DropdownMenuItem } from '@flightlesslabs/dodo-ui-bits';

  // ------------------------------
  // Storybook ArgTypes
  // ------------------------------
  export const storySelectArgTypes: Partial<ArgTypes<DropdownMenuItemProps>> = {
    // ------------------------------
    // Core
    // ------------------------------
    class: { table: { category: 'API', subcategory: 'Base' } },

    // ------------------------------
    // Appearance
    // ------------------------------
    outline: {
      control: { type: 'boolean' },
      table: { category: 'API', subcategory: 'Appearance' },
    },
  };

  // ------------------------------
  // Storybook Meta
  // ------------------------------
  const { Story } = defineMeta({
    component: DropdownMenuItem,
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
