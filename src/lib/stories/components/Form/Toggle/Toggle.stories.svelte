<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Toggle from './Toggle.svelte';
  import type { StoryBookArgTypes } from '$lib/storybook-types.js';
  import { componentRoundnessArray } from '$lib/types/roundness.js';
  import { componentColorArray } from '$lib/types/colors.js';
  import { componentSizeArray } from '$lib/types/size.js';

  export const storyToggleArgTypes: StoryBookArgTypes = {
    color: {
      control: { type: 'select' },
      options: componentColorArray,
    },
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
    component: Toggle,
    tags: ['autodocs'],
    argTypes: storyToggleArgTypes,
  });
</script>

<!-- Toggle with default style -->
<Story name="Primary" />

<Story name="Checked" args={{ checked: true }} />

<Story name="Disabled" args={{ disabled: true }} />

<Story name="Checked Disabled" args={{ checked: true, disabled: true }} />
