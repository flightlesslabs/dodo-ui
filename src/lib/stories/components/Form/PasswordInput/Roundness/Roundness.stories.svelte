<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import PasswordInput from '../PasswordInput.svelte';
  import { storyPasswordInputArgTypes } from '../PasswordInput.stories.svelte';

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    component: PasswordInput,
    tags: ['autodocs'],
    argTypes: storyPasswordInputArgTypes,
  });
</script>

<Story name="Roundness 1x" />

<Story name="Roundness 2x" args={{ roundness: '2x' }} />

<Story name="Roundness 3x" args={{ roundness: '3x' }} />

<Story name="Roundness False" args={{ roundness: false }} />
