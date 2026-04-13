<script lang="ts" module>
  import type { ComponentProps, Snippet } from 'svelte';
  import type { HTMLInputAttributes } from 'svelte/elements';

  interface NumericInputBaseProps {
    /** Input contents are not used (NumericInput manages its own <input>) */
    children?: never;

    /** Visual size token (e.g. small, normal, large) */
    size?: ComponentSize;

    /** Border radius token (e.g. 1–3, "pill") */
    roundness?: ComponentRoundnessShape;

    /** Render an outlined enclosure (shows border) */
    outline?: boolean;

    /** Custom CSS class names applied to the InputEnclosure */
    class?: string;

    /** Disabled state of the input */
    disabled?: boolean;

    /**
     * Error visual state.
     *
     * When true, applies error styling to the enclosure.
     * Intended for validation errors.
     */
    error?: boolean;

    /**
     * Focused visual state.
     *
     * When true, forces focused styling on the enclosure.
     * Usually controlled automatically via focus/blur.
     */
    focused?: boolean;

    /**
     * Content rendered before the input (prefix).
     *
     * Use {#snippet before} in Svelte.
     */
    before?: Snippet;

    /**
     * Content rendered after the input (suffix).
     *
     * Use {#snippet after} in Svelte.
     */
    after?: Snippet;
  }

  type NumericFormatLibraryProps = ComponentProps<typeof NumericFormat>;

  export type NumericInputProps = NumericInputBaseProps &
    Omit<HTMLInputAttributes, 'size' | 'children'> &
    NumericFormatLibraryProps;
</script>

<script lang="ts">
  import { NumericFormat } from 'svelte-number-format';

  import {
    InputEnclosure,
    type ComponentRoundnessShape,
    type ComponentSize,
    type TextInputFocusEvent,
  } from '@flightlesslabs/dodo-ui';

  let {
    value = $bindable(null),
    size = 'normal',
    roundness = 1,
    outline = true,
    class: className = '',
    disabled = false,
    error = false,
    focused: forcedFocused = false,
    before,
    after,
    onfocus,
    onblur,
    ...restProps
  }: NumericInputProps = $props();

  let isFocused = $state(false);

  function handleFocus(event: FocusEvent) {
    isFocused = true;
    onfocus?.(event as TextInputFocusEvent);
  }

  function handleBlur(event: FocusEvent) {
    isFocused = false;
    onblur?.(event as TextInputFocusEvent);
  }

  const classes = $derived(['dodo-ui-NumericInput', className].filter(Boolean));
</script>

<InputEnclosure
  {size}
  {roundness}
  {outline}
  {disabled}
  {error}
  focused={forcedFocused || isFocused}
  class={classes.join(' ')}
  {before}
  {after}
>
  <NumericFormat
    {...restProps}
    {disabled}
    onfocus={handleFocus}
    onblur={handleBlur}
    bind:value
    class="InputBox"
  />
</InputEnclosure>
