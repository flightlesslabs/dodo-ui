<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import type { ArgTypes } from 'storybook/internal/csf';
  import { Button } from '@flightlesslabs/dodo-ui';
  import {
    ConfirmDialogCard,
    InformDialogCard,
    ModalCard,
    ModalManager,
    type ModalManagerProps,
    modals,
  } from '@flightlesslabs/dodo-ui-bits';

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
      modals.add('confirm', { title: 'Confirm', description: 'This is a basic confirm.' });
    }}
  >
    Add Modal
  </Button>

  <ModalManager />
</Story>

<Story name="Modal master with custom ID" asChild>
  <Button
    onclick={() => {
      modals.add('inform', {
        title: 'Inform',
        description: 'This is a basic inform.',
        modalManagerId: 'modal-master-2',
      });
    }}
  >
    Add Modal
  </Button>

  <ModalManager id="modal-master-2" />
</Story>

<Story name="Custom Modal Styles" asChild>
  <Button
    onclick={() => {
      modals.add('modal', {
        title: 'Hi There',
        description: 'This is a basic Modal.',
        modalManagerId: 'modal-master-3',
      });
    }}
    color="secondary"
  >
    Add Modal
  </Button>

  <Button
    onclick={() => {
      modals.add('inform', {
        title: 'Inform',
        description: 'This is a basic Inform.',
        modalManagerId: 'modal-master-3',
      });
    }}
    color="safe"
  >
    Add Inform
  </Button>

  <Button
    onclick={() => {
      modals.add('confirm', {
        title: 'Confirm',
        description: 'This is a basic Confirm.',
        modalManagerId: 'modal-master-3',
      });
    }}
    color="warning"
  >
    Add Confirm
  </Button>

  <ModalManager id="modal-master-3">
    {#snippet customCardModal({ description, modalProps, ...restProps })}
      <ModalCard {...restProps} {...modalProps} {...modalProps?.modalCardProps}>
        <b>Description:</b>
        {description}
      </ModalCard>
    {/snippet}

    {#snippet customCardInform({ description, modalProps, ...restProps })}
      <InformDialogCard {...restProps} {...modalProps} {...modalProps?.modalCardProps}>
        <b>Description:</b>
        {description}
      </InformDialogCard>
    {/snippet}

    {#snippet customCardConfirm({ description, modalProps, ...restProps })}
      <ConfirmDialogCard {...restProps} {...modalProps} {...modalProps?.modalCardProps}>
        <b>Description:</b>
        {description}
      </ConfirmDialogCard>
    {/snippet}
  </ModalManager>
</Story>
