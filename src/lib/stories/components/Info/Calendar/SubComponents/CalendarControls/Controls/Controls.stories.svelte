<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import CalendarControls from '../CalendarControls.svelte';
  import { storyCalendarControlsArgTypes } from '../CalendarControls.stories.svelte';
  import getMoment from '$lib/stories/developer tools/helpers/Time/getMoment/getMoment.js';

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    component: CalendarControls,
    tags: ['autodocs'],
    argTypes: storyCalendarControlsArgTypes,
    args: {
      value: getMoment().toDate(),
    },
  });
</script>

<Story name="Normal" />
<Story name="HideCalendarMonthSelector" args={{ showCalendarMonthSelector: false }} />
<Story name="HideCalendarYearSelector" args={{ showCalendarYearSelector: false }} />
<Story name="HideCalendarNavigator" args={{ showCalendarNavigator: false }} />
