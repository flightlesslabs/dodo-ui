<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Tool from './Tool.svelte';

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    component: Tool,
  });
</script>

<Story name="Main" />
