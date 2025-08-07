<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Accordian from '../Accordian.svelte';
  import { storyAccordianArgTypes } from '../Accordian.stories.svelte';
  import Icon from '@iconify/svelte';

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    component: Accordian,
    tags: ['autodocs'],
    argTypes: storyAccordianArgTypes,
  });

  let open = $state<boolean>(true);
</script>

<Story name="DropdownArrowPositionBefore" asChild>
  <Accordian>
    {#snippet summary()}
      Click me!
    {/snippet}

    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur nisi hic accusamus,
    mollitia velit corporis, sit culpa nam ducimus quisquam aliquam eos atque doloribus architecto
    at harum, explicabo et doloremque.
  </Accordian>
</Story>

<Story name="DropdownArrowPositionAfter" asChild>
  <Accordian dropdownArrowPosition="after">
    {#snippet summary()}
      Click me!
    {/snippet}

    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur nisi hic accusamus,
    mollitia velit corporis, sit culpa nam ducimus quisquam aliquam eos atque doloribus architecto
    at harum, explicabo et doloremque.
  </Accordian>
</Story>

<Story name="HideDropdownArrow" asChild>
  <Accordian dropdownArrowPosition={false}>
    {#snippet summary()}
      Click me!
    {/snippet}

    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur nisi hic accusamus,
    mollitia velit corporis, sit culpa nam ducimus quisquam aliquam eos atque doloribus architecto
    at harum, explicabo et doloremque.
  </Accordian>
</Story>

<!-- Format look and feel Dropdown Arrow icon  -->
<Story name="CustomDropdownArrowIcon" asChild>
  <Accordian {open} ontoggle={() => (open = !open)}>
    {#snippet summary()}
      Click me!
    {/snippet}

    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur nisi hic accusamus,
    mollitia velit corporis, sit culpa nam ducimus quisquam aliquam eos atque doloribus architecto
    at harum, explicabo et doloremque.

    {#snippet customDropdownArrowIcon(open)}
      {#if open}
        <Icon icon="mingcute:up-fill" width="24" height="24" />
      {:else}
        <Icon icon="mingcute:down-fill" width="24" height="24" />
      {/if}
    {/snippet}
  </Accordian>
</Story>
