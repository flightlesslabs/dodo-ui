<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Label from './Label.svelte';

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    component: Label,
    tags: ['autodocs'],
  });
</script>

<!-- Label with default style -->
<Story name="Default">This is a form label</Story>
