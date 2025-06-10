<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import DatePicker from '../DatePicker.svelte';
  import { storyDatePickerArgTypes } from '../DatePicker.stories.svelte';
  import getMoment from '$lib/stories/developer tools/helpers/Time/getMoment/getMoment.js';
  import type { ButtonClickEvent } from '$lib/stories/components/Form/Button/Button.svelte';
  import type {
    CalendarMonthOption,
    CalendarMonthNames,
  } from '$lib/stories/components/Info/Calendar/SubComponents/CalendarControls/CalendarMonthSelector/CalendarMonthSelector.svelte';

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

<Story name="Select" asChild>
  <DatePicker
    {value}
    onselect={(val) => {
      value = val;
    }}
  />
</Story>

<Story name="MonthSelectorClick" asChild>
  <DatePicker
    {value}
    onMonthSelectorClick={(option: CalendarMonthOption, e: ButtonClickEvent) => {
      const target = e.target as HTMLButtonElement;

      alert('Button Clicked');
      console.log('Button Clicked', option, target);
    }}
  />
</Story>

<Story name="YearSelectorClick" asChild>
  <DatePicker
    {value}
    onYearSelectorClick={(selectedYear: string, e: ButtonClickEvent) => {
      const target = e.target as HTMLButtonElement;

      alert('Button Clicked');
      console.log('Button Clicked', selectedYear, target);
    }}
  />
</Story>

<Story name="CalendarNavigationNextClick" asChild>
  <DatePicker
    {value}
    onCalendarNavigationNextClick={(e: ButtonClickEvent) => {
      const target = e.target as HTMLButtonElement;

      alert('Button Clicked');
      console.log('Button Clicked', target);
    }}
  />
</Story>

<Story name="CalendarNavigationPrevClick" asChild>
  <DatePicker
    {value}
    onCalendarNavigationPrevClick={(e: ButtonClickEvent) => {
      const target = e.target as HTMLButtonElement;

      alert('Button Clicked');
      console.log('Button Clicked', target);
    }}
  />
</Story>

<Story name="SelectMonth" asChild>
  <DatePicker
    {value}
    onselectMonth={(val: CalendarMonthNames, e: ButtonClickEvent) => {
      const target = e.target as HTMLButtonElement;
      console.log(val, target);
    }}
  />
</Story>

<Story name="CancelMonthSelection" asChild>
  <DatePicker
    {value}
    oncancelMonth={(e: ButtonClickEvent) => {
      const target = e.target as HTMLButtonElement;
      console.log(target);
    }}
  />
</Story>

<Story name="SelectYear" asChild>
  <DatePicker
    {value}
    onselectYear={(val: string, e: ButtonClickEvent) => {
      const target = e.target as HTMLButtonElement;
      console.log(val, target);
    }}
  />
</Story>

<Story name="CancelYearSelection" asChild>
  <DatePicker
    {value}
    oncancelYear={(e: ButtonClickEvent) => {
      const target = e.target as HTMLButtonElement;
      console.log(target);
    }}
  />
</Story>
