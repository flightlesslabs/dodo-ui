<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Checkbox from '../Checkbox.svelte';
  import { storyCheckboxArgTypes } from '../Checkbox.stories.svelte';

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    component: Checkbox,
    tags: ['autodocs'],
    argTypes: storyCheckboxArgTypes,
  });
</script>

<Story name="Primary" />
<Story name="Secondary" args={{ color: 'secondary' }} />
<Story name="Neutral" args={{ color: 'neutral' }} />
<Story name="Safe" args={{ color: 'safe' }} />
<Story name="Warning" args={{ color: 'warning' }} />
<Story name="Danger" args={{ color: 'danger' }} />
