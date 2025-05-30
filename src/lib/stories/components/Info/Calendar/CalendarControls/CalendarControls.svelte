<script lang="ts" module>
  export interface CalendarControlsProps {
    /** CalendarControls ref */
    ref?: HTMLDivElement;
    /** Custom css class */
    class?: string;
    /** Selcted date Value */
    value?: Date;
    /** Define active month to override month selected with value */
    activeMonth?: Date;
    /** What color to use? */
    color?: ComponentColor;
    /** Timezone string (e.g., "America/New_York"). */
    timezone?: string;
    /** Whether to return the time in UTC. If true, overrides timezone. */
    utc?: boolean;
    /** How large should the Component be? */
    size?: ComponentSize;
    /** Show Month Selector */
    showCalendarMonthSelector?: boolean;
    /** Show Year Selector */
    showCalendarYearSelector?: boolean;
    /** Show Navigator */
    showCalendarNavigator?: boolean;
    /** Custom Calendar Controls */
    customCalendarControls?: () => Snippet;
    /** Month Selector Props */
    calendarMonthSelectorProps?: Partial<CalendarMonthSelectorProps>;
    /** Custom MonthSelector */
    customCalendarMonthSelector?: (option: CalendarMonthOption) => Snippet;
    /** Custom MonthSelector Content */
    customCalendarMonthSelectorContent?: (option: CalendarMonthOption) => Snippet;
    /** Month Selector Click */
    onMonthSelectorClick?: (option: CalendarMonthOption, e: ButtonClickEvent) => void;
    /** Year Selector Props */
    calendarYearSelectorProps?: Partial<CalendarYearSelectorProps>;
    /** Custom YearSelector */
    customCalendarYearSelector?: (selectedYear: string) => Snippet;
    /** Custom YearSelector Content */
    customCalendarYearSelectorContent?: (selectedYear: string) => Snippet;
    /** Year Selector Click */
    onYearSelectorClick?: (selectedYear: string, e: ButtonClickEvent) => void;

    /** Calendar Navigation Props */
    calendarNavigationProps?: Partial<CalendarYearSelectorProps>;
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
  import type { ComponentColor } from '$lib/types/colors.js';
  import type { ComponentSize } from '$lib/types/size.js';
  import type { Snippet } from 'svelte';
  import type {
    CalendarMonthOption,
    CalendarMonthSelectorProps,
  } from './CalendarMonthSelector/CalendarMonthSelector.svelte';
  import CalendarMonthSelector from './CalendarMonthSelector/CalendarMonthSelector.svelte';
  import type { ButtonClickEvent } from '$lib/stories/components/Form/Button/Button.svelte';
  import CalendarYearSelector, {
    type CalendarYearSelectorProps,
  } from './CalendarYearSelector/CalendarYearSelector.svelte';
  import type { MouseEventHandler } from 'svelte/elements';
  import { CalendarNavigation, getMoment } from '$lib/index.js';

  let {
    class: className = '',
    ref = $bindable<HTMLDivElement>(),
    value,
    timezone,
    utc,
    activeMonth,
    size,
    color,
    customCalendarControls: customCalendarControlsInternal,
    showCalendarMonthSelector = true,
    showCalendarYearSelector = true,
    showCalendarNavigator = true,
    calendarMonthSelectorProps,
    customCalendarMonthSelector,
    customCalendarMonthSelectorContent,
    onMonthSelectorClick,
    calendarYearSelectorProps,
    customCalendarYearSelector,
    customCalendarYearSelectorContent,
    onYearSelectorClick,
    calendarNavigationProps,
    customCalendarNavigation,
    customCalendarNavigationNext,
    customCalendarNavigationPrev,
    customCalendarNavigationNextContent,
    customCalendarNavigationPrevContent,
    onCalendarNavigationNextClick,
    onCalendarNavigationPrevClick,
    disabledCalendarNavigationNext,
    disabledCalendarNavigationPrev,
  }: CalendarControlsProps = $props();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let customCalendarControlsTyped = customCalendarControlsInternal as any;

  const timeMoment = $derived(getMoment(activeMonth || value, undefined, { timezone, utc }));
</script>

<div class={['dodo-ui-CalendarControls', `size--${size}`, className].join(' ')} bind:this={ref}>
  {#if customCalendarControlsTyped}
    {@render customCalendarControlsTyped()}
  {:else}
    <div class="periodControls">
      {#if showCalendarMonthSelector}
        <CalendarMonthSelector
          {value}
          {timezone}
          {utc}
          {activeMonth}
          {size}
          {color}
          {customCalendarMonthSelector}
          {customCalendarMonthSelectorContent}
          onclick={onMonthSelectorClick}
          {...calendarMonthSelectorProps}
        />
      {:else}
        <h3>{timeMoment.format('MMM')}</h3>
      {/if}

      {#if showCalendarYearSelector}
        <CalendarYearSelector
          {value}
          {timezone}
          {utc}
          {activeMonth}
          {size}
          {color}
          {customCalendarYearSelector}
          {customCalendarYearSelectorContent}
          onclick={onYearSelectorClick}
          {...calendarYearSelectorProps}
        />
      {:else}
        <h3>{timeMoment.format('YYYY')}</h3>
      {/if}
    </div>

    {#if showCalendarNavigator}
      <div class="navigationControls">
        <CalendarNavigation
          {size}
          {color}
          {customCalendarNavigationNext}
          {customCalendarNavigationPrev}
          {customCalendarNavigationNextContent}
          {customCalendarNavigationPrevContent}
          {onCalendarNavigationNextClick}
          {onCalendarNavigationPrevClick}
          {disabledCalendarNavigationNext}
          {disabledCalendarNavigationPrev}
          {customCalendarNavigation}
          {...calendarNavigationProps}
        />
      </div>
    {/if}
  {/if}
</div>

<style lang="scss">
  .dodo-ui-CalendarControls {
    display: flex;
    align-items: center;
    margin-bottom: calc(var(--dodo-ui-space) * 2);

    &:empty {
      display: none;
    }

    h3 {
      font-weight: 400;
      margin: 0;
      letter-spacing: 0.3px;
      font-family: inherit;
      color: var(--dodo-color-neutral-800);
      text-align: center;
    }

    &.size {
      &--normal {
        margin-bottom: calc(var(--dodo-ui-space-large) * 2);

        .periodControls {
          margin: 0 calc(calc(var(--dodo-ui-space) / 2) * -1);
          :global(.dodo-ui-Button) {
            margin: 0 calc(var(--dodo-ui-space) / 2);
          }
        }

        h3 {
          font-size: 1rem;
          margin: 0 calc(var(--dodo-ui-space) / 2);
        }
      }

      &--small {
        margin-bottom: calc(var(--dodo-ui-space) * 2);

        .periodControls {
          margin: 0 calc(calc(var(--dodo-ui-space-small) / 2) * -1);
          :global(.dodo-ui-Button) {
            margin: 0 calc(var(--dodo-ui-space-small) / 2);
          }
        }

        h3 {
          font-size: 0.9rem;
          margin: 0 calc(var(--dodo-ui-space-small) / 2);
        }
      }

      &--large {
        margin-bottom: calc(var(--dodo-ui-space) * 3);

        .periodControls {
          margin: 0 calc(calc(var(--dodo-ui-space-large) / 2) * -1);
          :global(.dodo-ui-Button) {
            margin: 0 calc(var(--dodo-ui-space-large) / 2);
          }
        }

        h3 {
          font-size: 1.1rem;
          margin: 0 calc(var(--dodo-ui-space-large) / 2);
        }
      }
    }

    .periodControls {
      display: flex;
      align-items: center;

      &:empty {
        display: none;
      }
    }

    .navigationControls {
      display: flex;
      align-items: center;
      margin-left: auto;

      &:empty {
        display: none;
      }
    }
  }
</style>
