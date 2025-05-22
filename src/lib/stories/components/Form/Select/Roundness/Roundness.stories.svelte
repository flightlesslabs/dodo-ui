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

<Story name="Roundness 1" args={{ options, value }} />

<Story name="Roundness 2" args={{ options, value, roundness: 2 }} />

<Story name="Roundness 3" args={{ options, value, roundness: 3 }} />

<Story name="Roundness 0" args={{ options, value, roundness: 0 }} />
