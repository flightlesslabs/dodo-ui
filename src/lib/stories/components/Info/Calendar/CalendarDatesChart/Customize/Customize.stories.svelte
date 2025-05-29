<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import CalendarDatesChart from '../CalendarDatesChart.svelte';
  import { storyCalendarDatesChartArgTypes } from '../CalendarDatesChart.stories.svelte';
  import { Button, getMoment } from '$lib/index.js';

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    component: CalendarDatesChart,
    tags: ['autodocs'],
    argTypes: storyCalendarDatesChartArgTypes,
    args: {
      value: getMoment().toDate(),
    },
  });
</script>

<Story name="Default" />

<Story
  name="WeekNameSingleLetter"
  args={{
    weekDayNameType: 'abr1',
  }}
/>

<Story
  name="WeekNameThreeLetters"
  args={{
    weekDayNameType: 'abr3',
  }}
/>

<!-- Custom Content  -->
<Story name="customCalendarDateChipContent" asChild>
  <CalendarDatesChart value={getMoment().toDate()}>
    {#snippet customCalendarDateChipContent(dayOfMonth)}
      🗓️{Number(getMoment(dayOfMonth.date).format('D'))}
    {/snippet}
  </CalendarDatesChart>
</Story>

<!-- Custom Chip  -->
<Story name="customCalendarDateChip" asChild>
  <CalendarDatesChart value={getMoment().toDate()}>
    {#snippet customCalendarDateChip(dayOfMonth)}
      <Button size="small" variant="text" outline>
        {Number(getMoment(dayOfMonth.date).format('D'))}
      </Button>
    {/snippet}
  </CalendarDatesChart>
</Story>
