<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import DatePicker from '../DatePicker.svelte';
  import { storyDatePickerArgTypes } from '../DatePicker.stories.svelte';
  import Icon from '@iconify/svelte';

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    component: DatePicker,
    tags: ['autodocs'],
    argTypes: storyDatePickerArgTypes,
    parameters: {
      docs: {
        story: {
          height: '400px',
          inline: false,
        },
      },
    },
  });

  let value = $state<Date | undefined>(new Date());
</script>

<!-- DatePicker icon in front. -->
<Story name="Icon Before" asChild>
  <DatePicker {value}>
    {#snippet before()}
      <Icon icon="material-symbols:content-copy" />
    {/snippet}
  </DatePicker>
</Story>

<!-- DatePicker icon in front. -->
<Story name="Icon After" asChild>
  <DatePicker {value}>
    {#snippet after()}
      <Icon icon="material-symbols:download-2" />
    {/snippet}
  </DatePicker>
</Story>
