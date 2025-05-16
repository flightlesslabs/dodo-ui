<script lang="ts">
  import type { ComponentSize } from '$lib/types.js';
  import type { Snippet } from 'svelte';
  import type { MouseEventHandler } from 'svelte/elements';

  interface UtilityButtonProps {
    /** Button contents goes here*/
    children?: Snippet;
    /** Button ref */
    ref?: HTMLButtonElement;
    /** How large should the button be? */
    size?: ComponentSize;
    /** Button disabled state */
    disabled?: boolean;
    /** Name */
    name?: string;
    /** Id */
    id?: string;
    /** Title (for tooltip) */
    title?: string;
    /** Custom css class*/
    class?: string;
    /** The onclick event handler */
    onclick?: MouseEventHandler<HTMLButtonElement>;
  }

  let {
    children,
    size = 'normal',
    name,
    id,
    title,
    class: className = '',
    disabled = false,
    onclick,
    ref = $bindable<HTMLButtonElement>(),
  }: UtilityButtonProps = $props();
</script>

<button
  class={['dodo-ui-UtilityButton', `size--${size}`, className].join(' ')}
  {name}
  {id}
  {title}
  {disabled}
  {onclick}
  bind:this={ref}
>
  {#if children}
    {@render children()}
  {/if}
</button>

<style lang="scss">
  :global(:root) {
    --dodo-ui-UtilityButton-hover: var(--dodo-color-primary-600);
    --dodo-ui-UtilityButton-active: var(--dodo-color-primary-600);

    --dodo-ui-UtilityButton-disabled-color: var(--dodo-color-neutral-400);
  }

  :global(.dodo-theme--dark) {
    --dodo-ui-UtilityButton-hover: var(--dodo-color-primary-600);
    --dodo-ui-UtilityButton-active: var(--dodo-color-primary-600);

    --dodo-ui-UtilityButton-disabled-color: var(--dodo-color-neutral-500);
  }

  .dodo-ui-UtilityButton {
    cursor: pointer;
    outline: none;
    transition: all 150ms;
    text-decoration: none;
    margin: 0;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    font-family: inherit;
    background-color: transparent;
    border: 0;
    outline: 0;
    padding: 0;
    color: var(--dodo-color-neutral-700);
    border-radius: 50%;
    font-family: inherit;

    &:hover {
      color: var(--dodo-ui-UtilityButton-hover);
    }

    &:active {
      color: var(--dodo-ui-UtilityButton-active);
    }

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

    &[disabled] {
      cursor: initial;
      color: var(--dodo-ui-UtilityButton-disabled-color);

      &:hover {
        color: var(--dodo-ui-UtilityButton-disabled-color);
      }

      &:active {
        color: var(--dodo-ui-UtilityButton-disabled-color);
      }
    }
  }
</style>
