/** Component Variant */
export const COMPONENT_VARIANT = {
  all: ['solid', 'text'],
} as const;

export type ComponentVariant = (typeof COMPONENT_VARIANT.all)[number];

export const componentVariantOptions = COMPONENT_VARIANT.all;
