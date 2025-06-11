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

<Story name="Default" />

<Story
  name="SingleLetter"
  args={{
    nameType: 'abr1',
  }}
/>

<Story
  name="ThreeLetters"
  args={{
    nameType: 'abr3',
  }}
/>
