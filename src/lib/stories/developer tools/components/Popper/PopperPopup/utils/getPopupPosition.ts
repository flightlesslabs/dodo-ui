import { browser } from '$app/environment';
import type { PositionX, PositionY } from '$lib/types/position.js';

export interface GetPopupPositionProps {
  positionX: PositionX;
  positionY: PositionY;
  offsetX?: number;
  offsetY?: number;
  popperHeight: number;
  lockPoistions: boolean;
  popperLocation?: DOMRect;
  popupLocation?: DOMRect;
  fullWidth?: boolean;
}

export function getPopupPosition(props: GetPopupPositionProps) {
  let left: null | number = null;
  let right: null | number = null;
  let top: null | number = null;
  let bottom: null | number = null;

  // exit if not browser
  if (!browser) {
    return {
      left,
      right,
      top,
      bottom,
    };
  }

  const POPPER_LEFT = props.popperLocation?.left || 0;
  const POPPER_TOP = props.popperLocation?.top || 0;
  const POPPER_BOTTOM = props.popperLocation?.bottom || 0;
  const POPPER_HEIGHT = props.popperLocation?.height || 0;
  const POPPER_WIDTH = props.popperLocation?.width || 0;

  const offsetX = props.offsetX ? props.offsetX : 0;
  const offsetY = props.offsetY ? props.offsetY : 0;

  const POPUP_WIDTH = props.popupLocation?.width || 0;

  const WIDTH_DIFF = POPPER_WIDTH - POPUP_WIDTH;

  const innerHeight = window.innerHeight;
  const gapBottom = innerHeight - POPPER_BOTTOM;

  let positionY = props.positionY;

  // Adjust position if there is not enough space to draw it.
  if (!props.lockPoistions) {
    if (positionY === 'top' && POPPER_TOP < POPPER_HEIGHT + offsetY) {
      positionY = 'bottom';
    } else if (positionY === 'bottom' && gapBottom < POPPER_HEIGHT + offsetY) {
      positionY = 'top';
    }
  }

  switch (positionY) {
    case 'top':
      top = null;
      bottom = POPPER_TOP + POPPER_HEIGHT + offsetY;
      break;
    case 'bottom':
      top = POPPER_TOP + POPPER_HEIGHT + offsetY;
      bottom = null;
      break;
  }

  if (props.fullWidth) {
    // If Full Width
    left = POPPER_LEFT;
    right = null;
  } else if (WIDTH_DIFF < 0) {
    // If Popup is bigger than the Popper Container
    left = POPPER_LEFT;
    right = null;
  } else {
    switch (props.positionX) {
      case 'left':
        left = POPPER_LEFT + offsetX;
        right = null;
        break;
      case 'center':
        left = POPPER_LEFT + offsetX + WIDTH_DIFF / 2;
        right = null;
        break;
      case 'right':
        left = POPPER_LEFT + offsetX + WIDTH_DIFF;
        right = null;
        break;
    }
  }

  return {
    left,
    right,
    top,
    bottom,
  };
}
