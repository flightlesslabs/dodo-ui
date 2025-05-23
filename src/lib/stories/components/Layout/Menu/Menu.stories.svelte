<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Menu from './Menu.svelte';
  import type { StoryBookArgTypes } from '$lib/storybook-types.js';
  import MenuItem from './MenuItem/MenuItem.svelte';
  import { Separator } from '$lib/index.js';

  export const storyMenuArgTypes: StoryBookArgTypes = {};

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    component: Menu,
    tags: ['autodocs'],
    argTypes: storyMenuArgTypes,
  });

</script>

<!-- Default Menu -->
<Story name="Default" asChild>
  <Menu>
    <MenuItem>Cut</MenuItem>
    <MenuItem>Copy</MenuItem>
    <MenuItem>Paste</MenuItem>
  </Menu>
</Story>

<!-- Fixed width and height -->
<Story name="FixedSize" asChild>
  <Menu width="200px" height="300px">
    <MenuItem>Cut</MenuItem>
    <MenuItem>Copy</MenuItem>
    <MenuItem>Paste</MenuItem>
  </Menu>
</Story>

<!-- MenuItems With Separator -->
<Story name="WithSeparator" asChild>
  <Menu separator>
    <MenuItem>Cut</MenuItem>
    <MenuItem>Copy</MenuItem>
    <MenuItem>Paste</MenuItem>
  </Menu>
</Story>

<!-- MenuItems Grouped in Sections. [Separator](?path=/docs/components-layout-separator--docs) -->
<Story name="Sections" asChild>
  <Menu width="200px">
    <MenuItem>Cut</MenuItem>
    <MenuItem>Cut Special</MenuItem>
    <MenuItem>Cut Selected</MenuItem>
    <Separator />
    <MenuItem>Copy</MenuItem>
    <MenuItem>Copy Special</MenuItem>
    <MenuItem>Copy Selected</MenuItem>
    <Separator />
    <MenuItem>Paste</MenuItem>
    <MenuItem>Paste Special</MenuItem>
    <MenuItem>Paste Selected</MenuItem>
  </Menu>
</Story>

<!-- MenuItems With some options disabled -->
<Story name="Disabled" asChild>
  <Menu>
    <MenuItem>Cut</MenuItem>
    <MenuItem disabled>Copy</MenuItem>
    <MenuItem>Paste</MenuItem>
  </Menu>
</Story>
