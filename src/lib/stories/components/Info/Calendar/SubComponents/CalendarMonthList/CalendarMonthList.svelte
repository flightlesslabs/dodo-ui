<script lang="ts" module>
  import type { ButtonClickEvent } from '$lib/stories/components/Form/Button/Button.svelte';

  export interface CalendarMonthListProps {
    /** CalendarMonthList ref */
    ref?: HTMLDivElement;
    /** Custom css class */
    class?: string;
    /** Selcted month Value */
    value?: CalendarMonthNames;
    /** onselect event handler */
    onselect?: (value: CalendarMonthNames, e: ButtonClickEvent) => void;
    /** oncancel event handler */
    oncancel?: (e: ButtonClickEvent) => void;
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
    /** show controls */
    showControls?: boolean;
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
  import { Button } from '$lib/index.js';
  import Icon from '@iconify/svelte';

  let {
    class: className = '',
    ref = $bindable<HTMLDivElement>(),
    value,
    disabledMonths = [],
    onselect,
    calendarMonthChipProps,
    size = 'normal',
    color,
    customCalendarMonthChipContent,
    customCalendarMonthChip,
    oncancel,
    showControls = true,
  }: CalendarMonthListProps = $props();
</script>

<div class={['dodo-ui-CalendarMonthList', `size--${size}`, className].join(' ')} bind:this={ref}>
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
</div>

<style lang="scss">
  .dodo-ui-CalendarMonthList {
    user-select: none;

    ul {
      margin: 0;
      padding: 0;
      flex-wrap: wrap;
      display: inline-flex;
    }

    :global(.dodo-ui-CalendarMonthChip) {
      width: 33.333%;
    }

    .Controls {
      margin-bottom: calc(var(--dodo-ui-space) * 2);
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
