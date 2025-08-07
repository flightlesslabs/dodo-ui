<script lang="ts">
  import Button from '$lib/stories/components/Form/Button/Button.svelte';
  import RangeSlider from '$lib/stories/components/Form/RangeSlider/RangeSlider.svelte';
  import Column from '$lib/stories/components/Layout/Grid/Column/Column.svelte';
  import Grid from '$lib/stories/components/Layout/Grid/Grid.svelte';
  import Paper from '$lib/stories/components/Layout/Paper/Paper.svelte';
  import {
    colorPalette,
    colorPaletteValues,
  } from '$lib/stories/developer tools/philosophy/Colors/utils/color.js';
  import {
    useAutoCustomizeConfigStore,
    type AutoCustomizeConfigDataColors,
  } from '../stores/config.svelte.js';

  let cssVariables = $state<string[]>([]);

  $effect(() => {
    const newCssvariables: string[] = [];

    for (let index = 0; index < colorPalette.length; index++) {
      const colorName = colorPalette[index];
      const fieldName = `${colorName}` as keyof AutoCustomizeConfigDataColors;

      const dataPoint =
        useAutoCustomizeConfigStore.data.colors &&
        useAutoCustomizeConfigStore.data.colors[fieldName]
          ? useAutoCustomizeConfigStore.data.colors[fieldName]
          : undefined;

      if (dataPoint) {
        for (let index = 0; index < colorPaletteValues.length; index++) {
          const weight = colorPaletteValues[index];

          newCssvariables.push(
            `--dodo-color-${colorName}-${weight}: var(--dodo-color-base-${dataPoint}-${weight})`,
          );
        }

        newCssvariables.push(
          ...[
            `--dodo-ui-Button-outline-${colorName}: var(--dodo-color-base-${dataPoint}-400)`,
            `--dodo-ui-Button-text-${colorName}-bg: var(--dodo-color-base-${dataPoint}-100)`,
            `--dodo-ui-Button-text-${colorName}-hover-bg: var(--dodo-color-base-${dataPoint}-200)`,
            `--dodo-ui-Button-text-${colorName}-active-bg: var(--dodo-color-base-${dataPoint}-300)`,
            `--dodo-ui-Button-solid-${colorName}-bg: var(--dodo-color-base-${dataPoint}-500)`,
            `--dodo-ui-Button-solid-${colorName}-hover-bg: var(--dodo-color-base-${dataPoint}-600)`,
            `--dodo-ui-Button-solid-${colorName}-active-bg: var(--dodo-color-base-${dataPoint}-700)`,
            `--dodo-ui-RangeSlider-thumb-${colorName}-bg: var(--dodo-color-base-${dataPoint}-500)`,
            `--dodo-ui-RangeSlider-thumb-${colorName}-hover-bg: var(--dodo-color-base-${dataPoint}-600)`,
            `--dodo-ui-RangeSlider-thumb-${colorName}-active-bg: var(--dodo-color-base-${dataPoint}-700)`,
            `--dodo-ui-RangeSlider-track-filled-${colorName}-bg: var(--dodo-color-base-${dataPoint}-500)`,
          ],
        );
      }
    }

    if (useAutoCustomizeConfigStore.data.components?.roundness) {
      const roundness = useAutoCustomizeConfigStore.data.components.roundness / 8;

      newCssvariables.push(`--dodo-ui-element-roundness-1: ${0.4375 + roundness}em`);
      newCssvariables.push(`--dodo-ui-element-roundness-2: ${0.8125 + roundness}em`);
      newCssvariables.push(`--dodo-ui-element-roundness-3: ${1.9375 + roundness}em`);
    }

    if (useAutoCustomizeConfigStore.data.components?.elementHeight) {
      const elementHeight = useAutoCustomizeConfigStore.data.components.elementHeight + 2;
      const elementHeightTrack = useAutoCustomizeConfigStore.data.components.elementHeight / 2;

      newCssvariables.push(`--dodo-ui-element-height-small: ${34 + elementHeight}px`);
      newCssvariables.push(`--dodo-ui-element-height-normal: ${40 + elementHeight}px`);
      newCssvariables.push(`--dodo-ui-element-height-large: ${50 + elementHeight}px`);

      newCssvariables.push(`--dodo-ui-track-element-height-small: ${6 + elementHeightTrack}px`);
      newCssvariables.push(`--dodo-ui-track-element-height-normal: ${8 + elementHeightTrack}px`);
      newCssvariables.push(`--dodo-ui-track-element-height-large: ${10 + elementHeightTrack}px`);
    }

    if (useAutoCustomizeConfigStore.data.components?.borderWidth) {
      const borderWidth = useAutoCustomizeConfigStore.data.components.borderWidth;

      newCssvariables.push(`--dodo-ui-element-border-width: ${1 + borderWidth}px`);
    }

    if (useAutoCustomizeConfigStore.data.space) {
      const space = useAutoCustomizeConfigStore.data.space;

      newCssvariables.push(`--dodo-ui-space-small: ${6 + space}px`);
      newCssvariables.push(`--dodo-ui-space: ${8 + space}px`);
      newCssvariables.push(`--dodo-ui-space-large: ${10 + space}px`);
    }

    cssVariables = [...newCssvariables];
  });
