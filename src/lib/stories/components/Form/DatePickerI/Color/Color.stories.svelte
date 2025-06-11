<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import getMoment from '$lib/stories/developer tools/helpers/Time/getMoment/getMoment.js';
  import DatePicker from '..//DatePicker.svelte';
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

  let value = $state(getMoment().toDate());
</script>

<Story name="Primary" asChild>
  <DatePicker {value} />
</Story>

<Story name="Secondary" asChild>
  <DatePicker {value} color="secondary" />
</Story>

<Story name="Neutral" asChild>
  <DatePicker {value} color="neutral" />
</Story>

<Story name="Safe" asChild>
  <DatePicker {value} color="safe" />
</Story>

<Story name="Warning" asChild>
  <DatePicker {value} color="warning" />
</Story>

<Story name="Danger" asChild>
  <DatePicker {value} color="danger" />
</Story>
