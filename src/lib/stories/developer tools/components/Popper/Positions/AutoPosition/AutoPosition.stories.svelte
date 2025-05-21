<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import { Popper } from '$lib/index.js';
  import Button from '$lib/stories/components/Form/Button/Button.svelte';
  import { storyPopperArgTypes } from '../../Popper.stories.svelte';

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

<!-- Positions will auto adjust depending on the space on top and bottom -->
<Story
  name="PositionAutoAdjust"
  args={{ open, onClickOutside: () => (open = false), popupPositionY: 'top' }}
  asChild
>
  <Popper {open} onClickOutside={() => (open = false)} popupPositionY="top">
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

<!-- Positions will not auto adjust if you use `lockPoistions` -->
<Story
  name="LockPoistions"
  args={{
    open,
    onClickOutside: () => (open = false),
    popupPositionY: 'top',
    lockPoistions: true,
  }}
  asChild
>
  <Popper {open} lockPoistions onClickOutside={() => (open = false)} popupPositionY="top">
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

<!-- you can also adjust `popperHeightForVerticalPosition` to achive the same -->
<Story
  name="HeightForVerticalPosition"
  args={{
    open,
    onClickOutside: () => (open = false),
    popupPositionY: 'top',
    popperHeightForVerticalPosition: 3,
  }}
  asChild
>
  <Popper
    {open}
    onClickOutside={() => (open = false)}
    popupPositionY="top"
    popperHeightForVerticalPosition={3}
  >
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
