<script lang="ts" module>
  import type { Snippet } from 'svelte';

  export const GRID_COLUMN_BREAKPOINT = {
    numerical: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    flex: ['flex'],
  } as const;

  export type GridColumnSizeNumerical = (typeof GRID_COLUMN_BREAKPOINT.numerical)[number];
  type GridColumnSizeFlex = (typeof GRID_COLUMN_BREAKPOINT.flex)[number];
  export type GridColumnSize = GridColumnSizeNumerical | GridColumnSizeFlex;

  export const gridColumnSizeOptions = [
    ...GRID_COLUMN_BREAKPOINT.numerical,
    ...GRID_COLUMN_BREAKPOINT.flex,
  ] as const satisfies readonly GridColumnSize[];

  export const gridColumnSizeNumericalOptions = GRID_COLUMN_BREAKPOINT.numerical;

  export interface GridColumnProps {
    /** Custom CSS class names */
    class?: string;

    /** Column contents go here */
    children?: Snippet;

    /** GridColumn ref */
    ref?: HTMLDivElement | null;

    /** Breakpoint: size (default unit) */
    size?: GridColumnSize;

    /** Breakpoint: sm */
    sm?: GridColumnSize;

    /** Breakpoint: md */
    md?: GridColumnSize;

    /** Breakpoint: lg */
    lg?: GridColumnSize;

    /** Breakpoint: xl */
    xl?: GridColumnSize;

    /** Breakpoint: xxl */
    xxl?: GridColumnSize;
  }
</script>

<script lang="ts">
  let {
    class: className = '',
    ref = $bindable(null),
    children,
    size = 12,
    sm,
    md,
    lg,
    xl,
    xxl,
  }: GridColumnProps = $props();

  const classes = $derived(
    [
      'dodo-ui-Grid-Column',
      `column-size--default--${size}`,
      sm ? `column-size--sm--${sm}` : '',
      md ? `column-size--md--${md}` : '',
      lg ? `column-size--lg--${lg}` : '',
      xl ? `column-size--xl--${xl}` : '',
      xxl ? `column-size--xxl--${xxl}` : '',
      className,
    ].filter(Boolean),
  );
</script>

<div class={classes.join(' ')} bind:this={ref}>
  {@render children?.()}
</div>
