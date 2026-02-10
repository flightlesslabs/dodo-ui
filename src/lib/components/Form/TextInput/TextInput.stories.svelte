<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import TextInput from './TextInput.svelte';
  import type { TextInputProps } from './TextInput.svelte';
  import type { ArgTypes } from 'storybook/internal/csf';

  import { componentSizeOptions } from '$lib/attributes/size.js';
  import { componentRoundnessOptions } from '$lib/attributes/roundness.js';

  // ------------------------------
  // Storybook ArgTypes
  // ------------------------------
  export const storyTextInputArgTypes: Partial<ArgTypes<TextInputProps>> = {
    children: {
      table: { disable: true },
      control: false,
    },

    // ------------------------------
    // Core
    // ------------------------------
    ref: { table: { category: 'API', subcategory: 'Base' } },
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

    // ------------------------------
    // Events
    // ------------------------------
    onfocus: { table: { category: 'API', subcategory: 'Events' }, action: 'focus' },
    onblur: { table: { category: 'API', subcategory: 'Events' }, action: 'blur' },
    oninput: { table: { category: 'API', subcategory: 'Events' }, action: 'input' },
    onchange: { table: { category: 'API', subcategory: 'Events' }, action: 'change' },
  };

  // ------------------------------
  // Storybook Meta
  // ------------------------------
  const { Story } = defineMeta({
    component: TextInput,
    tags: ['autodocs'],
    argTypes: storyTextInputArgTypes,
  });
</script>

<!-- ------------------------------ -->
<!-- Stories -->
<!-- ------------------------------ -->

<Story name="Default">
  <TextInput placeholder="Type something…" />
</Story>

<Story name="Focused" args={{ focused: true }}>
  <TextInput placeholder="Focused state…" />
</Story>

<Story name="Error" args={{ error: true }}>
  <TextInput placeholder="Error state…" />
</Story>

<Story name="Disabled" args={{ disabled: true }}>
  <TextInput placeholder="Disabled state…" />
</Story>

<Story name="Large" args={{ size: 'large' }}>
  <TextInput placeholder="Large input…" />
</Story>

<Story name="Pill Shape" args={{ roundness: 'pill' }}>
  <TextInput placeholder="Pill shaped input…" />
</Story>

<Story name="With Before (Prefix Icon)" asChild>
  <TextInput placeholder="Search…">
    {#snippet before()}
      <span style="color: #888;">🔍</span>
    {/snippet}
  </TextInput>
</Story>

<Story name="With After (Suffix Text)" asChild>
  <TextInput placeholder="Website">
    {#snippet after()}
      <span style="color: #888;">.com</span>
    {/snippet}
  </TextInput>
</Story>

<Story name="With Before + After" asChild>
  <TextInput placeholder="Amount">
    {#snippet before()}
      <span style="opacity: 0.6;">$</span>
    {/snippet}

    {#snippet after()}
      <span style="opacity: 0.6;">USD</span>
    {/snippet}
  </TextInput>
</Story>
