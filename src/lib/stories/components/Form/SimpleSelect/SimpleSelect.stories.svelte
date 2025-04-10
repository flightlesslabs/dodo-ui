<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import { type SimpleSelectOption } from './SimpleSelect.svelte';
  import type { StoryBookArgTypes } from '$lib/storybook-types.js';
  import SimpleSelect from './SimpleSelect.svelte';

  export const storySimpleSelectArgTypes: StoryBookArgTypes = {
    type: {
      control: { type: 'select' },
      options: ['text', 'tel', 'email', 'password', 'url', 'number'],
    },
    roundness: {
      control: { type: 'select' },
      options: [false, '1x', '2x', '3x'],
    },
    size: {
      control: { type: 'select' },
      options: ['normal', 'small', 'large'],
    },
  };

  export const storySimpleSelectOptions: SimpleSelectOption[] = [
    {
      value: 'volvo',
      label: 'Volvo',
    },
    {
      value: 'saab',
      label: 'Saab',
    },
    {
      value: 'mercedes',
      label: 'Mercedes',
    },
    {
      value: 'audi',
      label: 'Audi',
    },
    {
      value: 'opel',
      label: 'Opel',
      disabled: true,
    },
  ];

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    component: SimpleSelect,
    tags: ['autodocs'],
    argTypes: storySimpleSelectArgTypes,
    args: { options: storySimpleSelectOptions },
  });
</script>

<!-- SimpleSelect with default style -->
<Story name="Default" />

<Story name="Placeholder" args={{ value: '', placeholder: 'Type something...' }} />

<Story name="No Outline" args={{ outline: false }} />

<Story name="Error" args={{ error: true }} />

<Story name="Disabled" args={{ disabled: true }} />
