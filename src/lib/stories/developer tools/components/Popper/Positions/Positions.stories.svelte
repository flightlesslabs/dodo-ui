<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import { Popper } from '$lib/index.js';
  import Button from '$lib/stories/components/Form/Button/Button.svelte';
  import { storyPopperArgTypes } from '../Popper.stories.svelte';

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    component: Popper,
    tags: ['autodocs'],
    argTypes: storyPopperArgTypes,
  });

  let open = $state(false);
</script>

<Story name="BottomLeft" args={{ open, onClickOutside: () => (open = false) }} asChild>
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

<Story
  name="TopLeft"
  args={{ open, onClickOutside: () => (open = false), popupPositionY: 'top' }}
  asChild
>
  <Popper {open} popupPositionY="top" onClickOutside={() => (open = false)}>
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

<Story
  name="BottomRight"
  args={{ open, onClickOutside: () => (open = false), popupPositionX: 'right' }}
  asChild
>
  <Popper {open} popupPositionX="right" onClickOutside={() => (open = false)}>
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

<Story
  name="TopRight"
  args={{
    open,
    onClickOutside: () => (open = false),
    popupPositionY: 'top',
    popupPositionX: 'right',
  }}
  asChild
>
  <Popper {open} popupPositionY="top" popupPositionX="right" onClickOutside={() => (open = false)}>
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
