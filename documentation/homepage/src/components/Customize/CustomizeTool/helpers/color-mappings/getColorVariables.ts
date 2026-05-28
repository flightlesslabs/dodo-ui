export const colorrRange = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];

export type ColorVariables = {
  appColors: string[];
  baseColors: string[];
};

export function getColorVariables(appColor: string, baseColor: string): ColorVariables {
  const appColors: string[] = [];
  const baseColors: string[] = [];

  colorrRange.forEach((rangeItem) => {
    appColors.push(`--dodo-color-${appColor}-${rangeItem}`);
    baseColors.push(`--dodo-color-base-${baseColor}-${rangeItem}`);
  });

  return {
    appColors,
    baseColors,
  };
}
