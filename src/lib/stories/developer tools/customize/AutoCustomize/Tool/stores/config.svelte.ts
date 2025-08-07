import { browser } from '$app/environment';

const AUTO_CUSTOMIZE_TOOL_CONFIG = 'AUTO_CUSTOMIZE_TOOL_CONFIG';

export type AutoCustomizeConfigData = {
  primaryColor?: string;
  secondaryColor?: string;
  neutralColor?: string;
  safeColor?: string;
  warningColor?: string;
  dangerColor?: string;
  roundness?: number;
};

export const autoCustomizeConfigdefaultData: AutoCustomizeConfigData = {
  primaryColor: 'violet',
  secondaryColor: 'blue',
  neutralColor: 'gray',
  safeColor: 'emerald',
  warningColor: 'amber',
  dangerColor: 'red',
  roundness: 0,
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
