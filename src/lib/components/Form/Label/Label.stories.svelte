<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Label from './Label.svelte';
  import type { LabelProps } from './Label.svelte';
  import type { ArgTypes } from 'storybook/internal/csf';
  import TextInput from '../TextInput/TextInput.svelte';

  /**
   * Storybook controls for Label
   */
  export const LabelArgTypes: Partial<ArgTypes<LabelProps>> = {
    class: { table: { category: 'API', subcategory: 'Base' } },
  };

  const { Story } = defineMeta({
    component: Label,
    tags: ['autodocs'],
    argTypes: LabelArgTypes,
  });
</script>

<!-- ------------------------------ -->
<!-- Stories -->
<!-- ------------------------------ -->

<Story name="Default">Default Label</Story>

<Story name="WithTextInput" asChild>
  <Label for="search">Search:</Label>
  <TextInput placeholder="Search…" name="search" />
</Story>
