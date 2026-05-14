<script lang="ts">
  import { ToggleGroup as ToggleGroupBitUi, type SingleToggleGroupRootProps } from 'bits-ui';

  let {
    children,
    value = $bindable(),
    ref = $bindable(null),
    ...restProps
  }: SingleToggleGroupRootProps = $props();
</script>

<ToggleGroupBitUi.Root {...restProps} bind:ref bind:value>
  {@render children?.()}
</ToggleGroupBitUi.Root>
