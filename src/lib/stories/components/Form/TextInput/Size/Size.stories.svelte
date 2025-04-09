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

<Story name="Normal" />
<Story name="Small" args={{ size: 'small' }} />
<Story name="Large" args={{ size: 'large' }} />
