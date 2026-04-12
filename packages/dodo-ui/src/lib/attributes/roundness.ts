/** Component Roundness */
export const COMPONENT_ROUNDNESS = {
  numerical: [0, 1, 2, 3],
  shape: [0, 1, 2, 3, 'pill'],
  all: [0, 1, 2, 3, 'pill', 'full'],
} as const;

export type ComponentRoundnessNumerical = (typeof COMPONENT_ROUNDNESS.numerical)[number];
export type ComponentRoundnessShape = (typeof COMPONENT_ROUNDNESS.shape)[number];
export type ComponentRoundness = (typeof COMPONENT_ROUNDNESS.all)[number];

export const componentRoundnessNumericalOptions = COMPONENT_ROUNDNESS.numerical;
export const componenRoundnessShapeOptions = COMPONENT_ROUNDNESS.shape;
export const componentRoundnessOptions = COMPONENT_ROUNDNESS.all;
