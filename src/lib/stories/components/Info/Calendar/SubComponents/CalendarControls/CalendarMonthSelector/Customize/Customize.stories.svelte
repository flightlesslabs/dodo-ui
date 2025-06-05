<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import CalendarMonthSelector from '../CalendarMonthSelector.svelte';
  import { storyCalendarMonthSelectorArgTypes } from '../CalendarMonthSelector.stories.svelte';

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    component: CalendarMonthSelector,
    tags: ['autodocs'],
    argTypes: storyCalendarMonthSelectorArgTypes,
  });
</script>

<Story name="customCalendarMonthSelectorContent" asChild>
  <CalendarMonthSelector>
    {#snippet customCalendarMonthSelectorContent(option)}
      🗓️{option.abr3}
    {/snippet}
  </CalendarMonthSelector>
</Story>

<Story name="customCalendarMonthSelector" asChild>
  <CalendarMonthSelector>
    {#snippet customCalendarMonthSelector(option)}
      <span style="color: blue; display: block;">
        {option.abr3}
      </span>
    {/snippet}
  </CalendarMonthSelector>
</Story>
