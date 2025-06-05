<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import CalendarMonthList from '../CalendarMonthList.svelte';
  import { storyCalendarMonthListArgTypes } from '../CalendarMonthList.stories.svelte';

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    component: CalendarMonthList,
    tags: ['autodocs'],
    argTypes: storyCalendarMonthListArgTypes,
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
