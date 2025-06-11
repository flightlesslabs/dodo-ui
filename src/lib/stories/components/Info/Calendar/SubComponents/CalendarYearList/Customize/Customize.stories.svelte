<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import CalendarYearList from '../CalendarYearList.svelte';
  import { storyCalendarYearListArgTypes } from '../CalendarYearList.stories.svelte';
  import { Button, getMoment } from '$lib/index.js';

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    component: CalendarYearList,
    tags: ['autodocs'],
    argTypes: storyCalendarYearListArgTypes,
    args: {
      value: getMoment(undefined, undefined, { utc: true }).format('YYYY'),
    },
  });
</script>

<Story name="Default" />

<Story name="customCalendarYearChipContent" asChild>
  <CalendarYearList value={getMoment(undefined, undefined, { utc: true }).format('YYYY')}>
    {#snippet customCalendarYearChipContent(val)}
      🗓️{val}
    {/snippet}
  </CalendarYearList>
</Story>

<Story name="customCalendarYearChip" asChild>
  <CalendarYearList value={getMoment(undefined, undefined, { utc: true }).format('YYYY')}>
    {#snippet customCalendarYearChip(val)}
      <Button size="small" variant="text" outline>
        {val}
      </Button>
    {/snippet}
  </CalendarYearList>
</Story>
