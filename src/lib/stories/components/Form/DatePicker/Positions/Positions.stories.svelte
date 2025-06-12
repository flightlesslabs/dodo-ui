<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import { storyDatePickerArgTypes } from '../DatePicker.stories.svelte';
  import DatePicker from '../DatePicker.svelte';

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    component: DatePicker,
    tags: ['autodocs'],
    argTypes: storyDatePickerArgTypes,
    parameters: {
      layout: 'centered',
      docs: {
        story: {
          height: '400px',
          inline: false,
        },
      },
    },
  });

  let value = $state<Date | undefined>(new Date());
</script>

<Story name="BottomLeft" asChild>
  <DatePicker {value} onselect={(val: Date) => (value = val)} />
</Story>

<Story name="BottomCenter" asChild>
  <DatePicker {value} onselect={(val: Date) => (value = val)} popupPositionX="center" />
</Story>

<Story name="BottomRight" asChild>
  <DatePicker {value} onselect={(val: Date) => (value = val)} popupPositionX="right" />
</Story>

<Story name="TopLeft" asChild>
  <DatePicker {value} onselect={(val: Date) => (value = val)} popupPositionY="top" />
</Story>

<Story name="TopCenter" asChild>
  <DatePicker
    {value}
    onselect={(val: Date) => (value = val)}
    popupPositionY="top"
    popupPositionX="center"
  />
</Story>

<Story name="TopRight" asChild>
  <DatePicker
    {value}
    onselect={(val: Date) => (value = val)}
    popupPositionY="top"
    popupPositionX="right"
  />
</Story>
