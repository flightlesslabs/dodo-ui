<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import PasswordInput from './PasswordInput.svelte';
  import type { StoryBookArgTypes } from '$lib/storybook-types.js';
  import Icon from '@iconify/svelte';

  export const storyPasswordInputArgTypes: StoryBookArgTypes = {
    roundness: {
      control: { type: 'select' },
      options: [false, '1x', '2x', '3x'],
    },
    size: {
      control: { type: 'select' },
      options: ['normal', 'small', 'large'],
    },
  };

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    component: PasswordInput,
    tags: ['autodocs'],
    argTypes: storyPasswordInputArgTypes,
    args: { value: 'Hello world!' },
  });
</script>

<!-- PasswordInput with default style -->
<Story name="Default" />

<Story name="Placeholder" args={{ value: '', placeholder: 'Type something...' }} />

<Story name="No Outline" args={{ outline: false }} />

<Story name="Error" args={{ error: true }} />

<Story name="Disabled" args={{ disabled: true }} />

<!-- Disable password toggle -->
<Story name="No toggle" args={{ passwordToggle: false }} />

<!-- Show Password by default -->
<Story name="Show Password" args={{ passwordToggleState: true }} />

<Story name="Read only" args={{ readonly: true }} />

<!-- Show Password by default -->
<Story name="Custom toggle icon">
  <PasswordInput value="Hello world!">
    {#snippet customPasswordToggleIcon(toggle)}
      {#if toggle}
        <Icon icon="mingcute:eye-close-line" width="24" height="24" />
      {:else}
        <Icon icon="mingcute:eye-2-line" width="24" height="24" />
      {/if}
    {/snippet}
  </PasswordInput>
</Story>
