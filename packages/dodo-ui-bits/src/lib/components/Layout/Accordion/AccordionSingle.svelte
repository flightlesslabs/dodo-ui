<script lang="ts" module>
  export type AccordionSingleProps = {
    value?: string;
  } & Omit<AccordionRootProps, 'value'> &
    AccordionBaseProps;
</script>

<script lang="ts">
  import { Accordion as AccordionBitUi, type AccordionRootProps } from 'bits-ui';
  import type { AccordionBaseProps } from './Accordion.svelte';

  let {
    children,
    value = $bindable(),
    ref = $bindable(null),
    ...restProps
  }: AccordionSingleProps = $props();
</script>

<!-- eslint-disable-next-line @typescript-eslint/no-explicit-any -->
<AccordionBitUi.Root {...restProps as any} bind:ref bind:value type="single">
  {@render children?.()}
</AccordionBitUi.Root>
