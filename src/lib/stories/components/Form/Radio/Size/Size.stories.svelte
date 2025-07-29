<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Radio from '../Radio.svelte';
  import { storyRadioArgTypes } from '../Radio.stories.svelte';

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    component: Radio,
    tags: ['autodocs'],
    argTypes: storyRadioArgTypes,
  });
</script>

<Story name="Normal" />
<Story name="Small" args={{ size: 'small' }} />
<Story name="Large" args={{ size: 'large' }} />
