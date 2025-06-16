<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import RangeSlider from '../RangeSlider.svelte';
  import { storyRangeSliderArgTypes } from '../RangeSlider.stories.svelte';

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    component: RangeSlider,
    tags: ['autodocs'],
    argTypes: storyRangeSliderArgTypes,
  });
</script>

<Story name="Roundness 1" />

<Story name="Roundness 2" args={{ roundness: 2 }} />

<Story name="Roundness 3" args={{ roundness: 3 }} />

<Story name="Roundness 0" args={{ roundness: 0 }} />

<Story name="Thumb Roundness Full" />

<Story name="Thumb Roundness 0" args={{ thumbRoundness: 0 }} />

<Story name="Thumb Roundness 1" args={{ thumbRoundness: 1 }} />

<Story name="Thumb Roundness 2" args={{ thumbRoundness: 2 }} />

<Story name="Thumb Roundness 3" args={{ thumbRoundness: 3 }} />
