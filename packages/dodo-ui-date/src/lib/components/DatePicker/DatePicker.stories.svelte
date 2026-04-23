<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import type { ArgTypes } from 'storybook/internal/csf';
  import { CalendarDate, type DateValue } from '@internationalized/date';
  import { componentSizeOptions, componentRoundnessOptions, Theme } from '@flightlesslabs/dodo-ui';
  import type { DatePickerProps } from './DatePicker.svelte';
  import DatePicker from './DatePicker.svelte';

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
    clearable: {
      control: { type: 'boolean' },
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
    customTriggerIcon: {
      table: { category: 'API', subcategory: 'Slots' },
    },
  };

  // ------------------------------
  // Storybook Meta
  // ------------------------------
  const { Story } = defineMeta({
    component: DatePicker,
    tags: ['autodocs'],
    argTypes: storyDatePickerArgTypes,
  });

  let myValue = $state<DateValue>(new CalendarDate(2026, 4, 7));
  let myValue2 = $state<DateValue>(new CalendarDate(2026, 12, 1));
</script>

<!-- ------------------------------ -->
<!-- Stories -->
<!-- ------------------------------ -->

<Story name="Default" />

<Story name="Controlled" asChild>
  <DatePicker bind:value={myValue} />
</Story>

<Story name="Clearable" args={{ clearable: true, value: myValue2 }} />

<Story name="Starts On Sunday" args={{ weekStartsOn: 0 }} />

<Story name="Date Format" args={{ dateFormat: 'mm/dd/yyyy' }} />

<Story name="Min Date" args={{ minValue: new CalendarDate(2026, 4, 7) }} />

<Story name="Max Date" args={{ maxValue: new CalendarDate(2026, 4, 7) }} />

<Story
  name="Trigger Placement Before"
  args={{ triggerPlacement: 'before', popupProps: { align: 'start' } }}
/>

<Story name="No Trigger Button" args={{ showTriggerButton: false }} />

<Story name="Custom Trigger Icon" asChild>
  <DatePicker>
    {#snippet customTriggerIcon()}
      🗓️
    {/snippet}
  </DatePicker>
</Story>

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
