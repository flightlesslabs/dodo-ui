<script>
  import { NumericInput } from '@flightlesslabs/dodo-ui-numeric';
  import FieldAccordianItem from '../FieldAccordianItem.svelte';
  import { Column, Grid } from '@flightlesslabs/dodo-ui';
  import { useRoundnessStore } from '$lib/store/roundness.svelte';
  import { useSpaceStore } from '$lib/store/space.svelte';
  import { useSizeStore } from '$lib/store/size.svelte';
  import FieldWithActiveLabel from '../FieldWithActiveLabel.svelte';

  let anyFilterActive = $derived(
    useRoundnessStore.isActive || useSizeStore.isActive || useSpaceStore.isActive,
  );
</script>

<FieldAccordianItem title="Spacing" isActive={anyFilterActive}>
  <Grid gap={2}>
    <Column>
      <FieldWithActiveLabel
        label="Roundness (Border Radius)"
        name="roundness"
        isActive={useRoundnessStore.isActive}
      >
        <NumericInput
          name="roundness"
          options={{ useGrouping: false, valueRange: { min: 0, max: 5 }, precision: 4 }}
          value={useRoundnessStore.roundness}
          onChange={(val) => useRoundnessStore.updateRoundness(val)}
        />
      </FieldWithActiveLabel>
    </Column>
    <Column>
      <FieldWithActiveLabel
        label="Size (Element Size +/-)"
        name="size"
        isActive={useSizeStore.isActive}
      >
        <NumericInput
          name="size"
          options={{ useGrouping: false, valueRange: { min: -10, max: 100 }, precision: 0 }}
          value={useSizeStore.size}
          onChange={(val) => useSizeStore.updateSize(val || 0)}
        />
      </FieldWithActiveLabel>
    </Column>
    <Column>
      <FieldWithActiveLabel
        label="Space (Grid gap etc +/-)"
        name="space"
        isActive={useSpaceStore.isActive}
      >
        <NumericInput
          name="space"
          options={{ useGrouping: false, valueRange: { min: -10, max: 100 }, precision: 0 }}
          value={useSpaceStore.space}
          onChange={(val) => useSpaceStore.updateSpace(val || 0)}
        />
      </FieldWithActiveLabel>
    </Column>
  </Grid>
</FieldAccordianItem>
