<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import { selectOptions, storySelectArgTypes } from '../Select.stories.svelte';
  import Select, { type SelectOption } from '../Select.svelte';

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    component: Select,
    tags: ['autodocs'],
    argTypes: storySelectArgTypes,
    parameters: {
      layout: 'centered',
      docs: {
        story: {
          height: '600px',
          inline: false,
        },
      },
    },
  });

  const options = selectOptions;

  let value = $state<SelectOption>(options[0]);
</script>

<Story
  name="BottomLeft"
  args={{ options, value, onselect: (val: SelectOption) => (value = val), popupMaxHeight: '200px' }}
/>

<Story
  name="BottomCenter"
  args={{
    options,
    value,
    onselect: (val: SelectOption) => (value = val),
    popupPositionX: 'center',
    popupMaxHeight: '200px',
  }}
/>

<Story
  name="BottomRight"
  args={{
    options,
    value,
    onselect: (val: SelectOption) => (value = val),
    popupPositionX: 'right',
    popupMaxHeight: '200px',
  }}
/>

<Story
  name="TopLeft"
  args={{
    options,
    value,
    onselect: (val: SelectOption) => (value = val),
    popupPositionY: 'top',
    popupMaxHeight: '200px',
  }}
/>

<Story
  name="TopCenter"
  args={{
    options,
    value,
    onselect: (val: SelectOption) => (value = val),
    popupPositionY: 'top',
    popupPositionX: 'center',
    popupMaxHeight: '200px',
  }}
/>

<Story
  name="TopRight"
  args={{
    options,
    value,
    onselect: (val: SelectOption) => (value = val),
    popupPositionY: 'top',
    popupPositionX: 'right',
    popupMaxHeight: '200px',
  }}
/>
