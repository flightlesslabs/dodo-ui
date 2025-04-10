<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import PasswordInput from '../PasswordInput.svelte';
  import { storyPasswordInputArgTypes } from '../PasswordInput.stories.svelte';
  import Icon from '@iconify/svelte';
  import UtilityButton from '$lib/stories/developer tools/components/UtilityButton/UtilityButton.svelte';

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    component: PasswordInput,
    tags: ['autodocs'],
    argTypes: storyPasswordInputArgTypes,
  });
</script>

<!-- PasswordInput icon in front. -->
<Story name="Icon Before">
  <PasswordInput>
    {#snippet before()}
      <Icon icon="material-symbols:content-copy" />
    {/snippet}
  </PasswordInput>
</Story>

<!-- PasswordInput icon in front. -->
<Story name="Icon After">
  <PasswordInput>
    {#snippet after()}
      <Icon icon="material-symbols:download-2" />
    {/snippet}
  </PasswordInput>
</Story>

<!-- PasswordInput icon in front. -->
<Story name="yo">
  <PasswordInput>
    {#snippet customPasswordToggleIcon(toggle)}
      <!-- {#if toggle}
        <Icon icon="mingcute:eye-close-line" width="24" height="24" />
      {:else}
        <Icon icon="mingcute:eye-line" width="24" height="24" />
      {/if} -->

      wafwf
    {/snippet}
  </PasswordInput>
</Story>
