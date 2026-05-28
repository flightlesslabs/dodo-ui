import type { ComponentColors } from '../../customize.svelte';
import { getColorVariables, type ColorVariables } from './getColorVariables';
import { generateColorMappings } from './generateColorMappings';

export function getBaseColorMappings(
  colors: ComponentColors,
  defaultColors?: Partial<ComponentColors>,
) {
  const filteredColors = Object.fromEntries(
    Object.entries(colors).filter(([key, value]) => {
      const defaultValue = defaultColors?.[key as keyof ComponentColors];

      return defaultValue === undefined || value !== defaultValue;
    }),
  ) as Partial<ComponentColors>;

  const colorVariables: ColorVariables[] = Object.entries(filteredColors).map(
    ([appColor, baseColor]) => getColorVariables(appColor as keyof ComponentColors, baseColor),
  );

  const colorsLight = generateColorMappings(colorVariables);
  const colorsDark = generateColorMappings(colorVariables, true);

  return {
    light: colorsLight,
    dark: colorsDark,
  };
}
