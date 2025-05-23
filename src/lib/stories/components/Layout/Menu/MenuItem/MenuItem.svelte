<script lang="ts" module>
  import type {
    ButtonLinkReferrerpolicy,
    ButtonLinkTarget,
  } from '$lib/stories/components/Form/Button/Button.svelte';
  import { type Snippet } from 'svelte';
  import type { MouseEventHandler } from 'svelte/elements';

  export type MenuItemType = 'text' | 'button' | 'link';

  export const menuItemTypeArray: MenuItemType[] = ['text', 'button', 'link'];

  export interface MenuItemProps {
    /** MenuItem contents goes here */
    children?: Snippet;
    /** MenuItem ref */
    ref?: HTMLLIElement;
    /** Custom css class */
    class?: string;
    /** Id */
    id?: string;
    /** Menu Item type */
    type?: MenuItemType;
    /** selected */
    selected?: boolean;
    /** Separator */
    separator?: boolean;
    /** How large should the Menu Items be? */
    size?: ComponentSize;
    /** The onclick event handler */
    onclick?: MouseEventHandler<HTMLButtonElement>;
    /**  disabled state */
    disabled?: boolean;
    /** link href */
    href?: string;
    /** Link button: download  */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
    target?: ButtonLinkTarget;
    /** Link button: Type  */
    anchorMediaType?: string | undefined | null;
    /** Link button: referrerpolicy  */
    referrerpolicy?: ButtonLinkReferrerpolicy;
  }
</script>

<script lang="ts">
  import { getContext } from 'svelte';
  import type { ComponentSize } from '$lib/types/size.js';

  let {
    children,
    id,
    class: className = '',
    type = 'text',
    href,
    download,
    hreflang,
    media,
    ping,
    rel,
    target,
    anchorMediaType,
    referrerpolicy,
    disabled = false,
    selected = false,
    separator: separatorInternal,
    onclick,
    size: sizeInternal,
    ref = $bindable<HTMLLIElement>(),
  }: MenuItemProps = $props();

  const hover = false;

  const sizeMenu = // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (getContext<any>('MenuItemSize') ? getContext<any>('MenuItemSize')() : undefined) as
      | ComponentSize
      | undefined;
  const size = sizeMenu || sizeInternal || 'normal';

  const separatorMenu = // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (getContext<any>('MenuItemSeparator') ? getContext<any>('MenuItemSeparator')() : undefined) as
      | boolean
      | undefined;
  const separator = separatorMenu !== undefined ? separatorMenu : separatorInternal || false;
</script>

{#snippet menuItemContent()}
  {#if children}
    {@render children()}
  {/if}
{/snippet}

<li
  class:disabled
  class:separator
  class:selected
  class:hover
  class={['dodo-ui-MenuItem', `size--${size}`, className].join(' ')}
  {id}
  bind:this={ref}
>
  {#if type === 'link'}
    <a
      class:disabled
      class:selected
      class={['MenuItem-type', `MenuItem-type--${type}`, `size--${size}`].join(' ')}
      {href}
      {download}
      {hreflang}
      {media}
      {ping}
      {rel}
      {target}
      type={anchorMediaType}
      {referrerpolicy}
    >
      {@render menuItemContent()}
    </a>
  {:else if type === 'button'}
    <button
      class:disabled
      class:selected
      class={['MenuItem-type', `MenuItem-type--${type}`, `size--${size}`].join(' ')}
      {onclick}
      {disabled}
    >
      {@render menuItemContent()}
    </button>
  {:else}
    <div
      class:disabled
      class:selected
      class={['MenuItem-type', `MenuItem-type--${type}`, `size--${size}`].join(' ')}
    >
      {@render menuItemContent()}
    </div>
  {/if}
</li>

<style lang="scss">
  :global(:root) {
    --dodo-ui-MenuItem-selected-bg: color-mix(
      in oklab,
      var(--dodo-color-neutral-800) 4%,
      transparent
    );
    --dodo-ui-MenuItem-hover-bg: color-mix(in oklab, var(--dodo-color-neutral-800) 8%, transparent);
    --dodo-ui-MenuItem-active-bg: color-mix(
      in oklab,
      var(--dodo-color-neutral-800) 11%,
      transparent
    );

    --dodo-ui-MenuItem-separator-color: var(--dodo-color-neutral-300);

    --dodo-ui-MenuItem-disabled-color: var(--dodo-color-neutral-400);
  }

  :global(.dodo-theme--dark) {
    --dodo-ui-MenuItem-selected-bg: color-mix(
      in oklab,
      var(--dodo-color-neutral-800) 4%,
      transparent
    );
    --dodo-ui-MenuItem-hover-bg: color-mix(in oklab, var(--dodo-color-neutral-800) 8%, transparent);
    --dodo-ui-MenuItem-active-bg: color-mix(
      in oklab,
      var(--dodo-color-neutral-800) 15%,
      transparent
    );

    --dodo-ui-MenuItem-separator-color: var(--dodo-color-neutral-300);

    --dodo-ui-MenuItem-disabled-color: var(--dodo-color-neutral-500);
  }

  .dodo-ui-MenuItem {
    display: flex;
    margin: 0;
    padding: 0;
    user-select: none;

    &.separator {
      border-bottom: 1px solid var(--dodo-ui-MenuItem-separator-color);
    }

    .MenuItem-type {
      cursor: pointer;
      transition: all 70ms;
      text-decoration: none;
      margin: 0;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      border: 0;
      outline: 0;
      background-color: transparent;
      color: inherit;
      font-family: inherit;
      width: 100%;

      &.selected {
        background-color: var(--dodo-ui-MenuItem-selected-bg);
      }

      &:hover {
        background-color: var(--dodo-ui-MenuItem-hover-bg);
      }

      &:active {
        background-color: var(--dodo-ui-MenuItem-active-bg);
      }

      &.size {
        &--normal {
          min-height: var(--dodo-ui-element-height-normal);
          font-size: 1rem;
          padding: 0 calc(var(--dodo-ui-space-small) * 2);
        }

        &--small {
          min-height: var(--dodo-ui-element-height-small);
          padding: 0 var(--dodo-ui-space);
          font-size: 0.9rem;
        }

        &--large {
          min-height: var(--dodo-ui-element-height-large);
          font-size: 1.1rem;
          padding: 0 calc(var(--dodo-ui-space) * 2);
        }
      }

      &.disabled {
        cursor: initial;

        background-color: transparent;
        color: var(--dodo-ui-MenuItem-disabled-color);

        &:hover {
          background-color: transparent;
          color: var(--dodo-ui-MenuItem-disabled-color);
        }

        &:active {
          background-color: transparent;
          color: var(--dodo-ui-MenuItem-disabled-color);
        }
      }
    }

    &.hover {
      .MenuItem-type {
        background-color: var(--dodo-ui-MenuItem-hover-bg);
      }
    }
  }
</style>
