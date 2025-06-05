<script lang="ts" module>
  import type { ComponentColor } from '$lib/types/colors.js';
  import type { ComponentSize } from '$lib/types/size.js';
  import type { ButtonProps } from '$lib/stories/components/Form/Button/Button.svelte';
  import type { Snippet } from 'svelte';
  import type { MouseEventHandler } from 'svelte/elements';
  import NavigationButton from './NavigationButton.svelte';
  import Icon from '@iconify/svelte';

  export interface CalendarNavigationProps {
    /** CalendarNavigation ref */
    ref?: HTMLDivElement;
    /** Custom css class */
    class?: string;
    /** What color to use? */
    color?: ComponentColor;
    /** How large should the Component be? */
    size?: ComponentSize;
    /** buttonProps */
    buttonProps?: Partial<ButtonProps>;
    /** Navigation Next */
    onCalendarNavigationNextClick?: MouseEventHandler<HTMLButtonElement>;
    /** Navigation Previous */
    onCalendarNavigationPrevClick?: MouseEventHandler<HTMLButtonElement>;
    /** Custom YearSelector */
    customCalendarNavigation?: () => Snippet;
    /** Custom NavigationNext */
    customCalendarNavigationNext?: () => Snippet;
    /** Custom NavigationPrev */
    customCalendarNavigationPrev?: () => Snippet;
    /** Custom NavigationNext Content */
    customCalendarNavigationNextContent?: () => Snippet;
    /** Custom NavigationPrev Content */
    customCalendarNavigationPrevContent?: () => Snippet;
    /** Next disabled state */
    disabledCalendarNavigationNext?: boolean;
    /** Prev disabled state */
    disabledCalendarNavigationPrev?: boolean;
  }
</script>

<script lang="ts">
  let {
    class: className = '',
    ref = $bindable<HTMLDivElement>(),
    size = 'normal',
    color,
    buttonProps,
    onCalendarNavigationNextClick,
    onCalendarNavigationPrevClick,
    disabledCalendarNavigationNext,
    disabledCalendarNavigationPrev,
    customCalendarNavigation: customCalendarNavigationInternal,
    customCalendarNavigationNext,
    customCalendarNavigationPrev,
    customCalendarNavigationNextContent,
    customCalendarNavigationPrevContent,
  }: CalendarNavigationProps = $props();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let customCalendarNavigationTyped = customCalendarNavigationInternal as any;
</script>

<div
  class={['dodo-ui-CalendarNavigation', `size--${size}`, `color--${color}`, className].join(' ')}
  bind:this={ref}
>
  {#if customCalendarNavigationTyped}
    {@render customCalendarNavigationTyped()}
  {:else}
    <NavigationButton
      name="prev"
      {size}
      {color}
      {buttonProps}
      onclick={onCalendarNavigationPrevClick}
      disabled={disabledCalendarNavigationPrev}
      customNavigationButton={customCalendarNavigationPrev}
      customNavigationButtonContent={customCalendarNavigationPrevContent}
    >
      <Icon icon="material-symbols:navigate-before" width="24" height="24" />
    </NavigationButton>
    <NavigationButton
      name="next"
      {size}
      {color}
      {buttonProps}
      onclick={onCalendarNavigationNextClick}
      disabled={disabledCalendarNavigationNext}
      customNavigationButton={customCalendarNavigationNext}
      customNavigationButtonContent={customCalendarNavigationNextContent}
    >
      <Icon icon="material-symbols:navigate-next" width="24" height="24" />
    </NavigationButton>
  {/if}
</div>

<style lang="scss">
  .dodo-ui-CalendarNavigation {
    display: flex;

    &.size {
      &--normal {
        margin: 0 calc(calc(var(--dodo-ui-space) / 2) * -1);

        :global(.NavigationButton) {
          margin: 0 calc(var(--dodo-ui-space) / 2);
        }
      }

      &--small {
        margin: 0 calc(calc(var(--dodo-ui-space-small) / 2) * -1);

        :global(.NavigationButton) {
          margin: 0 calc(var(--dodo-ui-space-small) / 2);
        }
      }

      &--large {
        margin: calc(calc(var(--dodo-ui-space-large) / 2) * -1);

        :global(.NavigationButton) {
          margin: 0 calc(var(--dodo-ui-space-large) / 2);
        }
      }
    }
  }
</style>
