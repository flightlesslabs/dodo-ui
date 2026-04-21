/** Component Affix Placement */
export const COMPONENT_AFFIX_PLACEMENT = {
  all: ['before', 'after'],
} as const;

export type ComponentAffixPlacement = (typeof COMPONENT_AFFIX_PLACEMENT.all)[number];

export const componentAffixPlacementOptions = COMPONENT_AFFIX_PLACEMENT.all;
