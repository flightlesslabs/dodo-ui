<script lang="ts" module>
  export interface CalendarDateChipProps {
    /** CalendarDatesChart ref */
    ref?: HTMLLIElement;
    /** Custom css class */
    class?: string;
    /** Day Of Month */
    dayOfMonth: DateOfMonth;
    /** How round should the border radius be? */
    roundness?: ComponentRoundness;
    /** What color to use? */
    color?: ComponentColor;
    /** Show last month dates */
    showLastMonth?: boolean;
    /** Show next month dates */
    showNextMonth?: boolean;
    /** Show Today */
    showToday?: boolean;
    /** Is Date Selected */
    selected?: boolean;
    /** onselect event handler */
    onselect?: (value: Date, dayOfMonth: DateOfMonth, e: ButtonClickEvent) => void;
    /** Custom Calendar Chip Content */
    customCalendarDateChipContent?: (dayOfMonth: DateOfMonth) => Snippet;
    /** Custom Calendar Chip Content */
    customCalendarDateChip?: (dayOfMonth: DateOfMonth) => Snippet;
    /** How large should the Calendar Chip be? */
    size?: ComponentSize;
    /** Weekend days */
    weekend?: boolean;
    /** Timezone string (e.g., "America/New_York"). */
    timezone?: string;
    /** Whether to return the time in UTC. If true, overrides timezone. */
    utc?: boolean;
  }
</script>

<script lang="ts">
  import getMoment from '$lib/stories/developer tools/helpers/Time/getMoment/getMoment.js';
  import type { ComponentColor } from '$lib/types/colors.js';

  import type { ComponentRoundness } from '$lib/types/roundness.js';
  import type { Snippet } from 'svelte';
  import type { ButtonClickEvent } from '$lib/stories/components/Form/Button/Button.svelte';
  import type { ComponentSize } from '$lib/types/size.js';
  import type { DateOfMonth } from '../../../utils/types.js';

  let {
    class: className = '',
    dayOfMonth,
    roundness = 1,
    showLastMonth = true,
    showNextMonth = true,
    selected = false,
    showToday = true,
    color = 'primary',
    ref = $bindable<HTMLLIElement>(),
    customCalendarDateChipContent: customCalendarDateChipContentInternal,
    customCalendarDateChip: customCalendarDateChipInternal,
    onselect,
    size = 'normal',
    weekend,
    timezone,
    utc,
  }: CalendarDateChipProps = $props();

  const dayNumber = Number(getMoment(dayOfMonth.date, undefined, { timezone, utc }).format('D'));
  const disabled = dayOfMonth.disabled || false;
  const today = showToday && dayOfMonth.today ? true : false;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let customCalendarDateChipContentTyped = customCalendarDateChipContentInternal as any;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let customCalendarDateChipTyped = customCalendarDateChipInternal as any;

  function onselectMod(e: ButtonClickEvent) {
    if (onselect) {
      onselect(dayOfMonth.date, dayOfMonth, e);
    }
  }
</script>

