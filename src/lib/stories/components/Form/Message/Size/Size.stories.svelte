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

<Story name="Normal">
  <Message>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Message>
</Story>

<Story name="Small" args={{ size: 'small' }}>
  <Message size="small">Lorem ipsum dolor sit amet, consectetur adipiscing elit</Message>
</Story>

<Story name="Large" args={{ size: 'large' }}>
  <Message size="large">Lorem ipsum dolor sit amet, consectetur adipiscing elit</Message>
</Story>
