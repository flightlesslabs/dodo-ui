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

<Story name="Normal" />
<Story name="Small" args={{ size: 'small' }} />
<Story name="Large" args={{ size: 'large' }} />
