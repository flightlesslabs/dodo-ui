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

<Story
  name="MonthSelectorClick"
  args={{
    value,
    onMonthSelectorClick: (option: CalendarMonthOption, e: ButtonClickEvent) => {
      const target = e.target as HTMLButtonElement;

      alert('Button Clicked');
      console.log('Button Clicked', option, target);
    },
  }}
/>

<Story
  name="YearSelectorClick"
  args={{
    value,
    onYearSelectorClick: (selectedYear: string, e: ButtonClickEvent) => {
      const target = e.target as HTMLButtonElement;

      alert('Button Clicked');
      console.log('Button Clicked', selectedYear, target);
    },
  }}
/>

<Story
  name="CalendarNavigationNextClick"
  args={{
    value,
    onCalendarNavigationNextClick: (e: ButtonClickEvent) => {
      const target = e.target as HTMLButtonElement;

      alert('Button Clicked');
      console.log('Button Clicked', target);
    },
  }}
/>

<Story
  name="CalendarNavigationPrevClick"
  args={{
    value,
    onCalendarNavigationPrevClick: (e: ButtonClickEvent) => {
      const target = e.target as HTMLButtonElement;

      alert('Button Clicked');
      console.log('Button Clicked', target);
    },
  }}
/>

<Story
  name="SelectMonth"
  args={{
    value,
    onselectMonth: (val: CalendarMonthNames, e: ButtonClickEvent) => {
      const target = e.target as HTMLButtonElement;
      console.log(val, target);
    },
  }}
/>

<Story
  name="CancelMonthSelection"
  args={{
    value,
    oncancelMonth: (e: ButtonClickEvent) => {
      const target = e.target as HTMLButtonElement;
      console.log(target);
    },
  }}
/>

<Story
  name="SelectYear"
  args={{
    value,
    onselectYear: (val: string, e: ButtonClickEvent) => {
      const target = e.target as HTMLButtonElement;
      console.log(val, target);
    },
  }}
/>

<Story
  name="CancelYearSelection"
  args={{
    value,
    oncancelYear: (e: ButtonClickEvent) => {
      const target = e.target as HTMLButtonElement;
      console.log(target);
    },
  }}
/>
