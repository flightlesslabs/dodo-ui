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

/**
 * FormField component and related prop types.
 */
export {
  default as FormField,
  type FormFieldProps,
} from './components/Form/FormField/FormField.svelte';

/**
 * Checkbox component and related prop types.
 */
export {
  default as Checkbox,
  type CheckboxProps,
} from './components/Form/Checkbox/Checkbox.svelte';

/**
 * RadioGroup component and related prop types.
 */
export {
  default as RadioGroup,
  type RadioGroupProps,
} from './components/Form/RadioGroup/RadioGroup.svelte';
export { default as Radio, type RadioProps } from './components/Form/RadioGroup/Radio/Radio.svelte';

/**
 * Switch component and related prop types.
 */
export { default as Switch, type SwitchProps } from './components/Form/Switch/Switch.svelte';

/**
 * UtilityButton component and related prop types.
 */
export {
  default as UtilityButton,
  type UtilityButtonAsButtonProps,
  type UtilityButtonAsAnchorProps,
  type UtilityButtonProps,
} from './components/Form/UtilityButton/UtilityButton.svelte';

/**
 * Select component and related prop types.
 */
export {
  default as Select,
  type SelectProps,
  type SelectOption,
} from './components/Form/Select/Select.svelte';

export { type SelectInputProps } from './components/Form/Select/SelectInput.svelte';

export { type SelectPopupProps } from './components/Form/Select/SelectPopup.svelte';

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
  CARD_COLOR,
  default as Card,
  cardColorOptions,
  type CardColor,
  type CardProps,
} from './components/Layout/Card/Card.svelte';

// =====================================================
// utils – Public API
// =====================================================

// =====================================================
// time – Public API
// =====================================================

/**
 * createDateFactory and related prop types.
 */
export { createDateFactory } from './utils/time/date-creator/createDateFactory/createDateFactory.js';
export type {
  CreateDateInput,
  CreateDateFormat,
  CreateDateOptions,
} from './utils/time/date-creator/createDateFactory/types.js';

/**
 * createDate and related prop types.
 */
export { createDate } from './utils/time/date-creator/createDate/createDate.js';

/**
 * timeout and related prop types.
 */
export { timeout } from './utils/time/timeout/timeout.js';

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
