<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import TextInput from '../TextInput.svelte';
  import { storyTextInputArgTypes } from '../TextInput.stories.svelte';
  import Icon from '@iconify/svelte';

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    component: TextInput,
    tags: ['autodocs'],
    argTypes: storyTextInputArgTypes,
  });
</script>

<!-- TextInput icon in front. -->
<Story name="Icon Before">
  <TextInput>
    {#snippet before()}
      <Icon icon="material-symbols:content-copy" />
    {/snippet}
  </TextInput>
</Story>

<!-- TextInput icon in front. -->
<Story name="Icon After">
  <TextInput>
    {#snippet after()}
      <Icon icon="material-symbols:download-2" />
    {/snippet}
  </TextInput>
</Story>
