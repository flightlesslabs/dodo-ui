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
  componentColorDefaultOptions,
  componentColorOpacityOptions,
  type ComponentColorDefault,
  type ComponentColorOpacity,
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

/**
 * affix placement attribute related prop types.
 */
export {
  COMPONENT_AFFIX_PLACEMENT,
  type ComponentAffixPlacement,
  componentAffixPlacementOptions,
} from './attributes/affix-placement.js';

/**
 * alignment attribute related prop types.
 */
export {
  COMPONENT_ALIGNMENT,
  type ComponentAlignment,
  componentAlignmentOptions,
  type ComponentAlignmentX,
  componentAlignmentXOptions,
  type ComponentAlignmentY,
  componentAlignmentYOptions,
} from './attributes/alignment.ts';

// =====================================================
// helpers – Public API
// =====================================================

export { convertOption } from './helpers/convertOption/convertOption.ts';
