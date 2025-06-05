<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import CalendarYearChip from '../CalendarYearChip.svelte';
  import { storyCalendarYearChipArgTypes } from '../CalendarYearChip.stories.svelte';
  import getMoment from '$lib/stories/developer tools/helpers/Time/getMoment/getMoment.js';

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    component: CalendarYearChip,
    tags: ['autodocs'],
    argTypes: storyCalendarYearChipArgTypes,
    args: {
      value: getMoment(undefined, undefined, { utc: true }).format('YYYY'),
    },
  });
</script>

<Story name="Normal" />
<Story name="Small" args={{ size: 'small' }} />
<Story name="Large" args={{ size: 'large' }} />
