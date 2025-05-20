export function clickOutside(node: Element, callback: () => void) {
  const handleClick = (event: MouseEvent) => {
    const target = event.target as Node;

    if (node && !node.contains(target) && !event.defaultPrevented) {
      callback();
    }
  };

  document.addEventListener('click', handleClick, true);

  return {
    destroy() {
      document.removeEventListener('click', handleClick, true);
    },
  };
}
