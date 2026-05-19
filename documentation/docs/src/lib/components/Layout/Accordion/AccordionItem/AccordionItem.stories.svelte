<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import type { ArgTypes } from 'storybook/internal/csf';
  import { Theme, UtilityButton } from '@flightlesslabs/dodo-ui';
  import {
    Accordion,
    type AccordionItemProps,
    AccordionItem,
    AccordionTrigger,
  } from '@flightlesslabs/dodo-ui-bits';
  import Icon from '@iconify/svelte';

  // ------------------------------
  // Storybook ArgTypes
  // ------------------------------
  export const storyAccordionItemArgTypes: Partial<ArgTypes<AccordionItemProps>> = {
    // ------------------------------
    // Core
    // ------------------------------
    class: { table: { category: 'API', subcategory: 'Base' } },
    value: {
      control: { type: 'text' },
      table: { category: 'API', subcategory: 'Base' },
    },
    title: {
      control: { type: 'text' },
      table: { category: 'API', subcategory: 'Base' },
    },

    // ------------------------------
    // Slots (Snippets)
    // ------------------------------
    customHeaderContent: { table: { category: 'API', subcategory: 'Slots' } },
  };

  // ------------------------------
  // Storybook Meta
  // ------------------------------
  const { Story } = defineMeta({
    component: AccordionItem,
    tags: ['autodocs'],
    argTypes: storyAccordionItemArgTypes,
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

<Story name="Custom Header">
  <Accordion type="single">
    <AccordionItem>
      {#snippet customHeaderContent()}
        <AccordionTrigger>
          <UtilityButton compact>
            <Icon icon="material-symbols:arrow-drop-down-rounded" width="24" height="24" />
          </UtilityButton>
        </AccordionTrigger>
        Item 2
      {/snippet}
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </AccordionItem>
  </Accordion>
</Story>

<Story name="Light Theme" asChild>
  <Theme type="light">
    <Accordion type="single">
      <AccordionItem title="Item 1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </AccordionItem>
    </Accordion>
  </Theme>
</Story>

<Story name="Dark Theme" asChild globals={{ backgrounds: { value: 'dark' } }}>
  <Theme type="dark">
    <Accordion type="single">
      <AccordionItem title="Item 1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </AccordionItem>
    </Accordion>
  </Theme>
</Story>
