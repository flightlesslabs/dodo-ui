<script lang="ts" module>
  import type { Snippet } from 'svelte';

  /**
   * Shared base props for the Search component.
   *
   * These props control the visual wrapper (InputEnclosure) and
   * common text-input behaviors.
   */
  interface SearchBaseProps {
    /** Input contents are not used (Search manages its own <input>) */
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

    /**
     * Placement of the affixIcon.
     *
     * - "before": renders before control
     * - "after": renders after control
     */
    affixPlacement?: ComponentAffixPlacement;

    /**
     * Custom AffixIcon.
     *
     * Use {#snippet customAffixIcon} in Svelte.
     */
    customAffixIcon?: Snippet;

    /** is search clearable. */
    clearable?: boolean;

    /** onclear event */
    onclear?: () => void;

    /** show Search AffixIcon */
    showAffixIcon?: boolean;

    /**  highlight Search AffixIcon on focus */
    highlightAffixIcon?: boolean;

    /** onsearch event */
    onsearch?: () => void;

    /** clear on Escape */
    clearOnEscape?: boolean;

    /** Input Enclosure Props */
    inputEnclosureProps?: InputEnclosureProps;
  }

  /**
   * Search component props.
   *
   * Renders a semantic <input type="text"> wrapped in InputEnclosure.
   * Inherits all native HTML input attributes (placeholder, value, name, etc.).
   */
  export type SearchProps = SearchBaseProps &
    Omit<HTMLInputAttributes, 'size' | 'children' | 'type' | 'value'> & {
      value?: string;
    };
</script>

<script lang="ts">
  import type {
    ComponentAffixPlacement,
    ComponentSize,
  } from '@flightlesslabs/dodo-core-attributes';
  import type { ComponentRoundnessShape } from '@flightlesslabs/dodo-core-attributes';
  import InputEnclosure, {
    type InputEnclosureProps,
  } from '../InputEnclosure/InputEnclosure.svelte';
  import type { TextInputFocusEvent, TextInputKeyboardEvent } from '../TextInput/TextInput.svelte';
  import type { HTMLInputAttributes } from 'svelte/elements';
  import SearchIcon from './SearchIcon.svelte';
  import SearchClearableButton from './SearchClearableButton.svelte';

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
    before: beforeProp,
    after: afterProp,
    onfocus,
    onblur,
    affixPlacement = 'before',
    customAffixIcon,
    clearable = false,
    onclear,
    showAffixIcon = true,
    highlightAffixIcon = false,
    clearOnEscape = false,
    onsearch,
    onkeydown,
    inputEnclosureProps,
    ...restProps
  }: SearchProps = $props();

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

  function handleOnClear() {
    value = undefined;

    if (onclear) {
      onclear();
    }
  }

  function handleKeydown(event: TextInputKeyboardEvent) {
    if (event.key === 'Enter' && onsearch) {
      onsearch();
    }

    if (event.key === 'Escape' && clearable && clearOnEscape) {
      handleOnClear();
    }

    if (onkeydown) {
      onkeydown(event);
    }
  }

  const classes = $derived(['dodo-ui-Search', className].filter(Boolean));
</script>

<InputEnclosure
  {size}
  {roundness}
  {outline}
  {disabled}
  {error}
  focused={forcedFocused || isFocused}
  class={classes.join(' ')}
  affixSpacingBefore={showAffixIcon && affixPlacement === 'before' ? 'tight' : 'default'}
  affixSpacingAfter={showAffixIcon && affixPlacement === 'after' ? 'tight' : 'default'}
  {...inputEnclosureProps}
>
  <input
    {...restProps}
    type="search"
    bind:this={ref}
    bind:value
    {disabled}
    onfocus={handleFocus}
    onblur={handleBlur}
    onkeydown={handleKeydown}
    class="InputBox"
  />

  {#snippet before()}
    {#if affixPlacement === 'before'}
      <SearchIcon
        {size}
        {highlightAffixIcon}
        focused={forcedFocused || isFocused}
        {customAffixIcon}
        {showAffixIcon}
      />
    {/if}

    {@render beforeProp?.()}
  {/snippet}

  {#snippet after()}
    <SearchClearableButton onclick={handleOnClear} {size} {disabled} {clearable} {value} />

    {#if affixPlacement === 'after'}
      <SearchIcon
        {size}
        {highlightAffixIcon}
        focused={forcedFocused || isFocused}
        {customAffixIcon}
        {showAffixIcon}
      />
    {/if}

    {@render afterProp?.()}
  {/snippet}
</InputEnclosure>
