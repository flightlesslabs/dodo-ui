import type { ComponentColors } from '$lib/store/colors.svelte';
import type { ComponentColor } from '@flightlesslabs/dodo-core-attributes';

const points = ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'];
const reversedPoints = [...points].reverse();

export function generateColorVariables(data: ComponentColors, activeColors: ComponentColor[]) {
  const variables: string[] = [];
  const variablesDark: string[] = [];

  for (let i = 0; i < Object.entries(data).length; i++) {
    const [color, baseColor] = Object.entries(data)[i];

    if (!activeColors.includes(color as ComponentColor)) {
      continue;
    }

    points.forEach((point, index) => {
      // Light theme
      variables.push(
        `--dodo-color-${color}-${point}: var(--dodo-color-base-${baseColor}-${point});`,
      );

      // Dark theme (reversed scale)
      variablesDark.push(
        `--dodo-color-${color}-${point}: var(--dodo-color-base-${baseColor}-${reversedPoints[index]});`,
      );
    });
  }

  return {
    variables,
    variablesDark,
  };
}
