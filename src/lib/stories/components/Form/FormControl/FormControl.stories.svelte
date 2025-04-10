<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import FormControl from './FormControl.svelte';
  import TextInput from '../TextInput/TextInput.svelte';

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    component: FormControl,
    tags: ['autodocs'],
  });
</script>

<Story name="Default" args={{ label: 'Hello there' }} />

<Story name="Example TextInput" args={{ label: 'Whats your first name?' }}>
  <FormControl label="Whats your first name?" for="first-name-01">
    <TextInput placeholder="First name" id="first-name-01" />
  </FormControl>
</Story>

<Story name="ErrorMessage" args={{ label: 'Whats your first name?' }}>
  <FormControl
    label="Whats your first name?"
    for="first-name-02"
    errorMessage="This is an error message"
  >
    <TextInput value="John Smith" id="first-name-02" error />
  </FormControl>
</Story>
