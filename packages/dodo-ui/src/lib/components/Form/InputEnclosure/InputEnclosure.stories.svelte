<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import type { ArgTypes } from 'storybook/internal/csf';
  import type { InputEnclosureProps } from './InputEnclosure.svelte';
  import InputEnclosure from './InputEnclosure.svelte';
  import {
    componentRoundnessOptions,
    componentSizeOptions,
  } from '@flightlesslabs/dodo-core-attributes';
  import Theme from '../../Layout/Theme/Theme.svelte';
  import UtilityButton from '../UtilityButton/UtilityButton.svelte';
  import { inputEnclosureBackgroundOptions, inputEnclosureOutlineVariantOptions } from './types.ts';

  // ------------------------------
  // Storybook ArgTypes
  // ------------------------------
  export const storyInputEnclosureArgTypes: Partial<ArgTypes<InputEnclosureProps>> = {
    // ------------------------------
    // Core
    // ------------------------------
    children: {
      control: { type: 'text' },
      description: 'InputEnclosure contents (typically an input or control)',
      table: { category: 'API', subcategory: 'Base' },
    },
    before: {
      description:
        'Content rendered before the input (prefix). Provided via {#snippet before} in Svelte.',
      table: { category: 'API', subcategory: 'Base' },
    },
    after: {
      description:
        'Content rendered after the input (suffix). Provided via {#snippet after} in Svelte.',
      table: { category: 'API', subcategory: 'Base' },
    },
    class: { table: { category: 'API', subcategory: 'Base' } },

    // ------------------------------
    // State
    // ------------------------------
    disabled: {
      control: { type: 'boolean' },
      description: 'Disabled visual state',
      table: { category: 'API', subcategory: 'State', defaultValue: { summary: 'false' } },
    },
    focused: {
      control: { type: 'boolean' },
      description: 'Focused visual state (wrapper-level)',
      table: { category: 'API', subcategory: 'State', defaultValue: { summary: 'false' } },
    },
    error: {
      control: { type: 'boolean' },
      description: 'Error visual state (validation)',
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
    outlineVariant: {
      control: { type: 'select' },
      options: inputEnclosureOutlineVariantOptions,
      description: 'Outlined color token',
      table: { category: 'API', subcategory: 'Appearance', defaultValue: { summary: 'default' } },
    },
    background: {
      control: { type: 'select' },
      options: inputEnclosureBackgroundOptions,
      table: { category: 'API', subcategory: 'Appearance', defaultValue: { summary: 'none' } },
    },
    affixSpacingBefore: {
      table: { category: 'API', subcategory: 'Appearance', defaultValue: { summary: 'default' } },
    },
    affixSpacingAfter: {
      table: { category: 'API', subcategory: 'Appearance', defaultValue: { summary: 'default' } },
    },
  };

  // ------------------------------
  // Storybook Meta
  // ------------------------------
  const { Story } = defineMeta({
    component: InputEnclosure,
    tags: ['autodocs'],
    argTypes: storyInputEnclosureArgTypes,
  });
</script>

<!-- ------------------------------ -->
<!-- Stories -->
<!-- ------------------------------ -->

<Story name="Default">
  <input placeholder="Type something…" class="InputBox" />
</Story>

<Story name="Light outline" args={{ outlineVariant: 'light' }}>
  <input placeholder="Light outline…" class="InputBox" />
</Story>

<Story name="Dark outline" args={{ outlineVariant: 'dark' }}>
  <input placeholder="Dark outline…" class="InputBox" />
</Story>

<Story name="No Outline" args={{ outline: false }}>
  <input placeholder="No outline…" class="InputBox" />
</Story>

<Story name="Focused" args={{ focused: true }}>
  <input placeholder="Focused state…" class="InputBox" />
</Story>

<Story name="Error" args={{ error: true }}>
  <input placeholder="Error state…" class="InputBox" />
</Story>

<Story name="Grey backdrop" args={{ background: 'neutral' }}>
  <input placeholder="Grey backdrop…" class="InputBox" />
</Story>

<Story name="Disabled" args={{ disabled: true }}>
  <input placeholder="Disabled state…" disabled class="InputBox" />
</Story>

<Story name="Large" args={{ size: 'large' }}>
  <input placeholder="Large input…" class="InputBox" />
</Story>

<Story name="With Before (Icon Prefix)" asChild>
  <InputEnclosure>
    {#snippet before()}
      <span style="color: #888; padding-left: 8px">🔍</span>
    {/snippet}

    <input placeholder="Search…" class="InputBox" />
  </InputEnclosure>
</Story>

<Story name="With After (Suffix Text)" asChild>
  <InputEnclosure>
    {#snippet after()}
      <span style="color: #888; padding-right: 8px">.com</span>
    {/snippet}

    <input placeholder="Website" class="InputBox" />
  </InputEnclosure>
</Story>

<Story name="Affix Spacing Before" asChild>
  <InputEnclosure affixSpacingBefore="tight">
    {#snippet before()}
      <UtilityButton compact roundness="full">🔍</UtilityButton>
    {/snippet}

    <input placeholder="Search…" class="InputBox" />
  </InputEnclosure>
</Story>

<Story name="Affix Spacing After" asChild>
  <InputEnclosure affixSpacingAfter="tight">
    {#snippet after()}
      <UtilityButton compact roundness="full">🔍</UtilityButton>
    {/snippet}

    <input placeholder="Search…" class="InputBox" />
  </InputEnclosure>
</Story>

<Story name="Light Theme" asChild>
  <Theme type="light">
    <InputEnclosure>
      <input placeholder="Type something…" class="InputBox" />
    </InputEnclosure>
  </Theme>
</Story>

<Story name="Dark Theme" asChild globals={{ backgrounds: { value: 'dark' } }}>
  <Theme type="dark">
    <InputEnclosure>
      <input placeholder="Type something…" class="InputBox" />
    </InputEnclosure>
  </Theme>
</Story>
