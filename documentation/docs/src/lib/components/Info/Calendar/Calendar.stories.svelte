<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Calendar from './Calendar.svelte';
  import type { CalendarProps } from './Calendar.svelte';
  import type { ArgTypes } from 'storybook/internal/csf';
  import { componentRoundnessOptions } from '$lib/attributes/roundness.js';
  import { CalendarDate, type DateValue } from '@internationalized/date';
  import Theme from '$lib/components/Layout/Theme/Theme.svelte';
  import { componentVariantOptions } from '$lib/attributes/variant.js';
  import { cardColorOptions } from '$lib/components/Layout/Card/Card.svelte';
  import { componentThemeColorsOptions } from '$lib/attributes/theme.js';
  import { ComponentShadowOptions } from '$lib/attributes/shadow.js';

  const description = `
 a plug and play Calendar component based on bits-ui [calendar](https://bits-ui.com/docs/components/calendar).

 \`\`\`ts
 import { Calendar } from '@flightlesslabs/dodo-ui';
 \`\`\`
`;

  // ------------------------------
  // Storybook ArgTypes
  // ------------------------------
  export const storyCalendarArgTypes: Partial<ArgTypes<CalendarProps>> = {
    // ------------------------------
    // Core
    // ------------------------------
    class: { table: { category: 'API', subcategory: 'Base' } },
    value: {
      control: { type: 'text' },
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
    shadow: {
      control: { type: 'select' },
      options: ComponentShadowOptions,
      description: 'Component Shadow',
      table: { category: 'API', subcategory: 'Appearance', defaultValue: { summary: '1' } },
    },
    color: {
      control: { type: 'select' },
      options: cardColorOptions,
      description: 'Color theme token',
      table: { category: 'API', subcategory: 'Appearance', defaultValue: { summary: 'default' } },
    },
    variant: {
      control: { type: 'select' },
      options: componentVariantOptions,
      description: 'Visual variant of the card',
      table: { category: 'API', subcategory: 'Appearance', defaultValue: { summary: 'text' } },
    },
    roundness: {
      control: { type: 'select' },
      options: componentRoundnessOptions,
      description: 'Border radius token',
      table: { category: 'API', subcategory: 'Appearance' },
    },
    outline: {
      control: { type: 'boolean' },
      description: 'Render outlined style',
      table: { category: 'API', subcategory: 'Appearance' },
    },
    active: {
      control: { type: 'boolean' },
      description: 'Add mouse hover and active effects',
      table: { category: 'API', subcategory: 'Appearance' },
    },
    theme: {
      control: { type: 'select' },
      options: componentThemeColorsOptions,
      description: 'Theme color',
      table: { category: 'API', subcategory: 'Base', defaultValue: { summary: 'undefined' } },
    },
  };

  // ------------------------------
  // Storybook Meta
  // ------------------------------
  const { Story } = defineMeta({
    component: Calendar,
    tags: ['autodocs'],
    argTypes: storyCalendarArgTypes,
    parameters: {
      docs: {
        description: {
          component: description,
        },
      },
    },
  });

  let myValue = $state<DateValue>(new CalendarDate(2026, 4, 7));
</script>

<!-- ------------------------------ -->
<!-- Stories -->
<!-- ------------------------------ -->

<Story name="Default" />

<Story name="Controlled" asChild>
  <Calendar bind:value={myValue} />
</Story>

<Story name="Starts On Sunday" args={{ weekStartsOn: 0 }} />

<Story name="Min Date" args={{ minValue: new CalendarDate(2026, 4, 7) }} />

<Story name="Max Date" args={{ maxValue: new CalendarDate(2026, 4, 7) }} />

<Story name="Light Theme" asChild>
  <Theme type="light">
    <Calendar />
  </Theme>
</Story>

<Story name="Dark Theme" asChild globals={{ backgrounds: { value: 'dark' } }}>
  <Theme type="dark">
    <Calendar />
  </Theme>
</Story>
