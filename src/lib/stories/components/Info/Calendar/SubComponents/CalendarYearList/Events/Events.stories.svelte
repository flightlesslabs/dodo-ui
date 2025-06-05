<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import CalendarYearList from '../CalendarYearList.svelte';
  import { storyCalendarYearListArgTypes } from '../CalendarYearList.stories.svelte';
  import getMoment from '$lib/stories/developer tools/helpers/Time/getMoment/getMoment.js';

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    component: CalendarYearList,
    tags: ['autodocs'],
    argTypes: storyCalendarYearListArgTypes,
  });

  let value = $state<string>(getMoment(undefined, undefined, { utc: true }).format('YYYY'));
</script>

<Story name="Select" asChild>
  <CalendarYearList
    {value}
    onselect={(val) => {
      value = val;
    }}
  />
</Story>
