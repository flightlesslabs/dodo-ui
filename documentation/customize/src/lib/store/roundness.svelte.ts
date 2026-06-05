const defaulValue = 1;

function createRoundnessStore() {
  let roundness = $state<number | null>(defaulValue);

  return {
    get roundness() {
      return roundness;
    },
    get isActive() {
      return roundness !== defaulValue;
    },
    updateRoundness(value: number | null) {
      roundness = value;
    },
    reset() {
      roundness = defaulValue;
    },
  };
}

export const useRoundnessStore = createRoundnessStore();
