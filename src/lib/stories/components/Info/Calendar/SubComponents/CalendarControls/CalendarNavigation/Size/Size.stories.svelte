<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import CalendarNavigation from '../CalendarNavigation.svelte';
  import { storyCalendarNavigationArgTypes } from '../CalendarNavigation.stories.svelte';

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    component: CalendarNavigation,
    tags: ['autodocs'],
    argTypes: storyCalendarNavigationArgTypes,
  });
</script>

<Story name="Normal" />
<Story name="Small" args={{ size: 'small' }} />
<Story name="Large" args={{ size: 'large' }} />
