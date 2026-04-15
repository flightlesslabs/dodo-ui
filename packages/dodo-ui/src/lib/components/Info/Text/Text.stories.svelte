<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import type { ArgTypes } from 'storybook/internal/csf';
  import type { TextProps } from './Text.svelte';
  import Text, { textColorOptions } from './Text.svelte';
  import Theme from '$lib/components/Layout/Theme/Theme.svelte';

  // ------------------------------
  // Storybook ArgTypes
  // ------------------------------
  export const storyTextArgTypes: Partial<ArgTypes<TextProps>> = {
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
      options: textColorOptions,
      description: 'Color theme token',
      table: { category: 'API', subcategory: 'Appearance', defaultValue: { summary: 'default' } },
    },
  };

  // ------------------------------
  // Storybook Meta
  // ------------------------------
  const { Story } = defineMeta({
    component: Text,
    tags: ['autodocs'],
    argTypes: storyTextArgTypes,
  });
</script>

<!-- ------------------------------ -->
<!-- Stories -->
<!-- ------------------------------ -->

<Story name="Default">Hola! amigo</Story>

<Story name="Primary" args={{ color: 'primary' }}>Hola! amigo</Story>

<Story name="Danger" args={{ color: 'danger' }}>Hola! amigo</Story>

<Story name="Safe" args={{ color: 'safe' }}>Hola! amigo</Story>

<Story name="Light Theme" asChild>
  <Theme type="light">
    <p>
      <Text color="default">Hola! amigo</Text>
    </p>
    <p>
      <Text color="neutral">Hola! amigo</Text>
    </p>
    <p>
      <Text color="primary">Hola! amigo</Text>
    </p>
    <p>
      <Text color="safe">Hola! amigo</Text>
    </p>
    <p>
      <Text color="warning">Hola! amigo</Text>
    </p>
    <p>
      <Text color="danger">Hola! amigo</Text>
    </p>
  </Theme>
</Story>

<Story name="Dark Theme" asChild globals={{ backgrounds: { value: 'dark' } }}>
  <Theme type="dark">
    <p>
      <Text color="default">Hola! amigo</Text>
    </p>
    <p>
      <Text color="neutral">Hola! amigo</Text>
    </p>
    <p>
      <Text color="primary">Hola! amigo</Text>
    </p>
    <p>
      <Text color="safe">Hola! amigo</Text>
    </p>
    <p>
      <Text color="warning">Hola! amigo</Text>
    </p>
    <p>
      <Text color="danger">Hola! amigo</Text>
    </p>
  </Theme>
</Story>
