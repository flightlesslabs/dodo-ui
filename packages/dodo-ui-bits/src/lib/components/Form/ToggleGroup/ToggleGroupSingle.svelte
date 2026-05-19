<script lang="ts">
  import { ToggleGroup as ToggleGroupBitUi, type SingleToggleGroupRootProps } from 'bits-ui';

  type ToggleGroupSingleProps = {
    allowDeselect?: boolean;
  } & SingleToggleGroupRootProps;

  let {
    children,
    value = $bindable(),
    ref = $bindable(null),
    allowDeselect = false,
    ...restProps
  }: ToggleGroupSingleProps = $props();

  function getValue() {
    return value || '';
  }

  function setValue(newValue: string) {
    if (!allowDeselect && !newValue) {
      return;
    }

    value = newValue;
  }
</script>

<ToggleGroupBitUi.Root {...restProps} bind:ref bind:value={getValue, setValue}>
  {@render children?.()}
</ToggleGroupBitUi.Root>
