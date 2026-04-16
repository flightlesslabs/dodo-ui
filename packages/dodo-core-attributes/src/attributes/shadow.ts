/** Component Shadow */
export const COMPONENT_SHADOW = {
  all: [0, 1, 2, 3, 4, 5],
} as const;

export type ComponentShadow = (typeof COMPONENT_SHADOW.all)[number];

export const ComponentShadowOptions = COMPONENT_SHADOW.all;
