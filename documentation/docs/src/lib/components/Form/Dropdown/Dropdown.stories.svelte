<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import type { ArgTypes } from 'storybook/internal/csf';
  import { Theme } from '@flightlesslabs/dodo-ui';
  import type { DropdownProps, DropdownMenuOption } from '@flightlesslabs/dodo-ui-bits';
  import {
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownMenuItem,
  } from '@flightlesslabs/dodo-ui-bits';

  const description = `
 A dropdown component based on bits-ui [dropdown menu](https://bits-ui.com/docs/components/dropdown-menu).

## 🚀 Installation

   \`\`\`bash
  pnpm add bits-ui @flightlesslabs/dodo-ui-bits
   \`\`\`

 For full setup (styles, themes, configuration), see the [Getting Started](https://github.com/flightlesslabs/dodo-ui/tree/main/packages/dodo-ui-bits) guide.

## ✨ Usage

 \`\`\`ts
 import { Dropdown } from '@flightlesslabs/dodo-ui-bits';

 <Dropdown />
 \`\`\`
`;

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
    parameters: {
      docs: {
        description: {
          component: description,
        },
      },
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
