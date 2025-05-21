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

<Story name="Text">Menu Item</Story>
<Story
  name="Link"
  args={{ type: 'link', href: 'https://www.w3schools.com/tags/tag_a.asp', target: '_blank' }}
>
  Menu Item
</Story>
<Story name="Button" args={{ type: 'button', onclick: () => {} }}>Menu Item</Story>
