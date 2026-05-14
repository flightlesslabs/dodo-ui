<script lang="ts">
  import { ToggleGroup as ToggleGroupBitUi, type MultipleToggleGroupRootProps } from 'bits-ui';

  let {
    children,
    value = $bindable(),
    ref = $bindable(null),
    ...restProps
  }: MultipleToggleGroupRootProps = $props();
</script>

<ToggleGroupBitUi.Root {...restProps} bind:ref bind:value>
  {@render children?.()}
</ToggleGroupBitUi.Root>
