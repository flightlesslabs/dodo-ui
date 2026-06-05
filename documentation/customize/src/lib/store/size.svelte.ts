const defaulValue = 0;

function createSizeStore() {
  let size = $state<number>(defaulValue);

  return {
    get size() {
      return size;
    },
    get isActive() {
      return size !== defaulValue;
    },
    updateSize(value: number) {
      size = value;
    },
    reset() {
      size = defaulValue;
    },
  };
}

export const useSizeStore = createSizeStore();
