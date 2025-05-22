<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import { Menu, MenuItem, Popper } from '$lib/index.js';
  import Button from '$lib/stories/components/Form/Button/Button.svelte';
  import { storyPopperArgTypes } from '../Popper.stories.svelte';

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    component: Popper,
    tags: ['autodocs'],
    argTypes: storyPopperArgTypes,
    parameters: {
      layout: 'centered',
      docs: {
        story: {
          height: '400px',
          inline: false,
        },
      },
    },
  });

  let open = $state(false);
</script>

<Story name="BottomLeft" asChild>
  <Popper {open} onClickOutside={() => (open = false)} popupWidth="100px">
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

<Story name="BottomCenter" asChild>
  <Popper {open} popupPositionX="center" onClickOutside={() => (open = false)} popupWidth="100px">
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

<Story name="BottomRight" asChild>
  <Popper {open} popupPositionX="right" onClickOutside={() => (open = false)} popupWidth="100px">
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

<Story name="TopLeft" asChild>
  <Popper {open} popupPositionY="top" onClickOutside={() => (open = false)} popupWidth="100px">
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

<Story name="TopCenter" asChild>
  <Popper
    {open}
    popupPositionY="top"
    popupPositionX="center"
    onClickOutside={() => (open = false)}
    popupWidth="100px"
  >
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

<Story name="TopRight" asChild>
  <Popper
    {open}
    popupPositionY="top"
    popupPositionX="right"
    onClickOutside={() => (open = false)}
    popupWidth="100px"
  >
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
