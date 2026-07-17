<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import type { ArgTypes } from 'storybook/internal/csf';
  import type { AccordionProps } from './Accordion.svelte';
  import Accordion from './Accordion.svelte';
  import AccordionItem from './AccordionItem/AccordionItem.svelte';
  import AccordionTrigger from './AccordionItem/AccordionTrigger.svelte';
  import { Theme, UtilityButton } from '@flightlesslabs/dodo-ui';

  const description = `
 A simple, stylable accordion component based on bits-ui [accordion](https://bits-ui.com/docs/components/accordion).

## 🚀 Installation

   \`\`\`bash
  pnpm add bits-ui @flightlesslabs/dodo-ui-bits
   \`\`\`

 For full setup (styles, themes, configuration), see the [Getting Started](https://github.com/flightlesslabs/dodo-ui/tree/main/packages/dodo-ui-bits) guide.

## ✨ Usage

 \`\`\`ts
 import { Accordion } from '@flightlesslabs/dodo-ui-bits';

 <Accordion />
 \`\`\`
`;

  // ------------------------------
  // Storybook ArgTypes
  // ------------------------------
  export const storyAccordionArgTypes: Partial<ArgTypes<AccordionProps>> = {
    // ------------------------------
    // Core
    // ------------------------------
    class: { table: { category: 'API', subcategory: 'Base' } },
    value: {
      control: { type: 'text' },
      table: { category: 'API', subcategory: 'Base' },
    },
    type: {
      control: { type: 'text' },
      description: `The type of the component, used to determine the type of the value, when 'multiple' the value will be an array.`,
      table: { category: 'API', subcategory: 'Base' },
    },

    // ------------------------------
    // State
    // ------------------------------
    disabled: {
      control: { type: 'boolean' },
      description: 'Disabled state of the input',
      table: { category: 'API', subcategory: 'State', defaultValue: { summary: 'false' } },
    },

    // ------------------------------
    // Appearance
    // ------------------------------
    accordionContentProps: { table: { category: 'API', subcategory: 'Appearance' } },
  };

  // ------------------------------
  // Storybook Meta
  // ------------------------------
  const { Story } = defineMeta({
    component: Accordion,
    tags: ['autodocs'],
    argTypes: storyAccordionArgTypes,
    parameters: {
      docs: {
        description: {
          component: description,
        },
      },
    },
  });
</script>

<!-- ------------------------------ -->
<!-- Stories -->
<!-- ------------------------------ -->

<Story name="Default" args={{ type: 'single' }}>
  <AccordionItem title="Item 1">
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
  </AccordionItem>

  <AccordionItem title="Item 2">
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
  </AccordionItem>

  <AccordionItem title="Item 3">
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
  </AccordionItem>
</Story>

<Story name="Multiple" args={{ type: 'multiple' }}>
  <AccordionItem title="Item 1">
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
  </AccordionItem>

  <AccordionItem title="Item 2">
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
  </AccordionItem>

  <AccordionItem title="Item 3">
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
  </AccordionItem>
</Story>

<Story name="Custom Header" args={{ type: 'single' }}>
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
      Item 1
    {/snippet}
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
  </AccordionItem>

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
      Item 3
    {/snippet}
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
  </AccordionItem>
</Story>

<Story name="Disabled" args={{ type: 'single', disabled: true }}>
  <AccordionItem title="Item 1">
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
  </AccordionItem>
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
