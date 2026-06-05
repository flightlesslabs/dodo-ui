<script lang="ts" module>
  export type ColorSelectProps = SelectProps & {
    label?: string;
  };
</script>

<script lang="ts">
  import { type ComponentColor } from '@flightlesslabs/dodo-ui';
  import { Select, type SelectProps } from '@flightlesslabs/dodo-ui-bits';
  import ColorPalettePick from './ColorPalettePick.svelte';
  import { useColorStore } from '$lib/store/colors.svelte';
  import FieldWithActiveLabel from './FieldWithActiveLabel.svelte';

  let { label, name, value, ...restProps }: ColorSelectProps = $props();
  let isActive = $derived(useColorStore.activeColors.includes(name as ComponentColor));
</script>

<FieldWithActiveLabel {name} {label} {isActive}>
  <Select {...restProps} {value} {name}>
    {#snippet customSelectedContent(props)}
      <ColorPalettePick componentColor={props.value as ComponentColor} />
      {props.options.find((item) => item.value === props.value)?.label}
    {/snippet}

    {#snippet customListItemContent(props)}
      <div class="customListItemContent">
        <ColorPalettePick componentColor={props.option.value as ComponentColor} />
        {props.option.label}
      </div>
    {/snippet}
  </Select>
</FieldWithActiveLabel>

<style lang="scss">
  .customListItemContent {
    display: flex;
    align-items: center;
  }
</style>
