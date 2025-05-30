<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Calendar from '../Calendar.svelte';
  import { storyCalendarArgTypes } from '../Calendar.stories.svelte';
  import { Button, getMoment } from '$lib/index.js';
  import Icon from '@iconify/svelte';

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    component: Calendar,
    tags: ['autodocs'],
    argTypes: storyCalendarArgTypes,
    args: {
      value: getMoment().toDate(),
    },
  });
</script>

<Story
  name="calendarDateChipProps"
  args={{
    calendarDateChipProps: {
      roundness: 'full',
    },
  }}
/>

<Story name="customCalendarDateChipContent" asChild>
  <Calendar value={getMoment().toDate()}>
    {#snippet customCalendarDateChipContent(dayOfMonth)}
      🗓️{Number(getMoment(dayOfMonth.date).format('D'))}
    {/snippet}
  </Calendar>
</Story>

<Story name="customCalendarDateChip" asChild>
  <Calendar value={getMoment().toDate()}>
    {#snippet customCalendarDateChip(dayOfMonth)}
      <Button size="small" variant="text" outline>
        {Number(getMoment(dayOfMonth.date).format('D'))}
      </Button>
    {/snippet}
  </Calendar>
</Story>

<Story name="customCalendarWeekContent" asChild>
  <Calendar value={getMoment().toDate()}>
    {#snippet customCalendarWeekContent(option)}
      ☀️{option.abr1}
    {/snippet}
  </Calendar>
</Story>

<Story name="customCalendarWeek" asChild>
  <Calendar value={getMoment().toDate()}>
    {#snippet customCalendarWeek(option)}
      <li style="color: blue; display: block;">
        {option.abr3}
      </li>
    {/snippet}
  </Calendar>
</Story>

<Story name="customCalendarMonthSelectorContent" asChild>
  <Calendar>
    {#snippet customCalendarMonthSelectorContent(option)}
      🗓️{option.abr3}
    {/snippet}
  </Calendar>
</Story>

<Story name="customCalendarMonthSelector" asChild>
  <Calendar>
    {#snippet customCalendarMonthSelector(option)}
      <span style="color: blue; display: block;">
        {option.abr3}
      </span>
    {/snippet}
  </Calendar>
</Story>

<Story name="customCalendarYearSelectorContent" asChild>
  <Calendar>
    {#snippet customCalendarYearSelectorContent(selectedYear)}
      🗓️{selectedYear}
    {/snippet}
  </Calendar>
</Story>

<Story name="customCalendarYearSelector" asChild>
  <Calendar>
    {#snippet customCalendarYearSelector(selectedYear)}
      <span style="color: blue; display: block;">
        {selectedYear}
      </span>
    {/snippet}
  </Calendar>
</Story>

<Story name="customCalendarNavigationContent" asChild>
  <Calendar>
    {#snippet customCalendarNavigationPrevContent()}
      <Icon icon="carbon:previous-filled" width="32" height="32" />
    {/snippet}
    {#snippet customCalendarNavigationNextContent()}
      <Icon icon="carbon:next-outline" width="32" height="32" />
    {/snippet}
  </Calendar>
</Story>

<Story name="customCalendarNavigation" asChild>
  <Calendar>
    {#snippet customCalendarNavigation()}
      <Button>Control</Button>
    {/snippet}
  </Calendar>
</Story>
