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

<Story name="Primary" />
<Story name="Secondary" args={{ color: 'secondary' }} />
<Story name="Neutral" args={{ color: 'neutral' }} />
<Story name="Safe" args={{ color: 'safe' }} />
<Story name="Warning" args={{ color: 'warning' }} />
<Story name="Danger" args={{ color: 'danger' }} />

<Story name="Primary Selected" args={{ color: 'primary', selected: true }} />
<Story name="Secondary Selected" args={{ color: 'secondary', selected: true }} />
<Story name="Neutral Selected" args={{ color: 'neutral', selected: true }} />
<Story name="Safe Selected" args={{ color: 'safe', selected: true }} />
<Story name="Warning Selected" args={{ color: 'warning', selected: true }} />
<Story name="Danger Selected" args={{ color: 'danger', selected: true }} />
