<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import CalendarWeek from '../CalendarWeek.svelte';
  import { storyCalendarWeekArgTypes } from '../CalendarWeek.stories.svelte';

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    component: CalendarWeek,
    tags: ['autodocs'],
    argTypes: storyCalendarWeekArgTypes,
  });
</script>

<!-- Custom Content  -->
<Story name="customCalendarWeekContent" asChild>
  <CalendarWeek>
    {#snippet customCalendarWeekContent(option)}
      ☀️{option.abr1}
    {/snippet}
  </CalendarWeek>
</Story>

<!-- Custom Week  -->
<Story name="customCalendarWeek" asChild>
  <CalendarWeek>
    {#snippet customCalendarWeek(option)}
      <li style="color: blue; display: block;">
        {option.abr3}
      </li>
    {/snippet}
  </CalendarWeek>
</Story>
