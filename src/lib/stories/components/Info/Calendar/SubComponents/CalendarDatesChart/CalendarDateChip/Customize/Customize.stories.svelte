<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import CalendarDateChip from '../CalendarDateChip.svelte';
  import { storyCalendarDateChipArgTypes } from '../CalendarDateChip.stories.svelte';
  import { Button, getMoment } from '$lib/index.js';

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    component: CalendarDateChip,
    tags: ['autodocs'],
    argTypes: storyCalendarDateChipArgTypes,
  });
</script>

<!-- Custom Content  -->
<Story name="customCalendarDateChipContent" asChild>
  <CalendarDateChip
    dayOfMonth={{
      id: '1',
      date: getMoment().toDate(),
      isCurrentMonth: true,
    }}
  >
    {#snippet customCalendarDateChipContent(dayOfMonth)}
      🗓️{Number(getMoment(dayOfMonth.date).format('D'))}
    {/snippet}
  </CalendarDateChip>
</Story>

<!-- Custom Chip  -->
<Story name="customCalendarDateChip" asChild>
  <CalendarDateChip
    dayOfMonth={{
      id: '1',
      date: getMoment().toDate(),
      isCurrentMonth: true,
    }}
  >
    {#snippet customCalendarDateChip(dayOfMonth)}
      <Button size="small" variant="text" outline>
        {Number(getMoment(dayOfMonth.date).format('D'))}
      </Button>
    {/snippet}
  </CalendarDateChip>
</Story>
