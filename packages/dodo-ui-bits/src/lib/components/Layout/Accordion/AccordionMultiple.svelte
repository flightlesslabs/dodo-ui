<script lang="ts" module>
  export type AccordionMultipleProps = {
    value?: string[];
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
  }: AccordionMultipleProps = $props();
</script>

<!-- eslint-disable-next-line @typescript-eslint/no-explicit-any -->
<AccordionBitUi.Root {...restProps as any} bind:ref bind:value type="multiple">
  {@render children?.()}
</AccordionBitUi.Root>
