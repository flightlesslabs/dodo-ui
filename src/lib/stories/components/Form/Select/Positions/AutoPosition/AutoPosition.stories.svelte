<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import { selectOptions, storySelectArgTypes } from '../../Select.stories.svelte';
  import Select, { type SelectOption } from '../../Select.svelte';

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

  const options = selectOptions;

  let value = $state<SelectOption>(options[0]);
</script>

<!-- Positions will auto adjust depending on the space on top and bottom -->
<Story
  name="PositionAutoAdjust"
  args={{
    options,
    value,
    onselect: (val: SelectOption) => (value = val),
  }}
/>

<!-- Positions will not auto adjust if you use `lockPoistions` -->
<Story
  name="LockPoistions"
  args={{
    options,
    value,
    onselect: (val: SelectOption) => (value = val),
    popupPositionY: 'top',
    lockPoistions: true,
  }}
/>

<!-- you can also adjust `popperHeightForVerticalPosition` to achive the same -->
<Story
  name="HeightForVerticalPosition"
  args={{
    options,
    value,
    onselect: (val: SelectOption) => (value = val),
    popupPositionY: 'top',
    popperHeightForVerticalPosition: 3,
  }}
/>
