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
          height: '400px',
          inline: false,
        },
      },
    },
  });

  export const selectOptions: SelectOption[] = [
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
    {
      value: 4,
      label: 'Four',
    },
    {
      value: 5,
      label: 'Five',
    },
    {
      value: 6,
      label: 'Six',
      disabled: true,
    },
    {
      value: 7,
      label: 'Seven',
    },
    {
      value: 8,
      label: 'Eight',
    },
    {
      value: 9,
      label: 'Nine',
    },
  ];

  const options = selectOptions;

  let value = $state<SelectOption | undefined>(options[0]);
</script>

<!-- Select with default style -->
<Story name="Default" asChild>
  <Select {options} {value} onselect={(val: SelectOption) => (value = val)} />
</Story>

<Story name="Searchable" asChild>
  <Select
    {options}
    {value}
    searchable
    optionsPlaceholder="No results"
    onselect={(val: SelectOption) => (value = val)}
  />
</Story>

<Story name="Clearable" asChild>
  <Select
    {options}
    {value}
    clearable
    onselect={(val: SelectOption) => (value = val)}
    onclear={() => (value = undefined)}
    placeholder="Select option"
  />
</Story>

<Story name="PopupMaxHeight" asChild>
  <Select
    {options}
    {value}
    onselect={(val: SelectOption) => (value = val)}
    popupMaxHeight="200px"
  />
</Story>

<!-- Format look and feel of input content. [More Customizations](?path=/docs/components-form-select-customize--docs)  -->
<Story name="CustomInputContent" asChild>
  <Select {options} {value} onselect={(val: SelectOption) => (value = val)}>
    {#snippet customInputContent(selectedOption)}
      {selectedOption.label} 💯💯💯
    {/snippet}
  </Select>
</Story>
