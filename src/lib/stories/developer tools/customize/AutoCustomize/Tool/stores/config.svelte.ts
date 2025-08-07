import { browser } from '$app/environment';

const AUTO_CUSTOMIZE_TOOL_CONFIG = 'AUTO_CUSTOMIZE_TOOL_CONFIG';

export type AutoCustomizeConfigDataColors = {
  primary?: string;
  secondary?: string;
  neutral?: string;
  safe?: string;
  warning?: string;
  danger?: string;
};

export type AutoCustomizeConfigDataComponents = {
  roundness?: number;
};

export type AutoCustomizeConfigData = {
  colors?: AutoCustomizeConfigDataColors;
  components?: AutoCustomizeConfigDataComponents;
};

export const autoCustomizeConfigdefaultData: AutoCustomizeConfigData = {
  colors: {
    primary: 'violet',
    secondary: 'blue',
    neutral: 'gray',
    safe: 'emerald',
    warning: 'amber',
    danger: 'red',
  },
  components: {
    roundness: 0,
  },
};

function getDefaultData() {
  if (!browser) {
    return autoCustomizeConfigdefaultData;
  }

  let values = JSON.parse(localStorage.getItem(AUTO_CUSTOMIZE_TOOL_CONFIG) || `{}`);

  values = { ...autoCustomizeConfigdefaultData, ...values };

  return values as AutoCustomizeConfigData;
}

function createAutoCustomizeConfigStore() {
  let updatedAt: number = $state(Date.now());
  let data: AutoCustomizeConfigData = $state(getDefaultData());

  return {
    get data() {
      return data;
    },
    get updatedAt() {
      return updatedAt;
    },
    updateData(newData: Partial<AutoCustomizeConfigData>) {
      data = {
        ...data,
        ...newData,
      };
      updatedAt = Date.now();

      if (browser) {
        localStorage.setItem(AUTO_CUSTOMIZE_TOOL_CONFIG, JSON.stringify(newData));
      }
    },
    updateDataColor(newData: Partial<AutoCustomizeConfigDataColors>) {
      const colors = {
        ...data.colors,
        ...newData,
      };

      this.updateData({ colors });
    },
    updateDataComponents(newData: Partial<AutoCustomizeConfigDataComponents>) {
      const components = {
        ...data.components,
        ...newData,
      };

      this.updateData({ components });
    },
    reset() {
      data = autoCustomizeConfigdefaultData;
      updatedAt = Date.now();

      if (browser) {
        localStorage.setItem(
          AUTO_CUSTOMIZE_TOOL_CONFIG,
          JSON.stringify(autoCustomizeConfigdefaultData),
        );
      }
    },
  };
}

export const useAutoCustomizeConfigStore = createAutoCustomizeConfigStore();
