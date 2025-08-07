<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import { storyAccordianArgTypes } from '../Accordian.stories.svelte';
  import Accordian, { type AccordianToggleEvent } from '../Accordian.svelte';

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    component: Accordian,
    tags: ['autodocs'],
    argTypes: storyAccordianArgTypes,
  });

  let open = $state<boolean>(false);
</script>

<Story name="Toggle" asChild>
  <Accordian
    {open}
    ontoggle={(e: AccordianToggleEvent) => {
      open = !open;

      console.log('Input Event', e);
    }}
  >
    {#snippet summary()}
      Click me!
    {/snippet}

    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur nisi hic accusamus,
    mollitia velit corporis, sit culpa nam ducimus quisquam aliquam eos atque doloribus architecto
    at harum, explicabo et doloremque.
  </Accordian>
</Story>
