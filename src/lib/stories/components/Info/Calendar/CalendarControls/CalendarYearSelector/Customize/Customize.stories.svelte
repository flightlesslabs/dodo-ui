<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import CalendarYearSelector from '../CalendarYearSelector.svelte';
  import { storyCalendarYearSelectorArgTypes } from '../CalendarYearSelector.stories.svelte';

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    component: CalendarYearSelector,
    tags: ['autodocs'],
    argTypes: storyCalendarYearSelectorArgTypes,
  });
</script>

<Story name="customCalendarYearSelectorContent" asChild>
  <CalendarYearSelector>
    {#snippet customCalendarYearSelectorContent(selectedYear)}
      🗓️{selectedYear}
    {/snippet}
  </CalendarYearSelector>
</Story>

<Story name="customCalendarYearSelector" asChild>
  <CalendarYearSelector>
    {#snippet customCalendarYearSelector(selectedYear)}
      <span style="color: blue; display: block;">
        {selectedYear}
      </span>
    {/snippet}
  </CalendarYearSelector>
</Story>
