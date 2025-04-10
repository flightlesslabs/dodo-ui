<script lang="ts" module>
  export type MessageColor = 'default' | 'primary' | 'safe' | 'warning' | 'danger' | 'info';
</script>

<script lang="ts">
  import type { Snippet } from 'svelte';

  interface MessageProps {
    /** Message contents goes here */
    children?: Snippet;
    /** Message ref */
    ref?: HTMLDivElement;
    /** What color to use? */
    color?: MessageColor;
    /** Custom css class*/
    class?: string;
  }

  let {
    children,
    class: className = '',
    color = 'default',
    ref = $bindable<HTMLDivElement>(),
  }: MessageProps = $props();
</script>

<div class={['dodo-ui-Message', `color--${color}`, className].join(' ')} bind:this={ref}>
  {#if children}
    {@render children()}
  {/if}
</div>

<style lang="scss">
  .dodo-ui-Message {
    font-size: 1rem;
    letter-spacing: 0.3px;
    display: flex;
    font-family: inherit;

    &.color {
      &--default {
        color: var(--dodo-color-default-800);
      }

      &--primary {
        color: var(--dodo-color-primary-600);
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

      &--info {
        color: var(--dodo-color-info-600);
      }
    }
  }
</style>
