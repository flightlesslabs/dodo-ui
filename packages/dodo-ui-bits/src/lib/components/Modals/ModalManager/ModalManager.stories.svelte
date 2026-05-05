<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import type { ArgTypes } from 'storybook/internal/csf';
  import type { ModalManagerProps } from './ModalManager.svelte';
  import ModalManager from './ModalManager.svelte';
  import { Button } from '@flightlesslabs/dodo-ui';
  import { modals } from './store/modals.svelte.ts';

  // ------------------------------
  // Storybook ArgTypes
  // ------------------------------
  export const storyModalManagerArgTypes: Partial<ArgTypes<ModalManagerProps>> = {
    // ------------------------------
    // Core
    // ------------------------------
    id: {
      table: { category: 'API', subcategory: 'Base' },
    },
  };

  // ------------------------------
  // Storybook Meta
  // ------------------------------
  const { Story } = defineMeta({
    component: ModalManager,
    tags: ['autodocs'],
    argTypes: storyModalManagerArgTypes,
    parameters: {
      layout: 'fullscreen',
    },
  });
</script>

<!-- ------------------------------ -->
<!-- Stories -->
<!-- ------------------------------ -->

<Story name="Default" asChild>
  <Button
    onclick={() => {
      modals.add('confirm', { description: 'Are you sure' });
    }}
  >
    Add Modal
  </Button>

  <ModalManager />
</Story>
