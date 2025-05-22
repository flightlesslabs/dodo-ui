<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import DynamicInput, { dynamicInputVariantArray } from './DynamicInput.svelte';
  import type { StoryBookArgTypes } from '$lib/storybook-types.js';
  import { componentSizeArray } from '$lib/types/size.js';
  import { textInputTypeArray } from '$lib/stories/components/Form/TextInput/TextInput.svelte';
  import Icon from '@iconify/svelte';

  export const storyDynamicInputArgTypes: StoryBookArgTypes = {
    type: {
      control: { type: 'select' },
      options: textInputTypeArray,
    },
    variant: {
      control: { type: 'select' },
      options: dynamicInputVariantArray,
    },
    size: {
      control: { type: 'select' },
      options: componentSizeArray,
    },
  };

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    component: DynamicInput,
    tags: ['autodocs'],
    argTypes: storyDynamicInputArgTypes,
    args: { value: 'Hello world!' },
  });
</script>

<Story name="Default" />

<!-- Clickable button type Variant -->
<Story name="VariantButton" args={{ variant: 'button' }} />

<!-- Clickable button type Variant with placeholder -->
<Story
  name="ButtonWithPlaceholder"
  args={{ variant: 'button', placeholder: 'Type Something...', value: '' }}
/>

<Story name="CustomInputContent" asChild>
  <DynamicInput variant="button" value="Hello world!">
    {#snippet customInputContent(value)}
      <div>
        {`${value}`}
        <Icon icon="material-symbols:ads-click" width="24" height="24" style="color: #d21313" />
      </div>
    {/snippet}
  </DynamicInput>
</Story>
