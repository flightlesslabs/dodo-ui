<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import type { ArgTypes } from 'storybook/internal/csf';
  import {
    Button,
    componentAlignmentXOptions,
    componentAlignmentYOptions,
    ComponentShadowOptions,
    componentVariantOptions,
  } from '@flightlesslabs/dodo-ui';
  import {
    Toast,
    ToastManager,
    type ToastManagerProps,
    toasts,
  } from '@flightlesslabs/dodo-ui-bits';

  // ------------------------------
  // Storybook ArgTypes
  // ------------------------------
  export const storyToastManagerArgTypes: Partial<ArgTypes<ToastManagerProps>> = {
    // ------------------------------
    // Core
    // ------------------------------
    id: {
      table: { category: 'API', subcategory: 'Base' },
    },
    limit: {
      table: { category: 'API', subcategory: 'Base' },
    },
    clearAfterDuration: {
      table: { category: 'API', subcategory: 'Base' },
    },
    class: { table: { category: 'API', subcategory: 'Base' } },

    // ------------------------------
    // Appearance
    // ------------------------------
    alignmentX: {
      control: { type: 'select' },
      options: componentAlignmentXOptions,
      table: { category: 'API', subcategory: 'Appearance', defaultValue: { summary: 'end' } },
    },
    alignmentY: {
      control: { type: 'select' },
      options: componentAlignmentYOptions,
      table: { category: 'API', subcategory: 'Appearance', defaultValue: { summary: 'top' } },
    },
    shadow: {
      control: { type: 'select' },
      options: ComponentShadowOptions,
      table: { category: 'API', subcategory: 'Appearance', defaultValue: { summary: '3' } },
    },
    variant: {
      control: { type: 'select' },
      options: componentVariantOptions,
      table: { category: 'API', subcategory: 'Appearance' },
    },
    outline: {
      control: { type: 'boolean' },
      description: 'Render outlined style',
      table: { category: 'API', subcategory: 'Appearance' },
    },
    'max-width': {
      control: { type: 'boolean' },
      table: { category: 'API', subcategory: 'Appearance' },
    },
    'min-width': {
      control: { type: 'boolean' },
      table: { category: 'API', subcategory: 'Appearance' },
    },

    // ------------------------------
    // Slots (Snippets)
    // ------------------------------

    customToast: { table: { category: 'API', subcategory: 'Slots' } },
  };

  // ------------------------------
  // Storybook Meta
  // ------------------------------
  const { Story } = defineMeta({
    component: ToastManager,
    tags: ['autodocs'],
    argTypes: storyToastManagerArgTypes,
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
      toasts.add({
        title: 'Toast',
        description: 'This is a basic toast.',
        color: 'danger',
      });
    }}
  >
    Add Toast
  </Button>

  <ToastManager />
</Story>

<Story name="Auto Clear" asChild>
  <Button
    onclick={() => {
      toasts.add({
        title: 'Toast',
        description: 'This is a basic toast.',
        color: 'safe',
        toastManagerId: 'toasts-2',
        variant: 'solid',
      });
    }}
  >
    Add Toast
  </Button>

  <ToastManager id="toasts-2" alignmentX="start" clearAfterDuration={2000} />
</Story>

<Story name="Custom Toast Styles" asChild>
  <Button
    onclick={() => {
      toasts.add({
        title: 'Toast',
        description: 'This is a custom styled toast.',
        toastManagerId: 'toasts-3',
        color: 'safe',
      });
    }}
  >
    Add Toast
  </Button>

  <ToastManager id="toasts-3">
    {#snippet customToast({ toastCardProps, description, ...restProps })}
      <Toast {...restProps} {...toastCardProps}>
        <b>Description:</b>
        {description}
      </Toast>
    {/snippet}
  </ToastManager>
</Story>
