<script lang="ts">
  import { FormField } from '@flightlesslabs/dodo-ui';
  import {
    ToggleGroup,
    type ToggleGroupOption,
    type ToggleGroupSingleProps,
  } from '@flightlesslabs/dodo-ui-bits';

  type ToggleOptionGroupProps = {
    label: string;
    isColorGroup?: boolean;
  } & ToggleGroupSingleProps;

  let { options, label, id, value, isColorGroup = false }: ToggleOptionGroupProps = $props();
</script>

<div class="ToggleOptionGroup">
  <FormField {label} for={id}>
    <ToggleGroup
      type="single"
      {id}
      {value}
      options={options as ToggleGroupOption[]}
      gap={3}
      buttonProps={{ color: 'neutral' }}
      activeButtonProps={{
        variant: 'text',
        color: 'primary',
        outline: true,
      }}
    >
      {#snippet customContent(props)}
        <div class="box">
          {#if isColorGroup}
            <span
              style={`background-color: var(--dodo-color-base-${props.value}-500);`}
              class="color-pill"
            ></span>
          {/if}

          {props.label}
        </div>
      {/snippet}
    </ToggleGroup>
  </FormField>
</div>

<style lang="scss">
  .ToggleOptionGroup {
    .box {
      display: flex;
      margin: 0;
    }

    .color-pill {
      width: 20px;
      height: 20px;
      margin: 0;
      margin-right: 8px;
    }
  }
</style>
