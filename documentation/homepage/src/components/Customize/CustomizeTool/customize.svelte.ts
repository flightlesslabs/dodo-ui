import type { ComponentColor } from '@flightlesslabs/dodo-core-attributes';
import { getCssText } from './helpers/getCssText';
import { getBaseColorMappings } from './helpers/color-mappings';
import { getSizeMappings } from './helpers/size-mappings';
import { getRoundnessMappings } from './helpers/roundness-mappings';
import { getSpaceMappings } from './helpers/space-mappings';

export type ComponentColors = Record<ComponentColor, string>;

export type FileExtension = 'css' | 'scss';

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

function createCustomizeStore() {
  let colors = $state<ComponentColors>({
    ...colorsDefaultValues(),
  });
  let roundness = $state<number>(1);
  let size = $state<number>(0);
  let space = $state<number>(0);
  let fileExtension = $state<FileExtension>('css');

  // Mappings
  const colorMappings = $derived(getBaseColorMappings(colors, { ...colorsDefaultValues() }));
  const roundnessMappings = $derived(getRoundnessMappings(roundness));
  const sizeMappings = $derived(getSizeMappings(size));
  const spaceMappings = $derived(getSpaceMappings(space));

  // root mappings (no dark theme)
  const mappingsCssRoot = $derived(
    [
      useCustomizeStore.roundnessMappings,
      useCustomizeStore.sizeMappings,
      useCustomizeStore.spaceMappings,
      useCustomizeStore.colorMappings.light,
    ].join('\n'),
  );

  // Css
  const cssVariables = $derived(
    [getCssText(mappingsCssRoot), getCssText('', colorMappings.dark)].join('\n'),
  );

  return {
    get colors() {
      return colors;
    },
    get roundness() {
      return roundness;
    },
    get size() {
      return size;
    },
    get space() {
      return space;
    },
    get colorMappings() {
      return colorMappings;
    },
    get roundnessMappings() {
      return roundnessMappings;
    },
    get sizeMappings() {
      return sizeMappings;
    },
    get spaceMappings() {
      return spaceMappings;
    },
    get allMappings() {
      return mappingsCssRoot;
    },
    get cssVariables() {
      return cssVariables;
    },
    get fileExtension() {
      return fileExtension;
    },
    resetDefaults() {
      colors = {
        ...colorsDefaultValues(),
      };

      roundness = 1;
      size = 0;
      space = 0;
      fileExtension = 'css';
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
    updateRoundness(value: number | null) {
      roundness = value === null ? 1 : value;
    },
    updateSize(value: number | null) {
      size = value === null ? 0 : value;
    },
    updateSpace(value: number | null) {
      space = value === null ? 0 : value;
    },
    updateFileExtension(value: FileExtension) {
      fileExtension = value;
    },
  };
}

export const useCustomizeStore = createCustomizeStore();
