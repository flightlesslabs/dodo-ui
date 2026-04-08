<script lang="ts" module>
  import type { HTMLButtonAttributes } from 'svelte/elements';

  export type ButtonAsButtonProps = ButtonRootPropsWithoutHTML &
    WithoutChildren<Omit<HTMLButtonAttributes, 'type' | 'href'>> & {
      type?: HTMLButtonAttributes['type'];
      href?: never;
      disabled?: HTMLButtonAttributes['disabled'];
    };
</script>

<script lang="ts">
  import {
    Button as BitsUiButton,
    type ButtonRootPropsWithoutHTML,
    type WithoutChildren,
  } from 'bits-ui';

  let { children, ref = $bindable(null), ...restProps }: ButtonAsButtonProps = $props();
</script>

<BitsUiButton.Root {...restProps} bind:ref>
  {@render children?.()}
</BitsUiButton.Root>
