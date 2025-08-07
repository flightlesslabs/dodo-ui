<script lang="ts">
  import Button from '$lib/stories/components/Form/Button/Button.svelte';
  import {
    colorPalette,
    colorPaletteValues,
  } from '$lib/stories/developer tools/philosophy/Colors/utils/color.js';
  import { downloadFile } from '../helpers/download-file.js';
  import {
    autoCustomizeConfigdefaultData,
    useAutoCustomizeConfigStore,
    type AutoCustomizeConfigData,
  } from '../stores/config.svelte.js';

  async function onclick() {
    let rawText = `
:root {`;

    for (let index = 0; index < colorPalette.length; index++) {
      const colorName = colorPalette[index];

      const fieldName = `${colorName}Color` as keyof AutoCustomizeConfigData;

      const dataPoint = useAutoCustomizeConfigStore.data[fieldName];

      const defaultValue = autoCustomizeConfigdefaultData[fieldName];

      const pass = dataPoint && dataPoint !== defaultValue ? true : false;

      if (!pass) {
        continue;
      }

      rawText += `
  /* ${colorName} color */`;

      for (let index = 0; index < colorPaletteValues.length; index++) {
        const weight = colorPaletteValues[index];

        rawText += `
  --dodo-color-${colorName}-${weight}: var(--dodo-color-base-${dataPoint}-${weight});`;
      }
    }

    if (useAutoCustomizeConfigStore.data.roundness) {
      const roundness = useAutoCustomizeConfigStore.data.roundness / 8;

      rawText += `
  /* Roundness */
  --dodo-ui-element-roundness-1: ${0.4375 + roundness}em;
  --dodo-ui-element-roundness-2: ${0.8125 + roundness}em;
  --dodo-ui-element-roundness-3: ${1.9375 + roundness}em;`;
    }

    // end
    rawText += `
}`;

    rawText += `

.dodo-theme--dark {`;

    for (let index = 0; index < colorPalette.length; index++) {
      const colorName = colorPalette[index];

      const fieldName = `${colorName}Color` as keyof AutoCustomizeConfigData;

      const dataPoint = useAutoCustomizeConfigStore.data[fieldName];

      const defaultValue = autoCustomizeConfigdefaultData[fieldName];

      const pass = dataPoint && dataPoint !== defaultValue ? true : false;

      if (!pass) {
        continue;
      }

      rawText += `
  /* Dark: ${colorName} color */`;

      const colorPaletteValuesReversed = [...colorPaletteValues].reverse();

      for (let index = 0; index < colorPaletteValues.length; index++) {
        const weight = colorPaletteValues[index];
        const weightReversed = colorPaletteValuesReversed[index];

        rawText += `
  --dodo-color-${colorName}-${weight}: var(--dodo-color-base-${dataPoint}-${weightReversed});`;
      }
    }

    // end
    rawText += `
}`;

    const data = new Blob([rawText], { type: 'text/plain' });

    await downloadFile(`dodo-ui-custom.css`, data);
  }
</script>

<Button {onclick}>Export CSS</Button>

<style lang="scss">
</style>
