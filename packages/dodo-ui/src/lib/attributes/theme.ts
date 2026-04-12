/** Component Color */
export const COMPONENT_THEME = {
  colors: ['light', 'dark'],
  auto: ['auto'],
} as const;

export type ComponentThemeColors = (typeof COMPONENT_THEME.colors)[number];
export type ComponentTheme = ComponentThemeColors | (typeof COMPONENT_THEME.auto)[number];

// Flat options (for Storybook, selects, etc.)
export const componentThemeOptions = [
  ...COMPONENT_THEME.colors,
  ...COMPONENT_THEME.auto,
] as const satisfies readonly ComponentTheme[];

// Grouped options (no duplication)
export const componentThemeColorsOptions = COMPONENT_THEME.colors;
