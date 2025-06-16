<script lang="ts" module>
  import type { ComponentSize } from '$lib/types/size.js';
  import type { ComponentRoundness } from '$lib/types/roundness.js';
  import type { FocusEventHandler, MouseEventHandler } from 'svelte/elements';
  import type { ComponentColor } from '$lib/types/colors.js';
  import { drag } from '$lib/stories/developer tools/directives/drag/drag.js';

  export interface RangeSliderProps {
    /** How large should the button be? */
    size?: ComponentSize;
    /** What color to use? */
    color?: ComponentColor;
    /** onrangeSlider event handler */
    onchange?: (val: number) => void;
    /** onclear event handler */
    onclear?: MouseEventHandler<HTMLButtonElement>;
    /** RangeSlider ref */
    ref?: HTMLDivElement;
    /** How round should the border radius be? */
    roundness?: ComponentRoundness;
    /** Add a border around the button. Default True */
    outline?: boolean;
    /** RangeSlider value */
    value: number;
    /** disabled state */
    disabled?: boolean;
    /** Id */
    id?: string;
    /** Custom css class*/
    class?: string;
    /** onblur event handler */
    onblur?: FocusEventHandler<HTMLDivElement>;
    /** onfocus event handler */
    onfocus?: FocusEventHandler<HTMLDivElement>;
    /** onpaste event handler */
  }
</script>

<script lang="ts">
  let {
    color = 'primary',
    size = 'normal',
    roundness = 'full',
    class: className = '',
    ref = $bindable<HTMLDivElement>(),
    value = $bindable<number>(),
  }: RangeSliderProps = $props();

  const min = 0;
  const max = 100;
  const step = 1;
  let isDragging = $state(false);

  const percent = $derived<number>(((value - min) / (max - min)) * 100);

  const label = 'awfawf';

  function clamp(val: number) {
    return Math.min(max, Math.max(min, val));
  }

  function updateFromClientX(clientX: number) {
    const rect = ref?.getBoundingClientRect();
    const x = clientX - rect.left;
    const raw = min + (x / rect.width) * (max - min);
    const stepped = Math.round(raw / step) * step;
    const clamped = clamp(stepped);
    value = clamped;
  }

  function handleMouseDown(event: MouseEvent | TouchEvent) {
    isDragging = true;
    const clientX = 'touches' in event ? event.touches[0].clientX : event.clientX;
    updateFromClientX(clientX);
  }

  function handleMouseMove(event: MouseEvent | TouchEvent) {
    if (!isDragging) return;
    const clientX = 'touches' in event ? event.touches[0].clientX : event.clientX;
    updateFromClientX(clientX);
  }

  function stopDragging() {
    isDragging = false;
  }

  function handleKeydown(e: KeyboardEvent) {
    let delta = 0;
    switch (e.key) {
      case 'ArrowLeft':
      case 'ArrowDown':
        delta = -step;
        break;
      case 'ArrowRight':
      case 'ArrowUp':
        delta = step;
        break;
      case 'PageDown':
        delta = -step * 10;
        break;
      case 'PageUp':
        delta = step * 10;
        break;
      case 'Home':
        value = min;
        e.preventDefault();
        return;
      case 'End':
        value = max;
        e.preventDefault();
        return;
    }
    if (delta !== 0) {
      value = clamp(value + delta);
      e.preventDefault();
    }
  }

  // Reactive effect: track dragging globally
  $effect(() => {
    const move = (e: MouseEvent | TouchEvent) => handleMouseMove(e);
    const up = () => stopDragging();

    if (isDragging) {
      window.addEventListener('mousemove', move);
      window.addEventListener('mouseup', up);
      window.addEventListener('touchmove', move);
      window.addEventListener('touchend', up);
    } else {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseup', up);
      window.removeEventListener('touchmove', move);
      window.removeEventListener('touchend', up);
    }
  });
</script>

<div
  class={[
    'dodo-ui-RangeSlider',
    `size--${size}`,
    `color--${color}`,
    `roundness--${roundness}`,
    className,
  ].join(' ')}
  bind:this={ref}
  role="slider"
  tabindex="0"
  aria-valuemin={min}
  aria-valuemax={max}
  aria-valuenow={value}
  aria-label={label}
  onmousedown={handleMouseDown}
  ontouchstart={handleMouseDown}
  onkeydown={handleKeydown}
>
  <div class="fill" style="width: {percent}%;"></div>
  <div class="thumb" style="left: {percent}%;"></div>
</div>

<style lang="scss">
  .dodo-ui-RangeSlider {
    position: relative;
    height: 6px;
    background: #ddd;
    border-radius: 3px;
    cursor: pointer;
    touch-action: none;

    .fill {
      height: 6px;
      background: #007bff;
      border-radius: 3px;
      position: absolute;
      top: 0;
      left: 0;
    }

    .thumb {
      position: absolute;
      top: 50%;
      transform: translate(-50%, -50%);
      height: 20px;
      width: 20px;
      background: white;
      border: 2px solid #007bff;
      border-radius: 50%;
      box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
    }
  }
</style>
