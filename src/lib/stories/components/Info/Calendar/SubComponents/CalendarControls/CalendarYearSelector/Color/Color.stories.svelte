<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import CalendarYearSelector from '../../CalendarYearSelector/CalendarYearSelector.svelte';
  import { storyCalendarYearSelectorArgTypes } from '../../CalendarYearSelector/CalendarYearSelector.stories.svelte';
  import getMoment from '$lib/stories/developer tools/helpers/Time/getMoment/getMoment.js';

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    component: CalendarYearSelector,
    tags: ['autodocs'],
    argTypes: storyCalendarYearSelectorArgTypes,
    args: {
      value: getMoment().toDate(),
    },
  });
</script>

<Story name="Primary" />
<Story name="Secondary" args={{ color: 'secondary' }} />
<Story name="Neutral" args={{ color: 'neutral' }} />
<Story name="Safe" args={{ color: 'safe' }} />
<Story name="Warning" args={{ color: 'warning' }} />
<Story name="Danger" args={{ color: 'danger' }} />
