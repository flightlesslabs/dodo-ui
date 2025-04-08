<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import TextInput from '../TextInput.svelte';
  import { storyTextInputArgTypes } from '../TextInput.stories.svelte';

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    component: TextInput,
    tags: ['autodocs'],
    argTypes: storyTextInputArgTypes,
    args: { value: 'Hello world!' },
  });
</script>

<Story name="Roundness 1x" />

<Story name="Roundness 2x" args={{ roundness: '2x' }} />

<Story name="Roundness 3x" args={{ roundness: '3x' }} />

<Story name="Roundness False" args={{ roundness: false }} />
