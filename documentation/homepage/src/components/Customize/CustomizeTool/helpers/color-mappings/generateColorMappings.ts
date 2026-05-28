import type { ColorVariables } from './getColorVariables';

export function generateColorMappings(colorSets: ColorVariables[], isDark = false) {
  return colorSets
    .map(({ appColors, baseColors }) => {
      if (appColors.length !== baseColors.length) {
        throw new Error('appColors and baseColors must have the same length');
      }

      return appColors
        .map((appColor, index) => {
          const mappedBaseColor = isDark
            ? baseColors[baseColors.length - 1 - index]
            : baseColors[index];

          return `${appColor}: var(${mappedBaseColor});`;
        })
        .join('\n');
    })
    .join('\n\n');
}
