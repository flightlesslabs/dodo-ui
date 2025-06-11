<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import DatePicker from '../DatePicker.svelte';
  import { storyDatePickerArgTypes } from '../DatePicker.stories.svelte';

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

<Story name="Roundness 1" asChild>
  <DatePicker {value} />
</Story>

<Story name="Roundness 2" asChild>
  <DatePicker {value} roundness={2} />
</Story>

<Story name="Roundness 3" asChild>
  <DatePicker {value} roundness={3} />
</Story>

<Story name="Roundness 0" asChild>
  <DatePicker {value} roundness={0} />
</Story>
