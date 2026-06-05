import { useColorStore } from './colors.svelte';
import { useRoundnessStore } from './roundness.svelte';
import { useSizeStore } from './size.svelte';
import { useSpaceStore } from './space.svelte';

function createResetStore() {
  return {
    reset() {
      useColorStore.reset();
      useRoundnessStore.reset();
      useSizeStore.reset();
      useSpaceStore.reset();
    },
  };
}

export const useResetStore = createResetStore();
