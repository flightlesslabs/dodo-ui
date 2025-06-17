<script module lang="ts">
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

<Story name="Line" args={{ value: 50 }} />
<Story name="Dot" args={{ value: 50, markerType: 'dot' }} />
<Story name="Disc" args={{ value: 50, markerType: 'disc' }} />
