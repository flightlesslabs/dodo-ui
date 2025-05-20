import '$lib/styles/global.css';

export type {
  ComponentColorPriority,
  ComponentColorSeverity,
  ComponentColor,
} from './types/colors.js';

export type { ComponentRoundness } from './types/roundness.js';

export type { ComponentSize } from './types/size.js';

export type { ComponentWeight } from './types/weight.js';

/** developer tools: components: UtilityButton */
export { default as UtilityButton } from '$lib/stories/developer tools/components/UtilityButton/UtilityButton.svelte';
export type { UtilityButtonProps } from '$lib/stories/developer tools/components/UtilityButton/UtilityButton.svelte';

/** developer tools: components: InputEnclosure */
export { default as InputEnclosure } from '$lib/stories/developer tools/components/InputEnclosure/InputEnclosure.svelte';
export type { InputEnclosureProps } from '$lib/stories/developer tools/components/InputEnclosure/InputEnclosure.svelte';

/** Form: Button */
export { default as Button } from '$lib/stories/components/Form/Button/Button.svelte';
export type {
  ButtonLinkTarget,
  ButtonLinkReferrerpolicy,
  ButtonType,
  ButtonProps,
} from '$lib/stories/components/Form/Button/Button.svelte';

/** Form: TextInput */
export { default as TextInput } from '$lib/stories/components/Form/TextInput/TextInput.svelte';
export type {
  TextInputType,
  TextInputFocusEvent,
  TextInputClipboardEvent,
  TextInputProps,
} from '$lib/stories/components/Form/TextInput/TextInput.svelte';

/** Form: PasswordInput */
export { default as PasswordInput } from '$lib/stories/components/Form/PasswordInput/PasswordInput.svelte';
export type {
  PasswordInputToggleEvent,
  PasswordInputProps,
} from '$lib/stories/components/Form/PasswordInput/PasswordInput.svelte';

/** Form: Label */
export { default as Label } from '$lib/stories/components/Form/Label/Label.svelte';
export type { LabelProps } from '$lib/stories/components/Form/Label/Label.svelte';

/** Form: FormControl */
export { default as FormControl } from '$lib/stories/components/Form/FormControl/FormControl.svelte';
export type { FormControlProps } from '$lib/stories/components/Form/FormControl/FormControl.svelte';

/** Form: Message */
export { default as Message } from '$lib/stories/components/Form/Message/Message.svelte';
export type { MessageProps } from '$lib/stories/components/Form/Message/Message.svelte';

/** Form: SimpleSelect */
export { default as SimpleSelect } from '$lib/stories/components/Form/SimpleSelect/SimpleSelect.svelte';
export type {
  SimpleSelectFocusEvent,
  SimpleSelectOption,
  SimpleSelectProps,
} from '$lib/stories/components/Form/SimpleSelect/SimpleSelect.svelte';

/** Layout: Paper */
export { default as Paper } from '$lib/stories/components/Layout/Paper/Paper.svelte';
export type { PaperColor, PaperProps } from '$lib/stories/components/Layout/Paper/Paper.svelte';
