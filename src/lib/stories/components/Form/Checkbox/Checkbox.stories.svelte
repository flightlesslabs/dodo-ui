<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Checkbox from './Checkbox.svelte';
  import type { StoryBookArgTypes } from '$lib/storybook-types.js';
  import { componentRoundnessArray } from '$lib/types/roundness.js';
  import { componentColorArray } from '$lib/types/colors.js';
  import { componentSizeArray } from '$lib/types/size.js';

  export const storyCheckboxArgTypes: StoryBookArgTypes = {
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
    component: Checkbox,
    tags: ['autodocs'],
    argTypes: storyCheckboxArgTypes,
  });
</script>

<!-- Checkbox with default style -->
<Story name="Primary" />

<Story name="WithText">This is Checkbox</Story>

<Story name="Checked" args={{ checked: true }} />

<Story name="Indeterminate" args={{ checked: true, indeterminate: true }} />

<Story name="Disabled" args={{ disabled: true }} />

<Story name="Checked Disabled" args={{ checked: true, disabled: true }} />
