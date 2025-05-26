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

<!-- Custom Menu Item Content -->
<Story name="CustomMenuItemContent" asChild>
  <DynamicMenu options={dynamicMenuItemOptions}>
    {#snippet customMenuItemContent(option, selectedOption)}
      {selectedOption?.id === option.id ? '✅' : ''} {option.label} 💯💯💯
    {/snippet}
  </DynamicMenu>
</Story>

<!-- Custom Menu Item Placeholder Content -->
<Story name="CustomPlaceholderMenuItemContent" asChild>
  <DynamicMenu options={[]} showOptionsPlaceholder>
    {#snippet customPlaceholderMenuItemContent()}
      No dice 💯💯💯
    {/snippet}
  </DynamicMenu>
</Story>
