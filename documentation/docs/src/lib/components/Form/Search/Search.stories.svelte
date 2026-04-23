<script module lang="ts">
  import {
    type SearchProps,
    componentSizeOptions,
    componentRoundnessOptions,
    componentAffixPlacementOptions,
    Search,
    Theme,
  } from '@flightlesslabs/dodo-ui';
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import type { ArgTypes } from 'storybook/internal/csf';

  const description = `
 Search input that looks good

 \`\`\`ts
 import { Search } from '@flightlesslabs/dodo-ui';
 \`\`\`
`;

  // ------------------------------
  // Storybook ArgTypes
  // ------------------------------
  export const storySearchArgTypes: Partial<ArgTypes<SearchProps>> = {
    children: {
      table: { disable: true },
      control: false,
    },

    // ------------------------------
    // Core
    // ------------------------------
    class: { table: { category: 'API', subcategory: 'Base' } },
    placeholder: {
      control: { type: 'text' },
      table: { category: 'API', subcategory: 'Base' },
    },
    value: {
      control: { type: 'text' },
      table: { category: 'API', subcategory: 'Base' },
    },
    name: { table: { category: 'API', subcategory: 'Base' } },
    clearable: {
      control: { type: 'boolean' },
      table: { category: 'API', subcategory: 'Base' },
    },
    clearOnEscape: {
      control: { type: 'boolean' },
      table: { category: 'API', subcategory: 'Base' },
    },

    // ------------------------------
    // State
    // ------------------------------
    disabled: {
      control: { type: 'boolean' },
      description: 'Disabled state of the input',
      table: { category: 'API', subcategory: 'State', defaultValue: { summary: 'false' } },
    },
    focused: {
      control: { type: 'boolean' },
      description: 'Force focused visual state',
      table: { category: 'API', subcategory: 'State', defaultValue: { summary: 'false' } },
    },
    error: {
      control: { type: 'boolean' },
      description: 'Error visual state',
      table: { category: 'API', subcategory: 'State', defaultValue: { summary: 'false' } },
    },
    highlightAffixIcon: {
      control: { type: 'boolean' },
      table: { category: 'API', subcategory: 'State', defaultValue: { summary: 'false' } },
    },

    // ------------------------------
    // Appearance
    // ------------------------------
    size: {
      control: { type: 'select' },
      options: componentSizeOptions,
      description: 'Visual size token',
      table: { category: 'API', subcategory: 'Appearance', defaultValue: { summary: 'normal' } },
    },
    roundness: {
      control: { type: 'select' },
      options: componentRoundnessOptions,
      description: 'Border radius token',
      table: { category: 'API', subcategory: 'Appearance', defaultValue: { summary: '1' } },
    },
    outline: {
      control: { type: 'boolean' },
      description: 'Render outlined enclosure',
      table: { category: 'API', subcategory: 'Appearance', defaultValue: { summary: 'true' } },
    },
    affixPlacement: {
      control: { type: 'select' },
      options: componentAffixPlacementOptions,
      table: { category: 'API', subcategory: 'Appearance', defaultValue: { summary: 'before' } },
    },
    showAffixIcon: {
      control: { type: 'boolean' },
      table: { category: 'API', subcategory: 'Appearance', defaultValue: { summary: 'true' } },
    },

    // ------------------------------
    // Slots (Snippets)
    // ------------------------------
    before: {
      table: { category: 'API', subcategory: 'Slots' },
      description: 'Content rendered before the input',
    },
    after: {
      table: { category: 'API', subcategory: 'Slots' },
      description: 'Content rendered after the input',
    },
    customAffixIcon: {
      table: { category: 'API', subcategory: 'Slots' },
    },
  };

  // ------------------------------
  // Storybook Meta
  // ------------------------------
  const { Story } = defineMeta({
    component: Search,
    tags: ['autodocs'],
    argTypes: storySearchArgTypes,
    parameters: {
      docs: {
        description: {
          component: description,
        },
      },
    },
  });

  let myValue = $state<string | undefined>('Hey there');
</script>

<!-- ------------------------------ -->
<!-- Stories -->
<!-- ------------------------------ -->

<Story name="Default" args={{ placeholder: 'Type something…' }} />

<Story name="Controlled" asChild>
  <Search bind:value={myValue} placeholder="Type something…" />
</Story>

<Story name="Clearable" args={{ placeholder: 'Type something…', clearable: true }} />

<Story
  name="Clear On Escape"
  args={{ placeholder: 'Type something…', clearable: true, clearOnEscape: true }}
/>

<Story
  name="OnSearch"
  args={{
    placeholder: 'Type something…',
    onsearch: () => {
      console.log('debug:', 'OnSearch');
    },
  }}
/>

<Story name="Focused" args={{ placeholder: 'Focused state…', focused: true }} />

<Story name="Error" args={{ placeholder: 'Error state…', error: true }} />

<Story name="Large" args={{ placeholder: 'Type something…', size: 'large' }} />

<Story name="Pill Shape" args={{ placeholder: 'Type something…', roundness: 'pill' }} />

<Story name="Disabled" args={{ placeholder: 'Disabled state…', disabled: true }} />

<Story
  name="Highlight Affix Icon"
  args={{ placeholder: 'Type something…', highlightAffixIcon: true }}
/>

<Story name="Affix Placement" args={{ placeholder: 'Type something…', affixPlacement: 'after' }} />

<Story name="No Affix Icon" args={{ placeholder: 'Type something…', showAffixIcon: false }} />

<Story name="Custom Affix Icon" asChild>
  <Search placeholder="Type something…">
    {#snippet customAffixIcon()}
      🔍
    {/snippet}
  </Search>
</Story>

<Story name="Light Theme" asChild>
  <Theme type="light">
    <Search placeholder="Type something…" />
  </Theme>
</Story>

<Story name="Dark Theme" asChild globals={{ backgrounds: { value: 'dark' } }}>
  <Theme type="dark">
    <Search placeholder="Type something…" />
  </Theme>
</Story>
