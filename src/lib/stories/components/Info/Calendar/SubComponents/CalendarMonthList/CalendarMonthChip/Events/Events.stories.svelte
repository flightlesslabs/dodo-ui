<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import CalendarMonthChip from '../CalendarMonthChip.svelte';
  import { storyCalendarMonthChipArgTypes } from '../CalendarMonthChip.stories.svelte';

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    component: CalendarMonthChip,
    tags: ['autodocs'],
    argTypes: storyCalendarMonthChipArgTypes,
  });
</script>

<Story name="Select" asChild>
  <CalendarMonthChip
    value="jan"
    onselect={(value, e) => {
      const target = e.target as HTMLButtonElement;
      alert(`CalendarMonthChip Select, ${value}`);
      console.log('CalendarMonthChip Select', value, target);
    }}
  />
</Story>
