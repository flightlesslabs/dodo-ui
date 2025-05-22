<script lang="ts" module>
  import { type Snippet } from 'svelte';
  import type { ComponentSize } from '$lib/types/size.js';

  export interface MenuProps {
    /** Menu contents goes here */
    children?: Snippet;
    /** Menu ref */
    ref?: HTMLUListElement;
    /** Custom css class */
    class?: string;
    /** Menu Width */
    width?: string;
    /** Menu Height */
    height?: string;
    /** How large should the Menu Items be? */
    size?: ComponentSize;
    /** Menu Separator */
    separator?: boolean;
    /** Id */
    id?: string;
    /** Navigate with keyboard */
    enableKeyboardNavigation?: boolean;
    /** Navigate with keyboard, Enter pressed */
    onEnter?: (selectedItemIndex: number) => void;
  }
</script>

<script lang="ts">
  import { setContext } from 'svelte';

  let {
    children,
    id,
    class: className = '',
    width,
    height,
    ref = $bindable<HTMLUListElement>(),
    size,
    separator,
    enableKeyboardNavigation = false,
    onEnter,
  }: MenuProps = $props();

  let menuItemIndex = $state(0);

  setContext('MenuItemSize', () => size);
  setContext('MenuItemSeparator', () => separator);

  function onKeyboardNavigation(e: KeyboardEvent) {
    let keyHit: string | undefined = undefined;

    switch (e.key) {
      case 'ArrowDown':
      case 'ArrowUp':
      case 'Enter':
        keyHit = e.key;
        e.preventDefault();
      default:
        break;
    }

    if (!keyHit) {
      return;
    }

    if (!ref) {
      return;
    }

    const listItems = ref.querySelectorAll(':scope > li.dodo-ui-MenuItem');

    if (!listItems.length) {
      return;
    }

    for (let index = 0; index < listItems.length; index++) {
      const element = listItems[index];

      element.classList.remove('hover');
    }

    let newMenuItemIndex = menuItemIndex;

    if (keyHit === 'ArrowDown') {
      if (listItems[newMenuItemIndex + 1]) {
        newMenuItemIndex = newMenuItemIndex + 1;
      } else {
        newMenuItemIndex = 0;
      }
    } else if (keyHit === 'ArrowUp') {
      if (listItems[newMenuItemIndex - 1]) {
        newMenuItemIndex = newMenuItemIndex - 1;
      } else {
        newMenuItemIndex = listItems.length - 1;
      }
    }

    const targetItem = listItems[newMenuItemIndex] as HTMLLIElement;

    targetItem.classList.add('hover');

    targetItem.focus();
    targetItem.scrollIntoView({ block: 'nearest' });

    if (keyHit === 'Enter') {
      if (onEnter) {
        onEnter(newMenuItemIndex);
      }

      for (let index = 0; index < listItems.length; index++) {
        const element = listItems[index];

        element.classList.remove('hover');
      }
    }

    menuItemIndex = newMenuItemIndex;
  }
</script>

<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
<!-- svelte-ignore a11y_positive_tabindex -->
<!-- svelte-ignore a11y_no_noninteractive_tabindex -->
<ul
  class={['dodo-ui-Menu', className].join(' ')}
  {id}
  bind:this={ref}
  style={`${width ? `width:${width};` : ''}
  ${height ? `height:${height};` : ''}
  `}
  onkeydown={enableKeyboardNavigation ? onKeyboardNavigation : undefined}
  tabindex="1"
>
  {#if children}
    {@render children()}
  {/if}
</ul>

<style lang="scss">
  .dodo-ui-Menu {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    overflow: inherit;
    outline: 0;
  }
</style>
