<script lang="ts">
  import type { ComponentSize } from '$lib/types.js';
  import type { Snippet } from 'svelte';

  interface ButtonProps {
    /** Button contents goes here*/
    children?: Snippet;
    /** Regular button or submit button? */
    type?: 'button' | 'submit';
    /** How large should the button be? */
    size?: ComponentSize;
    /** What color to use? */
    color?: 'default' | 'primary' | 'safe' | 'warning' | 'danger' | 'info';
    /** How should the button appear? */
    variant?: 'text' | 'solid';
    /** Add a border around the button */
    outline?: boolean;
    /** Make it compact */
    compact?: boolean;
    /** Button disabled state */
    disabled?: boolean;
    /** Name */
    name?: string;
    /** Id */
    id?: string;
    /** Title (for tooltip) */
    title?: string;
    /** Icon before button content */
    before?: Snippet;
    /** Icon after button content */
    after?: Snippet;
    /** Custom css class*/
    class?: string;
    /** The onclick event handler */
    onclick?: (e: MouseEvent) => void;
  }

  const {
    children,
    type = 'button',
    size = 'normal',
    color = 'primary',
    variant = 'text',
    outline = false,
    compact = false,
    name,
    id,
    title,
    class: className = '',
    disabled = false,
    onclick,
    before,
    after,
  }: ButtonProps = $props();
</script>

<button
  class:outline
  class:compact
  class={['dodo-button', `size--${size}`, `color--${color}`, `variant--${variant}`, className].join(
    ' ',
  )}
  {type}
  {name}
  {id}
  {title}
  {disabled}
  {onclick}
>
  {#if before}
    <span class="button-content--before">
      {@render before()}
    </span>
  {/if}

  {#if children}
    {@render children()}
  {/if}

  {#if after}
    <span class="button-content--after">
      {@render after()}
    </span>
  {/if}
</button>

<style lang="scss">
</style>
