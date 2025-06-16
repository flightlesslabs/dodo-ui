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

<Story name="Normal" />
<Story name="Small" args={{ size: 'small' }} />
<Story name="Large" args={{ size: 'large' }} />
