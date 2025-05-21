<script lang="ts" module>
  import type { Snippet } from 'svelte';
  import PopperPopup, {
    type PopperPopupPositionX,
    type PopperPopupPositionY,
  } from './PopperPopup/PopperPopup.svelte';
  import type { PaperProps } from '$lib/stories/components/Layout/Paper/Paper.svelte';
  import { clickOutside } from '$lib/stories/developer tools/directives/clickOutside/clickOutside.js';

  export interface PopperProps {
    /** Popper contents goes here */
    children?: Snippet;
    /** Popper ref */
    ref?: HTMLDivElement;
    /** Id */
    id?: string;
    /** Title (for tooltip) */
    title?: string;
    /** Custom css class*/
    class?: string;
    /** Open popper */
    open?: boolean;
    /** PopperPopup ref */
    popupRef?: HTMLDivElement;
    /** PopperPopup contents goes here */
    popupChildren?: Snippet;
    /** PaperProps: Paper component props for PopperPopup */
    paperProps?: Partial<PaperProps>;
    /** PopperPopup Max height. Use css compatible value */
    popupMaxHeight?: string;
    /** PopperPopup Width. Use css compatible value */
    popupWidth?: string;
    /** popup Custom css class*/
    popupClass?: string;
    /** Popup stick horizontally  */
    popupPositionX?: PopperPopupPositionX;
    /** Popup stick vertically  */
    popupPositionY?: PopperPopupPositionY;
    /** offset/gap between Popup and content  */
    popupOffset?: number;
    /** Click Outside event */
    onClickOutside?: () => void;
    /** Custom Popup */
    customPopup?: (popperLocation?: DOMRect) => Snippet;
  }
</script>

<script lang="ts">
  let {
    children,
    popupChildren,
    id,
    class: className = '',
    ref = $bindable<HTMLDivElement>(),
    open = false,
    popupRef = $bindable<HTMLDivElement>(),
    paperProps,
    popupMaxHeight,
    popupWidth,
    popupClass,
    popupPositionX,
    popupPositionY,
    popupOffset,
    onClickOutside = () => {},
    customPopup,
  }: PopperProps = $props();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let customPopupTyped = customPopup as any;

  let popperContainerRef = $state<HTMLDivElement>();
  let popperLocation = $state<DOMRect>();

  function capturePopperLocation() {
    if (!popperContainerRef) {
      return;
    }

    popperLocation = popperContainerRef.getBoundingClientRect();
  }

  $effect(() => {
    if (!popperContainerRef) {
      return;
    }

    capturePopperLocation();

    window.addEventListener('resize', capturePopperLocation);

    return () => {
      window.removeEventListener('resize', capturePopperLocation);
    };
  });
</script>

<div
  class={['dodo-ui-Popper', className].join(' ')}
  bind:this={ref}
  {id}
  use:clickOutside={onClickOutside}
>
  <div class="PopperContainer" bind:this={popperContainerRef}>
    {#if children}
      {@render children()}
    {/if}
  </div>

  {#if customPopupTyped}
    {@render customPopupTyped(popperLocation)}
  {:else if open && popperLocation}
    <PopperPopup
      {popperLocation}
      {paperProps}
      {popupMaxHeight}
      {popupWidth}
      {popupPositionX}
      {popupPositionY}
      {popupOffset}
      class={popupClass}
    >
      {#if popupChildren}
        {@render popupChildren()}
      {/if}
    </PopperPopup>
  {/if}
</div>

<style lang="scss">
  .dodo-ui-Popper {
    position: relative;
    display: inline-flex;
    flex-wrap: wrap;
  }
</style>
