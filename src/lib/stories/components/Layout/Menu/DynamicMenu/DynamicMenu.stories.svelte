<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import DynamicMenu, { type DynamicMenuItemOption } from './DynamicMenu.svelte';
  import type { StoryBookArgTypes } from '$lib/storybook-types.js';

  export const storyDynamicMenuArgTypes: StoryBookArgTypes = {};

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    component: DynamicMenu,
    tags: ['autodocs'],
    argTypes: storyDynamicMenuArgTypes,
  });

  export const dynamicMenuItemOptions: DynamicMenuItemOption[] = [
    {
      id: '1',
      label: 'One',
    },
    {
      id: '2',
      label: 'Two',
    },
    {
      id: '3',
      label: 'Three',
    },
    {
      id: '4',
      label: 'Four',
    },
    {
      id: '5',
      label: 'Five',
    },
    {
      id: '6',
      disabled: true,
      label: 'Five',
    },
  ];
</script>

<!-- Default DynamicMenu -->
<Story name="Default" args={{ options: dynamicMenuItemOptions }} />

<!-- Selected Option -->
<Story
  name="SelectedOption"
  args={{ options: dynamicMenuItemOptions, selectedOption: dynamicMenuItemOptions[1] }}
/>

<Story
  name="ShowPlaceholder"
  args={{ options: [], showOptionsPlaceholder: true, optionsPlaceholder: 'No content found.' }}
/>
