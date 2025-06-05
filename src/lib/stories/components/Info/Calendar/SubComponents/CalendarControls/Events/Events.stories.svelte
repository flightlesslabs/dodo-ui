<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import CalendarControls from '../CalendarControls.svelte';
  import { storyCalendarControlsArgTypes } from '../CalendarControls.stories.svelte';
  import type { ButtonClickEvent, CalendarMonthOption } from '$lib/index.js';

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    component: CalendarControls,
    tags: ['autodocs'],
    argTypes: storyCalendarControlsArgTypes,
  });
</script>

<Story
  name="MonthSelectorClick"
  args={{
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
    onCalendarNavigationPrevClick: (e: ButtonClickEvent) => {
      const target = e.target as HTMLButtonElement;

      alert('Button Clicked');
      console.log('Button Clicked', target);
    },
  }}
/>
