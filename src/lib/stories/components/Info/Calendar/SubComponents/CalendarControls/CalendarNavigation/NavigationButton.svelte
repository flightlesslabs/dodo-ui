<script lang="ts">
  import Button, { type ButtonProps } from '$lib/stories/components/Form/Button/Button.svelte';
  import type { ComponentColor } from '$lib/types/colors.js';
  import type { ComponentSize } from '$lib/types/size.js';
  import type { Snippet } from 'svelte';
  import type { MouseEventHandler } from 'svelte/elements';

  interface NavigationButtonProps {
    /** Name */
    name?: string;
    /** Button contents goes here */
    children?: Snippet;
    /** NavigationButton ref */
    ref?: HTMLDivElement;
    /** Custom css class */
    class?: string;
    /** What color to use? */
    color?: ComponentColor;
    /** How large should the Component be? */
    size?: ComponentSize;
    /** buttonProps */
    buttonProps?: Partial<ButtonProps>;
    /** onclick event */
    onclick?: MouseEventHandler<HTMLButtonElement>;
    /** Custom Navigation */
    customNavigationButton?: () => Snippet;
    /** Custom Navigation Content */
    customNavigationButtonContent?: () => Snippet;
    /** disabled state */
    disabled?: boolean;
  }

  let {
    class: className = '',
    children,
    name,
    ref = $bindable<HTMLDivElement>(),
    size,
    color,
    buttonProps,
    onclick,
    disabled,
    customNavigationButton: customNavigationButtonInternal,
    customNavigationButtonContent: customNavigationButtonContentInternal,
  }: NavigationButtonProps = $props();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let customNavigationButtonTyped = customNavigationButtonInternal as any;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let customNavigationButtonContentTyped = customNavigationButtonContentInternal as any;
</script>

<div
  class={['NavigationButton', `size--${size}`, `color--${color}`, className].join(' ')}
  bind:this={ref}
>
  {#if customNavigationButtonTyped}
    {@render customNavigationButtonTyped()}
  {:else}
    <Button
      {name}
      variant="text"
      {color}
      {disabled}
      roundness="full"
      {onclick}
      {size}
      compact
      {...buttonProps}
    >
      {#if customNavigationButtonContentTyped}
        {@render customNavigationButtonContentTyped()}
      {:else if children}
        {@render children()}
      {/if}
    </Button>
  {/if}
</div>

<style lang="scss">
  .NavigationButton {
    display: inline-flex;
  }
</style>
