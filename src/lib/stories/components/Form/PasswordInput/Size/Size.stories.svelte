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

<Story name="Normal" />
<Story name="Small" args={{ size: 'small' }} />
<Story name="Large" args={{ size: 'large' }} />
