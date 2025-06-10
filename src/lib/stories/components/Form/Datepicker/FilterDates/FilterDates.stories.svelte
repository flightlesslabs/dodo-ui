<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import DatePicker from '../DatePicker.svelte';
  import { storyDatePickerArgTypes } from '../DatePicker.stories.svelte';
  import getMoment from '$lib/stories/developer tools/helpers/Time/getMoment/getMoment.js';

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

  let value = $state(getMoment('01-02-2025', 'DD-MM-YYYY').toDate());
</script>

<Story name="Default" asChild>
  <DatePicker {value} />
</Story>

<Story name="MinDate" asChild>
  <DatePicker {value} minDate={getMoment('06-02-2025', 'DD-MM-YYYY').toDate()} />
</Story>

<Story name="MaxDate" asChild>
  <DatePicker {value} maxDate={getMoment('10-02-2025', 'DD-MM-YYYY').toDate()} />
</Story>

<Story name="ExcludeDates" asChild>
  <DatePicker
    {value}
    excludeDates={[
      getMoment('10-02-2025', 'DD-MM-YYYY').toDate(),
      getMoment('15-02-2025', 'DD-MM-YYYY').toDate(),
      getMoment('20-02-2025', 'DD-MM-YYYY').toDate(),
    ]}
  />
</Story>

<Story name="IncludeDates" asChild>
  <DatePicker
    {value}
    includeDates={[
      getMoment('10-02-2025', 'DD-MM-YYYY').toDate(),
      getMoment('15-02-2025', 'DD-MM-YYYY').toDate(),
      getMoment('20-02-2025', 'DD-MM-YYYY').toDate(),
    ]}
  />
</Story>

<Story name="DisabledMonths" asChild>
  <DatePicker {value} disabledMonths={['jan', 'feb', 'mar']} />
</Story>
