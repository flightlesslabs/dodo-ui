<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import DatePicker from '../DatePicker.svelte';
  import { storyDatePickerArgTypes } from '../DatePicker.stories.svelte';
  import { Button, getMoment } from '$lib/index.js';
  import Icon from '@iconify/svelte';

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    component: DatePicker,
    tags: ['autodocs'],
    argTypes: storyDatePickerArgTypes,
    parameters: {
      docs: {
        story: {
          height: '400px',
          inline: false,
        },
      },
    },
  });

  let value = $state(getMoment().toDate());
</script>

<Story name="calendarDateChipProps" asChild>
  <DatePicker
    {value}
    calendarDateChipProps={{
      roundness: 'full',
    }}
  />
</Story>

<Story name="calendarMonthChipProps" asChild>
  <DatePicker
    {value}
    calendarMonthChipProps={{
      roundness: 2,
    }}
  />
</Story>

<Story name="customCalendarDateChipContent" asChild>
  <DatePicker value={getMoment().toDate()}>
    {#snippet customCalendarDateChipContent(dayOfMonth)}
      🗓️{Number(getMoment(dayOfMonth.date).format('D'))}
    {/snippet}
  </DatePicker>
</Story>

<Story name="customCalendarDateChip" asChild>
  <DatePicker value={getMoment().toDate()}>
    {#snippet customCalendarDateChip(dayOfMonth)}
      <Button size="small" variant="text" outline>
        {Number(getMoment(dayOfMonth.date).format('D'))}
      </Button>
    {/snippet}
  </DatePicker>
</Story>

<Story name="customCalendarWeekContent" asChild>
  <DatePicker value={getMoment().toDate()}>
    {#snippet customCalendarWeekContent(option)}
      ☀️{option.abr1}
    {/snippet}
  </DatePicker>
</Story>

<Story name="customCalendarWeek" asChild>
  <DatePicker value={getMoment().toDate()}>
    {#snippet customCalendarWeek(option)}
      <li style="color: blue; display: block;">
        {option.abr3}
      </li>
    {/snippet}
  </DatePicker>
</Story>

<Story name="customCalendarMonthSelectorContent" asChild>
  <DatePicker value={getMoment().toDate()}>
    {#snippet customCalendarMonthSelectorContent(option)}
      🗓️{option.abr3}
    {/snippet}
  </DatePicker>
</Story>

<Story name="customCalendarMonthSelector" asChild>
  <DatePicker value={getMoment().toDate()}>
    {#snippet customCalendarMonthSelector(option)}
      <span style="color: blue; display: block;">
        {option.abr3}
      </span>
    {/snippet}
  </DatePicker>
</Story>

<Story name="customCalendarYearSelectorContent" asChild>
  <DatePicker value={getMoment().toDate()}>
    {#snippet customCalendarYearSelectorContent(selectedYear)}
      🗓️{selectedYear}
    {/snippet}
  </DatePicker>
</Story>

<Story name="customCalendarYearSelector" asChild>
  <DatePicker value={getMoment().toDate()}>
    {#snippet customCalendarYearSelector(selectedYear)}
      <span style="color: blue; display: block;">
        {selectedYear}
      </span>
    {/snippet}
  </DatePicker>
</Story>

<Story name="customCalendarNavigationContent" asChild>
  <DatePicker value={getMoment().toDate()}>
    {#snippet customCalendarNavigationPrevContent()}
      <Icon icon="carbon:previous-filled" width="32" height="32" />
    {/snippet}
    {#snippet customCalendarNavigationNextContent()}
      <Icon icon="carbon:next-outline" width="32" height="32" />
    {/snippet}
  </DatePicker>
</Story>

<Story name="customCalendarNavigation" asChild>
  <DatePicker value={getMoment().toDate()}>
    {#snippet customCalendarNavigation()}
      <Button>Control</Button>
    {/snippet}
  </DatePicker>
</Story>

<Story name="customCalendarMonthChipContent" asChild>
  <DatePicker value={getMoment().toDate()}>
    {#snippet customCalendarMonthChipContent(val)}
      🗓️{val}
    {/snippet}
  </DatePicker>
</Story>

<Story name="customCalendarMonthChip" asChild>
  <DatePicker value={getMoment().toDate()}>
    {#snippet customCalendarMonthChip(val)}
      <Button size="small" variant="text" outline>
        {val}
      </Button>
    {/snippet}
  </DatePicker>
</Story>

<Story name="calendarTopContent" asChild>
  <DatePicker value={getMoment().toDate()}>
    {#snippet calendarTopContent(activeSection)}
      Top Content: {activeSection}
    {/snippet}
  </DatePicker>
</Story>

<Story name="calendarBottomContent" asChild>
  <DatePicker value={getMoment().toDate()}>
    {#snippet calendarBottomContent(activeSection)}
      Bottom Content: {activeSection}
    {/snippet}
  </DatePicker>
</Story>
