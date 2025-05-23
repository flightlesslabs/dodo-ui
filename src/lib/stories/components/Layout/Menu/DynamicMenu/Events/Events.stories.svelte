<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import { dynamicMenuItemOptions, storyDynamicMenuArgTypes } from '../DynamicMenu.stories.svelte';
  import DynamicMenu, { type DynamicMenuItemOption } from '../DynamicMenu.svelte';

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    component: DynamicMenu,
    tags: ['autodocs'],
    argTypes: storyDynamicMenuArgTypes,
  });
</script>

<!-- Menu Item onclick -->
<Story name="onclick" asChild>
  <DynamicMenu
    keyboardNavigation
    options={dynamicMenuItemOptions}
    onclick={(e: MouseEvent, option: DynamicMenuItemOption) => {
      e.preventDefault();
      console.log(option);
    }}
  />
</Story>

<!-- KeyboardNavigation Event: onEnter  -->
<Story name="onEnter" asChild>
  <DynamicMenu
    keyboardNavigation
    options={dynamicMenuItemOptions}
    onEnter={(e: KeyboardEvent, menuItemIndex: number) => {
      e.preventDefault();
      console.log(menuItemIndex);
    }}
  />
</Story>

<!-- KeyboardNavigation Event: onEsc  -->
<Story name="onEsc" asChild>
  <DynamicMenu
    keyboardNavigation
    options={dynamicMenuItemOptions}
    onEsc={(e: KeyboardEvent, menuItemIndex: number) => {
      e.preventDefault();
      console.log(menuItemIndex);
    }}
  />
</Story>
