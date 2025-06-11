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
    args: {
      value: getMoment().toDate(),
    },
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

<Story name="Normal" asChild>
  <DatePicker {value} />
</Story>

<Story name="HideCalendarMonthSelector" asChild>
  <DatePicker {value} showCalendarMonthSelector={false} />
</Story>

<Story name="HideCalendarYearSelector" asChild>
  <DatePicker {value} showCalendarYearSelector={false} />
</Story>

<Story name="HideCalendarNavigator" asChild>
  <DatePicker {value} showCalendarNavigator={false} />
</Story>

<Story name="HideControlsMonthList" asChild>
  <DatePicker {value} showControlsMonthList={false} />
</Story>

<Story name="HideControlsYearList" asChild>
  <DatePicker {value} showControlsYearList={false} />
</Story>

<Story name="DisabledNavigationPrev" asChild>
  <DatePicker {value} disabledCalendarNavigationPrev />
</Story>

<Story name="DisabledNavigationNext" asChild>
  <DatePicker {value} disabledCalendarNavigationNext />
</Story>
