<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import CalendarNavigation from '../CalendarNavigation.svelte';
  import { storyCalendarNavigationArgTypes } from '../CalendarNavigation.stories.svelte';
  import { Button } from '$lib/index.js';
  import Icon from '@iconify/svelte';

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    component: CalendarNavigation,
    tags: ['autodocs'],
    argTypes: storyCalendarNavigationArgTypes,
  });
</script>

<Story name="customCalendarNavigationContent" asChild>
  <CalendarNavigation>
    {#snippet customCalendarNavigationPrevContent()}
      <Icon icon="carbon:previous-filled" width="32" height="32" />
    {/snippet}
    {#snippet customCalendarNavigationNextContent()}
      <Icon icon="carbon:next-outline" width="32" height="32" />
    {/snippet}
  </CalendarNavigation>
</Story>

<Story name="customCalendarNavigation" asChild>
  <CalendarNavigation>
    {#snippet customCalendarNavigation()}
      <Button>Control</Button>
    {/snippet}
  </CalendarNavigation>
</Story>
