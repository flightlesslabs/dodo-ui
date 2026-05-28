<script>
  import { Column, Grid, Row } from '@flightlesslabs/dodo-ui';
  import { useCustomizeStore } from '../customize.svelte';
  import NumericModifier from '../ui/NumericModifier.svelte';
</script>

<Row>
  <Column>
    <Grid gap={2}>
      <Row>
        <Column><h3>Spacing</h3></Column>
      </Row>
      <Row>
        <Column lg={4}>
          <NumericModifier
            label="Roundness"
            options={{ useGrouping: false, valueRange: { min: 0, max: 5 }, precision: 4 }}
            value={useCustomizeStore.roundness}
            onChange={(val) => useCustomizeStore.updateRoundness(val)}
          />
        </Column>
      </Row>
      <Row>
        <Column lg={4}>
          <NumericModifier
            label="Size (Element Size)"
            options={{ useGrouping: false, valueRange: { min: -10, max: 100 }, precision: 0 }}
            value={useCustomizeStore.size}
            onChange={(val) => useCustomizeStore.updateSize(val)}
          />
        </Column>
        <Column lg={4}>
          <NumericModifier
            label="Space (Grid gap etc)"
            options={{ useGrouping: false, valueRange: { min: -10, max: 100 }, precision: 0 }}
            value={useCustomizeStore.space}
            onChange={(val) => useCustomizeStore.updateSpace(val)}
          />
        </Column>
      </Row>
    </Grid>
  </Column>
</Row>
