<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import UtilityIcon from './UtilityIcon.svelte';
  import type { StoryBookArgTypes } from '$lib/storybook-types.js';
  import Icon from '@iconify/svelte';
  import { componentSizeArray } from '$lib/types/size.js';

  export const storyUtilityIconArgTypes: StoryBookArgTypes = {
    size: {
      control: { type: 'select' },
      options: componentSizeArray,
    },
  };

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    component: UtilityIcon,
    tags: ['autodocs'],
    argTypes: storyUtilityIconArgTypes,
  });
</script>

<!-- Button with default style -->
<Story name="Default">
  <Icon icon="mdi:eye" width="24" height="24" />
</Story>

<Story name="Disabled" args={{ disabled: true }}>
  <Icon icon="mdi:eye" width="24" height="24" />
</Story>
