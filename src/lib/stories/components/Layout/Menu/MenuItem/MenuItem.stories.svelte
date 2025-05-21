<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import type { StoryBookArgTypes } from '$lib/storybook-types.js';
  import MenuItem, { menuItemTypeArray } from './MenuItem.svelte';
  import { componentSizeArray } from '$lib/types/size.js';

  export const storyMenuItemArgTypes: StoryBookArgTypes = {
    type: {
      control: { type: 'select' },
      options: menuItemTypeArray,
    },
    size: {
      control: { type: 'select' },
      options: componentSizeArray,
    },
  };

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    component: MenuItem,
    tags: ['autodocs'],
    argTypes: storyMenuItemArgTypes,
  });
</script>

<!-- Default MenuItem -->
<Story name="Default">Menu Item</Story>

<!-- With Separator -->
<Story name="WithSeparator" args={{ separator: true }}>Menu Item</Story>

<Story name="Disabled" args={{ disabled: true }}>Menu Item</Story>
