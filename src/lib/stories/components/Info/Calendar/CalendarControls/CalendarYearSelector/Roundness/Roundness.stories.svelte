<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import CalendarYearSelector from '../CalendarYearSelector.svelte';
  import { storyCalendarYearSelectorArgTypes } from '../CalendarYearSelector.stories.svelte';
  import getMoment from '$lib/stories/developer tools/helpers/Time/getMoment/getMoment.js';

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    component: CalendarYearSelector,
    tags: ['autodocs'],
    argTypes: storyCalendarYearSelectorArgTypes,
    args: {
      value: getMoment().toDate(),
    },
  });
</script>

<Story name="Roundness Default" />

<Story name="Roundness 1" args={{ roundness: 1 }} />

<Story name="Roundness 2" args={{ roundness: 2 }} />

<Story name="Roundness 3" args={{ roundness: 3 }} />

<Story name="Roundness 0" args={{ roundness: 0 }} />
