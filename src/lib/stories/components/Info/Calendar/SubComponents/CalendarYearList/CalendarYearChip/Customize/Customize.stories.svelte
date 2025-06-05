<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import CalendarYearChip from '../CalendarYearChip.svelte';
  import { storyCalendarYearChipArgTypes } from '../CalendarYearChip.stories.svelte';
  import { Button, getMoment } from '$lib/index.js';

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    component: CalendarYearChip,
    tags: ['autodocs'],
    argTypes: storyCalendarYearChipArgTypes,
  });
</script>

<!-- Custom Content  -->
<Story name="customCalendarYearChipContent" asChild>
  <CalendarYearChip value={getMoment(undefined, undefined, { utc: true }).format('YYYY')}>
    {#snippet customCalendarYearChipContent(val)}
      🗓️{val}
    {/snippet}
  </CalendarYearChip>
</Story>

<!-- Custom Chip  -->
<Story name="customCalendarYearChip" asChild>
  <CalendarYearChip value={getMoment(undefined, undefined, { utc: true }).format('YYYY')}>
    {#snippet customCalendarYearChip(val)}
      <Button size="small" variant="text" outline>
        {val}
      </Button>
    {/snippet}
  </CalendarYearChip>
</Story>
