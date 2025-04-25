<script lang="ts" module>
  export type PaperRoundness = ComponentRoundness | false | ComponentRoundnessFull;
  export type PaperShadow = false | '1x' | '2x' | '3x' | '4x' | '5x' | '6x' | '7x';
</script>

<script lang="ts">
  import type { ComponentRoundness, ComponentRoundnessFull } from '$lib/types.js';
  import type { Snippet } from 'svelte';

  interface PaperProps {
    /** Paper contents goes here */
    children?: Snippet;
    /** Paper ref */
    ref?: HTMLDivElement;
    /** How round should the border radius be? */
    roundness?: PaperRoundness;
    /** Shadow elevation */
    shadow?: PaperShadow;
    /** Custom css class*/
    class?: string;
    /** Id */
    id?: string;
    /** Test: ⚠️ Unsafe Children String. Do Not use*/
    _unsafeChildrenStringForTesting?: string;
    /** Test: ⚠️ Unsafe Padding. Do Not use*/
    _unsafePaddingForTesting?: boolean;
  }

  let {
    children,
    roundness = '1x',
    shadow = '1x',
    id,
    class: className = '',
    _unsafeChildrenStringForTesting,
    _unsafePaddingForTesting = false,
    ref = $bindable<HTMLDivElement>(),
  }: PaperProps = $props();
</script>

<div
  class={[
    'dodo-ui-Paper',
    `roundness--${roundness}`,
    `${shadow ? `shadow--${shadow} dodo-shadow-${shadow}` : `shadow--${shadow}`}`,
    `${_unsafePaddingForTesting ? '_unsafePaddingForTesting' : ''}`,
    className,
  ].join(' ')}
  {id}
  bind:this={ref}
>
  {#if children}
    {@render children()}
  {:else if _unsafeChildrenStringForTesting}
    {_unsafeChildrenStringForTesting}
  {/if}
</div>

<style lang="scss">
  :global(:root) {
    --dodo-ui-Paper-bg: var(--dodo-color-white);
  }

  :global(.dodo-theme--dark) {
    --dodo-ui-Paper-bg: var(--dodo-color-default-100);
  }

  .dodo-ui-Paper {
    outline: none;
    transition: all 150ms;
    font-family: inherit;
    color: inherit;

    background-color: var(--dodo-ui-Paper-bg);
    overflow: hidden;

    &.roundness {
      &--1x {
        border-radius: var(--dodo-ui-element-roundness-1x);
      }

      &--2x {
        border-radius: var(--dodo-ui-element-roundness-2x);
      }

      &--3x {
        border-radius: var(--dodo-ui-element-roundness-3x);
      }

      &--full {
        border-radius: 50%;
      }
    }

    &._unsafePaddingForTesting {
      padding: 16px;
    }
  }
</style>
