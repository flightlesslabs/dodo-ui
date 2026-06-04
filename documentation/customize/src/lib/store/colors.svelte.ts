import type { ComponentColor } from '@flightlesslabs/dodo-core-attributes';

export type ComponentColors = Record<ComponentColor, string>;

function colorsDefaultValues(): ComponentColors {
  return {
    primary: 'violet',
    secondary: 'blue',
    neutral: 'gray',
    safe: 'emerald',
    warning: 'amber',
    danger: 'red',
  };
}

function createColorStore() {
  let colors = $state<ComponentColors>({
    ...colorsDefaultValues(),
  });

  return {
    get colors() {
      return colors;
    },
    reset() {
      colors = {
        ...colorsDefaultValues(),
      };
    },
    updateColor(color: ComponentColor, value: string) {
      const newColors = {
        ...colors,
      };

      newColors[color] = value;

      colors = {
        ...newColors,
      };
    },
  };
}

export const useColorStore = createColorStore();
