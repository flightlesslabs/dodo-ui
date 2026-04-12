export function svelte(name: string) {
  return `
<script lang="ts" module>
  import type { Snippet } from 'svelte';

  export interface ${name}Props {
    class?: string;
    disabled?: boolean;
    children?: Snippet;
  }
</script>

<script lang="ts">
  let {
    class: className = '',
    disabled = false,
    children,
    ...restProps
  }: ${name}Props = $props();

  const classes = $derived(['dodo-ui-${name}', className].filter(Boolean));
</script>

<div class={classes.join(' ')} aria-disabled={disabled} {...restProps}>
  {@render children?.()}
</div>
`;
}
