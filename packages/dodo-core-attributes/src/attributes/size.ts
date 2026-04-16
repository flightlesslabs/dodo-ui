/** Component Size */
export const COMPONENT_SIZE = {
  all: ['normal', 'small', 'large'],
} as const;

export type ComponentSize = (typeof COMPONENT_SIZE.all)[number];

export const componentSizeOptions = COMPONENT_SIZE.all;
