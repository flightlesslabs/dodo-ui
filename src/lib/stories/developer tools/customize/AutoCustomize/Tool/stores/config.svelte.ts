import { browser } from '$app/environment';

const AUTO_CUSTOMIZE_TOOL_CONFIG = 'AUTO_CUSTOMIZE_TOOL_CONFIG';

export type AutoCustomizeConfigData = {
  primaryColor?: string;
};

const defaultData = {
  primaryColor: 'violet',
};

function getDefaultData() {
  if (!browser) {
    return defaultData;
  }

  let values = JSON.parse(localStorage.getItem(AUTO_CUSTOMIZE_TOOL_CONFIG) || `{}`);

  values = { ...defaultData, ...values };

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
      data = newData;
      updatedAt = Date.now();

      if (browser) {
        localStorage.setItem(AUTO_CUSTOMIZE_TOOL_CONFIG, JSON.stringify(newData));
      }
    },
    reset() {
      data = defaultData;
      updatedAt = Date.now();

      if (browser) {
        localStorage.setItem(AUTO_CUSTOMIZE_TOOL_CONFIG, JSON.stringify(defaultData));
      }
    },
  };
}

export const useAutoCustomizeConfigStore = createAutoCustomizeConfigStore();
