<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import NumericInput from '../NumericInput.svelte';
  import { storyNumericInputArgTypes } from '../NumericInput.stories.svelte';
  import Icon from '@iconify/svelte';

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    component: NumericInput,
    tags: ['autodocs'],
    argTypes: storyNumericInputArgTypes,
  });
</script>

<!-- NumericInput icon in front. -->
<Story name="Icon Before" asChild>
  <NumericInput>
    {#snippet before()}
      <Icon icon="material-symbols:content-copy" />
    {/snippet}
  </NumericInput>
</Story>

<!-- NumericInput icon in front. -->
<Story name="Icon After" asChild>
  <NumericInput>
    {#snippet after()}
      <Icon icon="material-symbols:download-2" />
    {/snippet}
  </NumericInput>
</Story>
