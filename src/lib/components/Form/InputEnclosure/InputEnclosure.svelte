<script lang="ts" module>
  import type { Snippet } from 'svelte';
  import type { HTMLAttributes } from 'svelte/elements';

  /**
   * Shared base props for the InputEnclosure component.
   *
   * These props apply to the root <div> wrapper that visually encloses
   * form controls such as inputs, selects, or custom fields.
   */
  interface InputEnclosureBaseProps {
    /** InputEnclosure contents (typically an input or control slot) */
    children?: Snippet;

    /** Reference to the underlying root div element */
    ref?: HTMLDivElement;

    /** Visual size token (e.g. small, normal, large) */
    size?: ComponentSize;

    /** Border radius token (e.g. 1–3, "pill") */
    roundness?: ComponentRoundnessShape;

    /** Render an outlined enclosure (shows border) */
    outline?: boolean;

    /** Custom CSS class names */
    class?: string;

    /** Disabled visual state of the enclosure */
    disabled?: boolean;

    /**
     * Error visual state.
     *
     * When true, applies error styling (e.g. red border).
     * Intended for validation errors.
     */
    error?: boolean;

    /**
     * Focused visual state.
     *
     * When true, applies focus styling to the enclosure.
     * Useful when the enclosed input is focused but focus
     * styling is handled at the wrapper level.
     */
    focused?: boolean;

    /**
     * Content rendered before the input (e.g. icon, prefix, button).
     *
     * This content is rendered inside an internal affix wrapper.
     */
    before?: Snippet;

    /**
     * Content rendered after the input (e.g. clear button, suffix, icon).
     *
     * This content is rendered inside an internal affix wrapper.
     */
    after?: Snippet;
  }

  /**
   * InputEnclosure component props.
   *
   * Renders a semantic <div> wrapper around form controls.
   * Inherits all native HTML div attributes (e.g. id, style, data-*, aria-*).
   */
  export type InputEnclosureProps = InputEnclosureBaseProps & HTMLAttributes<HTMLDivElement>;
</script>

<script lang="ts">
  import type { ComponentSize } from '$lib/attributes/size.js';
  import type { ComponentRoundnessShape } from '$lib/attributes/roundness.js';
  import InputAffix from './InputAffix.svelte';

  /**
   * InputEnclosure component runtime props.
   *
   * These props are destructured from `$props()` and mapped to
   * CSS utility classes that control visual appearance.
   */
  let {
    children,
    size = 'normal',
    roundness = 1,
    outline = true,
    class: className = '',
    disabled = false,
    error = false,
    focused = false,
    before,
    after,
    ref = $bindable<HTMLDivElement>(),
    ...restProps
  }: InputEnclosureProps = $props();

  /**
   * Computed class list for the InputEnclosure component.
   */
  const classes = $derived(
    [
      'dodo-ui-InputEnclosure',
      `size--${size}`,
      `roundness--${roundness}`,
      outline && 'outline',
      focused && 'focused',
      error && 'error',
      disabled && 'disabled',
      className,
    ].filter(Boolean),
  );
</script>

<div {...restProps} class={classes.join(' ')} bind:this={ref}>
  {#if before}
    <InputAffix placement="before">
      {@render before()}
    </InputAffix>
  {/if}

  {@render children?.()}

  {#if after}
    <InputAffix placement="after">
      {@render after()}
    </InputAffix>
  {/if}
</div>
