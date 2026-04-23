<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import type { ArgTypes } from 'storybook/internal/csf';
  import {
    type TextAreaProps,
    componentSizeOptions,
    componentRoundnessOptions,
    TextArea,
    Theme,
  } from '@flightlesslabs/dodo-ui';

  const description = `
 TextArea component, that's it!

 \`\`\`ts
 import { TextArea } from '@flightlesslabs/dodo-ui';
 \`\`\`
`;

  // ------------------------------
  // Storybook ArgTypes
  // ------------------------------
  export const storyTextAreaArgTypes: Partial<ArgTypes<TextAreaProps>> = {
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
  };

  // ------------------------------
  // Storybook Meta
  // ------------------------------
  const { Story } = defineMeta({
    component: TextArea,
    tags: ['autodocs'],
    argTypes: storyTextAreaArgTypes,
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
  <TextArea bind:value={myValue} placeholder="Type something…" />
</Story>

<Story name="Focused" args={{ placeholder: 'Focused state…', focused: true }} />

<Story name="Error" args={{ placeholder: 'Error state…', error: true }} />

<Story name="Large" args={{ placeholder: 'Type something…', size: 'large' }} />

<Story name="Pill Shape" args={{ placeholder: 'Type something…', roundness: 'pill' }} />

<Story name="Disabled" args={{ placeholder: 'Disabled state…', disabled: true }} />

<Story name="With Before (Prefix Icon)" asChild>
  <TextArea placeholder="Search…">
    {#snippet before()}
      <span style="color: #888; padding-left: 8px">🔍</span>
    {/snippet}
  </TextArea>
</Story>

<Story name="With After (Suffix Text)" asChild>
  <TextArea placeholder="Website">
    {#snippet after()}
      <span style="color: #888; padding-right: 8px">.com</span>
    {/snippet}
  </TextArea>
</Story>

<Story name="Light Theme" asChild>
  <Theme type="light">
    <TextArea placeholder="Type something…" />
  </Theme>
</Story>

<Story name="Dark Theme" asChild globals={{ backgrounds: { value: 'dark' } }}>
  <Theme type="dark">
    <TextArea placeholder="Type something…" />
  </Theme>
</Story>
