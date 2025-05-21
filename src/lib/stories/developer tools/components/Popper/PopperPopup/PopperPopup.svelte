<script lang="ts" module>
  import { Paper } from '$lib/index.js';
  import type { PaperProps } from '$lib/stories/components/Layout/Paper/Paper.svelte';
  import type { PositionX, PositionY } from '$lib/types/position.js';
  import type { Snippet } from 'svelte';
  import { getPopupPosition } from './utils/getPopupPosition.js';

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
    popupPositionX?: PositionX;
    /** Popup stick vertically  */
    popupPositionY?: PositionY;
    /** vertical offset/gap between Popup and content  */
    popupOffsetY?: number;
    /** Horizontal offset/gap between Popup and content  */
    popupOffsetX?: number;
    /** Lock positions, disable auto top, bottom position based  */
    lockPoistions?: boolean;
    /** Popper Height For Vertical Position, default 300 */
    popperHeightForVerticalPosition?: number;
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
    popupOffsetX: offsetX = 0,
    popupOffsetY: offsetY = 12,
    popperHeightForVerticalPosition = 100,
    lockPoistions = false,
  }: PopperPopupProps = $props();

  const popperWidth = $derived(width || '100%');
  const popupMaxHeight = $derived(maxHeight || '400px');

  let left = $state<number | null>(null);
  let right = $state<number | null>(null);
  let top = $state<number | null>(null);
  let bottom = $state<number | null>(null);

  $effect(() => {
    const values = getPopupPosition({
      positionX,
      positionY,
      height: popperLocation?.height || 0,
      width: popperLocation?.width || 0,
      top: popperLocation?.top || 0,
      bottom: popperLocation?.bottom || 0,
      left: popperLocation?.left || 0,
      right: popperLocation?.right || 0,
      offsetX: offsetX,
      offsetY: offsetY,
      popperHeight: popperHeightForVerticalPosition,
      lockPoistions,
    });

    left = values.left;
    right = values.right;
    top = values.top;
    bottom = values.bottom;
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
  ${positionX === 'center' ? `margin: auto;` : ''}
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
