<script lang="ts">
  import type { ComponentRoundness } from '$lib/types/roundness.js';
  import type { ComponentShadow } from '$lib/types/shadow.js';

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
    /** Test: ⚠️ Unsafe Children String. Do Not use*/
    _unsafeChildrenStringForTesting?: string;
  }

  let {
    children,
    roundness = 1,
    shadow = 0,
    id,
    class: className = '',
    _unsafeChildrenStringForTesting,
    width,
    height,
    ref = $bindable<HTMLDivElement>(),
  }: PaperProps = $props();
</script>

<div
  class={[
    'dodo-ui-Paper',
    `roundness--${roundness}`,
    `${shadow ? `shadow--${shadow} dodo-shadow-${shadow}` : `shadow--${shadow}`}`,
    className,
  ].join(' ')}
  {id}
  bind:this={ref}
  style={`${width ? `width:${width};` : ''}${height ? `height:${height};` : ''}`}
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
    --dodo-ui-Paper-bg: var(--dodo-color-neutral-100);
  }

  .dodo-ui-Paper {
    outline: none;
    transition: all 150ms;
    font-family: inherit;
    color: inherit;

    background-color: var(--dodo-ui-Paper-bg);
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
  }
</style>
