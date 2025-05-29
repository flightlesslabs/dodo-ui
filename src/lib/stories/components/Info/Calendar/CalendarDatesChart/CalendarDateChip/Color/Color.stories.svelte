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

<Story name="Primary Today" args={{ color: 'primary', today: true }} />
<Story name="Secondary Today" args={{ color: 'secondary', today: true }} />
<Story name="Neutral Today" args={{ color: 'neutral', today: true }} />
<Story name="Safe Today" args={{ color: 'safe', today: true }} />
<Story name="Warning Today" args={{ color: 'warning', today: true }} />
<Story name="Danger Today" args={{ color: 'danger', today: true }} />
