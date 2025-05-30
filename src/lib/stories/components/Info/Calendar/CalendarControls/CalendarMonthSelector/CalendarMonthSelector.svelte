<script lang="ts" module>
  import type { ComponentColor } from '$lib/types/colors.js';
  import type { ComponentSize } from '$lib/types/size.js';

  import type {
    ButtonClickEvent,
    ButtonProps,
  } from '$lib/stories/components/Form/Button/Button.svelte';
  import { MONTHS } from '../../utils/types.js';
  import getMoment from '$lib/stories/developer tools/helpers/Time/getMoment/getMoment.js';
  import { Button, type ComponentRoundness } from '$lib/index.js';
  import type { Snippet } from 'svelte';
  import Icon from '@iconify/svelte';

  export type CalendarMonthNames =
    | 'jan'
    | 'feb'
    | 'mar'
    | 'apr'
    | 'may'
    | 'jun'
    | 'jul'
    | 'aug'
    | 'sep'
    | 'oct'
    | 'nov'
    | 'dec';

  export type CalendarMonthOption = {
    value: MONTHS;
    abr3: CalendarMonthNames;
    fullName: string;
  };

  const calendarMonthOptions: CalendarMonthOption[] = [
    { value: MONTHS.JAN, abr3: 'jan', fullName: 'January' },
    { value: MONTHS.FEB, abr3: 'feb', fullName: 'February' },
    { value: MONTHS.MAR, abr3: 'mar', fullName: 'March' },
    { value: MONTHS.APR, abr3: 'apr', fullName: 'April' },
    { value: MONTHS.MAY, abr3: 'may', fullName: 'May' },
    { value: MONTHS.JUN, abr3: 'jun', fullName: 'June' },
    { value: MONTHS.JUL, abr3: 'jul', fullName: 'July' },
    { value: MONTHS.AUG, abr3: 'aug', fullName: 'August' },
    { value: MONTHS.SEP, abr3: 'sep', fullName: 'September' },
    { value: MONTHS.OCT, abr3: 'oct', fullName: 'October' },
    { value: MONTHS.NOV, abr3: 'nov', fullName: 'November' },
    { value: MONTHS.DEC, abr3: 'dec', fullName: 'December' },
  ];

  export type calendarMonthNameType = 'abr3' | 'fullName';

  export interface CalendarMonthSelectorProps {
    /** CalendarMonthSelector ref */
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
    /** buttonProps */
    buttonProps?: Partial<ButtonProps>;
    /**  month Name type */
    nameType?: calendarMonthNameType;
    /** The onclick event handler */
    onclick?: (option: CalendarMonthOption, e: ButtonClickEvent) => void;
    /** Custom MonthSelector */
    customCalendarMonthSelector?: (option: CalendarMonthOption) => Snippet;
    /** Custom MonthSelector Content */
    customCalendarMonthSelectorContent?: (option: CalendarMonthOption) => Snippet;
    /** Button disabled state */
    disabled?: boolean;
    /** How round should the border radius be? */
    roundness?: ComponentRoundness;
  }
</script>

<script lang="ts">
  let {
    class: className = '',
    ref = $bindable<HTMLDivElement>(),
    value,
    timezone,
    utc,
    activeMonth,
    size,
    color,
    buttonProps,
    nameType,
    onclick,
    disabled,
    roundness = 2,
    customCalendarMonthSelector: customCalendarMonthSelectorInternal,
    customCalendarMonthSelectorContent: customCalendarMonthSelectorContentInternal,
  }: CalendarMonthSelectorProps = $props();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let customCalendarMonthSelectorTyped = customCalendarMonthSelectorInternal as any;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let customCalendarMonthSelectorContentTyped = customCalendarMonthSelectorContentInternal as any;

  let selectedMonth = $derived<string | undefined>(
    getMoment(activeMonth || value, undefined, {
      timezone,
      utc,
    })
      .format('MMM')
      .toLocaleLowerCase(),
  );

  const monthDetails = $derived(
    calendarMonthOptions.find((item) => item.abr3 === selectedMonth) || calendarMonthOptions[0],
  );

  function onClickMod(e: ButtonClickEvent) {
    if (onclick) {
      onclick(monthDetails, e);
    }
  }
</script>

{#snippet monthName(option: CalendarMonthOption)}
  {#if customCalendarMonthSelectorContentTyped}
    {@render customCalendarMonthSelectorContentTyped(option)}
  {:else if nameType === 'abr3'}
    {option.abr3}
  {:else if nameType === 'fullName'}
    {option.fullName}
  {:else}
    {option.abr3}
  {/if}
{/snippet}

<div
  class={['dodo-ui-CalendarMonthSelector', `size--${size}`, `color--${color}`, className].join(' ')}
  bind:this={ref}
>
  <Button
    name="month-selector"
    variant="text"
    {color}
    {disabled}
    {roundness}
    onclick={onClickMod}
    {size}
    {...buttonProps}
  >
    {#if customCalendarMonthSelectorTyped}
      {@render customCalendarMonthSelectorTyped(monthDetails)}
    {:else}
      {@render monthName(monthDetails)}
    {/if}

    {#snippet after()}
      <Icon icon="material-symbols:arrow-drop-down-rounded" width="24" height="24" />
    {/snippet}
  </Button>
</div>

<style lang="scss">
  .dodo-ui-CalendarMonthSelector {
    :global(.dodo-ui-Button) {
      text-transform: capitalize;
    }

    :global(.dodo-ui-Button .content--after) {
      margin-left: auto;
    }

    &.size {
      &--normal {
        :global(.dodo-ui-Button) {
          width: 80px;
        }
      }

      &--small {
        :global(.dodo-ui-Button) {
          width: 70px;
        }
      }

      &--large {
        :global(.dodo-ui-Button) {
          width: 100px;
        }
      }
    }
  }
</style>
