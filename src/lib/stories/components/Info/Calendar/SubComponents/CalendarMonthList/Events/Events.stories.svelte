<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import CalendarMonthList from '../CalendarMonthList.svelte';
  import { storyCalendarMonthListArgTypes } from '../CalendarMonthList.stories.svelte';
  import type { CalendarMonthNames } from '../../CalendarControls/CalendarMonthSelector/CalendarMonthSelector.svelte';

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    component: CalendarMonthList,
    tags: ['autodocs'],
    argTypes: storyCalendarMonthListArgTypes,
  });

  let value = $state<CalendarMonthNames>('jan');
</script>

<Story name="Select" asChild>
  <CalendarMonthList
    {value}
    onselect={(val) => {
      value = val;
    }}
  />
</Story>

<Story name="Cancel" asChild>
  <CalendarMonthList
    {value}
    oncancel={() => {
      console.log('oncancel');
    }}
  />
</Story>
