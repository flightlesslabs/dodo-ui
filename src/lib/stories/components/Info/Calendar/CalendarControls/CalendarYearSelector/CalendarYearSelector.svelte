<script lang="ts" module>
  import type { ComponentColor } from '$lib/types/colors.js';
  import type { ComponentSize } from '$lib/types/size.js';

  import type {
    ButtonClickEvent,
    ButtonProps,
  } from '$lib/stories/components/Form/Button/Button.svelte';
  import getMoment from '$lib/stories/developer tools/helpers/Time/getMoment/getMoment.js';
  import { Button, type ComponentRoundness } from '$lib/index.js';
  import type { Snippet } from 'svelte';
  import Icon from '@iconify/svelte';

  export interface CalendarYearSelectorProps {
    /** CalendarYearSelector ref */
    ref?: HTMLDivElement;
    /** Custom css class */
    class?: string;
    /** Selcted date Value */
    value?: Date;
    /** Define active year to override year selected with value */
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
    /** The onclick event handler */
    onclick?: (selectedYear: string, e: ButtonClickEvent) => void;
    /** Custom YearSelector */
    customCalendarYearSelector?: (selectedYear: string) => Snippet;
    /** Custom YearSelector Content */
    customCalendarYearSelectorContent?: (selectedYear: string) => Snippet;
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
    onclick,
    disabled,
    roundness = 2,
    customCalendarYearSelector: customCalendarYearSelectorInternal,
    customCalendarYearSelectorContent: customCalendarYearSelectorContentInternal,
  }: CalendarYearSelectorProps = $props();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let customCalendarYearSelectorTyped = customCalendarYearSelectorInternal as any;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let customCalendarYearSelectorContentTyped = customCalendarYearSelectorContentInternal as any;

  const selectedYear = $derived(
    getMoment(activeMonth || value, undefined, {
      timezone,
      utc,
    }).format('YYYY'),
  );

  function onClickMod(e: ButtonClickEvent) {
    if (onclick) {
      onclick(selectedYear, e);
    }
  }
</script>

{#snippet yearName(selectedYear: string)}
  {#if customCalendarYearSelectorContentTyped}
    {@render customCalendarYearSelectorContentTyped(selectedYear)}
  {:else}
    {selectedYear}
  {/if}
{/snippet}

<div
  class={['dodo-ui-CalendarYearSelector', `size--${size}`, `color--${color}`, className].join(' ')}
  bind:this={ref}
>
  <Button
    name="year-selector"
    variant="text"
    {color}
    {disabled}
    {roundness}
    onclick={onClickMod}
    {size}
    {...buttonProps}
  >
    {#if customCalendarYearSelectorTyped}
      {@render customCalendarYearSelectorTyped(selectedYear)}
    {:else}
      {@render yearName(selectedYear)}
    {/if}

    {#snippet after()}
      <Icon icon="material-symbols:arrow-drop-down-rounded" width="24" height="24" />
    {/snippet}
  </Button>
</div>

<style lang="scss">
  .dodo-ui-CalendarYearSelector {
    :global(.dodo-ui-Button) {
      text-transform: capitalize;
    }

    :global(.dodo-ui-Button .content--after) {
      margin-left: auto;
    }

    &.size {
      &--normal {
        :global(.dodo-ui-Button) {
          min-width: 85px;
        }
      }

      &--small {
        :global(.dodo-ui-Button) {
          min-width: 75px;
        }
      }

      &--large {
        :global(.dodo-ui-Button) {
          min-width: 105px;
        }
      }
    }
  }
</style>
