<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import DynamicMenu from '../DynamicMenu.svelte';
  import { dynamicMenuItemOptions, storyDynamicMenuArgTypes } from '../DynamicMenu.stories.svelte';

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    component: DynamicMenu,
    tags: ['autodocs'],
    argTypes: storyDynamicMenuArgTypes,
  });
</script>

<!-- KeyboardNavigationOn -->
<Story
  name="KeyboardNavigationOn"
  args={{
    options: dynamicMenuItemOptions,
    keyboardNavigation: true,
    onEnter: (e: KeyboardEvent, menuItemIndex: number) => {
      e.preventDefault();
      console.log(menuItemIndex);
    },
    onEsc: (e: KeyboardEvent, menuItemIndex: number) => {
      e.preventDefault();
      console.log(menuItemIndex);
    },
  }}
/>
