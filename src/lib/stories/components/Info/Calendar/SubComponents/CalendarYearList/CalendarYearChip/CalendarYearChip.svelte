<script lang="ts" module>
  export interface CalendarYearChipProps {
    /** CalendarDatesChart ref */
    ref?: HTMLLIElement;
    /** Custom css class */
    class?: string;
    /** How round should the border radius be? */
    roundness?: ComponentRoundness;
    /** What color to use? */
    color?: ComponentColor;
    /** Month value */
    value: string;
    /** Is Date Selected */
    selected?: boolean;
    /** onselect event handler */
    onselect?: (value: string, e: ButtonClickEvent) => void;
    /** Custom Calendar Chip Content */
    customCalendarYearChipContent?: (value: string) => Snippet;
    /** Custom Calendar Chip Content */
    customCalendarYearChip?: (value: string) => Snippet;
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

  let {
    class: className = '',
    roundness = 1,
    selected = false,
    color = 'primary',
    ref = $bindable<HTMLLIElement>(),
    customCalendarYearChipContent: customCalendarYearChipContentInternal,
    customCalendarYearChip: customCalendarYearChipInternal,
    onselect,
    size = 'normal',
    value,
    disabled = false,
  }: CalendarYearChipProps = $props();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let customCalendarYearChipContentTyped = customCalendarYearChipContentInternal as any;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let customCalendarYearChipTyped = customCalendarYearChipInternal as any;

  $effect(() => {
    if (!selected) {
      return;
    }

    if (!ref) {
      return;
    }

    ref.scrollIntoView({ block: 'center' });
  });
</script>

{#snippet chipContent()}
  {#if customCalendarYearChipTyped}
    {@render customCalendarYearChipTyped(value)}
  {:else}
    <button class="chip" {disabled} onclick={onselect ? (e) => onselect(value, e) : undefined}>
      {#if customCalendarYearChipContentTyped}
        {@render customCalendarYearChipContentTyped(value)}
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
    'dodo-ui-CalendarYearChip',
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
    --dodo-ui-CalendarYearChip-disabled-bg: var(--dodo-color-neutral-50);
    --dodo-ui-CalendarYearChip-disabled-color: var(--dodo-color-neutral-400);

    @include generate-dodo-ui-calendarYearChip-colors(neutral);
    @include generate-dodo-ui-calendarYearChip-colors(primary);
    @include generate-dodo-ui-calendarYearChip-colors(secondary);
    @include generate-dodo-ui-calendarYearChip-colors(safe);
    @include generate-dodo-ui-calendarYearChip-colors(warning);
    @include generate-dodo-ui-calendarYearChip-colors(danger);
  }

  :global(.dodo-theme--dark) {
    --dodo-ui-CalendarYearChip-disabled-bg: var(--dodo-color-neutral-200);
    --dodo-ui-CalendarYearChip-disabled-color: var(--dodo-color-neutral-400);

    @include generate-dodo-ui-calendarYearChip-colors-dark(neutral);
    @include generate-dodo-ui-calendarYearChip-colors-dark(primary);
    @include generate-dodo-ui-calendarYearChip-colors-dark(secondary);
    @include generate-dodo-ui-calendarYearChip-colors-dark(safe);
    @include generate-dodo-ui-calendarYearChip-colors-dark(warning);
    @include generate-dodo-ui-calendarYearChip-colors-dark(danger);
  }

  .dodo-ui-CalendarYearChip {
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
      @include generate-dodo-ui-calendarYearChip-color(neutral);
      @include generate-dodo-ui-calendarYearChip-color(primary);
      @include generate-dodo-ui-calendarYearChip-color(secondary);
      @include generate-dodo-ui-calendarYearChip-color(safe);
      @include generate-dodo-ui-calendarYearChip-color(warning);
      @include generate-dodo-ui-calendarYearChip-color(danger);
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
        background-color: var(--dodo-ui-CalendarYearChip-disabled-bg);
        color: var(--dodo-ui-CalendarYearChip-disabled-color);

        &:hover {
          background-color: var(--dodo-ui-CalendarYearChip-disabled-bg);
          color: var(--dodo-ui-CalendarYearChip-disabled-color);
        }

        &:active {
          background-color: var(--dodo-ui-CalendarYearChip-disabled-bg);
          color: var(--dodo-ui-CalendarYearChip-disabled-color);
        }
      }
    }
  }
</style>
