<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import CalendarMonthChip from '../CalendarMonthChip.svelte';
  import { storyCalendarMonthChipArgTypes } from '../CalendarMonthChip.stories.svelte';

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    component: CalendarMonthChip,
    tags: ['autodocs'],
    argTypes: storyCalendarMonthChipArgTypes,
    args: {
      value: 'jan',
    },
  });
</script>

<!-- Hover to see the result -->
<Story name="Roundness 1" />

<Story name="Roundness 2" args={{ roundness: 2 }} />

<Story name="Roundness 3" args={{ roundness: 3 }} />

<Story name="Roundness 0" args={{ roundness: 0 }} />

<Story name="Roundness Full" args={{ roundness: 'full', compact: true }} />
