<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import type { StoryBookArgTypes } from '$lib/storybook-types.js';
  import { Menu, MenuItem, Popper } from '$lib/index.js';
  import Button from '$lib/stories/components/Form/Button/Button.svelte';
  import { positionXArray, positionYArray } from '$lib/types/position.js';

  export const storyPopperArgTypes: StoryBookArgTypes = {
    popupPositionX: {
      control: { type: 'select' },
      options: positionXArray,
    },
    popupPositionY: {
      control: { type: 'select' },
      options: positionYArray,
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
      <Menu>
        <MenuItem>One</MenuItem>
        <MenuItem>Two</MenuItem>
        <MenuItem>Three</MenuItem>
      </Menu>
    {/snippet}
  </Popper>
</Story>

<Story name="MenuOpen" args={{ open: true }} asChild>
  <Popper open>
    Hello! how are you doing?
    {#snippet popupChildren()}
      <Menu>
        <MenuItem>One</MenuItem>
        <MenuItem>Two</MenuItem>
        <MenuItem>Three</MenuItem>
      </Menu>
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
      <Menu>
        <MenuItem>One</MenuItem>
        <MenuItem>Two</MenuItem>
        <MenuItem>Three</MenuItem>
      </Menu>
    {/snippet}
  </Popper>
</Story>

<!-- Expand the Popper to full width -->
<Story name="FullWidth" asChild>
  <Popper {open} fullWidth onClickOutside={() => (open = false)}>
    <Button onclick={() => (open = true)}>Click to see Popup</Button>

    {#snippet popupChildren()}
      <Menu>
        <MenuItem>One</MenuItem>
        <MenuItem>Two</MenuItem>
        <MenuItem>Three</MenuItem>
      </Menu>
    {/snippet}
  </Popper>
</Story>

<!-- Expand the Popper to full width but not the popup -->
<Story name="PopupFullWidthFalse" asChild>
  <Popper {open} fullWidth popupFullWidth={false} onClickOutside={() => (open = false)}>
    <Button onclick={() => (open = true)}>Click to see Popup</Button>

    {#snippet popupChildren()}
      <Menu>
        <MenuItem>One</MenuItem>
        <MenuItem>Two</MenuItem>
        <MenuItem>Three</MenuItem>
      </Menu>
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
        <Menu>
          <MenuItem>{popperLocation?.height}</MenuItem>
          <MenuItem>{popperLocation?.width}</MenuItem>
        </Menu>
      {/if}
    {/snippet}
  </Popper>
</Story>
