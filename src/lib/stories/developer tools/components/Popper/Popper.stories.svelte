<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import type { StoryBookArgTypes } from '$lib/storybook-types.js';
  import { Popper } from '$lib/index.js';
  import {
    popperPopupPositionXArray,
    popperPopupPositionYArray,
  } from './PopperPopup/PopperPopup.svelte';
  import Button from '$lib/stories/components/Form/Button/Button.svelte';

  export const storyPopperArgTypes: StoryBookArgTypes = {
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
    component: Popper,
    tags: ['autodocs'],
    argTypes: storyPopperArgTypes,
    parameters: {
      docs: {
        story: {
          height: '200px',
          inline: false,
        },
      },
    },
  });

  let open = $state(false);
</script>

<Story name="Default" args={{ open, onClickOutside: () => (open = false) }} asChild>
  <Popper {open} onClickOutside={() => (open = false)}>
    <Button onclick={() => (open = true)}>Click to see Popup</Button>
    {#snippet popupChildren()}
      <ul>
        <li>One</li>
        <li>Two</li>
        <li>Three</li>
      </ul>
    {/snippet}
  </Popper>
</Story>

<Story name="MenuOpen" args={{ open: true }} asChild>
  <Popper open>
    Hello! how are you doing?
    {#snippet popupChildren()}
      <ul>
        <li>One</li>
        <li>Two</li>
        <li>Three</li>
      </ul>
    {/snippet}
  </Popper>
</Story>

<Story
  name="CustomPaperProps"
  args={{
    open: true,
    paperProps: {
      color: 'primary',
    },
  }}
  asChild
>
  <Popper
    open
    paperProps={{
      color: 'primary',
    }}
  >
    Hello! how are you doing?
    {#snippet popupChildren()}
      <ul>
        <li>One</li>
        <li>Two</li>
        <li>Three</li>
      </ul>
    {/snippet}
  </Popper>
</Story>

<Story
  name="CustomPopup"
  args={{
    open,
    onClickOutside: () => (open = false),
  }}
  asChild
>
  <Popper {open} onClickOutside={() => (open = false)}>
    <Button onclick={() => (open = true)}>Click to see Popup</Button>

    {#snippet customPopup(popperLocation)}
      {#if open}
        <ul>
          <li>{popperLocation?.height}</li>
          <li>{popperLocation?.width}</li>
        </ul>
      {/if}
    {/snippet}
  </Popper>
</Story>
