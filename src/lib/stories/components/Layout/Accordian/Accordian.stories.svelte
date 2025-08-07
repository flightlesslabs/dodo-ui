<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Accordian from './Accordian.svelte';
  import type { StoryBookArgTypes } from '$lib/storybook-types.js';
  import { componentSizeArray } from '$lib/types/size.js';

  export const storyAccordianArgTypes: StoryBookArgTypes = {
    size: {
      control: { type: 'select' },
      options: componentSizeArray,
    },
  };

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    component: Accordian,
    tags: ['autodocs'],
    argTypes: storyAccordianArgTypes,
  });
</script>

<Story name="Default" asChild>
  <Accordian>
    {#snippet summary()}
      Click me!
    {/snippet}

    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur nisi hic accusamus,
    mollitia velit corporis, sit culpa nam ducimus quisquam aliquam eos atque doloribus architecto
    at harum, explicabo et doloremque.
  </Accordian>
</Story>

<Story name="Open by Default" asChild>
  <Accordian defaultOpen={true}>
    {#snippet summary()}
      Click me!
    {/snippet}

    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur nisi hic accusamus,
    mollitia velit corporis, sit culpa nam ducimus quisquam aliquam eos atque doloribus architecto
    at harum, explicabo et doloremque.
  </Accordian>
</Story>

<Story name="Full Width Summary" asChild>
  <Accordian fullWidthSummary>
    {#snippet summary()}
      Click me!
    {/snippet}

    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur nisi hic accusamus,
    mollitia velit corporis, sit culpa nam ducimus quisquam aliquam eos atque doloribus architecto
    at harum, explicabo et doloremque.
  </Accordian>
</Story>
