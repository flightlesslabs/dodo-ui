<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import { fn } from '@storybook/test';
  import UtilityButton from '../UtilityButton.svelte';
  import { storyUtilityButtonArgTypes } from '../UtilityButton.stories.svelte';
  import Icon from '@iconify/svelte';

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    component: UtilityButton,
    tags: ['autodocs'],
    argTypes: storyUtilityButtonArgTypes,
    args: {
      onclick: fn(),
    },
  });
</script>

<Story name="Normal" args={{ disabled: false }}>
  <UtilityButton><Icon icon="mdi:eye" width="24" height="24" /></UtilityButton>
</Story>
<Story name="Small" args={{ size: 'small' }}>
  <UtilityButton size="small"><Icon icon="mdi:eye" width="22" height="22" /></UtilityButton>
</Story>
<Story name="Large" args={{ size: 'large' }}>
  <UtilityButton size="large"><Icon icon="mdi:eye" width="28" height="28" /></UtilityButton>
</Story>
