/** Component Color */
export const COMPONENT_COLOR = {
  priority: ['primary', 'secondary', 'neutral'],
  severity: ['safe', 'warning', 'danger'],

  // special
  default: ['default'],
  opacity: ['transparent'],
} as const;

export type ComponentColorPriority = (typeof COMPONENT_COLOR.priority)[number];
export type ComponentColorSeverity = (typeof COMPONENT_COLOR.severity)[number];
export type ComponentColor = ComponentColorPriority | ComponentColorSeverity;

// Flat options (for Storybook, selects, etc.)
export const componentColorOptions = [
  ...COMPONENT_COLOR.priority,
  ...COMPONENT_COLOR.severity,
] as const satisfies readonly ComponentColor[];

// Grouped options (no duplication)
export const componentColorPriorityOptions = COMPONENT_COLOR.priority;
export const componentColorSeverityOptions = COMPONENT_COLOR.severity;

// special
export type ComponentColorDefault = (typeof COMPONENT_COLOR.default)[number];
export type ComponentColorOpacity = (typeof COMPONENT_COLOR.opacity)[number];

export const componentColorDefaultOptions = COMPONENT_COLOR.default;
export const componentColorOpacityOptions = COMPONENT_COLOR.opacity;
