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

<Story name="Normal">Click me!</Story>
<Story name="Small" args={{ size: 'small' }}>Click me!</Story>
<Story name="Large" args={{ size: 'large' }}>Click me!</Story>
