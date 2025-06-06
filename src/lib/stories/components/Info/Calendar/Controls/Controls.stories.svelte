<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Calendar from '../Calendar.svelte';
  import { storyCalendarArgTypes } from '../Calendar.stories.svelte';
  import getMoment from '$lib/stories/developer tools/helpers/Time/getMoment/getMoment.js';

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    component: Calendar,
    tags: ['autodocs'],
    argTypes: storyCalendarArgTypes,
    args: {
      value: getMoment().toDate(),
    },
  });
</script>

<Story name="Normal" />
<Story name="HideCalendarMonthSelector" args={{ showCalendarMonthSelector: false }} />
<Story name="HideCalendarYearSelector" args={{ showCalendarYearSelector: false }} />
<Story name="HideCalendarNavigator" args={{ showCalendarNavigator: false }} />
<Story name="HideControlsMonthList" args={{ showControlsMonthList: false }} />
<Story name="HideControlsYearList" args={{ showControlsYearList: false }} />

<Story name="DisabledNavigationPrev" args={{ disabledCalendarNavigationPrev: true }} />
<Story name="DisabledNavigationNext" args={{ disabledCalendarNavigationNext: true }} />
