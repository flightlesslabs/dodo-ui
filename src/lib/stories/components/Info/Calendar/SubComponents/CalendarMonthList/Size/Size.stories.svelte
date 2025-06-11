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

<Story name="Normal" />
<Story name="Small" args={{ size: 'small' }} />
<Story name="Large" args={{ size: 'large' }} />
