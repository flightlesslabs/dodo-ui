<script lang="ts" module>
  import {
    componentColorDefaultOptions,
    componentColorOpacityOptions,
    componentColorOptions,
    type ComponentColor,
  } from '@flightlesslabs/dodo-core-attributes';
  import type {
    ComponentColorDefault,
    ComponentColorOpacity,
    ComponentRoundness,
  } from '@flightlesslabs/dodo-core-attributes';
  import type { ComponentShadow } from '@flightlesslabs/dodo-core-attributes';
  import type { ComponentThemeColors } from '@flightlesslabs/dodo-core-attributes';
  import type { ComponentVariant } from '@flightlesslabs/dodo-core-attributes';
  import type { Snippet } from 'svelte';

  export type CardColor = ComponentColor | ComponentColorDefault | ComponentColorOpacity;

  // Flat options (for Storybook, selects, etc.)
  export const cardColorOptions = [
    ...componentColorOptions,
    ...componentColorDefaultOptions,
    ...componentColorOpacityOptions,
  ] as const satisfies readonly CardColor[];

  /**
   * Card component props.
   * Inherits all HTML div attributes.
   */
  export interface CardProps {
    children?: Snippet;

    /** Reference to the underlying input element */
    ref?: HTMLDivElement;

    /** Border radius token (e.g. 1–3, "pill", "full") */
    roundness?: ComponentRoundness;

    /** Drop shadow */
    shadow?: ComponentShadow;

    /** Render an outlined enclosure (shows border) */
    outline?: boolean;

    /** Add mouse hover and active effects */
    active?: boolean;

    /** Custom CSS class names applied to the Card */
    class?: string;

    /** Visual variant (e.g. solid, text) */
    variant?: ComponentVariant;

    /** Color theme token */
    color?: CardColor;

    /** max height */
    'max-height'?: string;

    /** max width */
    'max-width'?: string;

    /** min height */
    'min-height'?: string;

    /** min width */
    'min-width'?: string;

    /** height */
    height?: string;

    /** width */
    width?: string;

    /** Theme color */
    theme?: ComponentThemeColors;
  }
</script>

<script lang="ts">
  let {
    class: className = '',
    color = 'default',
    roundness = 1,
    variant = 'text',
    outline = false,
    active = false,
    children,
    shadow = 1,
    width,
    height,
    'min-height': minHeight,
    'min-width': minWidth,
    'max-height': maxHeight,
    'max-width': maxWidth,
    theme,
    ...restProps
  }: CardProps = $props();

  const classes = $derived(
    [
      'dodo-ui-Card',
      `color--${color}`,
      `variant--${variant}`,
      `roundness--${roundness}`,
      `dodo-shadow-${shadow}`,
      outline && 'outline',
      active && 'active',
      theme ? `dodo-theme--${theme}` : '',
      className,
    ].filter(Boolean),
  );

  const inlineStyles = $derived(
    [
      width ? `--Card-width: ${width}` : '',
      height ? `--Card-height: ${height}` : '',
      minHeight ? `--Card-min-height: ${minHeight}` : '',
      minWidth ? `--Card-min-width: ${minWidth}` : '',
      maxHeight ? `--Card-max-height: ${maxHeight}` : '',
      maxWidth ? `--Card-max-width: ${maxWidth}` : '',
    ].filter(Boolean),
  );
</script>

<div {...restProps} class={classes.join(' ')} style={inlineStyles.join(';')}>
  {@render children?.()}
</div>
