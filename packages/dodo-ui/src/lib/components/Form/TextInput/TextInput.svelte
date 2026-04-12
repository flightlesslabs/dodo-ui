<script lang="ts" module>
  import type { Snippet } from 'svelte';
  import type { HTMLInputAttributes } from 'svelte/elements';

  export type TextInputEvent = {
    currentTarget: EventTarget & HTMLInputElement;
  };

  export type TextInputFocusEvent = FocusEvent & TextInputEvent;

  /**
   * Shared base props for the TextInput component.
   *
   * These props control the visual wrapper (InputEnclosure) and
   * common text-input behaviors.
   */
  interface TextInputBaseProps {
    /** Input contents are not used (TextInput manages its own <input>) */
    children?: never;

    /** Reference to the underlying input element */
    ref?: HTMLInputElement | null;

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

  /**
   * TextInput component props.
   *
   * Renders a semantic <input type="text"> wrapped in InputEnclosure.
   * Inherits all native HTML input attributes (placeholder, value, name, etc.).
   */
  export type TextInputProps = TextInputBaseProps & Omit<HTMLInputAttributes, 'size' | 'children'>;
</script>

<script lang="ts">
  import type { ComponentSize } from '$lib/attributes/size.js';
  import type { ComponentRoundnessShape } from '$lib/attributes/roundness.js';
  import InputEnclosure from '../InputEnclosure/InputEnclosure.svelte';

  let {
    ref = $bindable(null),
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
  }: TextInputProps = $props();

  /**
   * Local focus state used to drive InputEnclosure focus styling.
   */
  let isFocused = $state(false);

  function handleFocus(event: FocusEvent) {
    isFocused = true;
    onfocus?.(event as TextInputFocusEvent);
  }

  function handleBlur(event: FocusEvent) {
    isFocused = false;
    onblur?.(event as TextInputFocusEvent);
  }

  const classes = $derived(['dodo-ui-TextInput', className].filter(Boolean));
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
  <input
    {...restProps}
    bind:this={ref}
    {disabled}
    onfocus={handleFocus}
    onblur={handleBlur}
    class="InputBox"
  />
</InputEnclosure>
