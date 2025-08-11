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

<Story name="Deafult" />

<Story name="Icon After" args={{ searchIconPosition: 'after' }} />

<Story name="No Search Icon" args={{ searchIconPosition: false }} />

<Story name="CustomSearchIcon" asChild>
  <Search>
    {#snippet customSearchIcon()}
      <Icon icon="line-md:search-twotone" width="24" height="24" />
    {/snippet}
  </Search>
</Story>
