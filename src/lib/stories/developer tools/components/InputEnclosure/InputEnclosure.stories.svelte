<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import InputEnclosure from './InputEnclosure.svelte';
  import type { StoryBookArgTypes } from '$lib/storybook-types.js';
  import { componentRoundnessArray } from '$lib/types/roundness.js';
  import { componentSizeArray } from '$lib/types/size.js';

  export const storyInputEnclosureArgTypes: StoryBookArgTypes = {
    roundness: {
      control: { type: 'select' },
      options: componentRoundnessArray,
    },
    size: {
      control: { type: 'select' },
      options: componentSizeArray,
    },
  };

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    component: InputEnclosure,
    tags: ['autodocs'],
    argTypes: storyInputEnclosureArgTypes,
  });
</script>

<!-- An ensloure for Form Inputs [TextInput](?path=/docs/components-form-textinput--docs) -->
<Story name="Default" />

<Story name="Focused" args={{ focused: true }} />

<Story name="Error" args={{ error: true }} />

<Story name="Disabled" args={{ disabled: true }} />

<Story name="Input example">
  <input type="text" style="flex: 1; border: 0;" placeholder="Enter name" />
</Story>
