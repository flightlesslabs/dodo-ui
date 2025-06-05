<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import CalendarMonthChip from '../CalendarMonthChip.svelte';
  import { storyCalendarMonthChipArgTypes } from '../CalendarMonthChip.stories.svelte';
  import { Button } from '$lib/index.js';

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    component: CalendarMonthChip,
    tags: ['autodocs'],
    argTypes: storyCalendarMonthChipArgTypes,
  });
</script>

<!-- Custom Content  -->
<Story name="customCalendarMonthChipContent" asChild>
  <CalendarMonthChip value="jan">
    {#snippet customCalendarMonthChipContent(val)}
      🗓️{val}
    {/snippet}
  </CalendarMonthChip>
</Story>

<!-- Custom Chip  -->
<Story name="customCalendarMonthChip" asChild>
  <CalendarMonthChip value="jan">
    {#snippet customCalendarMonthChip(val)}
      <Button size="small" variant="text" outline>
        {val}
      </Button>
    {/snippet}
  </CalendarMonthChip>
</Story>
