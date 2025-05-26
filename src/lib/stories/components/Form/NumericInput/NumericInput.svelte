<script lang="ts" module>
  import type { ComponentRoundness } from '$lib/types/roundness.js';
  import type { ComponentSize } from '$lib/types/size.js';

  import type { Snippet } from 'svelte';
  import type {
    ChangeEventHandler,
    ClipboardEventHandler,
    FocusEventHandler,
    FormEventHandler,
  } from 'svelte/elements';

  export interface NumericInputProps {
    /** min */
    min?: number;
    /** max */
    max?: number;
    /** Allow Negative Values */
    allowNegativeValues?: boolean;
    /** Decimal Places */
    decimalPlaces?: number;
    /** Log number validations */
    log?: boolean;
    /** Input ref */
    ref?: HTMLInputElement;
    /** How large should the button be? */
    size?: ComponentSize;
    /** How round should the border radius be? */
    roundness?: ComponentRoundness;
    /** Add a border around the button. Default True */
    outline?: boolean;
    /** Input value */
    value?: number;
    /** How round should the border radius be? */
    placeholder?: string;
    /** disabled state */
    disabled?: boolean;
    /** Read only ? */
    readonly?: boolean;
    /** is there any associated Error ? */
    error?: boolean;
    /** Name */
    name?: string;
    /** Id */
    id?: string;
    /** Icon before button content */
    before?: Snippet;
    /** Icon after button content */
    after?: Snippet;
    /** Custom css class*/
    class?: string;
    /** on Numeric Value Change */
    onNumericValueChange?: (value: number | undefined) => void;
    /** oninput event handler */
    oninput?: FormEventHandler<HTMLInputElement>;
    /** onchange event handler */
    onchange?: ChangeEventHandler<HTMLInputElement>;
    /** onblur event handler */
    onblur?: FocusEventHandler<HTMLInputElement>;
    /** onfocus event handler */
    onfocus?: FocusEventHandler<HTMLInputElement>;
    /** onpaste event handler */
    onpaste?: ClipboardEventHandler<HTMLInputElement>;
    /** oncopy event handler */
    oncopy?: ClipboardEventHandler<HTMLInputElement>;
    /** oncut event handler */
    oncut?: ClipboardEventHandler<HTMLInputElement>;
  }
</script>

<script lang="ts">
  import InputEnclosure from '$lib/stories/developer tools/components/InputEnclosure/InputEnclosure.svelte';
  import DynamicInput, {
    type DynamicInputFocusEvent,
  } from '$lib/stories/developer tools/components/DynamicInput/DynamicInput.svelte';
  import type { TextInputFocusEvent, TextInputInputEvent } from '../TextInput/TextInput.svelte';
  import isValidNumberValue, {
    isNumericString,
  } from '$lib/stories/developer tools/helpers/Numbers/isValidNumberValue/isValidNumberValue.js';
  import cleanNumericString from '$lib/stories/developer tools/helpers/Numbers/cleanNumericString/cleanNumericString.js';

  let {
    size = 'normal',
    roundness = 1,
    outline = true,
    name,
    id,
    class: className = '',
    disabled = false,
    oninput,
    onchange,
    onblur,
    onfocus,
    onpaste,
    oncopy,
    oncut,
    before,
    after,
    error = false,
    value: valueRaw,
    placeholder,
    ref = $bindable<HTMLInputElement>(),
    readonly = false,
    decimalPlaces = 0,
    allowNegativeValues = false,
    min,
    max,
    log = false,
    onNumericValueChange,
  }: NumericInputProps = $props();

  function getValidatedValue(value: string | number | undefined) {
    if (value === undefined) {
      return '';
    }

    const isValidNumber = isValidNumberValue(`${value}`, {
      decimalPlaces,
      allowNegativeValues,
      min,
      max,
      log,
    });

    if (isValidNumber) {
      return `${value}`;
    } else {
      return '';
    }
  }

  let stackValue = $state<string>(getValidatedValue(valueRaw));
  let cachedValue = $state<string>(getValidatedValue(valueRaw));

  let focused: boolean = $state(false);

  function oninputMod(e: TextInputInputEvent) {
    if (!ref) {
      return;
    }

    const target = e.target as HTMLInputElement;
    const cleanValue = cleanNumericString(target.value);

    const isValidNumber = isValidNumberValue(`${cleanValue}`, {
      decimalPlaces,
      allowNegativeValues,
      log,
    });

    if (isValidNumber) {
      cachedValue = cleanValue;
      ref.value = cleanValue;
    } else {
      stackValue = cachedValue;
      ref.value = cachedValue;
    }

    if (oninput) {
      oninput(e);
    }
  }

  function onfocusMod(e: DynamicInputFocusEvent) {
    const eTyped = e as TextInputFocusEvent;
    focused = true;

    if (onfocus) {
      onfocus(eTyped);
    }
  }

  function onblurMod(e: DynamicInputFocusEvent) {
    if (!ref) {
      return;
    }

    const eTyped = e as TextInputFocusEvent;
    focused = false;

    const isValidNumberPartial = isValidNumberValue(`${stackValue}`, {
      decimalPlaces,
      allowNegativeValues,
      log,
      min,
      max,
    });

    const isValidNumberString = isNumericString(stackValue);

    const isValid = isValidNumberPartial && isValidNumberString;

    if (isValid) {
      if (onNumericValueChange) {
        onNumericValueChange(Number(stackValue));
      }
    } else {
      if (onNumericValueChange) {
        onNumericValueChange(valueRaw);
      }

      if (valueRaw || valueRaw === 0) {
        stackValue === `${valueRaw}`;
        cachedValue === `${valueRaw}`;
        ref.value = `${valueRaw}`;
      } else {
        stackValue === '';
        cachedValue === '';
        ref.value = '';
      }
    }

    if (onblur) {
      onblur(eTyped);
    }
  }
</script>

<div
  class:outline
  class:disabled
  class:error
  class:focused
  class={['dodo-ui-NumericInput', `size--${size}`, `roundness--${roundness}`, className].join(' ')}
>
  <InputEnclosure {outline} {disabled} {error} {focused} {size} {roundness} {before} {after}>
    <DynamicInput
      type="text"
      {name}
      {id}
      {disabled}
      bind:ref
      oninput={oninputMod}
      {onchange}
      onfocus={onfocusMod}
      onblur={onblurMod}
      {onpaste}
      {oncopy}
      {oncut}
      {placeholder}
      {readonly}
      variant="input"
      bind:value={stackValue}
    />
  </InputEnclosure>
</div>
