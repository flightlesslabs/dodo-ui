<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import type { ArgTypes } from 'storybook/internal/csf';
  import type { AffixIconProps } from './AffixIcon.svelte';
  import AffixIcon, { AffixIconColorOptions } from './AffixIcon.svelte';
  import {
    componentRoundnessOptions,
    componentSizeOptions,
    componentVariantOptions,
  } from '@flightlesslabs/dodo-core-attributes';
  import Icon from '@iconify/svelte';
  import Theme from '../../Layout/Theme/Theme.svelte';

  const description = `
    A docorated icon component created for affix places (InputEnclosure)

 \`\`\`ts
 import { AffixIcon } from '@flightlesslabs/dodo-ui';
 \`\`\`
`;

  // ------------------------------
  // Storybook ArgTypes
  // ------------------------------
  export const storyAffixIconArgTypes: Partial<ArgTypes<AffixIconProps>> = {
    // ------------------------------
    // Core
    // ------------------------------
    children: { table: { category: 'API', subcategory: 'Base' } },
    class: { table: { category: 'API', subcategory: 'Base' } },

    // ------------------------------
    // Appearance
    // ------------------------------
    color: {
      control: { type: 'select' },
      options: AffixIconColorOptions,
      description: 'Color theme token',
      table: { category: 'API', subcategory: 'Appearance', defaultValue: { summary: 'default' } },
    },
    variant: {
      control: { type: 'select' },
      options: componentVariantOptions,
      description: 'Visual variant of the AffixIcon',
      table: { category: 'API', subcategory: 'Appearance', defaultValue: { summary: 'text' } },
    },
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
      table: { category: 'API', subcategory: 'Appearance' },
    },
    compact: {
      control: { type: 'boolean' },
      description: 'Compact spacing (icon AffixIcons)',
      table: { category: 'API', subcategory: 'Appearance' },
    },
    outline: {
      control: { type: 'boolean' },
      description: 'Render outlined style',
      table: { category: 'API', subcategory: 'Appearance' },
    },
  };

  // ------------------------------
  // Storybook Meta
  // ------------------------------
  const { Story } = defineMeta({
    component: AffixIcon,
    tags: ['autodocs'],
    argTypes: storyAffixIconArgTypes,
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

<Story name="Default">
  <Icon icon="material-symbols:search" />
</Story>

<Story name="Neutral" args={{ color: 'neutral' }}>
  <Icon icon="material-symbols:search" />
</Story>

<Story name="Primary" args={{ color: 'primary' }}>
  <Icon icon="material-symbols:search" />
</Story>

<Story name="Solid" args={{ color: 'primary', variant: 'solid' }}>
  <Icon icon="material-symbols:search" />
</Story>

<Story name="Compact" args={{ color: 'primary', variant: 'solid', compact: true }}>
  <Icon icon="material-symbols:search" />
</Story>

<Story
  name="Rounded"
  args={{ color: 'primary', variant: 'solid', compact: true, roundness: 'full' }}
>
  <Icon icon="material-symbols:search" />
</Story>

<Story name="Large" args={{ size: 'large' }}>
  <Icon icon="material-symbols:search" />
</Story>

<Story name="Light Theme" asChild>
  <Theme type="light">
    <AffixIcon><Icon icon="material-symbols:search" /></AffixIcon>
  </Theme>
</Story>

<Story name="Dark Theme" asChild globals={{ backgrounds: { value: 'dark' } }}>
  <Theme type="dark">
    <AffixIcon><Icon icon="material-symbols:search" /></AffixIcon>
  </Theme>
</Story>
