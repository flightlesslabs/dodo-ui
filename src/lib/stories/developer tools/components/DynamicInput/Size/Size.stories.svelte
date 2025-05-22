<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import DynamicInput from '../DynamicInput.svelte';
  import { storyDynamicInputArgTypes } from '../DynamicInput.stories.svelte';

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    component: DynamicInput,
    tags: ['autodocs'],
    argTypes: storyDynamicInputArgTypes,
    args: { value: 'Hello world!' },
  });
</script>

<Story name="Normal" />
<Story name="Small" args={{ size: 'small' }} />
<Story name="Large" args={{ size: 'large' }} />
