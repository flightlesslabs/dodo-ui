<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import CalendarDateChip from '../CalendarDateChip.svelte';
  import { storyCalendarDateChipArgTypes } from '../CalendarDateChip.stories.svelte';
  import getMoment from '$lib/stories/developer tools/helpers/Time/getMoment/getMoment.js';

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    component: CalendarDateChip,
    tags: ['autodocs'],
    argTypes: storyCalendarDateChipArgTypes,
    args: {
      dayOfMonth: {
        id: '1',
        date: getMoment().toDate(),
        isCurrentMonth: true,
      },
    },
  });
</script>

<Story name="Normal" />
<Story name="Small" args={{ size: 'small' }} />
<Story name="Large" args={{ size: 'large' }} />
