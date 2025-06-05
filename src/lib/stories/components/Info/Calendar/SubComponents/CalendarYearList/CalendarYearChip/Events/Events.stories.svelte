<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import CalendarYearChip from '../CalendarYearChip.svelte';
  import { storyCalendarYearChipArgTypes } from '../CalendarYearChip.stories.svelte';
  import getMoment from '$lib/stories/developer tools/helpers/Time/getMoment/getMoment.js';

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    component: CalendarYearChip,
    tags: ['autodocs'],
    argTypes: storyCalendarYearChipArgTypes,
  });
</script>

<Story name="Select" asChild>
  <CalendarYearChip
    value={getMoment(undefined, undefined, { utc: true }).format('YYYY')}
    onselect={(value, e) => {
      const target = e.target as HTMLButtonElement;
      alert(`CalendarYearChip Select, ${value}`);
      console.log('CalendarYearChip Select', value, target);
    }}
  />
</Story>
