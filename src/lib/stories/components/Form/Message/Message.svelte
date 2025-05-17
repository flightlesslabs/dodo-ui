<script lang="ts" module>
  export type MessageColor = ComponentColorPriority | ComponentColorSeverity;
</script>

<script lang="ts">
  import type {
    ComponentColorPriority,
    ComponentColorSeverity,
    ComponentSize,
  } from '$lib/types.js';

  import type { Snippet } from 'svelte';

  interface MessageProps {
    /** Message contents goes here */
    children?: Snippet;
    /** Message ref */
    ref?: HTMLDivElement;
    /** What color to use? */
    color?: MessageColor;
    /** Message size */
    size?: ComponentSize;
    /** Custom css class*/
    class?: string;
    /** Test: ⚠️ Unsafe Children String. Do Not use*/
    _unsafeChildrenStringForTesting?: string;
  }

  let {
    children,
    class: className = '',
    color = 'primary',
    ref = $bindable<HTMLDivElement>(),
    _unsafeChildrenStringForTesting,
    size = 'normal',
  }: MessageProps = $props();
</script>

<div
  class={['dodo-ui-Message', `color--${color}`, `size--${size}`, className].join(' ')}
  bind:this={ref}
>
  {#if children}
    {@render children()}
  {:else if _unsafeChildrenStringForTesting}
    {_unsafeChildrenStringForTesting}
  {/if}
</div>

<style lang="scss">
  .dodo-ui-Message {
    letter-spacing: 0.3px;
    display: flex;
    font-family: inherit;

    &.size {
      &--normal {
        font-size: 1rem;
      }

      &--small {
        font-size: 0.9rem;
      }

      &--large {
        font-size: 1.1rem;
      }
    }

    &.color {
      &--primary {
        color: var(--dodo-color-primary-600);
      }

      &--secondary {
        color: var(--dodo-color-secondary-600);
      }

      &--neutral {
        color: var(--dodo-color-neutral-600);
      }

      &--safe {
        color: var(--dodo-color-safe-600);
      }

      &--warning {
        color: var(--dodo-color-warning-600);
      }

      &--danger {
        color: var(--dodo-color-danger-600);
      }
    }
  }
</style>
