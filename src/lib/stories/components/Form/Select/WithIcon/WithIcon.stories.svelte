<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Select, { type SelectOption } from '../Select.svelte';
  import { selectOptions, storySelectArgTypes } from '../Select.stories.svelte';
  import Icon from '@iconify/svelte';

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    component: Select,
    tags: ['autodocs'],
    argTypes: storySelectArgTypes,
    parameters: {
      docs: {
        story: {
          height: '400px',
          inline: false,
        },
      },
    },
  });

  const options = selectOptions;

  let value = $state<SelectOption>(options[0]);
</script>

<!-- Select icon in front. -->
<Story name="Icon Before" asChild>
  <Select {value} {options}>
    {#snippet before()}
      <Icon icon="material-symbols:content-copy" />
    {/snippet}
  </Select>
</Story>

<!-- Select icon in front. -->
<Story name="Icon After" asChild>
  <Select {value} {options}>
    {#snippet after()}
      <Icon icon="material-symbols:download-2" />
    {/snippet}
  </Select>
</Story>
