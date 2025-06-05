<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import CalendarMonthSelector, { type CalendarMonthOption } from '../CalendarMonthSelector.svelte';
  import { storyCalendarMonthSelectorArgTypes } from '../CalendarMonthSelector.stories.svelte';
  import type { ButtonClickEvent } from '$lib/index.js';

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    component: CalendarMonthSelector,
    tags: ['autodocs'],
    argTypes: storyCalendarMonthSelectorArgTypes,
  });
</script>

<Story
  name="Click"
  args={{
    onclick: (option: CalendarMonthOption, e: ButtonClickEvent) => {
      const target = e.target as HTMLButtonElement;

      alert('Button Clicked');
      console.log('Button Clicked', option, target);
    },
  }}
/>
