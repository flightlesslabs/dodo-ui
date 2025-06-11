<script lang="ts" module>
  import type { ButtonClickEvent } from '$lib/stories/components/Form/Button/Button.svelte';

  export interface CalendarYearListProps {
    /** CalendarYearList ref */
    ref?: HTMLDivElement;
    /** Custom css class */
    class?: string;
    /** Selcted year Value */
    value?: string;
    /** onselect event handler */
    onselect?: (value: string, e: ButtonClickEvent) => void;
    /** oncancel event handler */
    oncancel?: (e: ButtonClickEvent) => void;
    /** Custom Calendar Chip Content */
    customCalendarYearChipContent?: (value: string) => Snippet;
    /** Custom Calendar Chip */
    customCalendarYearChip?: (value: string) => Snippet;
    /** How large should the Component be? */
    size?: ComponentSize;
    /** What color to use? */
    color?: ComponentColor;
    /** calendarYearChipProps: calendarYearChip component props */
    calendarYearChipProps?: Partial<CalendarYearChipProps>;
    /** Minimum allowed date, rest of the dates will be disabled  */
    minDate?: Date;
    /** Maxium allowed date, rest of the dates will be disabled  */
    maxDate?: Date;
    /** show controls */
    showControls?: boolean;
  }
</script>

<script lang="ts">
  import type { ComponentColor } from '$lib/types/colors.js';
  import type { Snippet } from 'svelte';
  import type { ComponentSize } from '$lib/types/size.js';
  import type { CalendarYearChipProps } from './CalendarYearChip/CalendarYearChip.svelte';
  import CalendarYearChip from './CalendarYearChip/CalendarYearChip.svelte';
  import getMoment from '$lib/stories/developer tools/helpers/Time/getMoment/getMoment.js';
  import { Button } from '$lib/index.js';
  import Icon from '@iconify/svelte';

  let {
    class: className = '',
    ref = $bindable<HTMLDivElement>(),
    value,
    onselect,
    calendarYearChipProps,
    size = 'normal',
    color,
    customCalendarYearChipContent,
    customCalendarYearChip,
    minDate = getMoment('1910-01-01', 'YYYY-MM-DD', { utc: true }).toDate(),
    maxDate = getMoment(undefined, undefined, { utc: true }).add(100, 'years').toDate(),
    oncancel,
    showControls = true,
  }: CalendarYearListProps = $props();

  function getYears(startYear: number, endYear: number) {
    let newYears: string[] = [];

    for (let index = startYear; index <= endYear; index++) {
      newYears.push(index.toString());
    }

    return newYears;
  }

  const startYear = $derived(Number(getMoment(minDate).format('YYYY')));
  const endYear = $derived(Number(getMoment(maxDate).format('YYYY')));
  const years = $derived<string[]>(getYears(startYear, endYear));
</script>

<div class={['dodo-ui-CalendarYearList', `size--${size}`, className].join(' ')} bind:this={ref}>
  {#if showControls}
    <div class="Controls">
      <Button {size} {color} variant="text" name="BackButton" onclick={oncancel} roundness={2}>
        {#snippet before()}
          <Icon icon="material-symbols:arrow-back-rounded" width="24" height="24" />
        {/snippet}

        Back
      </Button>
    </div>
  {/if}

  <ul>
    {#each years as year (year)}
      <CalendarYearChip
        value={year}
        selected={value === year ? true : false}
        {onselect}
        {size}
        {color}
        {customCalendarYearChipContent}
        {customCalendarYearChip}
        {...calendarYearChipProps}
      />
    {/each}
  </ul>
</div>

<style lang="scss">
  .dodo-ui-CalendarYearList {
    user-select: none;

    ul {
      margin: 0;
      padding: 0;
      flex-wrap: wrap;
      display: inline-flex;
      overflow-y: auto;
    }

    :global(.dodo-ui-CalendarYearChip) {
      width: 33.333%;
    }

    .Controls {
      margin-bottom: calc(var(--dodo-ui-space) * 2);
    }

    &.size {
      &--normal {
        width: calc(var(--dodo-ui-element-height-normal) * 7);

        ul {
          max-height: calc(var(--dodo-ui-element-height-normal) * 5);
        }
      }

      &--small {
        width: calc(var(--dodo-ui-element-height-small) * 7);

        ul {
          max-height: calc(var(--dodo-ui-element-height-small) * 5);
        }
      }

      &--large {
        width: calc(var(--dodo-ui-element-height-large) * 7);

        ul {
          max-height: calc(var(--dodo-ui-element-height-large) * 5);
        }
      }
    }
  }
</style>
