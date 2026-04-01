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
 * FormField component and related prop types.
 */
export {
  default as Checkbox,
  type CheckboxProps,
} from './components/Form/Checkbox/Checkbox.svelte';

// =====================================================
// Layout Components – Public API
// =====================================================

/**
 * Theme component and related prop types.
 */
export {
  default as Theme,
  themeTypeOptions,
  type ThemeType,
  type ThemeProps,
} from './components/Layout/Theme/Theme.svelte';

// =====================================================
// utils – Public API
// =====================================================

// =====================================================
// time – Public API
// =====================================================

/**
 * createDate and related prop types.
 */
export {
  createDate,
  type DayjsInstance,
  type CreateDateInput,
  type CreateDateFormat,
  type CreateDateOptions,
} from './utils/time/createDate/createDate.js';

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
