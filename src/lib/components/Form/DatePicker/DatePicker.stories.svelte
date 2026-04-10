<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import DatePicker from './DatePicker.svelte';
  import type { DatePickerProps } from './DatePicker.svelte';
  import type { ArgTypes } from 'storybook/internal/csf';

  import { componentSizeOptions } from '$lib/attributes/size.js';
  import { componentRoundnessOptions } from '$lib/attributes/roundness.js';
  import { CalendarDate, type DateValue } from '@internationalized/date';
  import Theme from '$lib/components/Layout/Theme/Theme.svelte';

  const description = `
 A sleek, plug and play Date Picker based on bits-ui [date-picker](https://bits-ui.com/docs/components/date-picker).
 \`\`\`ts
 import { DatePicker } from '@flightlesslabs/dodo-ui';

import { CalendarDate, type DateValue } from '@internationalized/date';
 \`\`\`
`;

  // ------------------------------
  // Storybook ArgTypes
  // ------------------------------
  export const storyDatePickerArgTypes: Partial<ArgTypes<DatePickerProps>> = {
    // ------------------------------
    // Core
    // ------------------------------
    class: { table: { category: 'API', subcategory: 'Base' } },
    value: {
      control: { type: 'text' },
      table: { category: 'API', subcategory: 'Base' },
    },
    dateFormat: {
      control: { type: 'text' },
      table: { category: 'API', subcategory: 'Base', defaultValue: { summary: 'dd/mm/yyyy' } },
    },

    // ------------------------------
    // State
    // ------------------------------
    disabled: {
      control: { type: 'boolean' },
      description: 'Disabled state of the input',
      table: { category: 'API', subcategory: 'State', defaultValue: { summary: 'false' } },
    },
    focused: {
      control: { type: 'boolean' },
      description: 'Force focused visual state',
      table: { category: 'API', subcategory: 'State', defaultValue: { summary: 'false' } },
    },
    error: {
      control: { type: 'boolean' },
      description: 'Error visual state',
      table: { category: 'API', subcategory: 'State', defaultValue: { summary: 'false' } },
    },

    // ------------------------------
    // Appearance
    // ------------------------------
    size: {
      control: { type: 'select' },
      options: componentSizeOptions,
      description: 'Visual size token',
      table: { category: 'API', subcategory: 'Appearance', defaultValue: { summary: 'normal' } },
    },
    roundness: {
      control: { type: 'select' },
      options: componentRoundnessOptions,
      description: 'Border radius token',
      table: { category: 'API', subcategory: 'Appearance', defaultValue: { summary: '1' } },
    },
    outline: {
      control: { type: 'boolean' },
      description: 'Render outlined enclosure',
      table: { category: 'API', subcategory: 'Appearance', defaultValue: { summary: 'true' } },
    },

    // ------------------------------
    // Slots (Snippets)
    // ------------------------------
    before: {
      table: { category: 'API', subcategory: 'Slots' },
      description: 'Content rendered before the input',
    },
    after: {
      table: { category: 'API', subcategory: 'Slots' },
      description: 'Content rendered after the input',
    },
  };

  // ------------------------------
  // Storybook Meta
  // ------------------------------
  const { Story } = defineMeta({
    component: DatePicker,
    tags: ['autodocs'],
    argTypes: storyDatePickerArgTypes,
    parameters: {
      docs: {
        description: {
          component: description,
        },
        story: { height: '420px' },
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
  <DatePicker bind:value={myValue} />
</Story>

<Story name="Starts On Sunday" args={{ weekStartsOn: 0 }} />

<Story name="Date Format" args={{ dateFormat: 'mm/dd/yyyy' }} />

<Story name="Min Date" args={{ minValue: new CalendarDate(2026, 4, 7) }} />

<Story name="Max Date" args={{ maxValue: new CalendarDate(2026, 4, 7) }} />

<Story name="Light Theme" asChild>
  <Theme type="light">
    <DatePicker />
  </Theme>
</Story>

<Story name="Dark Theme" asChild globals={{ backgrounds: { value: 'dark' } }}>
  <Theme type="dark">
    <DatePicker />
  </Theme>
</Story>
