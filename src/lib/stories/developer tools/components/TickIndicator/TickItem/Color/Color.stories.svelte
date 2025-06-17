<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import TickItem from '../TickItem.svelte';
  import { storyTickItemArgTypes } from '../TickItem.stories.svelte';

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    component: TickItem,
    tags: ['autodocs'],
    argTypes: storyTickItemArgTypes,
  });
</script>

<Story name="Default" args={{ value: 50 }} />
<Story name="White" args={{ value: 50, color: 'white' }} />
<Story name="Primary" args={{ value: 50, color: 'primary' }} />
<Story name="Secondary" args={{ value: 50, color: 'secondary' }} />
<Story name="Neutral" args={{ value: 50, color: 'neutral' }} />
<Story name="Safe" args={{ value: 50, color: 'safe' }} />
<Story name="Warning" args={{ value: 50, color: 'warning' }} />
<Story name="Danger" args={{ value: 50, color: 'danger' }} />
