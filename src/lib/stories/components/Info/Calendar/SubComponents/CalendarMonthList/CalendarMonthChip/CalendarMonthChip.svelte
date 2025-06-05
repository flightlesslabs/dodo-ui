<script lang="ts" module>
  export interface CalendarMonthChipProps {
    /** CalendarDatesChart ref */
    ref?: HTMLLIElement;
    /** Custom css class */
    class?: string;
    /** How round should the border radius be? */
    roundness?: ComponentRoundness;
    /** What color to use? */
    color?: ComponentColor;
    /** Month value */
    value: CalendarMonthNames;
    /** Is Date Selected */
    selected?: boolean;
    /** onselect event handler */
    onselect?: (value: CalendarMonthNames, e: ButtonClickEvent) => void;
    /** Custom Calendar Chip Content */
    customCalendarMonthChipContent?: (value: CalendarMonthNames) => Snippet;
    /** Custom Calendar Chip Content */
    customCalendarMonthChip?: (value: CalendarMonthNames) => Snippet;
    /** How large should the Calendar Chip be? */
    size?: ComponentSize;
    /** Disabled */
    disabled?: boolean;
  }
</script>

<script lang="ts">
  import type { ComponentColor } from '$lib/types/colors.js';

  import type { ComponentRoundness } from '$lib/types/roundness.js';
  import type { Snippet } from 'svelte';
  import type { ButtonClickEvent } from '$lib/stories/components/Form/Button/Button.svelte';
  import type { ComponentSize } from '$lib/types/size.js';
  import type { CalendarMonthNames } from '../../CalendarControls/CalendarMonthSelector/CalendarMonthSelector.svelte';

  let {
    class: className = '',
    roundness = 1,
    selected = false,
    color = 'primary',
    ref = $bindable<HTMLLIElement>(),
    customCalendarMonthChipContent: customCalendarMonthChipContentInternal,
    customCalendarMonthChip: customCalendarMonthChipInternal,
    onselect,
    size = 'normal',
    value,
    disabled = false,
  }: CalendarMonthChipProps = $props();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let customCalendarMonthChipContentTyped = customCalendarMonthChipContentInternal as any;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let customCalendarMonthChipTyped = customCalendarMonthChipInternal as any;
</script>

{#snippet chipContent()}
  {#if customCalendarMonthChipTyped}
    {@render customCalendarMonthChipTyped(value)}
  {:else}
    <button class="chip" {disabled} onclick={onselect ? (e) => onselect(value, e) : undefined}>
      {#if customCalendarMonthChipContentTyped}
        {@render customCalendarMonthChipContentTyped(value)}
      {:else}
        {value}
      {/if}
    </button>
  {/if}
{/snippet}

<li
  class:disabled
  class:selected
  class={[
    'dodo-ui-CalendarMonthChip',
    `roundness--${roundness}`,
    `color--${color}`,
    `size--${size}`,
    className,
  ].join(' ')}
  bind:this={ref}
>
  {@render chipContent()}
</li>

<style lang="scss">
  @use 'utils/scss/mixins.scss' as *;

  :global(:root) {
    --dodo-ui-CalendarMonthChip-disabled-bg: var(--dodo-color-neutral-50);
    --dodo-ui-CalendarMonthChip-disabled-color: var(--dodo-color-neutral-400);

    @include generate-dodo-ui-calendarMonthChip-colors(neutral);
    @include generate-dodo-ui-calendarMonthChip-colors(primary);
    @include generate-dodo-ui-calendarMonthChip-colors(secondary);
    @include generate-dodo-ui-calendarMonthChip-colors(safe);
    @include generate-dodo-ui-calendarMonthChip-colors(warning);
    @include generate-dodo-ui-calendarMonthChip-colors(danger);
  }

  :global(.dodo-theme--dark) {
    --dodo-ui-CalendarMonthChip-disabled-bg: var(--dodo-color-neutral-200);
    --dodo-ui-CalendarMonthChip-disabled-color: var(--dodo-color-neutral-400);

    @include generate-dodo-ui-calendarMonthChip-colors-dark(neutral);
    @include generate-dodo-ui-calendarMonthChip-colors-dark(primary);
    @include generate-dodo-ui-calendarMonthChip-colors-dark(secondary);
    @include generate-dodo-ui-calendarMonthChip-colors-dark(safe);
    @include generate-dodo-ui-calendarMonthChip-colors-dark(warning);
    @include generate-dodo-ui-calendarMonthChip-colors-dark(danger);
  }

  .dodo-ui-CalendarMonthChip {
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
        font-size: 1rem;
      }

      &--small {
        width: var(--dodo-ui-element-height-small);
        height: var(--dodo-ui-element-height-small);
        font-size: 0.9rem;
      }

      &--large {
        width: var(--dodo-ui-element-height-large);
        height: var(--dodo-ui-element-height-large);
        font-size: 1.1rem;
      }
    }

    &.color {
      @include generate-dodo-ui-calendarMonthChip-color(neutral);
      @include generate-dodo-ui-calendarMonthChip-color(primary);
      @include generate-dodo-ui-calendarMonthChip-color(secondary);
      @include generate-dodo-ui-calendarMonthChip-color(safe);
      @include generate-dodo-ui-calendarMonthChip-color(warning);
      @include generate-dodo-ui-calendarMonthChip-color(danger);
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
      text-transform: capitalize;

      &[disabled] {
        cursor: initial;
        background-color: var(--dodo-ui-CalendarMonthChip-disabled-bg);
        color: var(--dodo-ui-CalendarMonthChip-disabled-color);

        &:hover {
          background-color: var(--dodo-ui-CalendarMonthChip-disabled-bg);
          color: var(--dodo-ui-CalendarMonthChip-disabled-color);
        }

        &:active {
          background-color: var(--dodo-ui-CalendarMonthChip-disabled-bg);
          color: var(--dodo-ui-CalendarMonthChip-disabled-color);
        }
      }
    }
  }
</style>
