<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Theme from './Theme.svelte';
  import type { ThemeProps } from './Theme.svelte';
  import type { ArgTypes } from 'storybook/internal/csf';
  import { componentThemeOptions } from '$lib/attributes/theme.js';

  const description = `
    Wrap your app at the root with Theme to provide a consistent light or dark class (based on system or override) to all child components

 \`\`\`ts
 import { Theme } from '@flightlesslabs/dodo-ui';
 \`\`\`
 `;

  /**
   * Storybook controls for Theme
   */
  export const ThemeArgTypes: Partial<ArgTypes<ThemeProps>> = {
    class: { table: { category: 'API', subcategory: 'Base' } },
    type: {
      control: { type: 'select' },
      options: componentThemeOptions,
      description: 'Theme color type: auto by defualt',
      table: { category: 'API', subcategory: 'Base', defaultValue: { summary: 'auto' } },
    },
    global: {
      table: { category: 'API', subcategory: 'Base' },
    },
  };

  const { Story } = defineMeta({
    component: Theme,
    tags: ['autodocs'],
    argTypes: ThemeArgTypes,
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

<Story name="Default"></Story>

<Story name="Light" args={{ type: 'light' }}></Story>

<Story name="Dark" args={{ type: 'dark' }} globals={{ backgrounds: { value: 'dark' } }}></Story>
