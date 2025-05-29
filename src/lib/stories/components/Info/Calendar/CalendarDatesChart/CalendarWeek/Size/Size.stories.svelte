<script module>
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

<Story name="Normal" />
<Story name="Small" args={{ size: 'small' }} />
<Story name="Large" args={{ size: 'large' }} />
