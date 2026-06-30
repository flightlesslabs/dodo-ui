<script lang="ts" module>
  import type { Snippet } from 'svelte';
  import type { HTMLTextareaAttributes } from 'svelte/elements';

  export type TextAreaEvent = {
    currentTarget: EventTarget & HTMLTextAreaElement;
  };

  export type TextAreaFocusEvent = FocusEvent & TextAreaEvent;

  export type TextAreaKeyboardEvent = KeyboardEvent & TextAreaEvent;

  /**
   * Shared base props for the TextArea component.
   *
   * These props control the visual wrapper (InputEnclosure) and
   * common text-input behaviors.
   */
  interface TextAreaBaseProps {
    /** Input contents are not used (TextArea manages its own <input>) */
    children?: never;

    /** Reference to the underlying input element */
    ref?: HTMLTextAreaElement | null;

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

    /** Input Enclosure Props */
    inputEnclosureProps?: InputEnclosureProps;
  }

  export type TextAreaProps = TextAreaBaseProps &
    Omit<HTMLTextareaAttributes, 'size' | 'children' | 'value'> & {
      value?: string;
    };
</script>

<script lang="ts">
  import type { ComponentSize } from '@flightlesslabs/dodo-core-attributes';
  import type { ComponentRoundnessShape } from '@flightlesslabs/dodo-core-attributes';
  import InputEnclosure, {
    type InputEnclosureProps,
  } from '../InputEnclosure/InputEnclosure.svelte';

  let {
    ref = $bindable(null),
    value = $bindable(undefined),
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
    inputEnclosureProps,
    ...restProps
  }: TextAreaProps = $props();

  /**
   * Local focus state used to drive InputEnclosure focus styling.
   */
  let isFocused = $state(false);

  function handleFocus(event: FocusEvent) {
    isFocused = true;
    onfocus?.(event as TextAreaFocusEvent);
  }

  function handleBlur(event: FocusEvent) {
    isFocused = false;
    onblur?.(event as TextAreaFocusEvent);
  }

  const classes = $derived(['dodo-ui-TextArea', className].filter(Boolean));
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
  multiline
  {...inputEnclosureProps}
>
  <textarea
    {...restProps}
    bind:this={ref}
    bind:value
    {disabled}
    onfocus={handleFocus}
    onblur={handleBlur}
    class="InputBox"></textarea>
</InputEnclosure>
