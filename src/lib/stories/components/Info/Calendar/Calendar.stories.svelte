<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Calendar from './Calendar.svelte';
  import type { StoryBookArgTypes } from '$lib/storybook-types.js';
  import getMoment from '$lib/stories/developer tools/helpers/Time/getMoment/getMoment.js';
  import { componentColorArray } from '$lib/types/colors.js';
  import { calendarWeekNamesArray } from './CalendarDatesChart/CalendarWeek/CalendarWeek.svelte';
  import { componentSizeArray } from '$lib/types/size.js';

  export const storyCalendarArgTypes: StoryBookArgTypes = {
    startOfWeek: {
      control: { type: 'select' },
      options: calendarWeekNamesArray,
    },
    color: {
      control: { type: 'select' },
      options: componentColorArray,
    },
    size: {
      control: { type: 'select' },
      options: componentSizeArray,
    },
  };

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    component: Calendar,
    tags: ['autodocs'],
    argTypes: storyCalendarArgTypes,
  });

  let value = $state(getMoment().toDate());
</script>

<!-- Default Calendar -->
<Story
  name="Default"
  args={{
    value,
  }}
/>

<Story
  name="StartOfWeek"
  args={{
    value,
    startOfWeek: 'mon',
  }}
/>

<Story
  name="ActiveMonth"
  args={{
    activeMonth: getMoment('01-02-2025', 'DD-MM-YYYY').toDate(),
    value,
  }}
/>

<Story
  name="HideSelected"
  args={{
    showSelected: false,
    value,
  }}
/>

<Story
  name="HideLastMonth"
  args={{
    value: getMoment('01-03-2025', 'DD-MM-YYYY').toDate(),
    showLastMonth: false,
  }}
/>

<Story
  name="HideNextMonth"
  args={{
    value: getMoment('01-03-2025', 'DD-MM-YYYY').toDate(),
    showNextMonth: false,
  }}
/>