</script>

<div class="Preview" style={cssVariables.join(';')}>
  <div class="section">
    <div class="column">
      <Button>Primary</Button>
    </div>
    <div class="column">
      <Button color="secondary">Secondary</Button>
    </div>
    <div class="column">
      <Button color="neutral">Neutral</Button>
    </div>
    <div class="column">
      <Button color="safe">Safe</Button>
    </div>
    <div class="column">
      <Button color="warning">Warning</Button>
    </div>
    <div class="column">
      <Button color="danger">Danger</Button>
    </div>
  </div>

  <div class="section">
    <div class="column">
      <Button variant="text" outline>Primary</Button>
    </div>
    <div class="column">
      <Button variant="text" outline color="secondary">Secondary</Button>
    </div>
    <div class="column">
      <Button variant="text" outline color="neutral">Neutral</Button>
    </div>
    <div class="column">
      <Button variant="text" outline color="safe">Safe</Button>
    </div>
    <div class="column">
      <Button variant="text" outline color="warning">Warning</Button>
    </div>
    <div class="column">
      <Button variant="text" outline color="danger">Danger</Button>
    </div>
  </div>

  <div class="section">
    <div class="column">
      <Paper shadow={1} width="150px" height="180px">
        <div style="padding: var(--dodo-ui-space)">Hola!</div>
      </Paper>
    </div>
    <div class="column">
      <RangeSlider value={50} min={20} max={70} />
    </div>
  </div>

  <div class="section">
    <Grid class="GridSection">
      <Column md={6}>
        <Paper shadow={1}>
          <div style="padding: var(--dodo-ui-space)">Hola!</div>
        </Paper>
      </Column>
      <Column md={6}>
        <Paper shadow={1}>
          <div style="padding: var(--dodo-ui-space)">Hola!</div>
        </Paper>
      </Column>
      <Column md={4}>
        <Paper shadow={1}>
          <div style="padding: var(--dodo-ui-space)">Hola!</div>
        </Paper>
      </Column>
      <Column md={3}>
        <Paper shadow={1}>
          <div style="padding: var(--dodo-ui-space)">Hola!</div>
        </Paper>
      </Column>
      <Column md={2}>
        <Paper shadow={1}>
          <div style="padding: var(--dodo-ui-space)">Hola!</div>
        </Paper>
      </Column>
      <Column md={3}>
        <Paper shadow={1}>
          <div style="padding: var(--dodo-ui-space)">Hola!</div>
        </Paper>
      </Column>
    </Grid>
  </div>
</div>

<style lang="scss">
  @use '../../../../../../styles/scss' as *;

  :global(:root) {
    --AutoCustomize-Preview-bgColor: var(--dodo-color-base-gray-100);
  }

  :global(.dodo-theme--dark) {
    --AutoCustomize-Preview-bgColor: var(--dodo-color-base-gray-800);
  }

  .Preview {
    background-color: var(--AutoCustomize-Preview-bgColor);
    padding: calc(var(--dodo-ui-space) * 2);
    border-radius: var(--dodo-ui-element-roundness-2);
    width: 100%;

    @media (min-width: $breakpoints-lg) {
      flex: 1;
      width: initial;
      height: calc(100vh - 130px);
      overflow: auto;
    }

    .section {
      width: 100%;
      margin: var(--dodo-ui-space) 0;
      display: flex;
      flex-wrap: wrap;
    }

    .column {
      margin: 4px;
      display: inline-flex;
    }

    :global(.GridSection) {
      width: 100%;
    }
  }
</style>
