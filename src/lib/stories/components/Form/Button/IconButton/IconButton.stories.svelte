<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import { fn } from '@storybook/test';
  import Button from '../Button.svelte';
  import { storyButtonArgTypes } from '../Button.stories.svelte';
  import Icon from '@iconify/svelte';

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    component: Button,
    tags: ['autodocs'],
    // @ts-ignore
    argTypes: {
      ...storyButtonArgTypes,
    },
    args: {
      onclick: fn(),
    },
  });
</script>

<!-- Compact button with paddings stripped out and fixed size. We are using this icon library https://iconify.design/docs/icon-components/svelte/ -->
<Story name="Icon Button" args={{ compact: true }}>
  <Button compact><Icon icon="material-symbols:app-badging" width="24" height="24" /></Button>
</Story>

<!-- Button with an icon in front. -->
<Story name="Icon Before">
  <Button>
    {#snippet before()}
      <Icon icon="material-symbols:content-copy" />
    {/snippet}
    Copy
  </Button>
</Story>

<!-- Button with an icon in front. -->
<Story name="Icon After">
  <Button>
    {#snippet after()}
      <Icon icon="material-symbols:download-2" />
    {/snippet}
    Download
  </Button>
</Story>
