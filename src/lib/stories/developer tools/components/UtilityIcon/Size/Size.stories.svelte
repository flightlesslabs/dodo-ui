<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import UtilityIcon from '../UtilityIcon.svelte';
  import { storyUtilityIconArgTypes } from '../UtilityIcon.stories.svelte';
  import Icon from '@iconify/svelte';

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    component: UtilityIcon,
    tags: ['autodocs'],
    argTypes: storyUtilityIconArgTypes,
  });
</script>

<Story name="Normal">
  <Icon icon="mdi:eye" width="24" height="24" />
</Story>

<Story name="Small" args={{ size: 'small' }}>
  <Icon icon="mdi:eye" width="24" height="24" />
</Story>

<Story name="Large" args={{ size: 'large' }}>
  <Icon icon="mdi:eye" width="24" height="24" />
</Story>
