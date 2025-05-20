<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Button from '../Button.svelte';
  import { storyButtonArgTypes } from '../Button.stories.svelte';

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    component: Button,
    tags: ['autodocs'],
    argTypes: storyButtonArgTypes,
  });
</script>

<Story name="Roundness 1">Click me!</Story>

<Story name="Roundness 2" args={{ roundness: 2 }}>Click me!</Story>

<Story name="Roundness 3" args={{ roundness: 3 }}>Click me!</Story>

<Story name="Roundness 0" args={{ roundness: 0 }}>Click me!</Story>

<!-- Button with 50% roundness usefull for icon (Compact) buttons -->
<Story name="Roundness Full" args={{ roundness: 'full', compact: true }}>C</Story>
