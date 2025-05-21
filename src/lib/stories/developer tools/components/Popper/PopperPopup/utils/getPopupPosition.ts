import { browser } from '$app/environment';
import type { PositionX, PositionY } from '$lib/types/position.js';

export interface GetPopupPositionProps {
  positionX: PositionX;
  positionY: PositionY;
  height: number;
  width: number;
  top: number;
  bottom: number;
  left: number;
  right: number;
  offsetX?: number;
  offsetY?: number;
  popperHeight: number;
  lockPoistions: boolean;
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

  const innerHeight = window.innerHeight;

  const gapBottom = innerHeight - props.bottom;
  const popperHeight = props.popperHeight;

  const offsetX = props.offsetX ? props.offsetX : 0;
  const offsetY = props.offsetY ? props.offsetY : 0;

  const positionX = props.positionX;
  let positionY = props.positionY;

  if (!props.lockPoistions) {
    if (positionY === 'top' && props.top < popperHeight + offsetY) {
      positionY = 'bottom';
    } else if (positionY === 'bottom' && gapBottom < popperHeight + offsetY) {
      positionY = 'top';
    }
  }

  switch (positionX) {
    case 'left':
      left = offsetX;
      right = null;
      break;
    case 'center':
      left = 0;
      right = 0;
      break;
    case 'right':
      left = null;
      right = offsetX;
      break;
  }

  switch (positionY) {
    case 'top':
    case 'middle':
      top = null;
      bottom = props.height + offsetY;
      break;
    case 'bottom':
      top = props.height + offsetY;
      bottom = null;
      break;
  }

  return {
    left,
    right,
    top,
    bottom,
  };
}
