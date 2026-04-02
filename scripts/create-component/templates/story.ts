export function story(name: string) {
  return `
<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import ${name} from './${name}.svelte';

  const { Story } = defineMeta({
    component: ${name},
    tags: ['autodocs'],
  });
</script>

<Story name="Default">
  <${name}>Default</${name}>
</Story>

<Story name="Disabled" args={{ disabled: true }}>
  <${name}>Disabled</${name}>
</Story>
`;
}
