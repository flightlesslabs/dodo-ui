<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import CalendarYearChip from '../CalendarYearChip.svelte';
  import { storyCalendarYearChipArgTypes } from '../CalendarYearChip.stories.svelte';
  import { getMoment } from '$lib/index.js';

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

<!-- Hover to see the result -->
<Story name="Roundness 1" />

<Story name="Roundness 2" args={{ roundness: 2 }} />

<Story name="Roundness 3" args={{ roundness: 3 }} />

<Story name="Roundness 0" args={{ roundness: 0 }} />

<Story name="Roundness Full" args={{ roundness: 'full', compact: true }} />
