// =====================================================
// Form Components – Public API
// =====================================================

/**
 * Button component and related prop types.
 */
export {
  default as Button,
  type ButtonAsButtonProps,
  type ButtonAsAnchorProps,
  type ButtonProps,
} from './components/Form/Button/Button.svelte';

/**
 * TextInput component and related types/events.
 */
export {
  default as TextInput,
  type TextInputEvent,
  type TextInputFocusEvent,
  type TextInputProps,
} from './components/Form/TextInput/TextInput.svelte';

/**
 * InputEnclosure component and related prop types.
 */
export {
  default as InputEnclosure,
  type InputEnclosureProps,
} from './components/Form/InputEnclosure/InputEnclosure.svelte';

export { type InpuAffixSpacing } from './components/Form/InputEnclosure/InputAffix.svelte';

/**
 * Label component and related prop types.
 */
export { default as Label, type LabelProps } from './components/Form/Label/Label.svelte';

/**
 * FormField component and related prop types.
 */
export {
  default as FormField,
  type FormFieldProps,
} from './components/Form/FormField/FormField.svelte';

/**
 * UtilityButton component and related prop types.
 */
export {
  default as UtilityButton,
  type UtilityButtonAsButtonProps,
  type UtilityButtonAsAnchorProps,
  type UtilityButtonProps,
} from './components/Form/UtilityButton/UtilityButton.svelte';

// =====================================================
// Layout Components – Public API
// =====================================================

/**
 * Theme component and related prop types.
 */
export { default as Theme, type ThemeProps } from './components/Layout/Theme/Theme.svelte';
export {
  useThemeContext,
  type ThemeContext,
} from './components/Layout/Theme/ThemeSystem/context.js';
export { useThemeStore } from './components/Layout/Theme/ThemeSystem/theme.svelte.js';

/**
 * Card component and related prop types.
 */
export {
  default as Card,
  cardColorOptions,
  type CardColor,
  type CardProps,
} from './components/Layout/Card/Card.svelte';

/**
 * Grid component and related prop types.
 */
export { default as Grid, type GridProps } from './components/Layout/Grid/Grid.svelte';

export {
  GRID_COLUMN_BREAKPOINT,
  default as Column,
  gridColumnSizeOptions,
  gridColumnSizeNumericalOptions,
  type GridColumnProps,
  type GridColumnSizeNumerical,
  type GridColumnSize,
} from './components/Layout/Grid/Column/Column.svelte';

export { default as Row, type GridRowProps } from './components/Layout/Grid/Row/Row.svelte';

// =====================================================
// Info Components – Public API
// =====================================================

/**
 * FormattedNumber component and related prop types.
 */
export {
  default as FormattedNumber,
  type FormattedNumberProps,
  type FormattedNumberOptions,
} from './components/Info/FormattedNumber/FormattedNumber.svelte';

/**
 * Text component and related prop types.
 */
export {
  default as Text,
  textColorOptions,
  type TextColor,
  type TextProps,
} from './components/Info/Text/Text.svelte';

/**
 * Money component and related prop types.
 */
export {
  default as Money,
  type MoneyProps,
  type MoneyOptions,
} from './components/Info/Money/Money.svelte';

/**
 * Threshold component and related prop types.
 */
export {
  default as Threshold,
  defaultThresholdColorMap,
  type ThresholdProps,
  type ThresholdColorMap,
  type ThresholdCustomContentContext,
} from './components/Info/Threshold/Threshold.svelte';

export {
  compareValueWithThreshold,
  type ThresholdStatus,
} from './components/Info/Threshold/compareValueWithThreshold/compareValueWithThreshold.js';

// =====================================================
// utils – Public API
// =====================================================

// ---

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
} from '@flightlesslabs/dodo-core-attributes';

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
} from '@flightlesslabs/dodo-core-attributes';

/**
 * size attribute related prop types.
 */
export {
  COMPONENT_SIZE,
  componentSizeOptions,
  type ComponentSize,
} from '@flightlesslabs/dodo-core-attributes';

/**
 * variant attribute related prop types.
 */
export {
  COMPONENT_VARIANT,
  componentVariantOptions,
  type ComponentVariant,
} from '@flightlesslabs/dodo-core-attributes';

/**
 * shadow attribute related prop types.
 */
export {
  COMPONENT_SHADOW,
  ComponentShadowOptions,
  type ComponentShadow,
} from '@flightlesslabs/dodo-core-attributes';

/**
 * theme attribute related prop types.
 */
export {
  COMPONENT_THEME,
  componentThemeOptions,
  componentThemeColorsOptions,
  type ComponentThemeColors,
  type ComponentTheme,
} from '@flightlesslabs/dodo-core-attributes';

/**
 * affix placement attribute related prop types.
 */
export {
  COMPONENT_AFFIX_PLACEMENT,
  type ComponentAffixPlacement,
  componentAffixPlacementOptions,
} from '@flightlesslabs/dodo-core-attributes';
