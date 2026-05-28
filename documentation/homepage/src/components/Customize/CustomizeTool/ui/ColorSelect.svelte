<script lang="ts">
  import { FormField, type ComponentColor } from '@flightlesslabs/dodo-ui';
  import { Select, type SelectProps } from '@flightlesslabs/dodo-ui-bits';
  import { useCustomizeStore } from '../customize.svelte';

  type ColorSelectProps = {
    label?: string;
    color: ComponentColor;
  } & SelectProps;

  let { label, color, ...restProps }: ColorSelectProps = $props();
</script>

<div class="ColorSelect">
  <FormField label={color || label} for={`color-${color}`}>
    <Select
      {...restProps}
      value={useCustomizeStore.colors[color]}
      name={`color-${color}`}
      size="small"
      onValueChange={(val) => useCustomizeStore.updateColor(color, val)}
    />
  </FormField>
</div>

<style lang="scss">
  .ColorSelect {
    :global(label) {
      text-transform: capitalize;
      font-size: 0.9rem;
    }
  }
</style>
