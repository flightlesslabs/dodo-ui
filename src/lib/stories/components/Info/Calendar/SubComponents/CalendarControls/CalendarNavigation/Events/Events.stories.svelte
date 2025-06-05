<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import CalendarNavigation from '../CalendarNavigation.svelte';
  import { storyCalendarNavigationArgTypes } from '../CalendarNavigation.stories.svelte';
  import type { ButtonClickEvent } from '$lib/index.js';

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    component: CalendarNavigation,
    tags: ['autodocs'],
    argTypes: storyCalendarNavigationArgTypes,
  });
</script>

<Story
  name="CalendarNavigationNextClick"
  args={{
    onCalendarNavigationNextClick: (e: ButtonClickEvent) => {
      const target = e.target as HTMLButtonElement;

      alert('Button Clicked');
      console.log('Button Clicked', target);
    },
  }}
/>

<Story
  name="CalendarNavigationPrevClick"
  args={{
    onCalendarNavigationPrevClick: (e: ButtonClickEvent) => {
      const target = e.target as HTMLButtonElement;

      alert('Button Clicked');
      console.log('Button Clicked', target);
    },
  }}
/>
