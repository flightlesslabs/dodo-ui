<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import CalendarYearSelector from '../CalendarYearSelector.svelte';
  import { storyCalendarYearSelectorArgTypes } from '../CalendarYearSelector.stories.svelte';
  import type { ButtonClickEvent } from '$lib/index.js';

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    component: CalendarYearSelector,
    tags: ['autodocs'],
    argTypes: storyCalendarYearSelectorArgTypes,
  });
</script>

<Story
  name="Click"
  args={{
    onclick: (selectedYear: string, e: ButtonClickEvent) => {
      const target = e.target as HTMLButtonElement;

      alert('Button Clicked');
      console.log('Button Clicked', selectedYear, target);
    },
  }}
/>
