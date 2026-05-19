<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import type { ArgTypes } from 'storybook/internal/csf';
  import {
    Accordion,
    type AccordionTriggerProps,
    AccordionItem,
    AccordionTrigger,
  } from '@flightlesslabs/dodo-ui-bits';

  // ------------------------------
  // Storybook ArgTypes
  // ------------------------------
  export const storyAccordionTriggerArgTypes: Partial<ArgTypes<AccordionTriggerProps>> = {
    // ------------------------------
    // Core
    // ------------------------------
    class: { table: { category: 'API', subcategory: 'Base' } },
  };

  // ------------------------------
  // Storybook Meta
  // ------------------------------
  const { Story } = defineMeta({
    component: AccordionTrigger,
    tags: ['autodocs'],
    argTypes: storyAccordionTriggerArgTypes,
  });
</script>

<!-- ------------------------------ -->
<!-- Stories -->
<!-- ------------------------------ -->

<Story name="Default" asChild>
  <Accordion type="single">
    <AccordionItem title="Item 1">
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </AccordionItem>
  </Accordion>
</Story>
