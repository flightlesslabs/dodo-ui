<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Theme, { themeTypeOptions } from './Theme.svelte';
  import type { ThemeProps } from './Theme.svelte';
  import type { ArgTypes } from 'storybook/internal/csf';

  /**
   * Storybook controls for Theme
   */
  export const ThemeArgTypes: Partial<ArgTypes<ThemeProps>> = {
    class: { table: { category: 'API', subcategory: 'Base' } },
    type: {
      control: { type: 'select' },
      options: themeTypeOptions,
      description: 'Theme color type: auto by defualt',
      table: { category: 'API', subcategory: 'Base', defaultValue: { summary: 'auto' } },
    },
  };

  const { Story } = defineMeta({
    component: Theme,
    tags: ['autodocs'],
    argTypes: ThemeArgTypes,
  });
</script>

<!-- ------------------------------ -->
<!-- Stories -->
<!-- ------------------------------ -->

<!-- Wrap your app at the root with Theme to provide a consistent light or dark class (based on system or override) to all child components. -->
<Story name="Auto"></Story>

<Story name="Light" args={{ type: 'light' }}></Story>

<Story name="Dark" args={{ type: 'dark' }} globals={{ backgrounds: { value: 'dark' } }}></Story>
