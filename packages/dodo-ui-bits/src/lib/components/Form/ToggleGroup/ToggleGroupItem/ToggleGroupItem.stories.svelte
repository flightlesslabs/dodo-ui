<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import type { ArgTypes } from 'storybook/internal/csf';
  import type { ToggleGroupItemProps } from './ToggleGroupItem.svelte';
  import ToggleGroupItem from './ToggleGroupItem.svelte';
  import ToggleGroup from '../ToggleGroup.svelte';

  const options1 = [
    { value: 'one', label: 'Uno' },
    { value: 'two', label: 'Dos' },
  ];

  // ------------------------------
  // Storybook ArgTypes
  // ------------------------------
  export const storyToggleGroupItemArgTypes: Partial<ArgTypes<ToggleGroupItemProps>> = {
    // ------------------------------
    // Core
    // ------------------------------
    class: { table: { category: 'API', subcategory: 'Base' } },
    isActive: { table: { category: 'API', subcategory: 'Base' } },
    value: { table: { category: 'API', subcategory: 'Base' } },

    // ------------------------------
    // State
    // ------------------------------
    disabled: {
      control: { type: 'boolean' },
      table: { category: 'API', subcategory: 'State', defaultValue: { summary: 'false' } },
    },

    // ------------------------------
    // Appearance
    // ------------------------------
    buttonProps: { table: { category: 'API', subcategory: 'Appearance' } },
    inactiveButtonProps: { table: { category: 'API', subcategory: 'Appearance' } },
    activeButtonProps: { table: { category: 'API', subcategory: 'Appearance' } },
  };

  // ------------------------------
  // Storybook Meta
  // ------------------------------
  const { Story } = defineMeta({
    component: ToggleGroupItem,
    tags: ['autodocs'],
    argTypes: storyToggleGroupItemArgTypes,
  });
</script>

<!-- ------------------------------ -->
<!-- Stories -->
<!-- ------------------------------ -->

<Story name="Default" asChild>
  <ToggleGroup options={options1} type="single">
    {#snippet customToggleGroupItem(props)}
      <ToggleGroupItem {...props} />
    {/snippet}
  </ToggleGroup>
</Story>
