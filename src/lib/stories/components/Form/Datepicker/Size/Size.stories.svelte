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

<Story name="Normal" asChild>
  <DatePicker {value} onselect={(val: Date) => (value = val)} />
</Story>
<Story name="Small" asChild>
  <DatePicker {value} onselect={(val: Date) => (value = val)} size="small" />
</Story>
<Story name="Large" asChild>
  <DatePicker {value} onselect={(val: Date) => (value = val)} size="large" />
</Story>
<Story name="SmallCalendar" asChild>
  <DatePicker
    {value}
    onselect={(val: Date) => (value = val)}
    calendarProps={{
      size: 'small',
    }}
  />
</Story>
