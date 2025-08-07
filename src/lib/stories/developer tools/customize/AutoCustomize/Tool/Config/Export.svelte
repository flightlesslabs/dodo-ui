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
    type AutoCustomizeConfigDataColors,
  } from '../stores/config.svelte.js';

  async function onclick() {
    try {
      let rawText = `/* dodo-ui-custom.css */
:root {`;

      for (let index = 0; index < colorPalette.length; index++) {
        const colorName = colorPalette[index];

        const fieldName = `${colorName}` as keyof AutoCustomizeConfigDataColors;

        const dataPoint =
          useAutoCustomizeConfigStore.data.colors &&
          useAutoCustomizeConfigStore.data.colors[fieldName]
            ? useAutoCustomizeConfigStore.data.colors[fieldName]
            : undefined;

        const defaultValue =
          autoCustomizeConfigdefaultData.colors && autoCustomizeConfigdefaultData.colors[fieldName]
            ? autoCustomizeConfigdefaultData.colors[fieldName]
            : undefined;

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

          if (colorPaletteValues[index] === colorPaletteValues[colorPaletteValues.length - 1]) {
            rawText += `
`;
          }
        }
      }

      if (useAutoCustomizeConfigStore.data.components?.roundness) {
        const roundness = useAutoCustomizeConfigStore.data.components?.roundness / 8;

        rawText += `

  /* Component: Roundness */
  --dodo-ui-element-roundness-1: ${0.4375 + roundness}em;
  --dodo-ui-element-roundness-2: ${0.8125 + roundness}em;
  --dodo-ui-element-roundness-3: ${1.9375 + roundness}em;`;
      }

      if (useAutoCustomizeConfigStore.data.components?.elementHeight) {
        const elementHeight = useAutoCustomizeConfigStore.data.components.elementHeight + 2;
        const elementHeightTrack = useAutoCustomizeConfigStore.data.components.elementHeight / 2;

        rawText += `

  /* Component: Size */
  --dodo-ui-element-height-small: ${34 + elementHeight}px;
  --dodo-ui-element-height-normal: ${40 + elementHeight}px;
  --dodo-ui-element-height-large: ${50 + elementHeight}px;
  --dodo-ui-track-element-height-small: ${6 + elementHeightTrack}px;
  --dodo-ui-track-element-height-normal: ${8 + elementHeightTrack}px;
  --dodo-ui-track-element-height-large: ${10 + elementHeightTrack}px;`;
      }

      if (useAutoCustomizeConfigStore.data.components?.borderWidth) {
        const borderWidth = useAutoCustomizeConfigStore.data.components.borderWidth;

        rawText += `

  /* Component: Border */
  --dodo-ui-element-border-width: ${2 + borderWidth}px;`;
      }

      if (useAutoCustomizeConfigStore.data.space) {
        const space = useAutoCustomizeConfigStore.data.space;

        rawText += `

  /* Space */
  --dodo-ui-space-small: ${6 + space}px;
  --dodo-ui-space: ${8 + space}px;
  --dodo-ui-space-large: ${10 + space}px;`;
      }

      // end
      rawText += `
}`;

      rawText += `

.dodo-theme--dark {`;

      for (let index = 0; index < colorPalette.length; index++) {
        const colorName = colorPalette[index];

        const fieldName = `${colorName}` as keyof AutoCustomizeConfigDataColors;

        const dataPoint =
          useAutoCustomizeConfigStore.data.colors &&
          useAutoCustomizeConfigStore.data.colors[fieldName]
            ? useAutoCustomizeConfigStore.data.colors[fieldName]
            : undefined;

        const defaultValue =
          autoCustomizeConfigdefaultData.colors && autoCustomizeConfigdefaultData.colors[fieldName]
            ? autoCustomizeConfigdefaultData.colors[fieldName]
            : undefined;

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

        if (
          colorPaletteValuesReversed[index] ===
          colorPaletteValuesReversed[colorPaletteValuesReversed.length - 1]
        ) {
          rawText += `
`;
        }
      }

      // end
      rawText += `
}`;

      const data = new Blob([rawText], { type: 'text/plain' });

      await downloadFile(`dodo-ui-custom.css`, data);
    } catch (e) {
      console.error(e);
    }
  }
</script>

<Button {onclick}>Export CSS</Button>

<style lang="scss">
</style>
