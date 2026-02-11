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
