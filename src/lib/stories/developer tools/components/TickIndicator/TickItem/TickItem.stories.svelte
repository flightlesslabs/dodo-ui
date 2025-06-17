<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import type { StoryBookArgTypes } from '$lib/storybook-types.js';
  import { componentSizeArray } from '$lib/types/size.js';
  import { tickColorArray, tickMarkerTypeArray } from './TickItem.svelte';
  import TickItem from './TickItem.svelte';

  export const storyTickItemArgTypes: StoryBookArgTypes = {
    color: {
      control: { type: 'select' },
      options: tickColorArray,
    },
    markerType: {
      control: { type: 'select' },
      options: tickMarkerTypeArray,
    },
    size: {
      control: { type: 'select' },
      options: componentSizeArray,
    },
    baseSize: {
      control: { type: 'select' },
      options: componentSizeArray,
    },
  };

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    component: TickItem,
    tags: ['autodocs'],
    argTypes: storyTickItemArgTypes,
  });
</script>

<Story name="Default" args={{ value: 50 }} />
