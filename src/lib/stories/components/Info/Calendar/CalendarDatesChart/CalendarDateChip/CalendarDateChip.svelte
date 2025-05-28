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
    /** Show last month dates */
    showLastMonth?: boolean;
    /** Show next month dates */
    showNextMonth?: boolean;
    /** disabled */
    disabled?: boolean;
  }
</script>

<script lang="ts">
  import type { ComponentRoundness } from '$lib/types/roundness.js';
  import type { DateOfMonth } from '../../utils/types.js';

  let {
    class: className = '',
    dayOfMonth,
    roundness = 1,
    showLastMonth = true,
    showNextMonth = true,
    disabled = false,
    ref = $bindable<HTMLLIElement>(),
  }: CalendarDateChipProps = $props();
</script>

<li
  class:disabled
  class:showLastMonth
  class:showNextMonth
  class={[
    'dodo-ui-CalenderDateChip',
    `roundness--${roundness}`,
    `${dayOfMonth.isCurrentMonth ? 'isCurrentMonth' : 'isNotCurrentMonth'}`,
    `${dayOfMonth.isLastMonth ? 'isLastMonth' : ''}`,
    `${dayOfMonth.isNextMonth ? 'isNextMonth' : ''}`,
    className,
  ].join(' ')}
  bind:this={ref}
>
  {#if dayOfMonth.isCurrentMonth}
    <button class="chip" {disabled}>
      {dayOfMonth.dayNumber}
    </button>
  {:else if dayOfMonth.isLastMonth && showLastMonth}
    <button class="chip" {disabled}>
      {dayOfMonth.dayNumber}
    </button>
  {:else if dayOfMonth.isLastMonth && showNextMonth}
    <button class="chip" {disabled}>
      {dayOfMonth.dayNumber}
    </button>
  {/if}
</li>

<style lang="scss">
  :global(:root) {
    --dodo-ui-CalenderDateChip-disabled-bg: transparent;
    --dodo-ui-CalenderDateChip-disabled-color: var(--dodo-color-neutral-400);
    --dodo-ui-CalenderDateChip-hover-bg: var(--dodo-color-primary-50);
    --dodo-ui-CalenderDateChip--active-bg: var(--dodo-color-primary-100);
  }

  :global(.dodo-theme--dark) {
    --dodo-ui-CalenderDateChip-disabled-bg: transparent;
    --dodo-ui-CalenderDateChip-disabled-color: var(--dodo-color-neutral-500);
    --dodo-ui-CalenderDateChip-hover-bg: var(--dodo-color-primary-50);
    --dodo-ui-CalenderDateChip--active-bg: var(--dodo-color-primary-100);
  }

  .DateChip {
    display: inline-flex;
    width: 30px;
    height: 30px;
    font-size: 0.8rem;
    justify-content: center;
    align-items: center;

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

    &.isNotCurrentMonth {
      .chip {
        opacity: 0.9;
      }
    }

    .chip {
      cursor: pointer;
      outline: none;
      transition: all 150ms;
      text-decoration: none;
      margin: 0;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      font-family: inherit;
      color: inherit;
      background-color: transparent;
      transition: all 50ms;
      width: 100%;
      height: 100%;
      font-size: 0.8rem;
      display: flex;
      justify-content: center;
      align-items: center;
      outline: 0;
      border: 0;

      &:hover {
        background-color: var(--dodo-ui-CalenderDateChip-hover-bg);
      }

      &:active {
        background-color: var(--dodo-ui-CalenderDateChip-active-bg);
      }

      &[disabled] {
        cursor: initial;
        background-color: var(--dodo-ui-CalenderDateChip-disabled-bg);
        color: var(--dodo-ui-CalenderDateChip-disabled-color);

        &:hover {
          background-color: var(--dodo-ui-CalenderDateChip-disabled-bg);
          color: var(--dodo-ui-CalenderDateChip-disabled-color);
        }

        &:active {
          background-color: var(--dodo-ui-CalenderDateChip-disabled-bg);
          color: var(--dodo-ui-CalenderDateChip-disabled-color);
        }
      }
    }
  }
</style>
