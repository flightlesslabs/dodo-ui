<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { ComponentSize } from '$lib/types/size.js';
  import type {
    CalendarWeekOption,
    CalendarWeekNames,
    CalendarWeekDayNameType,
  } from './CalendarWeek.svelte';

  interface WeekDayProps {
    /** Custom css class */
    class?: string;
    /** Custom Calendar Week Content */
    customCalendarWeekContent?: (option: CalendarWeekOption) => Snippet;
    /**  Day Name type */
    nameType?: CalendarWeekDayNameType;
    /** weekOption */
    weekOption: CalendarWeekOption;
    /** How large should the component be? */
    size?: ComponentSize;
    /** Weekend days */
    weekendDays?: CalendarWeekNames[];
  }

  let {
    class: className = '',
    customCalendarWeekContent: customCalendarWeekContentInternal,
    nameType = 'abr2',
    size = 'normal',
    weekendDays,
    weekOption,
  }: WeekDayProps = $props();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let customCalendarWeekContentTyped = customCalendarWeekContentInternal as any;

  const weekend = weekendDays?.includes(weekOption.abr3) ? true : false;
</script>

{#snippet weekName(option: CalendarWeekOption)}
  {#if nameType === 'abr3'}
    {option.abr3}
  {:else if nameType === 'abr1'}
    {option.abr1}
  {:else if nameType === 'abr2'}
    {option.abr2}
  {:else}
    {option.abr2}
  {/if}
{/snippet}

<li class:weekend class={['WeekDay', `size--${size}`, className].join(' ')}>
  {#if customCalendarWeekContentTyped}
    {@render customCalendarWeekContentTyped(weekOption)}
  {:else}
    {@render weekName(weekOption)}
  {/if}
</li>

<style lang="scss">
  .WeekDay {
    display: inline-flex;
    justify-content: center;
    font-family: inherit;
    color: inherit;
    text-transform: capitalize;
    color: var(--dodo-color-neutral-700);

    &.size {
      &--normal {
        font-size: 0.8rem;
        width: calc(var(--dodo-ui-element-height-normal) - 10px);
      }

      &--small {
        font-size: 0.74rem;
        width: calc(var(--dodo-ui-element-height-small) - 8px);
      }

      &--large {
        font-size: 1rem;
        width: calc(var(--dodo-ui-element-height-large) - 12px);
      }
    }

    &.weekend {
      color: var(--dodo-color-danger-600);
    }
  }
</style>
