<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import type { ArgTypes } from 'storybook/internal/csf';
  import type { DropdownTriggerProps } from '@flightlesslabs/dodo-ui-bits';
  import { Dropdown, DropdownTrigger } from '@flightlesslabs/dodo-ui-bits';

  const options = [
    { value: 'one', label: 'One' },
    { value: 'two', label: 'Two' },
    { value: 'three', label: 'Three' },
    { value: 'four', label: 'Four' },
  ];

  // ------------------------------
  // Storybook ArgTypes
  // ------------------------------
  export const storySelectArgTypes: Partial<ArgTypes<DropdownTriggerProps>> = {
    // ------------------------------
    // Core
    // ------------------------------
    class: { table: { category: 'API', subcategory: 'Base' } },
  };

  // ------------------------------
  // Storybook Meta
  // ------------------------------
  const { Story } = defineMeta({
    component: DropdownTrigger,
    tags: ['autodocs'],
    argTypes: storySelectArgTypes,
  });
</script>

<!-- ------------------------------ -->
<!-- Stories -->
<!-- ------------------------------ -->

<Story name="Default" asChild>
  <Dropdown {options}>
    {#snippet customTrigger()}
      <DropdownTrigger>Hello</DropdownTrigger>
    {/snippet}
  </Dropdown>
</Story>
