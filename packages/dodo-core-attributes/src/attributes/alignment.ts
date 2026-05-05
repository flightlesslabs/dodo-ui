export const COMPONENT_ALIGNMENT = {
  all: ['start', 'end', 'center', 'top', 'bottom'],
  x: ['start', 'center', 'end'],
  y: ['top', 'center', 'bottom'],
} as const;

export type ComponentAlignment = (typeof COMPONENT_ALIGNMENT.all)[number];

export const componentAlignmentOptions = COMPONENT_ALIGNMENT.all;

export type ComponentAlignmentX = (typeof COMPONENT_ALIGNMENT.x)[number];

export const componentAlignmentXOptions = COMPONENT_ALIGNMENT.x;

export type ComponentAlignmentY = (typeof COMPONENT_ALIGNMENT.y)[number];

export const componentAlignmentYOptions = COMPONENT_ALIGNMENT.y;
