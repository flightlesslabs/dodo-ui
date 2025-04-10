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

<Story name="Default">
  <Message>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Message>
</Story>

<Story name="Primary" args={{ color: 'primary' }}>
  <Message color="primary">Lorem ipsum dolor sit amet, consectetur adipiscing elit</Message>
</Story>

<Story name="Safe" args={{ color: 'safe' }}>
  <Message color="safe">Lorem ipsum dolor sit amet, consectetur adipiscing elit</Message>
</Story>

<Story name="Warning" args={{ color: 'warning' }}>
  <Message color="warning">Lorem ipsum dolor sit amet, consectetur adipiscing elit</Message>
</Story>

<Story name="Danger" args={{ color: 'danger' }}>
  <Message color="danger">Lorem ipsum dolor sit amet, consectetur adipiscing elit</Message>
</Story>

<Story name="Info" args={{ color: 'info' }}>
  <Message color="info">Lorem ipsum dolor sit amet, consectetur adipiscing elit</Message>
</Story>
