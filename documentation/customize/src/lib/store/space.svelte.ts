const defaulValue = 0;

function createSpaceStore() {
  let space = $state<number>(defaulValue);

  return {
    get space() {
      return space;
    },
    get isActive() {
      return space !== defaulValue;
    },
    updateSpace(value: number) {
      space = value;
    },
    reset() {
      space = defaulValue;
    },
  };
}

export const useSpaceStore = createSpaceStore();
