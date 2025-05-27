<script lang="ts" module>
  import type { ComponentRoundness } from '$lib/types/roundness.js';
  import type { ComponentSize } from '$lib/types/size.js';

  import { type Snippet } from 'svelte';
  import type {
    ChangeEventHandler,
    ClipboardEventHandler,
    FocusEventHandler,
    FormEventHandler,
    KeyboardEventHandler,
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
    onValueChange?: (value: number | undefined) => void;
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
    /** onkeydown event handler */
    onkeydown?: KeyboardEventHandler<HTMLInputElement>;
    /** onkeypress event handler */
    onkeypress?: KeyboardEventHandler<HTMLInputElement>;
    /** onkeyup event handler */
    onkeyup?: KeyboardEventHandler<HTMLInputElement>;
  }
</script>

<script lang="ts">
  import InputEnclosure from '$lib/stories/developer tools/components/InputEnclosure/InputEnclosure.svelte';
  import DynamicInput, {
    type DynamicInputFocusEvent,
    type DynamicInputKeyboardEvent,
  } from '$lib/stories/developer tools/components/DynamicInput/DynamicInput.svelte';
  import type { TextInputFocusEvent, TextInputKeyboardEvent } from '../TextInput/TextInput.svelte';
  import isValidNumberValue from '$lib/stories/developer tools/helpers/Numbers/isValidNumberValue/isValidNumberValue.js';

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
    onkeydown,
    onkeypress,
    onkeyup,
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
    onValueChange,
  }: NumericInputProps = $props();

  let value = $state<string>('');
  let cachedValue = $state<string>('');

  let focused: boolean = $state(false);

  function onfocusMod(e: DynamicInputFocusEvent) {
    const eTyped = e as TextInputFocusEvent;
    focused = true;

    if (onfocus) {
      onfocus(eTyped);
    }
  }

  function onblurMod(e: DynamicInputFocusEvent) {
    const eTyped = e as TextInputFocusEvent;
    focused = false;

    const isValidWithoutMinMax = isValidNumberValue(`${value}`, {
      decimalPlaces,
      allowNegativeValues,
      log,
    });

    const isValid = isValidNumberValue(`${value}`, {
      decimalPlaces,
      allowNegativeValues,
      log,
      min,
      max,
    });

    if (isValid) {
      if (onValueChange) {
        onValueChange(Number(value));
      }

      value = `${Number(value)}`;
      cachedValue = `${Number(value)}`;
    } else if (isValidWithoutMinMax) {
      if (min && Number(value) < min) {
        if (onValueChange) {
          onValueChange(min);
        }

        value = `${min}`;
        cachedValue = `${min}`;
      } else if (max && Number(value) > max) {
        if (onValueChange) {
          onValueChange(max);
        }

        value = `${max}`;
        cachedValue = `${max}`;
      }
    } else if (value.trim() === '') {
      if (onValueChange) {
        onValueChange(undefined);
      }

      value = '';
      cachedValue = '';
    } else if (valueRaw || valueRaw === 0) {
      if (onValueChange) {
        onValueChange(valueRaw);
      }

      value = `${valueRaw}`;
      cachedValue = `${valueRaw}`;
    } else {
      if (onValueChange) {
        onValueChange(undefined);
      }

      value = '';
      cachedValue = '';
    }

    if (onblur) {
      onblur(eTyped);
    }
  }

  function onkeydownMod(e: DynamicInputKeyboardEvent) {
    if (onkeydown) {
      onkeydown(e as TextInputKeyboardEvent);
    }

    if (e.ctrlKey && e.key.toLocaleLowerCase() === 'c') {
      return;
    } else if (e.ctrlKey && e.key.toLocaleLowerCase() === 'v') {
      return;
    } else if (e.ctrlKey && e.key.toLocaleLowerCase() === 'x') {
      return;
    }

    const valueToCheck = `${value}${e.key.length === 1 ? e.key : ''}`;

    const isValid = isValidNumberValue(valueToCheck, {
      decimalPlaces,
      allowNegativeValues,
      log,
      strict: false,
    });

    if (!isValid) {
      e.preventDefault();
      value = cachedValue;
    } else {
      cachedValue = valueToCheck;
    }
  }

  $effect(() => {
    let updatedValue = '';

    const isValid = isValidNumberValue(`${valueRaw}`, {
      decimalPlaces,
      allowNegativeValues,
      min,
      max,
      log,
    });

    if (valueRaw === undefined) {
      updatedValue = '';
    } else if (!isValid) {
      updatedValue = '';
    } else {
      updatedValue = `${valueRaw}`;
    }

    value = updatedValue;
    cachedValue = updatedValue;
  });
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
      {oninput}
      {onchange}
      onfocus={onfocusMod}
      onblur={onblurMod}
      {onpaste}
      {oncopy}
      {oncut}
      onkeydown={onkeydownMod}
      onkeypress={onkeypress ? (e) => onkeypress(e as TextInputKeyboardEvent) : undefined}
      onkeyup={onkeyup ? (e) => onkeyup(e as TextInputKeyboardEvent) : undefined}
      {placeholder}
      {readonly}
      variant="input"
      bind:value
    />
  </InputEnclosure>
</div>