{#snippet chipContent()}
  {#if customCalendarDateChipTyped}
    {@render customCalendarDateChipTyped(dayOfMonth)}
  {:else}
    <button class="chip" {disabled} onclick={onselectMod}>
      {#if customCalendarDateChipContentTyped}
        {@render customCalendarDateChipContentTyped(dayOfMonth)}
      {:else}
        {dayNumber}
      {/if}
    </button>
  {/if}
{/snippet}

<li
  class:disabled
  class:showLastMonth
  class:showNextMonth
  class:today
  class:selected
  class:weekend
  class={[
    'dodo-ui-CalendarDateChip',
    `roundness--${roundness}`,
    `color--${color}`,
    `size--${size}`,
    `${dayOfMonth.isCurrentMonth ? 'isCurrentMonth' : 'isNotCurrentMonth'}`,
    `${dayOfMonth.isLastMonth ? 'isLastMonth' : ''}`,
    `${dayOfMonth.isNextMonth ? 'isNextMonth' : ''}`,
    className,
  ].join(' ')}
  bind:this={ref}
>
  {#if dayOfMonth.isCurrentMonth}
    {@render chipContent()}
  {:else if dayOfMonth.isLastMonth && showLastMonth}
    {@render chipContent()}
  {:else if dayOfMonth.isNextMonth && showNextMonth}
    {@render chipContent()}
  {/if}
</li>

<style lang="scss">
  @use 'utils/scss/mixins.scss' as *;

  :global(:root) {
    --dodo-ui-CalendarDateChip-disabled-bg: var(--dodo-color-neutral-50);
    --dodo-ui-CalendarDateChip-disabled-color: var(--dodo-color-neutral-400);

    @include generate-dodo-ui-calendarDateChip-colors(neutral);
    @include generate-dodo-ui-calendarDateChip-colors(primary);
    @include generate-dodo-ui-calendarDateChip-colors(secondary);
    @include generate-dodo-ui-calendarDateChip-colors(safe);
    @include generate-dodo-ui-calendarDateChip-colors(warning);
    @include generate-dodo-ui-calendarDateChip-colors(danger);
  }

  :global(.dodo-theme--dark) {
    --dodo-ui-CalendarDateChip-disabled-bg: var(--dodo-color-neutral-200);
    --dodo-ui-CalendarDateChip-disabled-color: var(--dodo-color-neutral-400);

    @include generate-dodo-ui-calendarDateChip-colors-dark(neutral);
    @include generate-dodo-ui-calendarDateChip-colors-dark(primary);
    @include generate-dodo-ui-calendarDateChip-colors-dark(secondary);
    @include generate-dodo-ui-calendarDateChip-colors-dark(safe);
    @include generate-dodo-ui-calendarDateChip-colors-dark(warning);
    @include generate-dodo-ui-calendarDateChip-colors-dark(danger);
  }

  .dodo-ui-CalendarDateChip {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    color: var(--dodo-color-neutral-800);
    user-select: none;

    &.roundness {
      &--1 {
        .chip {
          border-radius: var(--dodo-ui-element-roundness-1);
        }
      }

      &--2 {
        .chip {
          border-radius: var(--dodo-ui-element-roundness-2);
        }
      }

      &--3 {
        .chip {
          border-radius: var(--dodo-ui-element-roundness-3);
        }
      }

      &--full {
        .chip {
          border-radius: 50%;
        }
      }
    }

    &.size {
      &--normal {
        width: var(--dodo-ui-element-height-normal);
        height: var(--dodo-ui-element-height-normal);
        font-size: 0.8rem;
      }

      &--small {
        width: var(--dodo-ui-element-height-small);
        height: var(--dodo-ui-element-height-small);
        font-size: 0.74rem;
      }

      &--large {
        width: var(--dodo-ui-element-height-large);
        height: var(--dodo-ui-element-height-large);
        font-size: 1rem;
      }
    }

    &.isNotCurrentMonth {
      .chip {
        opacity: 0.45;
      }
    }

    &.today {
      .chip {
        font-weight: 600;
      }
    }

    &.color {
      @include generate-dodo-ui-calendarDateChip-color(neutral);
      @include generate-dodo-ui-calendarDateChip-color(primary);
      @include generate-dodo-ui-calendarDateChip-color(secondary);
      @include generate-dodo-ui-calendarDateChip-color(safe);
      @include generate-dodo-ui-calendarDateChip-color(warning);
      @include generate-dodo-ui-calendarDateChip-color(danger);
    }

    &.weekend {
      .chip {
        color: var(--dodo-color-danger-600);
      }
    }

    .chip {
      cursor: pointer;
      outline: none;
      letter-spacing: 0.3px;
      transition: all 150ms;
      text-decoration: none;
      margin: 0;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      font-family: inherit;
      background-color: transparent;
      transition: all 50ms;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      outline: 0;
      border: 0;
      color: inherit;
      font-size: inherit;

      &[disabled] {
        cursor: initial;
        background-color: var(--dodo-ui-CalendarDateChip-disabled-bg);
        color: var(--dodo-ui-CalendarDateChip-disabled-color);

        &:hover {
          background-color: var(--dodo-ui-CalendarDateChip-disabled-bg);
          color: var(--dodo-ui-CalendarDateChip-disabled-color);
        }

        &:active {
          background-color: var(--dodo-ui-CalendarDateChip-disabled-bg);
          color: var(--dodo-ui-CalendarDateChip-disabled-color);
        }
      }
    }
  }
</style>
