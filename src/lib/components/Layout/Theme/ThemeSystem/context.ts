import type { ComponentThemeColors } from '$lib/attributes/theme.js';
import { createContext } from 'svelte';

export interface ThemeContext {
  theme: ComponentThemeColors;
}

export const [getThemeContext, setThemeContext] = createContext<ThemeContext>();

export function useThemeContext(): ThemeContext {
  try {
    return getThemeContext();
  } catch {
    return {
      theme: 'light',
    };
  }
}
