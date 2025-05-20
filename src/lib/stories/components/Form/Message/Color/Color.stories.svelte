<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Message from '../Message.svelte';
  import { storyMessageArgTypes } from '../Message.stories.svelte';

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    component: Message,
    tags: ['autodocs'],
    argTypes: storyMessageArgTypes,
  });
</script>

<Story name="Primary" args={{ color: 'primary' }}>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit
</Story>

<Story name="Secondary" args={{ color: 'secondary' }}>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit
</Story>

<Story name="Neutral" args={{ color: 'neutral' }}>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit
</Story>

<Story name="Safe" args={{ color: 'safe' }}>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit
</Story>

<Story name="Warning" args={{ color: 'warning' }}>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit
</Story>

<Story name="Danger" args={{ color: 'danger' }}>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit
</Story>
