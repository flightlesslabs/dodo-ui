<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Calendar from '../Calendar.svelte';
  import { storyCalendarArgTypes } from '../Calendar.stories.svelte';
  import getMoment from '$lib/stories/developer tools/helpers/Time/getMoment/getMoment.js';
  import type { ButtonClickEvent } from '$lib/stories/components/Form/Button/Button.svelte';
  import type { CalendarMonthNames, CalendarMonthOption } from '$lib/index.js';

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    component: Calendar,
    tags: ['autodocs'],
    argTypes: storyCalendarArgTypes,
  });

  let value = $state(getMoment().toDate());
</script>

<Story name="Select" asChild>
  <Calendar
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
  name="MonthSelectorClick"
  args={{
    value,
    onMonthSelectorClick: (option: CalendarMonthOption, e: ButtonClickEvent) => {
      const target = e.target as HTMLButtonElement;
      console.log(option, target);
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
