<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import DatePicker from './DatePicker.svelte';
  import type { StoryBookArgTypes } from '$lib/storybook-types.js';
  import { componentRoundnessArray } from '$lib/types/roundness.js';
  import { componentSizeArray } from '$lib/types/size.js';
  import { componentColorArray } from '$lib/types/colors.js';
  import Icon from '@iconify/svelte';
  import { getMoment, type DateOfMonth } from '$lib/index.js';

  export const storyDatePickerArgTypes: StoryBookArgTypes = {
    roundness: {
      control: { type: 'select' },
      options: componentRoundnessArray,
    },
    size: {
      control: { type: 'select' },
      options: componentSizeArray,
    },
    color: {
      control: { type: 'select' },
      options: componentColorArray,
    },
  };

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

<!-- DatePicker with default style -->
<Story name="Default" asChild>
  <DatePicker {value} onselect={(val: Date) => (value = val)} />
</Story>

<!-- [Supported formats](https://day.js.org/docs/en/display/format) -->
<Story name="FormatDate" asChild>
  <DatePicker {value} onselect={(val: Date) => (value = val)} format="MMM, DD YYYY" />
</Story>

<Story name="Editable" asChild>
  <DatePicker {value} editable onselect={(val: Date) => (value = val)} placeholder="DD/MM/YYYY" />
</Story>

<Story name="EditableInDiffrentFormat" asChild>
  <DatePicker
    {value}
    editable
    onselect={(val: Date) => (value = val)}
    placeholder="DD/MM/YYYY"
    formatEditable="YYYY-MM-DD"
  />
</Story>

<Story name="Clearable" asChild>
  <DatePicker
    {value}
    clearable
    onselect={(val: Date) => (value = val)}
    onclear={() => (value = undefined)}
    placeholder="DD/MM/YYYY"
  />
</Story>

<Story name="Disabled" asChild>
  <DatePicker {value} disabled />
</Story>

<Story name="OpenByDefault" asChild>
  <DatePicker {value} open={true} />
</Story>

<Story name="ManipulateDate" asChild>
  <DatePicker
    {value}
    onselect={(val: Date) => (value = val)}
    manipulateDate={(dateToModify: DateOfMonth) => {
      // Disable all Fridays
      if (getMoment(dateToModify.date, undefined).day() === 5) {
        dateToModify.disabled = true;
      }

      return dateToModify;
    }}
  />
</Story>

<Story name="Custom calender icon" asChild>
  <DatePicker {value}>
    {#snippet customCalendarIcon()}
      <Icon icon="mingcute:calendar-3-line" width="24" height="24" />
    {/snippet}
  </DatePicker>
</Story>
