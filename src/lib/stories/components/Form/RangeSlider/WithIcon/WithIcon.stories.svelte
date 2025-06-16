<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import RangeSlider from '../RangeSlider.svelte';
  import { storyRangeSliderArgTypes } from '../RangeSlider.stories.svelte';
  import Icon from '@iconify/svelte';

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    component: RangeSlider,
    tags: ['autodocs'],
    argTypes: storyRangeSliderArgTypes,
  });

  let value = $state<number>(30);
</script>

<!-- RangeSlider icon in front. -->
<Story name="Icon Before" asChild>
  <RangeSlider {value}>
    {#snippet before()}
      <Icon icon="material-symbols:content-copy" />
    {/snippet}
  </RangeSlider>
</Story>

<!-- RangeSlider icon in front. -->
<Story name="Icon After" asChild>
  <RangeSlider {value}>
    {#snippet after()}
      <Icon icon="material-symbols:download-2" />
    {/snippet}
  </RangeSlider>
</Story>
