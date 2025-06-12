<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import { storyDatePickerArgTypes } from '../../DatePicker.stories.svelte';
  import DatePicker from '../../DatePicker.svelte';

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    component: DatePicker,
    tags: ['autodocs'],
    argTypes: storyDatePickerArgTypes,
    parameters: {
      docs: {
        story: {
          height: '200px',
          inline: false,
        },
      },
    },
  });

  let value = $state<Date | undefined>(new Date());
</script>

<Story name="PositionAutoAdjust" asChild>
  <DatePicker {value} onselect={(val: Date) => (value = val)} />
</Story>

<!-- Positions will not auto adjust if you use `lockPoistions` -->
<Story name="LockPoistions" asChild>
  <DatePicker
    {value}
    onselect={(val: Date) => (value = val)}
    popupPositionY="top"
    lockPoistions={true}
  />
</Story>

<!-- you can also adjust `popperHeightForVerticalPosition` to achive the same -->
<Story name="HeightForVerticalPosition" asChild>
  <DatePicker
    {value}
    onselect={(val: Date) => (value = val)}
    popupPositionY="top"
    popperHeightForVerticalPosition={3}
  />
</Story>
