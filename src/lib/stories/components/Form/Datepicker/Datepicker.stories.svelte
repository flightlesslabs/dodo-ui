<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Datepicker from './Datepicker.svelte';
  import type { StoryBookArgTypes } from '$lib/storybook-types.js';
  import { componentRoundnessArray } from '$lib/types/roundness.js';
  import { componentSizeArray } from '$lib/types/size.js';
  import { componentColorArray } from '$lib/types/colors.js';

  export const storyDatepickerArgTypes: StoryBookArgTypes = {
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
    component: Datepicker,
    tags: ['autodocs'],
    argTypes: storyDatepickerArgTypes,
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

<!-- Datepicker with default style -->
<Story name="Default" asChild>
  <Datepicker {value} onselect={(val: Date) => (value = val)} />
</Story>

<Story name="Clearable" asChild>
  <Datepicker
    {value}
    clearable
    onselect={(val: Date) => (value = val)}
    onclear={() => (value = undefined)}
    placeholder="DD/MM/YYYY"
  />
</Story>
