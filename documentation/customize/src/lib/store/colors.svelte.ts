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
    get isActive() {
      const defaults = colorsDefaultValues();

      return Object.entries(defaults).some(
        ([key, value]) => colors[key as ComponentColor] !== value,
      );
    },
    get activeColors(): ComponentColor[] {
      const defaults = colorsDefaultValues();

      return (Object.keys(defaults) as ComponentColor[]).filter(
        (color) => colors[color] !== defaults[color],
      );
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
    reset() {
      colors = {
        ...colorsDefaultValues(),
      };
    },
  };
}

export const useColorStore = createColorStore();
