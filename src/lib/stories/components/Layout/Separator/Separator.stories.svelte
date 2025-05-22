<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Separator, { separatorOrientationArray } from './Separator.svelte';
  import type { StoryBookArgTypes } from '$lib/storybook-types.js';
  import { componentColorArray } from '$lib/types/colors.js';

  export const storySeparatorArgTypes: StoryBookArgTypes = {
    color: {
      control: { type: 'select' },
      options: componentColorArray,
    },
    orientation: {
      control: { type: 'select' },
      options: separatorOrientationArray,
    },
  };

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    component: Separator,
    tags: ['autodocs'],
    argTypes: storySeparatorArgTypes,
  });
</script>

<Story name="Default" />

<Story name="FixedWidth" args={{ width: '200px' }} />

<Story name="VerticalOrientation" args={{ orientation: 'vertical', height: '200px' }} />
