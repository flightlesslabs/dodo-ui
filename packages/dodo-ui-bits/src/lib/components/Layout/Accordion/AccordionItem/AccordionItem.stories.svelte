<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import type { ArgTypes } from 'storybook/internal/csf';
  import type { AccordionItemProps } from './AccordionItem.svelte';
  import AccordionItem from './AccordionItem.svelte';
  import AccordionTrigger from './AccordionTrigger.svelte';
  import Accordion from '../Accordion.svelte';
  import { Theme, UtilityButton } from '@flightlesslabs/dodo-ui';

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
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
              <path d="M0 0h24v24H0z" fill="none" />
              <path
                fill="currentColor"
                d="M11.475 14.475L7.85 10.85q-.075-.075-.112-.162T7.7 10.5q0-.2.138-.35T8.2 10h7.6q.225 0 .363.15t.137.35q0 .05-.15.35l-3.625 3.625q-.125.125-.25.175T12 14.7t-.275-.05t-.25-.175"
              />
            </svg>
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
