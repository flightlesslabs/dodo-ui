<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Checkbox from '../Checkbox.svelte';
  import { storyCheckboxArgTypes } from '../Checkbox.stories.svelte';
  import Icon from '@iconify/svelte';

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    component: Checkbox,
    tags: ['autodocs'],
    argTypes: storyCheckboxArgTypes,
  });
</script>

<Story name="Custom Check Icon" asChild>
  <Checkbox checked>
    {#snippet customCheckIcon()}
      <Icon icon="line-md:check-all" width="24" height="24" />
    {/snippet}
  </Checkbox>
</Story>

<Story name="Custom Indeterminate Icon" asChild>
  <Checkbox checked indeterminate>
    {#snippet customIndeterminateIcon()}
      <Icon icon="lsicon:minus-filled" width="24" height="24" />
    {/snippet}
  </Checkbox>
</Story>
