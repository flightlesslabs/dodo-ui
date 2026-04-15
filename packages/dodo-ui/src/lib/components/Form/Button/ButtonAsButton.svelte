<script lang="ts" module>
  import type { HTMLButtonAttributes } from 'svelte/elements';
  import type { Snippet } from 'svelte';

  export type ButtonAsButtonProps = Omit<HTMLButtonAttributes, 'type' | 'href'> & {
    children?: Snippet;
    ref?: HTMLButtonElement | null;
    type?: HTMLButtonAttributes['type'];
    href?: never;
    disabled?: HTMLButtonAttributes['disabled'];
  };
</script>

<script lang="ts">
  let {
    children,
    ref = $bindable(null),
    type = 'button',
    ...restProps
  }: ButtonAsButtonProps = $props();
</script>

<button {...restProps} bind:this={ref} {type}>
  {@render children?.()}
</button>
