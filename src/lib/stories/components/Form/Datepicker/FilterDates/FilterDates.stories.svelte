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

<Story
  name="Default"
  args={{
    value,
  }}
/>

<Story
  name="MinDate"
  args={{
    value,
    minDate: getMoment('06-02-2025', 'DD-MM-YYYY').toDate(),
  }}
/>

<Story
  name="MaxDate"
  args={{
    value,
    maxDate: getMoment('10-02-2025', 'DD-MM-YYYY').toDate(),
  }}
/>

<Story
  name="ExcludeDates"
  args={{
    value,
    excludeDates: [
      getMoment('10-02-2025', 'DD-MM-YYYY').toDate(),
      getMoment('15-02-2025', 'DD-MM-YYYY').toDate(),
      getMoment('20-02-2025', 'DD-MM-YYYY').toDate(),
    ],
  }}
/>

<Story
  name="IncludeDates"
  args={{
    value,
    includeDates: [
      getMoment('10-02-2025', 'DD-MM-YYYY').toDate(),
      getMoment('15-02-2025', 'DD-MM-YYYY').toDate(),
      getMoment('20-02-2025', 'DD-MM-YYYY').toDate(),
    ],
  }}
/>

<Story
  name="DisabledMonths"
  args={{
    value,
    disabledMonths: ['jan', 'feb', 'mar'],
  }}
/>
