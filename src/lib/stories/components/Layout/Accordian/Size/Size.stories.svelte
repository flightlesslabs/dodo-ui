<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Accordian from '../Accordian.svelte';
  import { storyAccordianArgTypes } from '../Accordian.stories.svelte';

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    component: Accordian,
    tags: ['autodocs'],
    argTypes: storyAccordianArgTypes,
  });
</script>

<Story name="Normal" asChild>
  <Accordian>
    {#snippet summary()}
      Click me!
    {/snippet}

    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur nisi hic accusamus,
    mollitia velit corporis, sit culpa nam ducimus quisquam aliquam eos atque doloribus architecto
    at harum, explicabo et doloremque.
  </Accordian>
</Story>

<Story name="Small" asChild>
  <Accordian size="small">
    {#snippet summary()}
      Click me!
    {/snippet}

    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur nisi hic accusamus,
    mollitia velit corporis, sit culpa nam ducimus quisquam aliquam eos atque doloribus architecto
    at harum, explicabo et doloremque.
  </Accordian>
</Story>

<Story name="Larger" asChild>
  <Accordian size="large">
    {#snippet summary()}
      Click me!
    {/snippet}

    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur nisi hic accusamus,
    mollitia velit corporis, sit culpa nam ducimus quisquam aliquam eos atque doloribus architecto
    at harum, explicabo et doloremque.
  </Accordian>
</Story>
