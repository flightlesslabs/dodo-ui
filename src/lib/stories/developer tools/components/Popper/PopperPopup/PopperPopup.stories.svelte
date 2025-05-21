<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import type { StoryBookArgTypes } from '$lib/storybook-types.js';
  import { PopperPopup } from '$lib/index.js';
  import { popperPopupPositionXArray, popperPopupPositionYArray } from './PopperPopup.svelte';

  export const storyPopperPopupArgTypes: StoryBookArgTypes = {
    popupPositionX: {
      control: { type: 'select' },
      options: popperPopupPositionXArray,
    },
    popupPositionY: {
      control: { type: 'select' },
      options: popperPopupPositionYArray,
    },
  };

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    component: PopperPopup,
    tags: ['autodocs'],
    argTypes: storyPopperPopupArgTypes,
    parameters: {
      docs: {
        story: {
          height: '200px',
          inline: false,
        },
      },
    },
  });
</script>

<Story name="Default" asChild>
  <PopperPopup>
    <ul>
      <li>One</li>
      <li>Two</li>
      <li>Three</li>
    </ul>
  </PopperPopup>
</Story>

<Story
  name="CustomPaperProps"
  args={{
    paperProps: {
      color: 'primary',
    },
  }}
  asChild
>
  <PopperPopup
    paperProps={{
      color: 'primary',
    }}
  >
    <ul>
      <li>One</li>
      <li>Two</li>
      <li>Three</li>
    </ul>
  </PopperPopup>
</Story>
