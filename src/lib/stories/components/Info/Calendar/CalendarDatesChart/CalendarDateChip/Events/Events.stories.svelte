<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import CalendarDateChip from '../CalendarDateChip.svelte';
  import { storyCalendarDateChipArgTypes } from '../CalendarDateChip.stories.svelte';
  import getMoment from '$lib/stories/developer tools/helpers/Time/getMoment/getMoment.js';

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    component: CalendarDateChip,
    tags: ['autodocs'],
    argTypes: storyCalendarDateChipArgTypes,
  });
</script>

<Story name="Select" asChild>
  <CalendarDateChip
    dayOfMonth={{
      id: '1',
      date: getMoment().toDate(),
      isCurrentMonth: true,
    }}
    onselect={(value, dayOfMonth, e) => {
      const target = e.target as HTMLButtonElement;
      alert(`CalendarDateChip Select, ${getMoment(value).format('DD-MM-YYYY')}`);
      console.log('CalendarDateChip Select', dayOfMonth, target);
    }}
  />
</Story>
