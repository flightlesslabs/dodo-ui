<script lang="ts" module>
  import type { ComponentColor } from '$lib/types/colors.js';

  export type PaperColor = 'default' | ComponentColor;
</script>

<script lang="ts">
  import type { ComponentRoundness } from '$lib/types/roundness.js';
  import type { ComponentShadow } from '$lib/types/shadow.js';
  import type { ComponentWeight } from '$lib/types/weight.js';

  import type { Snippet } from 'svelte';

  interface PaperProps {
    /** Paper contents goes here */
    children?: Snippet;
    /** Paper ref */
    ref?: HTMLDivElement;
    /** How round should the border radius be? */
    roundness?: ComponentRoundness;
    /** Shadow elevation */
    shadow?: ComponentShadow;
    /** Custom css class */
    class?: string;
    /** Paper Width */
    width?: string;
    /** Paper Height */
    height?: string;
    /** Id */
    id?: string;
    /** Add a border around  paper */
    outline?: boolean;
    /** What color to use? */
    color?: PaperColor;
    /** How should paper appear? */
    variant?: ComponentWeight;
    /** Custom background color */
    customBackgroundColor?: string;
    /** Custom border color */
    customBorderColor?: string;
  }

  let {
    children,
    roundness = 1,
    shadow = 0,
    id,
    class: className = '',
    width,
    height,
    ref = $bindable<HTMLDivElement>(),
    color = 'default',
    variant = 'text',
    customBackgroundColor,
    customBorderColor,
    outline = false,
  }: PaperProps = $props();
</script>

<div
  class:outline
  class={[
    'dodo-ui-Paper',
    `roundness--${roundness}`,
    `color--${color}`,
    `variant--${variant}`,
    `shadow--${shadow}`,
    `${shadow ? `shadow--${shadow} dodo-shadow-${shadow}` : `shadow--${shadow}`}`,
    className,
  ].join(' ')}
  {id}
  bind:this={ref}
  style={`${width ? `width:${width};` : ''}
  ${height ? `height:${height};` : ''}
  ${customBackgroundColor ? `background-color:${customBackgroundColor};` : ''}
  ${customBorderColor ? `border-color:${customBorderColor};` : ''}
  `}
>
  {#if children}
    {@render children()}
  {/if}
</div>

<style lang="scss">
  @use 'utils/scss/mixins.scss' as *;

  :global(:root) {
    --dodo-ui-Paper-default-bg: var(--dodo-color-white);
    --dodo-ui-Paper-default-bg-shadow-1: var(--dodo-color-white);
    --dodo-ui-Paper-default-bg-shadow-2: var(--dodo-color-white);
    --dodo-ui-Paper-default-bg-shadow-3: var(--dodo-color-white);
    --dodo-ui-Paper-default-bg-shadow-4: var(--dodo-color-white);
    --dodo-ui-Paper-default-bg-shadow-5: var(--dodo-color-white);

    --dodo-ui-Paper-outline-default: var(--dodo-color-neutral-300);

    @include generate-dodo-ui-paper-colors(neutral);
    @include generate-dodo-ui-paper-colors(primary);
    @include generate-dodo-ui-paper-colors(secondary);
    @include generate-dodo-ui-paper-colors(safe);
    @include generate-dodo-ui-paper-colors(warning);
    @include generate-dodo-ui-paper-colors(danger);
  }

  :global(.dodo-theme--dark) {
    --dodo-ui-Paper-default-bg-mixer: #999999fd;

    --dodo-ui-Paper-default-bg: color-mix(
      in oklab,
      var(--dodo-color-neutral-50) 98%,
      var(--dodo-ui-Paper-default-bg-mixer)
    );
    --dodo-ui-Paper-default-bg-shadow-1: color-mix(
      in oklab,
      var(--dodo-color-neutral-50) 95%,
      var(--dodo-ui-Paper-default-bg-mixer)
    );
    --dodo-ui-Paper-default-bg-shadow-2: color-mix(
      in oklab,
      var(--dodo-color-neutral-50) 90%,
      var(--dodo-ui-Paper-default-bg-mixer)
    );
    --dodo-ui-Paper-default-bg-shadow-3: color-mix(
      in oklab,
      var(--dodo-color-neutral-50) 85%,
      var(--dodo-ui-Paper-default-bg-mixer)
    );
    --dodo-ui-Paper-default-bg-shadow-4: color-mix(
      in oklab,
      var(--dodo-color-neutral-50) 80%,
      var(--dodo-ui-Paper-default-bg-mixer)
    );
    --dodo-ui-Paper-default-bg-shadow-5: color-mix(
      in oklab,
      var(--dodo-color-neutral-50) 75%,
      var(--dodo-ui-Paper-default-bg-mixer)
    );

    --dodo-ui-Paper-outline-default: var(--dodo-color-neutral-200);

    @include generate-dodo-ui-paper-colors-dark(neutral);
    @include generate-dodo-ui-paper-colors-dark(primary);
    @include generate-dodo-ui-paper-colors-dark(secondary);
    @include generate-dodo-ui-paper-colors-dark(safe);
    @include generate-dodo-ui-paper-colors-dark(warning);
    @include generate-dodo-ui-paper-colors-dark(danger);
  }

  .dodo-ui-Paper {
    outline: none;
    transition: all 150ms;
    font-family: inherit;
    color: inherit;
    border-style: solid;
    border-width: var(--dodo-ui-element-border-width);
    border-color: transparent;
    overflow: hidden;

    &.roundness {
      &--1 {
        border-radius: var(--dodo-ui-element-roundness-1);
      }

      &--2 {
        border-radius: var(--dodo-ui-element-roundness-2);
      }

      &--3 {
        border-radius: var(--dodo-ui-element-roundness-3);
      }

      &--full {
        border-radius: 50%;
      }
    }

    &.color {
      &--default {
        background-color: var(--dodo-ui-Paper-default-bg);

        &.outline {
          border-color: var(--dodo-ui-Paper-outline-default);
        }
      }

      @include generate-dodo-ui-paper-color(neutral);
      @include generate-dodo-ui-paper-color(primary);
      @include generate-dodo-ui-paper-color(secondary);
      @include generate-dodo-ui-paper-color(safe);
      @include generate-dodo-ui-paper-color(warning);
      @include generate-dodo-ui-paper-color(danger);
    }

    &.color--default.shadow {
      &--1 {
        background-color: var(--dodo-ui-Paper-default-bg-shadow-1);
      }

      &--2 {
        background-color: var(--dodo-ui-Paper-default-bg-shadow-2);
      }

      &--3 {
        background-color: var(--dodo-ui-Paper-default-bg-shadow-3);
      }

      &--4 {
        background-color: var(--dodo-ui-Paper-default-bg-shadow-4);
      }

      &--5 {
        background-color: var(--dodo-ui-Paper-default-bg-shadow-5);
      }
    }
  }
</style>
