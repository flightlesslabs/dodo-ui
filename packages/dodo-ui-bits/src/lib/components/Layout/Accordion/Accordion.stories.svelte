<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import type { ArgTypes } from 'storybook/internal/csf';
  import type { AccordionProps } from './Accordion.svelte';
  import Accordion from './Accordion.svelte';
  import AccordionItem from './AccordionItem/AccordionItem.svelte';
  import AccordionTrigger from './AccordionItem/AccordionTrigger.svelte';
  import { Theme, UtilityButton } from '@flightlesslabs/dodo-ui';
  import Icon from '@iconify/svelte';

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
          <Icon icon="material-symbols:arrow-drop-down-rounded" width="24" height="24" />
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
          <Icon icon="material-symbols:arrow-drop-down-rounded" width="24" height="24" />
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
          <Icon icon="material-symbols:arrow-drop-down-rounded" width="24" height="24" />
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
