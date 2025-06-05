<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import CalendarDateChip from '../CalendarDateChip.svelte';
  import { storyCalendarDateChipArgTypes } from '../CalendarDateChip.stories.svelte';
  import getMoment from '$lib/stories/developer tools/helpers/Time/getMoment/getMoment.js';

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    component: CalendarDateChip,
    tags: ['autodocs'],
    argTypes: storyCalendarDateChipArgTypes,
    args: {
      dayOfMonth: {
        id: '1',
        date: getMoment().toDate(),
        isCurrentMonth: true,
      },
    },
  });
</script>

<Story
  name="Today"
  args={{
    dayOfMonth: {
      id: '1',
      date: getMoment().toDate(),
      isCurrentMonth: true,
      today: true,
    },
  }}
/>

<!-- Dont highlight today. Show it as a plain date -->
<Story
  name="HideToday"
  args={{
    showToday: false,
    dayOfMonth: {
      id: '1',
      date: getMoment().toDate(),
      isCurrentMonth: true,
      today: true,
    },
  }}
/>

<Story
  name="LastMonth"
  args={{
    dayOfMonth: {
      id: '1',
      date: getMoment().toDate(),
      isLastMonth: true,
      isCurrentMonth: false,
    },
  }}
/>

<Story
  name="HideLastMonth"
  args={{
    showLastMonth: false,
    dayOfMonth: {
      id: '1',
      date: getMoment().toDate(),
      isLastMonth: true,
      isCurrentMonth: false,
    },
  }}
/>

<Story
  name="NextMonth"
  args={{
    dayOfMonth: {
      id: '1',
      date: getMoment().toDate(),
      isNextMonth: true,
      isCurrentMonth: false,
    },
  }}
/>

<Story
  name="HideNextMonth"
  args={{
    showNextMonth: false,
    dayOfMonth: {
      id: '1',
      date: getMoment().toDate(),
      isNextMonth: true,
      isCurrentMonth: false,
    },
  }}
/>
