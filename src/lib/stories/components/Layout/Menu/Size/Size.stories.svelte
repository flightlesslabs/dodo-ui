<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Menu from '../Menu.svelte';
  import { storyMenuArgTypes } from '../Menu.stories.svelte';
  import MenuItem from '../MenuItem/MenuItem.svelte';

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    component: Menu,
    tags: ['autodocs'],
    argTypes: storyMenuArgTypes,
  });
</script>

<Story name="Normal" asChild>
  <Menu>
    <MenuItem>Cut</MenuItem>
    <MenuItem>Copy</MenuItem>
    <MenuItem>Paste</MenuItem>
  </Menu>
</Story>

<Story name="Small" asChild>
  <Menu size="small">
    <MenuItem>Cut</MenuItem>
    <MenuItem>Copy</MenuItem>
    <MenuItem>Paste</MenuItem>
  </Menu>
</Story>

<Story name="Large" asChild>
  <Menu size="large">
    <MenuItem>Cut</MenuItem>
    <MenuItem>Copy</MenuItem>
    <MenuItem>Paste</MenuItem>
  </Menu>
</Story>
