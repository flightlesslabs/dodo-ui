<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import MenuItem from '../MenuItem.svelte';
  import { storyMenuItemArgTypes } from '../MenuItem.stories.svelte';

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    component: MenuItem,
    tags: ['autodocs'],
    argTypes: storyMenuItemArgTypes,
  });
</script>

<Story name="Normal">Menu Item</Story>
<Story name="Small" args={{ size: 'small' }}>Menu Item</Story>
<Story name="Large" args={{ size: 'large' }}>Menu Item</Story>
