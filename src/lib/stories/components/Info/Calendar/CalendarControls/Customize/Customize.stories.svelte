<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import CalendarControls from '../CalendarControls.svelte';
  import { storyCalendarControlsArgTypes } from '../CalendarControls.stories.svelte';
  import { Button } from '$lib/index.js';
  import Icon from '@iconify/svelte';

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    component: CalendarControls,
    tags: ['autodocs'],
    argTypes: storyCalendarControlsArgTypes,
  });
</script>

<Story name="customCalendarMonthSelectorContent" asChild>
  <CalendarControls>
    {#snippet customCalendarMonthSelectorContent(option)}
      🗓️{option.abr3}
    {/snippet}
  </CalendarControls>
</Story>

<Story name="customCalendarMonthSelector" asChild>
  <CalendarControls>
    {#snippet customCalendarMonthSelector(option)}
      <span style="color: blue; display: block;">
        {option.abr3}
      </span>
    {/snippet}
  </CalendarControls>
</Story>

<Story name="customCalendarYearSelectorContent" asChild>
  <CalendarControls>
    {#snippet customCalendarYearSelectorContent(selectedYear)}
      🗓️{selectedYear}
    {/snippet}
  </CalendarControls>
</Story>

<Story name="customCalendarYearSelector" asChild>
  <CalendarControls>
    {#snippet customCalendarYearSelector(selectedYear)}
      <span style="color: blue; display: block;">
        {selectedYear}
      </span>
    {/snippet}
  </CalendarControls>
</Story>

<Story name="customCalendarNavigationContent" asChild>
  <CalendarControls>
    {#snippet customCalendarNavigationPrevContent()}
      <Icon icon="carbon:previous-filled" width="32" height="32" />
    {/snippet}
    {#snippet customCalendarNavigationNextContent()}
      <Icon icon="carbon:next-outline" width="32" height="32" />
    {/snippet}
  </CalendarControls>
</Story>

<Story name="customCalendarNavigation" asChild>
  <CalendarControls>
    {#snippet customCalendarNavigation()}
      <Button>Control</Button>
    {/snippet}
  </CalendarControls>
</Story>
