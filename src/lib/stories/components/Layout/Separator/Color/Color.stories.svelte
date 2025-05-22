<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import { storySeparatorArgTypes } from '../Separator.stories.svelte';
  import Separator from '../Separator.svelte';

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    component: Separator,
    tags: ['autodocs'],
    argTypes: storySeparatorArgTypes,
  });
</script>

<Story name="Neutral">Hola!</Story>
<Story name="Primary" args={{ color: 'primary' }}>Hola!</Story>
<Story name="Secondary" args={{ color: 'secondary' }}>Hola!</Story>
<Story name="Safe" args={{ color: 'safe' }}>Hola!</Story>
<Story name="Warning" args={{ color: 'warning' }}>Hola!</Story>
<Story name="Danger" args={{ color: 'danger' }}>Hola!</Story>
