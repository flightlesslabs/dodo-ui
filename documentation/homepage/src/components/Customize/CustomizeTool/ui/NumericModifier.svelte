<script lang="ts">
  import { FormField } from '@flightlesslabs/dodo-ui';
  import { NumericInput, type NumericInputProps } from '@flightlesslabs/dodo-ui-numeric';

  type NumericModifierProps = {
    label: string;
  } & NumericInputProps;

  let { label, name, ...restProps }: NumericModifierProps = $props();
</script>

<div class="NumericModifier">
  <FormField {label} for={name || ''}>
    <NumericInput {...restProps} {name} size="small" />
  </FormField>
</div>

<style lang="scss">
  .NumericModifier {
    :global(label) {
      text-transform: capitalize;
      font-size: 0.9rem;
    }
  }
</style>
