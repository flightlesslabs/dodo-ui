export function drag(node: HTMLElement) {
  let dragging = false;

  function getX(e: MouseEvent | TouchEvent): number {
    return 'touches' in e ? e.touches[0].clientX : e.clientX;
  }

  function handleStart(e: MouseEvent | TouchEvent) {
    dragging = true;
    const x = getX(e);
    node.dispatchEvent(new CustomEvent('dragstart', { detail: { x } }));

    window.addEventListener('mousemove', handleMove);
    window.addEventListener('mouseup', handleEnd);
    window.addEventListener('touchmove', handleMove);
    window.addEventListener('touchend', handleEnd);
  }

  function handleMove(e: MouseEvent | TouchEvent) {
    if (!dragging) return;
    const x = getX(e);

    node.dispatchEvent(new CustomEvent('dragging', { detail: { x } }));
  }

  function handleEnd(e: MouseEvent | TouchEvent) {
    if (!dragging) return;
    dragging = false;
    const x = getX(e);
    node.dispatchEvent(new CustomEvent('dragend', { detail: { x } }));

    window.removeEventListener('mousemove', handleMove);
    window.removeEventListener('mouseup', handleEnd);
    window.removeEventListener('touchmove', handleMove);
    window.removeEventListener('touchend', handleEnd);
  }

  node.addEventListener('mousedown', handleStart);
  node.addEventListener('touchstart', handleStart, { passive: true });

  return {
    destroy() {
      node.removeEventListener('mousedown', handleStart);
      node.removeEventListener('touchstart', handleStart);
    },
  };
}
