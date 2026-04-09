<script lang="ts" module>
  import type { HTMLButtonAttributes, HTMLAnchorAttributes } from 'svelte/elements';

  export type ButtonAsAnchorProps = ButtonRootPropsWithoutHTML &
    WithoutChildren<Omit<HTMLAnchorAttributes, 'href' | 'type'>> & {
      href: HTMLAnchorAttributes['href'];
      type?: never;
      disabled?: HTMLButtonAttributes['disabled'];
    };
</script>

<script lang="ts">
  import {
    Button as BitsUiButton,
    type ButtonRootPropsWithoutHTML,
    type WithoutChildren,
  } from 'bits-ui';

  let { children, ref = $bindable(null), ...restProps }: ButtonAsAnchorProps = $props();
</script>

<BitsUiButton.Root {...restProps} bind:ref>
  {@render children?.()}
</BitsUiButton.Root>
