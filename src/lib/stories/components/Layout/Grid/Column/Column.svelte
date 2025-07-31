<script lang="ts" module>
  import { type Snippet } from 'svelte';

  export type GridColumnSize = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

  export const GridColumnSizeArray: GridColumnSize[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  export interface GridColumnProps {
    /** GridColumn contents goes here */
    children?: Snippet;
    /** GridColumn ref */
    ref?: HTMLDivElement;
    /** Custom css class */
    class?: string;
    /** Breakpoint: sm */
    sm?: GridColumnSize;
    /** Breakpoint: md */
    md?: GridColumnSize;
    /** Breakpoint: lg */
    lg?: GridColumnSize;
    /** Breakpoint: xl */
    xl?: GridColumnSize;
    /** Breakpoint: 2 xl */
    xl2?: GridColumnSize;
  }
</script>

<script lang="ts">
  let {
    children,
    class: className = '',
    ref = $bindable<HTMLDivElement>(),
    sm = 12,
    md,
    lg,
    xl,
    xl2,
  }: GridColumnProps = $props();

  const breakpoints = [
    { name: 'sm', value: sm },
    { name: 'md', value: md },
    { name: 'lg', value: lg },
    { name: 'xl', value: xl },
    { name: 'xl2', value: xl2 },
  ];

  function getBreakpointClasses() {
    let classNameBreakpoints = [];

    for (let index = 0; index < breakpoints.length; index++) {
      const element = breakpoints[index];

      if (!element.value) {
        continue;
      }

      classNameBreakpoints.push(`breakpoint--${element.name}`);
    }

    return classNameBreakpoints;
  }

  function getBreakpointCssVariables() {
    let cssVariablesBreakpoints = [];

    for (let index = 0; index < breakpoints.length; index++) {
      const element = breakpoints[index];

      if (!element.value) {
        continue;
      }

      cssVariablesBreakpoints.push(`--GridColumnBreakpoint-${element.name}: ${element.value}`);
    }

    return cssVariablesBreakpoints.join(';');
  }
</script>

<div
  class={['dodo-ui-GridColumn', ...getBreakpointClasses(), className].join(' ')}
  style={getBreakpointCssVariables()}
  bind:this={ref}
>
  {#if children}
    {@render children()}
  {/if}
</div>

<style lang="scss">
  @use '../../../../../styles/scss' as *;

  .dodo-ui-GridColumn {
    min-width: 0;

    &.breakpoint {
      &--sm {
        grid-column: span var(--GridColumnBreakpoint-sm);
      }

      &--md {
        @media (min-width: map-get($breakpoints, md)) {
          grid-column: span var(--GridColumnBreakpoint-md);
        }
      }

      &--lg {
        @media (min-width: map-get($breakpoints, lg)) {
          grid-column: span var(--GridColumnBreakpoint-lg);
        }
      }

      &--xl {
        @media (min-width: map-get($breakpoints, xl)) {
          grid-column: span var(--GridColumnBreakpoint-xl);
        }
      }

      &--xl2 {
        @media (min-width: map-get($breakpoints, xl2)) {
          grid-column: span var(--GridColumnBreakpoint-xl2);
        }
      }
    }
  }
</style>
