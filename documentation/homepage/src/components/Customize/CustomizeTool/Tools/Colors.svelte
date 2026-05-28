<script lang="ts">
  import { Column, Grid, Row } from '@flightlesslabs/dodo-ui';
  import ColorSelect from '../ui/ColorSelect.svelte';

  import { colors, colorsDanger, colorsNeutral, colorsSafe, colorsWarning } from '../data/colors';
</script>

<Row>
  <Column>
    <Grid gap={2}>
      <Row>
        <Column><h3>Colors</h3></Column>
      </Row>
      <Row>
        <Column lg={4}><ColorSelect options={colors} color="primary" /></Column>
        <Column lg={4}><ColorSelect options={colors} color="secondary" /></Column>
        <Column lg={4}><ColorSelect options={colorsNeutral} color="neutral" /></Column>
      </Row>
      <Row>
        <Column lg={4}><ColorSelect options={colorsSafe} color="safe" /></Column>
        <Column lg={4}><ColorSelect options={colorsWarning} color="warning" /></Column>
        <Column lg={4}><ColorSelect options={colorsDanger} color="danger" /></Column>
      </Row>
    </Grid>
  </Column>
</Row>
