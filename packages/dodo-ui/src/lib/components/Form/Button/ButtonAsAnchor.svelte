<script lang="ts" module>
  import type { HTMLButtonAttributes, HTMLAnchorAttributes } from 'svelte/elements';

  export type ButtonAsAnchorProps = Omit<HTMLAnchorAttributes, 'href' | 'type'> & {
    children?: Snippet;
    href: HTMLAnchorAttributes['href'];
    type?: never;
    disabled?: HTMLButtonAttributes['disabled'];
    ref?: HTMLAnchorElement | null;
  };
</script>

<script lang="ts">
  import type { Snippet } from 'svelte';

  let {
    children,
    ref = $bindable(null),
    disabled = false,
    ...restProps
  }: ButtonAsAnchorProps = $props();
</script>

<a {...restProps} aria-disabled={disabled ? 'true' : undefined} bind:this={ref}>
  {@render children?.()}
</a>
