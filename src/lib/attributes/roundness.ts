/** Component Roundness */
export const COMPONENT_ROUNDNESS = {
  numerical: [0, 1, 2, 3],
  all: [0, 1, 2, 3, 'full'],
} as const;

export type ComponentRoundnessNumerical = (typeof COMPONENT_ROUNDNESS.numerical)[number];
export type ComponentRoundness = (typeof COMPONENT_ROUNDNESS.all)[number];

export const componentRoundnessNumericalOptions = COMPONENT_ROUNDNESS.numerical;
export const componentRoundnessOptions = COMPONENT_ROUNDNESS.all;
