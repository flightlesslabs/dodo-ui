<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import CalendarControls from '../../CalendarControls/CalendarControls.svelte';
  import { storyCalendarControlsArgTypes } from '../../CalendarControls/CalendarControls.stories.svelte';
  import getMoment from '$lib/stories/developer tools/helpers/Time/getMoment/getMoment.js';

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    component: CalendarControls,
    tags: ['autodocs'],
    argTypes: storyCalendarControlsArgTypes,
    args: {
      value: getMoment().toDate(),
    },
  });
</script>

<Story name="Primary" />
<Story name="Secondary" args={{ color: 'secondary' }} />
<Story name="Neutral" args={{ color: 'neutral' }} />
<Story name="Safe" args={{ color: 'safe' }} />
<Story name="Warning" args={{ color: 'warning' }} />
<Story name="Danger" args={{ color: 'danger' }} />
