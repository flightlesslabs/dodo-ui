<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import CalendarDateChip from './CalendarDateChip.svelte';
  import type { StoryBookArgTypes } from '$lib/storybook-types.js';
  import getMoment from '$lib/stories/developer tools/helpers/Time/getMoment/getMoment.js';
  import { componentRoundnessArray } from '$lib/types/roundness.js';
  import { componentColorArray } from '$lib/types/colors.js';
  import { componentSizeArray } from '$lib/types/size.js';

  export const storyCalendarDateChipArgTypes: StoryBookArgTypes = {
    color: {
      control: { type: 'select' },
      options: componentColorArray,
    },
    roundness: {
      control: { type: 'select' },
      options: componentRoundnessArray,
    },
    size: {
      control: { type: 'select' },
      options: componentSizeArray,
    },
  };

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

<!-- Default CalendarDateChip -->
<Story name="Default" />

<Story name="Selected" args={{ selected: true }} />

<Story
  name="Disabled"
  args={{
    dayOfMonth: {
      id: '1',
      date: getMoment().toDate(),
      isCurrentMonth: true,
      disabled: true,
    },
  }}
/>

<!-- Today marker. Checkout more [Special Chips](?path=/docs/components-info-calendar-calendardateschart-calendardatechip-specialchips--docs) -->
<Story
  name="Today"
  args={{
    dayOfMonth: {
      id: '1',
      date: getMoment().toDate(),
      isCurrentMonth: true,
      today: true,
    },
  }}
/>
