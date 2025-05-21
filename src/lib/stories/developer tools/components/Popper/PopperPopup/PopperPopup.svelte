<script lang="ts" module>
  import { Paper } from '$lib/index.js';
  import type { PaperProps } from '$lib/stories/components/Layout/Paper/Paper.svelte';
  import type { Snippet } from 'svelte';

  export type PopperPopupPositionY = 'top' | 'bottom';

  export type PopperPopupPositionX = 'left' | 'center' | 'right';

  export const popperPopupPositionYArray: PopperPopupPositionY[] = ['top', 'bottom'];

  export const popperPopupPositionXArray: PopperPopupPositionX[] = ['left', 'center', 'right'];

  export interface PopperPopupProps {
    /** Popup contents goes here*/
    children?: Snippet;
    /** Popup ref */
    ref?: HTMLDivElement;
    /** PaperProps: Paper component props */
    paperProps?: Partial<PaperProps>;
    /** Max height. Use css compatible value */
    popupMaxHeight?: string;
    /** popup Width. Use css compatible value */
    popupWidth?: string;
    /** Custom css class */
    class?: string;
    /** Position of Popper content */
    popperLocation?: DOMRect;
    /** Popup stick horizontally  */
    popupPositionX?: PopperPopupPositionX;
    /** Popup stick vertically  */
    popupPositionY?: PopperPopupPositionY;
    /** offset/gap between Popup and content  */
    popupOffset?: number;
  }
</script>

<script lang="ts">
  let {
    children,
    paperProps = {},
    class: className = '',
    popupWidth: width,
    popupMaxHeight: maxHeight,
    popupPositionX: positionX = 'left',
    popupPositionY: positionY = 'bottom',
    popperLocation,
    ref = $bindable<HTMLDivElement>(),
    popupOffset: offset = 12,
  }: PopperPopupProps = $props();

  const popperWidth = $derived(width || '100%');
  const popupMaxHeight = $derived(maxHeight || '400px');

  let left = $state<number | null>(null);
  let right = $state<number | null>(null);
  let top = $state<number | null>(null);
  let bottom = $state<number | null>(null);

  function setPopupPosition(
    positionX: PopperPopupPositionX,
    positionY: PopperPopupPositionY,
    popperHeight: number,
    offset: number,
  ) {
    switch (positionX) {
      case 'left':
      case 'center':
        left = 0;
        right = null;
        break;
      case 'right':
        left = null;
        right = 0;
        break;
    }

    switch (positionY) {
      case 'top':
        top = null;
        bottom = popperHeight + offset;
        break;
      case 'bottom':
        top = popperHeight + offset;
        bottom = null;
        break;
    }
  }

  $effect(() => {
    setPopupPosition(positionX, positionY, popperLocation?.height || 0, offset);
  });
</script>

<div
  class={[
    'dodo-ui-PopperPopup',
    `positionX--${positionX}`,
    `positionY--${positionY}`,
    className,
  ].join(' ')}
  bind:this={ref}
  style={`width: ${popperWidth};
  ${left !== null ? `left: ${left}px;` : ''}
  ${right !== null ? `right: ${right}px;` : ''}
  ${top !== null ? `top: ${top}px;` : ''}
  ${bottom !== null ? `bottom: ${bottom}px;` : ''}
  `}
>
  <Paper shadow={3} {...paperProps}>
    <section style={`max-height: ${popupMaxHeight};`}>
      {#if children}
        {@render children()}
      {/if}
    </section>
  </Paper>
</div>

<style lang="scss">
  .dodo-ui-PopperPopup {
    position: absolute;
    z-index: var(--dodo-ui-z-index-4);

    section {
      overflow: auto;
    }
  }
</style>
