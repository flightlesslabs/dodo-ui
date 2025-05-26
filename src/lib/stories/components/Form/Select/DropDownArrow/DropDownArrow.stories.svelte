<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Select, { type SelectOption } from '../Select.svelte';
  import { selectOptions, storySelectArgTypes } from '../Select.stories.svelte';
  import Icon from '@iconify/svelte';

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

  const options = selectOptions;

  let value = $state<SelectOption>(options[0]);
</script>

<Story
  name="PositionAfter"
  args={{ options, value, onselect: (val: SelectOption) => (value = val) }}
/>

<Story
  name="PositionBefore"
  args={{
    options,
    value,
    onselect: (val: SelectOption) => (value = val),
    dropdownArrowPosition: 'before',
  }}
/>

<Story
  name="HideArrow"
  args={{
    options,
    value,
    onselect: (val: SelectOption) => (value = val),
    dropdownArrowPosition: false,
  }}
/>

<!-- Format look and feel Dropdown Arrow icon  -->
<Story name="CustomDropdownArrowIcon" asChild>
  <Select {options} {value} onselect={(val: SelectOption) => (value = val)}>
    {#snippet customDropdownArrowIcon(open)}
      {#if open}
        <Icon icon="mingcute:up-fill" width="24" height="24" />
      {:else}
        <Icon icon="mingcute:down-fill" width="24" height="24" />
      {/if}
    {/snippet}
  </Select>
</Story>
