// =====================================================
// Form Components – Public API
// =====================================================

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
 * Select component and related prop types.
 */
export {
  default as Select,
  type SelectProps,
  type SelectOption,
} from './components/Form/Select/Select.svelte';

export {
  type SelectInputProps,
  type SelectInputCustomSelectedContentContext,
} from './components/Form/Select/SelectInput.svelte';

export {
  type SelectPopupProps,
  type SelectPopupCustomListItemContentContext,
} from './components/Form/Select/SelectPopup.svelte';

/**
 * ToggleGroup component and related prop types.
 */
export {
  default as ToggleGroup,
  type ToggleGroupProps,
  type ToggleGroupOption,
  type ToggleGroupSingleProps,
  type ToggleGroupMultipleProps,
  type ToggleGroupCustomContentContext,
} from './components/Form/ToggleGroup/ToggleGroup.svelte';

export {
  default as ToggleGroupItem,
  type ToggleGroupItemProps,
} from './components/Form/ToggleGroup/ToggleGroupItem/ToggleGroupItem.svelte';

/**
 * Dropdown component and related prop types.
 */
export {
  default as Dropdown,
  type DropdownProps,
  type DropdownMenuOption,
  type DropdownCustomMenuItemContentContext,
} from './components/Form/Dropdown/Dropdown.svelte';

export {
  default as DropdownTrigger,
  type DropdownTriggerProps,
} from './components/Form/Dropdown/DropdownTrigger/DropdownTrigger.svelte';

export {
  default as DropdownMenu,
  type DropdownMenuProps,
} from './components/Form/Dropdown/DropdownMenu/DropdownMenu.svelte';

export {
  default as DropdownMenuItem,
  type DropdownMenuItemProps,
} from './components/Form/Dropdown/DropdownMenuItem/DropdownMenuItem.svelte';

// =====================================================
// Layout Components – Public API
// =====================================================

/**
 * Accordion component and related prop types.
 */
export {
  default as Accordion,
  type AccordionProps,
} from './components/Layout/Accordion/Accordion.svelte';

export {
  default as AccordionItem,
  type AccordionItemProps,
} from './components/Layout/Accordion/AccordionItem/AccordionItem.svelte';

export {
  default as AccordionTrigger,
  type AccordionTriggerProps,
} from './components/Layout/Accordion/AccordionItem/AccordionTrigger.svelte';

export {
  getAccordionContext,
  setAccordionContext,
  useAccordionContext,
  type AccordionContext,
} from './components/Layout/Accordion/context.js';

// =====================================================
// Feedback Components – Public API
// =====================================================

/**
 * Modal component and related prop types.
 */
export { default as Modal, type ModalProps } from './components/Feedback/Modals/Modal/Modal.svelte';

export {
  default as ModalCard,
  type ModalCardProps,
} from './components/Feedback/Modals/Modal/ModalCard/ModalCard.svelte';

export { type ModalContentControlsProps } from './components/Feedback/Modals/Modal/ModalCard/Controls.svelte';

export { type ModalContentDescriptionProps } from './components/Feedback/Modals/Modal/ModalCard/Description.svelte';

export { type ModalContentTitleProps } from './components/Feedback/Modals/Modal/ModalCard/Title.svelte';

/**
 * InformDialog component and related prop types.
 */
export {
  default as InformDialog,
  type InformDialogProps,
} from './components/Feedback/Modals/InformDialog/InformDialog.svelte';

export {
  default as InformDialogCard,
  type InformDialogCardProps,
  type ModalActionButtonProps,
} from './components/Feedback/Modals/InformDialog/InformDialogCard/InformDialogCard.svelte';

/**
 * ConfirmDialog component and related prop types.
 */
export {
  default as ConfirmDialog,
  type ConfirmDialogProps,
} from './components/Feedback/Modals/ConfirmDialog/ConfirmDialog.svelte';

export {
  default as ConfirmDialogCard,
  type ConfirmDialogCardProps,
} from './components/Feedback/Modals/ConfirmDialog/ConfirmDialogCard/ConfirmDialogCard.svelte';

/**
 * ModalManager component and related prop types.
 */
export {
  default as ModalManager,
  type ModalManagerProps,
  type ModalManagerCustomCardBaseContext,
} from './components/Feedback/Modals/ModalManager/ModalManager.svelte';

export { type ModalManagerCustomCardModalContext } from './components/Feedback/Modals/ModalManager/ModalRenderer.svelte';

export { type ModalManagerCustomCardInformContext } from './components/Feedback/Modals/ModalManager/InformRenderer.svelte';

export { type ModalManagerCustomCardConfirmContext } from './components/Feedback/Modals/ModalManager/ConfirmRenderer.svelte';

export {
  modals,
  type ModalDialogType,
  type ModalDialogBaseConfig,
  type ModalDialogModalConfig,
  type ModalDialogInformConfig,
  type ModalDialogConfirmConfig,
  type ActiveModal,
} from './components/Feedback/Modals/ModalManager/modals.svelte.ts';

/**
 * Toast component and related prop types.
 */
export { default as Toast, type ToastProps } from './components/Feedback/Toasts/Toast/Toast.svelte';

export { type ToastContentDescriptionProps } from './components/Feedback/Toasts/Toast/Description.svelte';

export { type ToastContentTitleProps } from './components/Feedback/Toasts/Toast/Title.svelte';

/**
 * ToastManager component and related prop types.
 */
export {
  default as ToastManager,
  type ToastManagerProps,
} from './components/Feedback/Toasts/ToastManager/ToastManager.svelte';

export {
  toasts,
  type ToastInput,
  type ToastItem,
} from './components/Feedback/Toasts/ToastManager/toasts.svelte.ts';
