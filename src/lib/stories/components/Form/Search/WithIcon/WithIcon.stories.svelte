<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Search from '../Search.svelte';
  import { storySearchArgTypes } from '../Search.stories.svelte';
  import Icon from '@iconify/svelte';

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    component: Search,
    tags: ['autodocs'],
    argTypes: storySearchArgTypes,
  });
</script>

<!-- Search icon in front. -->
<Story name="Icon Before" asChild>
  <Search>
    {#snippet before()}
      <Icon icon="material-symbols:content-copy" />
    {/snippet}
  </Search>
</Story>

<!-- Search icon in front. -->
<Story name="Icon After" asChild>
  <Search>
    {#snippet after()}
      <Icon icon="material-symbols:download-2" />
    {/snippet}
  </Search>
</Story>

<Story name="Small" args={{ size: 'small' }} asChild>
  <Search size="small">
    {#snippet before()}
      <Icon icon="material-symbols:content-copy" />
    {/snippet}
  </Search>
</Story>

<Story name="Large" args={{ size: 'large' }} asChild>
  <Search size="large">
    {#snippet before()}
      <Icon icon="material-symbols:content-copy" />
    {/snippet}
  </Search>
</Story>
