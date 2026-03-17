<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import FormField from './FormField.svelte';
  import type { FormFieldProps } from './FormField.svelte';
  import type { ArgTypes } from 'storybook/internal/csf';
  import TextInput from '../TextInput/TextInput.svelte';

  /**
   * Storybook controls for FormField
   */
  export const FormFieldArgTypes: Partial<ArgTypes<FormFieldProps>> = {
    class: { table: { category: 'API', subcategory: 'Base' } },
    label: {
      table: { category: 'API', subcategory: 'Base' },
    },
    for: {
      table: { category: 'API', subcategory: 'Base' },
    },
  };

  const { Story } = defineMeta({
    component: FormField,
    tags: ['autodocs'],
    argTypes: FormFieldArgTypes,
  });
</script>

<!-- ------------------------------ -->
<!-- Stories -->
<!-- ------------------------------ -->

<Story name="Basic" args={{ label: 'Name:', for: 'name' }}>
  <TextInput placeholder="Type something…" name="name" />
</Story>

<Story name="CustomLabel" asChild>
  <FormField for="name2">
    {#snippet label()}
      Custom Label
    {/snippet}
    <TextInput placeholder="Type something…" name="name2" />
  </FormField>
</Story>
