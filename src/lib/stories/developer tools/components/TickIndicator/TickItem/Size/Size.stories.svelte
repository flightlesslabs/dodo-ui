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

<Story name="Normal" args={{ value: 50 }} />
<Story name="Small" args={{ value: 50, size: 'small' }} />
<Story name="Large" args={{ value: 50, size: 'large' }} />

<Story name="BaseSizeNormal" args={{ value: 50 }} />
<Story name="BaseSizeSmall" args={{ value: 50, baseSize: 'small' }} />
<Story name="BaseSizeLarge" args={{ value: 50, baseSize: 'large' }} />
