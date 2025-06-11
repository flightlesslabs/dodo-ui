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

<!-- Hover to see the result -->
<Story name="Roundness 1" />

<Story name="Roundness 2" args={{ roundness: 2 }} />

<Story name="Roundness 3" args={{ roundness: 3 }} />

<Story name="Roundness 0" args={{ roundness: 0 }} />

<Story name="Roundness Full" args={{ roundness: 'full', compact: true }} />
