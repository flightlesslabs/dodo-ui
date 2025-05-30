<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import CalendarMonthSelector from '../CalendarMonthSelector.svelte';
  import { storyCalendarMonthSelectorArgTypes } from '../CalendarMonthSelector.stories.svelte';
  import getMoment from '$lib/stories/developer tools/helpers/Time/getMoment/getMoment.js';

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    component: CalendarMonthSelector,
    tags: ['autodocs'],
    argTypes: storyCalendarMonthSelectorArgTypes,
    args: {
      value: getMoment('Mar 2025', 'MMM YYYY').toDate(),
    },
  });
</script>

<Story name="Default" />

<Story
  name="FullName"
  args={{
    nameType: 'fullName',
  }}
/>
