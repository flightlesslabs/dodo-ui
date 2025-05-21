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
  }: MenuProps = $props();

  setContext('MenuItemSize', () => size);
  setContext('MenuItemSeparator', () => separator);
</script>

<ul
  class={['dodo-ui-Menu', className].join(' ')}
  {id}
  bind:this={ref}
  style={`${width ? `width:${width};` : ''}
  ${height ? `height:${height};` : ''}
  `}
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
  }
</style>
