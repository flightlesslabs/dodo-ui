<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Search from './Search.svelte';
  import type { StoryBookArgTypes } from '$lib/storybook-types.js';
  import { componentRoundnessArray } from '$lib/types/roundness.js';
  import { componentSizeArray } from '$lib/types/size.js';

  export const storySearchArgTypes: StoryBookArgTypes = {
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
    component: Search,
    tags: ['autodocs'],
    argTypes: storySearchArgTypes,
    args: { value: 'Hello world!' },
  });

  let value = $state('Something');
</script>

<!-- Search with default style -->
<Story name="Default" />

<Story name="Clearable" asChild>
  <Search bind:value onclear={() => (value = '')} />
</Story>

<Story name="Placeholder" args={{ value: '', placeholder: 'Type something...' }} />

<Story name="No Outline" args={{ outline: false }} />

<Story name="Error" args={{ error: true }} />

<Story name="Disabled" args={{ disabled: true }} />

<Story name="Read only" args={{ readonly: true }} />
