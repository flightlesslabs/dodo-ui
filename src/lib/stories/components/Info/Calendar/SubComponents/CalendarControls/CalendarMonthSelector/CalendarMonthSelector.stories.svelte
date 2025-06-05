<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import CalendarMonthSelector from './CalendarMonthSelector.svelte';
  import type { StoryBookArgTypes } from '$lib/storybook-types.js';
  import getMoment from '$lib/stories/developer tools/helpers/Time/getMoment/getMoment.js';
  import { componentColorArray } from '$lib/types/colors.js';
  import { componentSizeArray } from '$lib/types/size.js';
  import { componentRoundnessArray } from '$lib/types/roundness.js';

  export const storyCalendarMonthSelectorArgTypes: StoryBookArgTypes = {
    color: {
      control: { type: 'select' },
      options: componentColorArray,
    },
    size: {
      control: { type: 'select' },
      options: componentSizeArray,
    },
    roundness: {
      control: { type: 'select' },
      options: componentRoundnessArray,
    },
  };

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    component: CalendarMonthSelector,
    tags: ['autodocs'],
    argTypes: storyCalendarMonthSelectorArgTypes,
  });

  let value = $state(getMoment().toDate());
</script>

<!-- Default CalendarMonthSelector -->
<Story
  name="Default"
  args={{
    value,
  }}
/>

<!-- Override month -->
<Story
  name="ActiveMonth"
  args={{
    value,
    activeMonth: getMoment().add(2, 'months').toDate(),
  }}
/>

<Story
  name="Disabled"
  args={{
    value,
    disabled: true,
  }}
/>
