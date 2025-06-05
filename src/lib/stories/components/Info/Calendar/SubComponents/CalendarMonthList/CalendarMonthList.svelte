<script lang="ts" module>
  import type { ButtonClickEvent } from '$lib/stories/components/Form/Button/Button.svelte';

  export interface CalendarMonthListProps {
    /** CalendarMonthList ref */
    ref?: HTMLUListElement;
    /** Custom css class */
    class?: string;
    /** Selcted month Value */
    value?: CalendarMonthNames;
    /** onselect event handler */
    onselect?: (value: CalendarMonthNames, e: ButtonClickEvent) => void;
    /** Custom Calendar Chip Content */
    customCalendarMonthChipContent?: (value: CalendarMonthNames) => Snippet;
    /** Custom Calendar Chip */
    customCalendarMonthChip?: (value: CalendarMonthNames) => Snippet;
    /** How large should the Component be? */
    size?: ComponentSize;
    /** What color to use? */
    color?: ComponentColor;
    /** disabled Months */
    disabledMonths?: CalendarMonthNames[];
    /** calendarMonthChipProps: calendarMonthChip component props */
    calendarMonthChipProps?: Partial<CalendarMonthChipProps>;
  }
</script>

<script lang="ts">
  import type { ComponentColor } from '$lib/types/colors.js';
  import type { Snippet } from 'svelte';
  import type { ComponentSize } from '$lib/types/size.js';
  import {
    calendarMonthOptions,
    type CalendarMonthNames,
  } from '../CalendarControls/CalendarMonthSelector/CalendarMonthSelector.svelte';
  import type { CalendarMonthChipProps } from './CalendarMonthChip/CalendarMonthChip.svelte';
  import CalendarMonthChip from './CalendarMonthChip/CalendarMonthChip.svelte';

  let {
    class: className = '',
    ref = $bindable<HTMLUListElement>(),
    value,
    disabledMonths = [],
    onselect,
    calendarMonthChipProps,
    size = 'normal',
    color,
    customCalendarMonthChipContent,
    customCalendarMonthChip,
  }: CalendarMonthListProps = $props();
</script>

<ul class={['dodo-ui-CalendarMonthList', `size--${size}`, className].join(' ')} bind:this={ref}>
  {#each calendarMonthOptions as month (month.value)}
    <CalendarMonthChip
      value={month.abr3}
      selected={value === month.abr3 ? true : false}
      disabled={disabledMonths.includes(month.abr3)}
      {onselect}
      {size}
      {color}
      {customCalendarMonthChipContent}
      {customCalendarMonthChip}
      {...calendarMonthChipProps}
    />
  {/each}
</ul>

<style lang="scss">
  .dodo-ui-CalendarMonthList {
    margin: 0;
    padding: 0;
    flex-wrap: wrap;
    display: inline-flex;
    user-select: none;

    :global(.dodo-ui-CalendarMonthChip) {
      width: 33.333%;
    }

    &.size {
      &--normal {
        width: calc(var(--dodo-ui-element-height-normal) * 7);
      }

      &--small {
        width: calc(var(--dodo-ui-element-height-small) * 7);
      }

      &--large {
        width: calc(var(--dodo-ui-element-height-large) * 7);
      }
    }
  }
</style>
