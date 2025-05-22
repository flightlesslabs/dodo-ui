<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Select, { type SelectOption } from './Select.svelte';
  import type { StoryBookArgTypes } from '$lib/storybook-types.js';
  import { componentRoundnessArray } from '$lib/types/roundness.js';
  import { componentSizeArray } from '$lib/types/size.js';

  export const storySelectArgTypes: StoryBookArgTypes = {
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
    component: Select,
    tags: ['autodocs'],
    argTypes: storySelectArgTypes,
    parameters: {
      docs: {
        story: {
          height: '200px',
          inline: false,
        },
      },
    },
  });

  const options: SelectOption[] = [
    {
      value: 1,
      label: 'One',
    },
    {
      value: 2,
      label: 'Two',
    },
    {
      value: 3,
      label: 'Three',
    },
  ];

  let value = $state<SelectOption>(options[0]);
</script>

<!-- Select with default style -->
<Story name="Default" asChild>
  <Select {options} {value} onselect={(val: SelectOption) => (value = val)} />
</Story>

<Story name="Searchable" asChild>
  <Select {options} {value} searchable onselect={(val: SelectOption) => (value = val)} />
</Story>

<Story name="Clearable" asChild>
  <Select {options} {value} clearable onselect={(val: SelectOption) => (value = val)} />
</Story>

<!-- Format look and feel of input content.  -->
<Story name="CustomInputContent" asChild>
  <Select {options} {value} onselect={(val: SelectOption) => (value = val)}>
    {#snippet customInputContent(selectedOption)}
      {selectedOption.label} 💯💯💯
    {/snippet}
  </Select>
</Story>
