<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import DatePicker from '../DatePicker.svelte';
  import { storyDatePickerArgTypes } from '../DatePicker.stories.svelte';
  import getMoment from '$lib/stories/developer tools/helpers/Time/getMoment/getMoment.js';

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    component: DatePicker,
    tags: ['autodocs'],
    argTypes: storyDatePickerArgTypes,
    args: {
      value: getMoment().toDate(),
    },
    parameters: {
      docs: {
        story: {
          height: '400px',
          inline: false,
        },
      },
    },
  });
</script>

<Story name="Normal" />
<Story name="HideCalendarMonthSelector" args={{ showCalendarMonthSelector: false }} />
<Story name="HideCalendarYearSelector" args={{ showCalendarYearSelector: false }} />
<Story name="HideCalendarNavigator" args={{ showCalendarNavigator: false }} />
<Story name="HideControlsMonthList" args={{ showControlsMonthList: false }} />
<Story name="HideControlsYearList" args={{ showControlsYearList: false }} />

<Story name="DisabledNavigationPrev" args={{ disabledCalendarNavigationPrev: true }} />
<Story name="DisabledNavigationNext" args={{ disabledCalendarNavigationNext: true }} />
