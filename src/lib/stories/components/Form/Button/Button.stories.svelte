<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Button, { buttonTypeArray } from './Button.svelte';
  import type { StoryBookArgTypes } from '$lib/storybook-types.js';
  import { componentRoundnessArray } from '$lib/types/roundness.js';
  import { componentColorArray } from '$lib/types/colors.js';
  import { componentWeightArray } from '$lib/types/weight.js';
  import { componentSizeArray } from '$lib/types/size.js';

  export const storyButtonArgTypes: StoryBookArgTypes = {
    type: {
      control: { type: 'select' },
      options: buttonTypeArray,
    },
    color: {
      control: { type: 'select' },
      options: componentColorArray,
    },
    variant: {
      control: { type: 'select' },
      options: componentWeightArray,
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
    component: Button,
    tags: ['autodocs'],
    argTypes: storyButtonArgTypes,
  });
</script>

<!-- Button with default style -->
<Story name="Primary">Click me!</Story>

<!-- Button with border around it -->
<Story name="Outline" args={{ outline: true, variant: 'text' }}>Click me!</Story>

<Story name="Disabled" args={{ disabled: true }}>Click me!</Story>

<!-- Form submit button -->
<Story name="Sumbit Button" args={{ type: 'submit' }}>Submit Form</Story>

<!-- Form submit button -->
<Story name="Full width Button" args={{ fullWidth: true }}>Click me!</Story>

<!-- Anchor Link styled like a Button -->
<Story
  name="Link Button"
  args={{ href: 'https://www.w3schools.com/tags/tag_a.asp', target: '_blank' }}
>
  Link
</Story>
