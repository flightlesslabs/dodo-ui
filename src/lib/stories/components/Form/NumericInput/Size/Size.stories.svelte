<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import NumericInput from '../NumericInput.svelte';
  import { storyNumericInputArgTypes } from '../NumericInput.stories.svelte';

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    component: NumericInput,
    tags: ['autodocs'],
    argTypes: storyNumericInputArgTypes,
  });
</script>

<Story name="Normal" />
<Story name="Small" args={{ size: 'small' }} />
<Story name="Large" args={{ size: 'large' }} />
