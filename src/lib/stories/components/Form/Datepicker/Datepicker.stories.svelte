<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import DatePicker from './DatePicker.svelte';
  import type { StoryBookArgTypes } from '$lib/storybook-types.js';
  import { componentRoundnessArray } from '$lib/types/roundness.js';
  import { componentSizeArray } from '$lib/types/size.js';
  import { componentColorArray } from '$lib/types/colors.js';

  export const storyDatePickerArgTypes: StoryBookArgTypes = {
    roundness: {
      control: { type: 'select' },
      options: componentRoundnessArray,
    },
    size: {
      control: { type: 'select' },
      options: componentSizeArray,
    },
    color: {
      control: { type: 'select' },
      options: componentColorArray,
    },
  };

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    component: DatePicker,
    tags: ['autodocs'],
    argTypes: storyDatePickerArgTypes,
    parameters: {
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

<!-- DatePicker with default style -->
<Story name="Default" asChild>
  <DatePicker {value} onselect={(val: Date) => (value = val)} />
</Story>

<Story name="Clearable" asChild>
  <DatePicker
    {value}
    clearable
    onselect={(val: Date) => (value = val)}
    onclear={() => (value = undefined)}
    placeholder="DD/MM/YYYY"
  />
</Story>

<Story name="Disabled" asChild>
  <DatePicker {value} disabled />
</Story>
