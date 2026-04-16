// =====================================================
// attributes – Public API
// =====================================================

/**
 * color attribute related prop types.
 */
export {
  COMPONENT_COLOR,
  componentColorOptions,
  componentColorPriorityOptions,
  componentColorSeverityOptions,
  type ComponentColorPriority,
  type ComponentColorSeverity,
  type ComponentColor,
} from './attributes/color.js';

/**
 * roundness attribute related prop types.
 */
export {
  COMPONENT_ROUNDNESS,
  componentRoundnessNumericalOptions,
  componenRoundnessShapeOptions,
  componentRoundnessOptions,
  type ComponentRoundnessNumerical,
  type ComponentRoundnessShape,
  type ComponentRoundness,
} from './attributes/roundness.js';

/**
 * size attribute related prop types.
 */
export { COMPONENT_SIZE, componentSizeOptions, type ComponentSize } from './attributes/size.js';

/**
 * variant attribute related prop types.
 */
export {
  COMPONENT_VARIANT,
  componentVariantOptions,
  type ComponentVariant,
} from './attributes/variant.js';

/**
 * shadow attribute related prop types.
 */
export {
  COMPONENT_SHADOW,
  ComponentShadowOptions,
  type ComponentShadow,
} from './attributes/shadow.js';

/**
 * theme attribute related prop types.
 */
export {
  COMPONENT_THEME,
  componentThemeOptions,
  componentThemeColorsOptions,
  type ComponentThemeColors,
  type ComponentTheme,
} from './attributes/theme.js';
