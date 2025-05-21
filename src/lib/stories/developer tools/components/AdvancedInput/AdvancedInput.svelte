<script lang="ts" module>
  import type { ComponentSize } from '$lib/types/size.js';
  import type { ComponentRoundness } from '$lib/types/roundness.js';
  import type { Snippet } from 'svelte';
  import type {
    ChangeEventHandler,
    ClipboardEventHandler,
    FocusEventHandler,
    FormEventHandler,
  } from 'svelte/elements';

  export type AdvancedInputOption = {
    value: string | number | boolean | null | undefined;
    label: string;
    disabled?: boolean;
  };

  export interface AdvancedInputProps {
    /** Input type? */
    type?: TextInputType;
    /** Input ref */
    ref?: HTMLInputElement;
    /** Input value */
    value?: string;
    /** How round should the border radius be? */
    placeholder?: string;
    /** disabled state */
    disabled?: boolean;
    /** Read only ? */
    readonly?: boolean;
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
  import type { TextInputFocusEvent } from '../TextInput/TextInput.svelte';
  import UtilityButton from '$lib/stories/developer tools/components/UtilityButton/UtilityButton.svelte';
  import Icon from '@iconify/svelte';
  import { Menu, MenuItem, Popper, type TextInputType } from '$lib/index.js';

  let {
    type = 'text',
    size = 'normal',
    roundness = 1,
    outline = true,
    name,
    id,
    class: className = '',
    disabled = false,
    onchange,
    oninput,
    onadvancedInput,
    onblur,
    onfocus,
    onpaste,
    oncopy,
    oncut,
    before,
    after,
    error = false,
    value = $bindable<string>(),
    placeholder,
    ref = $bindable<HTMLInputElement>(),
    readonly = false,
    searchable = false,
    clearable = false,
    onclear,
    options,
  }: AdvancedInputProps = $props();

  let focused: boolean = $state(false);
  let open: boolean = $state(false);
  const advancedInputedOption = $derived(value);

  function onfocusMod(e: TextInputFocusEvent) {
    focused = true;
    open = true;

    if (onfocus) {
      onfocus(e);
    }
  }

  function onblurMod(e: TextInputFocusEvent) {
    focused = false;

    if (onblur) {
      onblur(e);
    }
  }

  function onClickOutside() {
    open = false;
  }

  function onadvancedInputMod(val: AdvancedInputOption) {
    if (onadvancedInput) {
      onadvancedInput(val);
    }

    open = false;
  }
</script>

<input
  class={['dodo-ui-AdvancedInput', className].join(' ')}
  {type}
  {name}
  {id}
  {disabled}
  {oninput}
  {onchange}
  onfocus={onfocusMod}
  onblur={onblurMod}
  {onpaste}
  {oncopy}
  {oncut}
  {placeholder}
  bind:value
  bind:this={ref}
  readonly={readonly || !searchable}
/>

<style lang="scss">
  .dodo-ui-AdvancedInput {
  }
</style>
