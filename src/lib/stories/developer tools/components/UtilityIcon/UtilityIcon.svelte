<script lang="ts" module>
  import type { ComponentSize } from '$lib/types/size.js';
  import type { Snippet } from 'svelte';

  export interface UtilityIconProps {
    /** Button contents goes here*/
    children?: Snippet;
    /** Button ref */
    ref?: HTMLSpanElement;
    /** How large should the button be? */
    size?: ComponentSize;
    /** Button disabled state */
    disabled?: boolean;
    /** Id */
    id?: string;
    /** Custom css class*/
    class?: string;
  }
</script>

<script lang="ts">
  let {
    children,
    size = 'normal',
    id,
    class: className = '',
    disabled = false,
    ref = $bindable<HTMLButtonElement>(),
  }: UtilityIconProps = $props();
</script>

<span
  class={['dodo-ui-UtilityIcon', `size--${size}`, className].join(' ')}
  class:disabled
  {id}
  bind:this={ref}
>
  {#if children}
    {@render children()}
  {/if}
</span>

<style lang="scss">
  :global(:root) {
    --dodo-ui-UtilityIcon-disabled-color: var(--dodo-color-neutral-400);
  }

  :global(.dodo-theme--dark) {
    --dodo-ui-UtilityIcon-disabled-color: var(--dodo-color-neutral-500);
  }

  .dodo-ui-UtilityIcon {
    outline: none;
    transition: all 150ms;
    text-decoration: none;
    margin: 0;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    font-family: inherit;
    background-color: transparent;
    color: var(--dodo-color-neutral-600);
    font-family: inherit;

    &.size {
      &--normal {
        height: var(--dodo-ui-element-height-normal);
        width: var(--dodo-ui-element-height-normal);
        font-size: 1rem;
      }

      &--small {
        height: var(--dodo-ui-element-height-small);
        width: var(--dodo-ui-element-height-small);
        font-size: 0.9rem;
      }

      &--large {
        height: var(--dodo-ui-element-height-large);
        width: var(--dodo-ui-element-height-large);
        font-size: 1.1rem;
      }
    }

    &.disabled {
      cursor: initial;
      color: var(--dodo-ui-UtilityIcon-disabled-color);
    }
  }
</style>
