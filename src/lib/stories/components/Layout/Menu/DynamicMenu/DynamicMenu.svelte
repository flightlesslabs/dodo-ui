<script lang="ts" module>
  import type { ComponentSize } from '$lib/types/size.js';
  import type { MenuItemProps, MenuItemType } from '../MenuItem/MenuItem.svelte';

  export type DynamicMenuItemOption<TMeta = unknown> = {
    id: string;
    /** label  */
    label?: string;
    /** Custom Metadata  */
    meta?: TMeta;
    /** Menu Item type */
    type?: MenuItemType;
    /** Menu Separator */
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
  };

  export interface DynamicMenuProps {
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
    /** Options */
    options?: DynamicMenuItemOption[];
    /** Selected Option */
    selectedOption?: DynamicMenuItemOption;
    /** Custom Menu Item Content */
    customMenuItemContent?: (
      option: DynamicMenuItemOption,
      selectedOption?: DynamicMenuItemOption,
    ) => Snippet;
    /** Show Placeholder if no options */
    showOptionsPlaceholder?: boolean;
    /** placeholder Text if no options */
    optionsPlaceholder?: string;
    /** Custom Menu Item Placeholder Content */
    customPlaceholderMenuItemContent?: () => Snippet;
    /** MenuItem: Menu component props */
    menuItemProps?: Partial<MenuItemProps>;
    /** Enable Keyboard Navigation */
    keyboardNavigation?: boolean;
    /** Keyboard Navigation onEnter */
    onEnter?: (e: KeyboardEvent, menuItemIndex: number) => void;
    /** Keyboard Navigation onEsc */
    onEsc?: (e: KeyboardEvent, menuItemIndex: number) => void;
    /** On menu item click */
    onclick?: (e: MouseEvent, option: DynamicMenuItemOption) => void;
  }
</script>

<script lang="ts">
  import Menu from '../Menu.svelte';
  import type { MouseEventHandler } from 'svelte/elements';
  import type {
    ButtonLinkReferrerpolicy,
    ButtonLinkTarget,
  } from '$lib/stories/components/Form/Button/Button.svelte';
  import { MenuItem } from '$lib/index.js';
  import type { Snippet } from 'svelte';

  let {
    id,
    class: className = '',
    ref = $bindable<HTMLUListElement>(),
    size,
    separator,
    width,
    height,
    options,
    selectedOption,
    customMenuItemContent,
    customPlaceholderMenuItemContent,
    menuItemProps,
    keyboardNavigation = false,
    onEnter,
    onEsc,
    onclick,
    showOptionsPlaceholder = false,
    optionsPlaceholder = 'No options found',
  }: DynamicMenuProps = $props();

  let menuItemIndex = $state(0);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let customMenuItemContentTyped = customMenuItemContent as any;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let customPlaceholderMenuItemContentTyped = customPlaceholderMenuItemContent as any;

  function onKeyboardNavigation(e: KeyboardEvent) {
    let keyHit: string | undefined = undefined;

    if (!ref) {
      return;
    }

    switch (e.key) {
      case 'ArrowDown':
      case 'ArrowUp':
        keyHit = e.key;
        e.preventDefault();
        break;
      case 'Enter':
      case 'Esc':
        keyHit = e.key;
        break;
      default:
        break;
    }

    if (!keyHit) {
      return;
    }

    if (keyHit === 'Enter') {
      if (onEnter) {
        onEnter(e, menuItemIndex);
      }

      return;
    } else if (keyHit === 'Escape') {
      if (onEsc) {
        onEsc(e, menuItemIndex);
      }

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

    menuItemIndex = newMenuItemIndex;
  }

  $effect(() => {
    if (!keyboardNavigation) {
      return;
    }

    const targetItem = ref.querySelector(':scope > li.dodo-ui-MenuItem.selected') as
      | HTMLLIElement
      | undefined;

    if (targetItem) {
      const selectedIndex = options?.findIndex((option) => option.id === selectedOption?.id);

      if (selectedIndex !== undefined && selectedIndex >= 0) {
        menuItemIndex = selectedIndex;
      }

      targetItem.focus();
      targetItem.scrollIntoView({ block: 'nearest' });
    }

    window.addEventListener('keydown', onKeyboardNavigation);

    return () => {
      window.removeEventListener('keydown', onKeyboardNavigation);
    };
  });
</script>

<Menu
  class={['dodo-ui-DynamicMenu', className].join(' ')}
  {id}
  {size}
  {width}
  {height}
  {separator}
  bind:ref
>
  {#if options?.length}
    {#each options as option (option.id)}
      <MenuItem
        {...option}
        selected={selectedOption?.id === option.id}
        onclick={(e) => (onclick ? onclick(e, option) : undefined)}
        {...menuItemProps}
      >
        {#if customMenuItemContentTyped}
          {@render customMenuItemContentTyped(option, selectedOption)}
        {:else}
          {option.label || ''}
        {/if}
      </MenuItem>
    {/each}
  {:else if showOptionsPlaceholder}
    <MenuItem type="text" disabled={true} {...menuItemProps}>
      {#if customPlaceholderMenuItemContentTyped}
        {@render customPlaceholderMenuItemContentTyped()}
      {:else}
        {optionsPlaceholder}
      {/if}
    </MenuItem>
  {/if}
</Menu>
