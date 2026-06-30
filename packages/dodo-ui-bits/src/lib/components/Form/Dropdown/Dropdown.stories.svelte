<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import type { ArgTypes } from 'storybook/internal/csf';
  import type { DropdownMenuOption, DropdownProps } from './Dropdown.svelte';
  import Dropdown from './Dropdown.svelte';
  import DropdownMenu from './DropdownMenu/DropdownMenu.svelte';
  import DropdownMenuItem from './DropdownMenuItem/DropdownMenuItem.svelte';
  import DropdownTrigger from './DropdownTrigger/DropdownTrigger.svelte';
  import { Theme } from '@flightlesslabs/dodo-ui';

  const options = [
    { value: 'one', label: 'One' },
    { value: 'two', label: 'Two' },
    { value: 'three', label: 'Three' },
    { value: 'four', label: 'Four' },
  ];

  // ------------------------------
  // Storybook ArgTypes
  // ------------------------------
  export const storySelectArgTypes: Partial<ArgTypes<DropdownProps>> = {
    // ------------------------------
    // Core
    // ------------------------------
    class: { table: { category: 'API', subcategory: 'Base' } },
    options: { table: { category: 'API', subcategory: 'Base' } },

    // ------------------------------
    // State
    // ------------------------------
    disabled: {
      control: { type: 'boolean' },
      description: 'Disabled state of the input',
      table: { category: 'API', subcategory: 'State', defaultValue: { summary: 'false' } },
    },

    // ------------------------------
    // Slots (Snippets)
    // ------------------------------

    customTrigger: {
      table: { category: 'API', subcategory: 'Slots' },
    },
    customMenu: {
      table: { category: 'API', subcategory: 'Slots' },
    },
    customMenuItemContent: {
      table: { category: 'API', subcategory: 'Slots' },
    },
  };

  // ------------------------------
  // Storybook Meta
  // ------------------------------
  const { Story } = defineMeta({
    component: Dropdown,
    tags: ['autodocs'],
    argTypes: storySelectArgTypes,
    args: {
      options,
    },
  });
</script>

<!-- ------------------------------ -->
<!-- Stories -->
<!-- ------------------------------ -->

<Story name="Default">Dropdown</Story>

<Story
  name="onselect (Actions)"
  args={{
    onselect: (options: DropdownMenuOption) => {
      alert('onselect');
      console.log('onselect', options.value);
    },
  }}
>
  Dropdown
</Story>

<Story name="Disabled" args={{ disabled: true }}>Dropdown</Story>

<Story name="Button styles" args={{ triggerProps: { color: 'danger' } }}>Dropdown</Story>

<Story name="Menu styles" args={{ menuProps: { outline: true, color: 'primary' } }}>Dropdown</Story>

<Story name="Custom Trigger" asChild>
  <Dropdown {options}>
    {#snippet customTrigger()}
      <DropdownTrigger>⚡ Hello</DropdownTrigger>
    {/snippet}
  </Dropdown>
</Story>

<Story name="Custom Menu content" asChild>
  <Dropdown {options}>
    Dropdown

    {#snippet customMenuItemContent({ option })}
      ⚡{option.label}
    {/snippet}
  </Dropdown>
</Story>

<Story name="Custom Dropdown Menu" asChild>
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

<Story name="Light Theme" asChild>
  <Theme type="light">
    <Dropdown {options}>Dropdown</Dropdown>
  </Theme>
</Story>

<Story name="Dark Theme" asChild globals={{ backgrounds: { value: 'dark' } }}>
  <Theme type="dark">
    <Dropdown {options} menuProps={{ theme: 'dark' }}>Dropdown</Dropdown>
  </Theme>
</Story>
