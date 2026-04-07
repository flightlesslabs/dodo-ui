<script lang="ts" module>
  import type { ComponentRoundnessShape } from '$lib/attributes/roundness.js';
  import type { ComponentSize } from '$lib/attributes/size.js';

  export type DatePickerProps = DatePickerRootPropsWithoutHTML & {
    /** Visual size token (e.g. small, normal, large) */
    size?: ComponentSize;

    /** Border radius token (e.g. 1–3, "pill") */
    roundness?: ComponentRoundnessShape;

    /** Render an outlined enclosure (shows border) */
    outline?: boolean;

    /** Custom CSS class names applied to the InputEnclosure */
    class?: string;

    /**
     * Error visual state.
     *
     * When true, applies error styling to the enclosure.
     * Intended for validation errors.
     */
    error?: boolean;

    /**
     * Focused visual state.
     *
     * When true, forces focused styling on the enclosure.
     * Usually controlled automatically via focus/blur.
     */
    focused?: boolean;

    /**
     * Content rendered before the input (prefix).
     *
     * Use {#snippet before} in Svelte.
     */
    before?: Snippet;

    /**
     * Content rendered after the input (suffix).
     *
     * Use {#snippet after} in Svelte.
     */
    after?: Snippet;

    /** Select placeholder */
    placeholder?: string;

    /**
     * Date display format for the input segments.
     *
     * Controls the visual order and separators of the date parts
     * (e.g. "dd/mm/yyyy", "mm-dd-yyyy", "yyyy.mm.dd").
     *
     * This only affects how the date is rendered in the input,
     * not the internal parsing or keyboard interaction behavior
     * of the DatePicker.
     */
    dateFormat?: DatePickerFormat;

    /** bits ui dateFieldInputProps */
    dateFieldInputProps?: DateFieldInputProps;

    /** bits ui datePickerTriggerProps */
    datePickerTriggerProps?: DatePickerTriggerProps;
  };
</script>

<script lang="ts">
  import {
    DatePicker as DatePickerBitsUi,
    type DateFieldInputProps,
    type DatePickerRootPropsWithoutHTML,
    type DatePickerTriggerProps,
  } from 'bits-ui';
  import type { Snippet } from 'svelte';
  import DatepickerInput from './DatePickerInput/DatePickerInput.svelte';
  import type { DatePickerFormat } from './DatePickerInput/utils.js';
  let {
    size = 'normal',
    roundness = 1,
    outline = true,
    class: className = '',
    disabled = false,
    error = false,
    focused: forcedFocused = false,
    before,
    after,
    open = $bindable<boolean>(false),
    placeholder,
    weekdayFormat = 'short',
    fixedWeeks = true,
    dateFieldInputProps,
    datePickerTriggerProps,
    weekStartsOn = 1,
    dateFormat = 'dd/mm/yyyy',
    ...restProps
  }: DatePickerProps = $props();
</script>

<DatePickerBitsUi.Root {...restProps} {weekdayFormat} {weekStartsOn} {fixedWeeks}>
  <DatepickerInput
    {size}
    {roundness}
    {outline}
    class={className}
    {disabled}
    {error}
    {dateFieldInputProps}
    {datePickerTriggerProps}
    focused={forcedFocused}
    {before}
    {after}
    {placeholder}
    {dateFormat}
  />
  <DatePickerBitsUi.Portal>
    <DatePickerBitsUi.Content sideOffset={6}>
      <DatePickerBitsUi.Calendar>
        {#snippet children({ months, weekdays })}
          <DatePickerBitsUi.Header>
            <DatePickerBitsUi.PrevButton>L</DatePickerBitsUi.PrevButton>
            <DatePickerBitsUi.Heading />
            <DatePickerBitsUi.NextButton>R</DatePickerBitsUi.NextButton>
          </DatePickerBitsUi.Header>
          <div>
            {#each months as month (month.value)}
              <DatePickerBitsUi.Grid>
                <DatePickerBitsUi.GridHead>
                  <DatePickerBitsUi.GridRow>
                    {#each weekdays as day (day)}
                      <DatePickerBitsUi.HeadCell>
                        <div>{day.slice(0, 2)}</div>
                      </DatePickerBitsUi.HeadCell>
                    {/each}
                  </DatePickerBitsUi.GridRow>
                </DatePickerBitsUi.GridHead>
                <DatePickerBitsUi.GridBody>
                  {#each month.weeks as weekDates (weekDates)}
                    <DatePickerBitsUi.GridRow>
                      {#each weekDates as date (date)}
                        <DatePickerBitsUi.Cell {date} month={month.value}>
                          <DatePickerBitsUi.Day>
                            <div></div>
                            {date.day}
                          </DatePickerBitsUi.Day>
                        </DatePickerBitsUi.Cell>
                      {/each}
                    </DatePickerBitsUi.GridRow>
                  {/each}
                </DatePickerBitsUi.GridBody>
              </DatePickerBitsUi.Grid>
            {/each}
          </div>
        {/snippet}
      </DatePickerBitsUi.Calendar>
    </DatePickerBitsUi.Content>
  </DatePickerBitsUi.Portal>
</DatePickerBitsUi.Root>
