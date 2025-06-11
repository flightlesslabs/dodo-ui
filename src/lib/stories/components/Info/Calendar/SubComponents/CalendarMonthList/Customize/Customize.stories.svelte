<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import CalendarMonthList from '../CalendarMonthList.svelte';
  import { storyCalendarMonthListArgTypes } from '../CalendarMonthList.stories.svelte';
  import { Button } from '$lib/index.js';

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    component: CalendarMonthList,
    tags: ['autodocs'],
    argTypes: storyCalendarMonthListArgTypes,
    args: {
      value: 'jan',
    },
  });
</script>

<Story name="Default" />

<Story name="customCalendarMonthChipContent" asChild>
  <CalendarMonthList value="jan">
    {#snippet customCalendarMonthChipContent(val)}
      🗓️{val}
    {/snippet}
  </CalendarMonthList>
</Story>

<Story name="customCalendarMonthChip" asChild>
  <CalendarMonthList value="jan">
    {#snippet customCalendarMonthChip(val)}
      <Button size="small" variant="text" outline>
        {val}
      </Button>
    {/snippet}
  </CalendarMonthList>
</Story>
