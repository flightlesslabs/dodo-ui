<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import AdvancedInput from '../AdvancedInput.svelte';
  import { storyAdvancedInputArgTypes } from '../AdvancedInput.stories.svelte';

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    component: AdvancedInput,
    tags: ['autodocs'],
    argTypes: storyAdvancedInputArgTypes,
    args: { value: 'Hello world!' },
  });
</script>

<Story name="Normal" />
<Story name="Small" args={{ size: 'small' }} />
<Story name="Large" args={{ size: 'large' }} />
