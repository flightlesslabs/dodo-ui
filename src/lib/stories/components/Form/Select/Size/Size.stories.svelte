<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Select, { type SelectOption } from '../Select.svelte';
  import { selectOptions, storySelectArgTypes } from '../Select.stories.svelte';

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    component: Select,
    tags: ['autodocs'],
    argTypes: storySelectArgTypes,
    parameters: {
      docs: {
        story: {
          height: '400px',
          inline: false,
        },
      },
    },
  });

  const options = selectOptions;

  let value = $state<SelectOption>(options[0]);
</script>

<Story name="Normal" args={{ options, value }} />
<Story name="Small" args={{ options, value, size: 'small' }} />
<Story name="Large" args={{ options, value, size: 'large' }} />
