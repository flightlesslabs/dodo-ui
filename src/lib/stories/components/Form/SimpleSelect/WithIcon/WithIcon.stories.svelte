<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Icon from '@iconify/svelte';

  import SimpleSelect from '../SimpleSelect.svelte';
  import {
    storySimpleSelectArgTypes,
    storySimpleSelectOptions,
  } from '../SimpleSelect.stories.svelte';

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    component: SimpleSelect,
    tags: ['autodocs'],
    argTypes: storySimpleSelectArgTypes,
    args: { options: storySimpleSelectOptions },
  });
</script>

<!-- SimpleSelect icon in front. -->
<Story name="Icon Before" asChild>
  <SimpleSelect options={storySimpleSelectOptions}>
    {#snippet before()}
      <Icon icon="material-symbols:content-copy" />
    {/snippet}
  </SimpleSelect>
</Story>

<!-- SimpleSelect icon in front. -->
<Story name="Icon After" asChild>
  <SimpleSelect options={storySimpleSelectOptions}>
    {#snippet after()}
      <Icon icon="material-symbols:download-2" />
    {/snippet}
  </SimpleSelect>
</Story>
