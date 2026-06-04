<script>
  import FieldAccordianItem from '../FieldAccordianItem.svelte';
  import ColorSelect from '../ColorSelect.svelte';
  import { Column, Grid } from '@flightlesslabs/dodo-ui';
  import { colors } from '$lib/data/colors';
  import { useColorStore } from '$lib/store/colors.svelte';
</script>

<FieldAccordianItem title="Colors">
  <Grid>
    <Column>
      <ColorSelect
        options={colors}
        label="Primary"
        value={useColorStore.colors.primary}
        onValueChange={(val) => useColorStore.updateColor('primary', val)}
      />
    </Column>
  </Grid>
</FieldAccordianItem>
