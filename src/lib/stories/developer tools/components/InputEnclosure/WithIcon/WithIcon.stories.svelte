<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import InputEnclosure from '../InputEnclosure.svelte';
  import { storyInputEnclosureArgTypes } from '../InputEnclosure.stories.svelte';
  import Icon from '@iconify/svelte';

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    component: InputEnclosure,
    tags: ['autodocs'],
    argTypes: storyInputEnclosureArgTypes,
  });
</script>

<!-- InputEnclosure icon in front. -->
<Story name="Icon Before" asChild>
  <InputEnclosure>
    {#snippet before()}
      <Icon icon="material-symbols:content-copy" />
    {/snippet}
  </InputEnclosure>
</Story>

<!-- InputEnclosure icon in front. -->
<Story name="Icon After" asChild>
  <InputEnclosure>
    {#snippet after()}
      <Icon icon="material-symbols:download-2" />
    {/snippet}
  </InputEnclosure>
</Story>

<Story name="Small" args={{ size: 'small' }} asChild>
  <InputEnclosure size="small">
    {#snippet before()}
      <Icon icon="material-symbols:content-copy" />
    {/snippet}
  </InputEnclosure>
</Story>

<Story name="Large" args={{ size: 'large' }} asChild>
  <InputEnclosure size="large">
    {#snippet before()}
      <Icon icon="material-symbols:content-copy" />
    {/snippet}
  </InputEnclosure>
</Story>
