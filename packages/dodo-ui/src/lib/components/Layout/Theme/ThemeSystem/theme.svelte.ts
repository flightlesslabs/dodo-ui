import type { ComponentThemeColors } from '@flightlesslabs/dodo-core-attributes';

function createThemeStore() {
  let systemTheme = $state<ComponentThemeColors>('light');

  return {
    get theme() {
      return systemTheme;
    },
    updateSystemTheme(theme: ComponentThemeColors) {
      systemTheme = theme;
    },
  };
}

export const useThemeStore = createThemeStore();
