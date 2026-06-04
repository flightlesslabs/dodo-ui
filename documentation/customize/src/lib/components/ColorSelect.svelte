<script lang="ts" module>
  export type ColorSelectProps = SelectProps & {
    label?: string;
  };
</script>

<script lang="ts">
  import { FormField } from '@flightlesslabs/dodo-ui';
  import { Select, type SelectProps } from '@flightlesslabs/dodo-ui-bits';

  let { label, name, ...restProps }: ColorSelectProps = $props();
</script>

<div>
  <FormField {label} for={name}>
    <Select {...restProps} {name} />
  </FormField>
</div>

<style lang="scss">
</style>
