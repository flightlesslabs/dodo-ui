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
    /** Compact button for icons */
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
    /** Turn Button into link */
    href?: string | undefined | null;
    /** Link button: download  */
    download?: any;
    /** Link button: hreflang  */
    hreflang?: string | undefined | null;
    /** Link button: media  */
    media?: string | undefined | null;
    /** Link button: ping  */
    ping?: string | undefined | null;
    /** Link button: rel  */
    rel?: string | undefined | null;
    /** Link button: target  */
    target?: '_self' | '_blank' | '_parent' | '_top' | (string & {}) | undefined | null;
    /** Link button: Type  */
    anchorMediaType?: string | undefined | null;
    /** Link button: referrerpolicy  */
    referrerpolicy?: ReferrerPolicy | undefined | null;
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
    href,
    download,
    hreflang,
    media,
    ping,
    rel,
    target,
    anchorMediaType,
    referrerpolicy,
  }: ButtonProps = $props();
</script>

{#snippet buttonContent()}
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
{/snippet}

{#if href}
  <a
    {title}
    {id}
    {href}
    {download}
    {hreflang}
    {media}
    {ping}
    {rel}
    {target}
    type={anchorMediaType}
    {referrerpolicy}
    class:outline
    class:compact
    class:disabled
    class={[
      'dodo-button',
      `size--${size}`,
      `color--${color}`,
      `variant--${variant}`,
      className,
    ].join(' ')}
  >
    {@render buttonContent()}
  </a>
{:else}
  <button
    class:outline
    class:compact
    class={[
      'dodo-button',
      `size--${size}`,
      `color--${color}`,
      `variant--${variant}`,
      className,
    ].join(' ')}
    {type}
    {name}
    {id}
    {title}
    {disabled}
    {onclick}
  >
    {@render buttonContent()}
  </button>
{/if}

<style lang="scss">
</style>
