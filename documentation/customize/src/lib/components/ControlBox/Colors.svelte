<script>
  import FieldAccordianItem from '../FieldAccordianItem.svelte';
  import ColorSelect from '../ColorSelect.svelte';
  import { Column, Grid } from '@flightlesslabs/dodo-ui';
  import { colors, colorsDanger, colorsNeutral, colorsSafe, colorsWarning } from '$lib/data/colors';
  import { useColorStore } from '$lib/store/colors.svelte';
</script>

<FieldAccordianItem title="Colors" isActive={useColorStore.isActive}>
  <Grid gap={2}>
    <Column>
      <ColorSelect
        options={colors}
        label="Primary"
        name="primary"
        value={useColorStore.colors.primary}
        onValueChange={(val) => useColorStore.updateColor('primary', val)}
      />
    </Column>
    <Column>
      <ColorSelect
        options={colors}
        label="Secondary"
        name="secondary"
        value={useColorStore.colors.secondary}
        onValueChange={(val) => useColorStore.updateColor('secondary', val)}
      />
    </Column>
    <Column>
      <ColorSelect
        options={colorsNeutral}
        label="Neutral"
        name="neutral"
        value={useColorStore.colors.neutral}
        onValueChange={(val) => useColorStore.updateColor('neutral', val)}
      />
    </Column>
    <Column>
      <ColorSelect
        options={colorsSafe}
        label="Safe"
        name="safe"
        value={useColorStore.colors.safe}
        onValueChange={(val) => useColorStore.updateColor('safe', val)}
      />
    </Column>
    <Column>
      <ColorSelect
        options={colorsWarning}
        label="Warning"
        name="warning"
        value={useColorStore.colors.warning}
        onValueChange={(val) => useColorStore.updateColor('warning', val)}
      />
    </Column>
    <Column>
      <ColorSelect
        options={colorsDanger}
        label="Danger"
        name="danger"
        value={useColorStore.colors.danger}
        onValueChange={(val) => useColorStore.updateColor('danger', val)}
      />
    </Column>
  </Grid>
</FieldAccordianItem>
