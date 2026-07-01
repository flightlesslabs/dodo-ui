<script lang="ts" module>
  import type { ComponentProps, Snippet } from 'svelte';

  export type DropdownMenuOption = {
    value: string;
    label: string;
  };

  export type DropdownCustomMenuItemContentContext = {
    option: DropdownMenuOption;
  };

  /**
   * Public props for Dropdown
   */
  export type DropdownProps = ComponentProps<typeof DropdownMenuBitUi.Root> & {
    /** Custom CSS class names applied to the DropdownMenu */
    class?: string;

    /** Dropdown Trigger Props */
    triggerProps?: DropdownTriggerProps;

    /** Dropdown Menu Props */
    menuProps?: DropdownMenuProps;

    /** Dropdown Menu item Props */
    menuItemProps?: DropdownMenuItemProps;

    /** Dropdown Portal Props */
    dropdownPortalProps?: ComponentProps<typeof DropdownMenuBitUi.Portal>;

    /**
     * Custom dropdown trigger button.
     *
     * Use {#snippet customTrigger} in Svelte.
     */
    customTrigger?: Snippet;

    /**
     * Custom dropdown menu.
     *
     * Use {#snippet customMenu} in Svelte.
     */
    customMenu?: Snippet;

    /**
     * Custom  dropdown menu Item Content.
     *
     * Use {#snippet customDropdownMenuItemContent} in Svelte.
     */
    customMenuItemContent?: Snippet<[DropdownCustomMenuItemContentContext]>;

    /** Dropdown menu disable token */
    disabled?: boolean;

    /** Dropdown menu item select */
    onselect?: (option: DropdownMenuOption) => void;

    /** Accessible label  */
    'aria-label'?: string;

    /** options */
    options?: DropdownMenuOption[];
  };
</script>

<script lang="ts">
  import { DropdownMenu as DropdownMenuBitUi } from 'bits-ui';
  import DropdownTrigger, {
    type DropdownTriggerProps,
  } from './DropdownTrigger/DropdownTrigger.svelte';
  import DropdownMenu, { type DropdownMenuProps } from './DropdownMenu/DropdownMenu.svelte';
  import DropdownMenuItem, {
    type DropdownMenuItemProps,
  } from './DropdownMenuItem/DropdownMenuItem.svelte';

  let {
    class: className = '',
    children,
    triggerProps,
    open = $bindable(false),
    disabled = false,
    options,
    onselect,
    dropdownPortalProps,
    menuProps,
    menuItemProps,
    customTrigger,
    customMenu,
    customMenuItemContent,
    ...restProps
  }: DropdownProps = $props();
</script>

{#snippet trigger()}
  {#if customTrigger}
    {@render customTrigger?.()}
  {:else}
    <DropdownTrigger {...triggerProps} {disabled}>{@render children?.()}</DropdownTrigger>
  {/if}
{/snippet}

{#snippet menuItem()}
  {#each options as option (option.value)}
    <DropdownMenuItem
      {...menuItemProps}
      textValue={option.value}
      onSelect={() => (onselect ? onselect(option) : undefined)}
    >
      {#if customMenuItemContent}
        {@render customMenuItemContent?.({ option })}
      {:else}
        {option.label}
      {/if}
    </DropdownMenuItem>
  {/each}
{/snippet}

{#snippet menu()}
  {#if customMenu}
    {@render customMenu?.()}
  {:else}
    <DropdownMenu {...menuProps} class={className}>
      {@render menuItem?.()}
    </DropdownMenu>
  {/if}
{/snippet}

<DropdownMenuBitUi.Root {...restProps} bind:open>
  {@render trigger()}
  <DropdownMenuBitUi.Portal {...dropdownPortalProps}>
    {@render menu()}
  </DropdownMenuBitUi.Portal>
</DropdownMenuBitUi.Root>
