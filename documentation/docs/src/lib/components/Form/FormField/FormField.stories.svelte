<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import type { ArgTypes } from 'storybook/internal/csf';
  import { type FormFieldProps, FormField, TextInput } from '@flightlesslabs/dodo-ui';

  const description = `
 a form control for input tags and more.
 \`\`\`ts
 import { FormField } from '@flightlesslabs/dodo-ui';
 \`\`\`
`;

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

<Story name="Defualt" args={{ label: 'Name:', for: 'name' }}>
  <TextInput placeholder="Type something…" name="name" />
</Story>
