<script lang="ts" module>
  import type { ComponentSize } from '$lib/types/size.js';
  import type { ComponentRoundness } from '$lib/types/roundness.js';
  import type { Snippet } from 'svelte';
  import type {
    ChangeEventHandler,
    ClipboardEventHandler,
    FocusEventHandler,
    FormEventHandler,
    KeyboardEventHandler,
    MouseEventHandler,
  } from 'svelte/elements';

  export type DatePickerCalendarIconPosition = false | 'before' | 'after';

  export interface DatePickerProps {
    /** How large should the button be? */
    size?: ComponentSize;
    /** editable DatePicker? */
    editable?: boolean;
    /** want a clearable DatePicker? */
    clearable?: boolean;
    /** onselect event handler */
    onselect?: (value: Date, dayOfMonth: DateOfMonth, e: ButtonClickEvent) => void;
    /** onclear event handler */
    onclear?: MouseEventHandler<HTMLButtonElement>;
    /** DatePicker ref */
    ref?: HTMLInputElement | HTMLButtonElement;
    /** How round should the border radius be? */
    roundness?: ComponentRoundness;
    /** Add a border around the button. Default True */
    outline?: boolean;
    /** DatePicker value */
    value: Date | undefined;
    /** How round should the border radius be? */
    placeholder?: string;
    /** disabled state */
    disabled?: boolean;
    /** Read only ? */
    readonly?: boolean;
    /** is there any associated Error ? */
    error?: boolean;
    /** Name */
    name?: string;
    /** Id */
    id?: string;
    /** Icon before button content */
    before?: Snippet;
    /** Icon after button content */
    after?: Snippet;
    /** Custom css class*/
    class?: string;
    /** onchange event handler */
    onchange?: ChangeEventHandler<HTMLInputElement>;
    /** oninput event handler */
    oninput?: FormEventHandler<HTMLInputElement>;
    /** onblur event handler */
    onblur?: FocusEventHandler<HTMLInputElement | HTMLButtonElement>;
    /** onfocus event handler */
    onfocus?: FocusEventHandler<HTMLInputElement | HTMLButtonElement>;
    /** onpaste event handler */
    onpaste?: ClipboardEventHandler<HTMLInputElement>;
    /** oncopy event handler */
    oncopy?: ClipboardEventHandler<HTMLInputElement>;
    /** oncut event handler */
    oncut?: ClipboardEventHandler<HTMLInputElement>;
    /** onkeydown event handler */
    onkeydown?: KeyboardEventHandler<HTMLInputElement | HTMLButtonElement>;
    /** onkeypress event handler */
    onkeypress?: KeyboardEventHandler<HTMLInputElement | HTMLButtonElement>;
    /** onkeyup event handler */
    onkeyup?: KeyboardEventHandler<HTMLInputElement | HTMLButtonElement>;
    /** custom Content Formatting for variant button */
    customInputContent?: (val: Date) => Snippet;
    /** Custom Popup Content */
    customPopupContent?: () => Snippet;
    /** PaperProps: Paper component props for Popup */
    paperProps?: Partial<PaperProps>;
    /** PopperProps: Popper component props */
    popperProps?: Partial<PopperProps>;
    /** custom CalendarI Icon */
    customCalendarIcon?: (open: boolean) => Snippet;
    /** DatePicker CalendarI con Position */
    calendarIconPosition?: DatePickerCalendarIconPosition;
    /** Popup stick horizontally  */
    popupPositionX?: PositionX;
    /** Popup stick vertically  */
    popupPositionY?: PositionY;
    /** Lock positions, disable auto top, bottom position based  */
    lockPoistions?: boolean;
    /** Popper Height For Vertical Position, default 300 */
    popperHeightForVerticalPosition?: number;
    /** Date display format, Default: DD/MM/YYYY , [Supported formats](https://day.js.org/docs/en/display/format) */
    format?: string;
    /** Override format for editable input */
    formatEditable?: string;
    /** Control Popup Open state */
    open?: boolean;

    /** Start Of Week */
    startOfWeek?: CalendarWeekNames;
    /** Define active month to override month selected with value */
    activeMonth?: Date;
    /** Include leading days from the previous month */
    showLastMonth?: boolean;
    /** Include trailing days from the next month */
    showNextMonth?: boolean;
    /** What color to use? */
    color?: ComponentColor;
    /** Show slected */
    showSelected?: boolean;
    /** Show Today  */
    showToday?: boolean;
    /** Set today manually  */
    today?: Date;
    /** Minimum allowed date, rest of the dates will be disabled  */
    minDate?: Date;
    /** Maxium allowed date, rest of the dates will be disabled  */
    maxDate?: Date;
    /** Exclude Dates, these dates will be disabled */
    excludeDates?: Date[];
    /** Include Dates, rest of the dates will be disabled  */
    includeDates?: Date[];
    /** Timezone string (e.g., "America/New_York"). */
    timezone?: string;
    /** Whether to return the time in UTC. If true, overrides timezone. */
    utc?: boolean;
    /** calendarDateChipProps: CalendarDateChip component props */
    calendarDateChipProps?: Partial<CalendarDateChipProps>;

    /** Custom Calendar Chip Content */
    customCalendarDateChipContent?: (dayOfMonth: DateOfMonth) => Snippet;
    /** Custom Calendar Chip */
    customCalendarDateChip?: (dayOfMonth: DateOfMonth) => Snippet;
    /** Custom Calendar Week Content */
    customCalendarWeekContent?: (week: CalendarWeekOption) => Snippet;
    /** Custom Calendar Week */
    customCalendarWeek?: (week: CalendarWeekOption) => Snippet;
    /** Weekend days */
    weekendDays?: CalendarWeekNames[];
    /** Color Weekend days */
    weekendDaysColorDays?: boolean;
    /** Show Calendar Controls */
    showCalendarControls?: boolean;
    /** Custom Calendar Controls */
    customCalendarControls?: () => Snippet;
    /** Show Month Selector */
    showCalendarMonthSelector?: boolean;
    /** Show Year Selector */
    showCalendarYearSelector?: boolean;
    /** Show Navigator */
    showCalendarNavigator?: boolean;

    /** Month Selector Props */
    calendarMonthSelectorProps?: Partial<CalendarMonthSelectorProps>;
    /** Custom MonthSelector */
    customCalendarMonthSelector?: (option: CalendarMonthOption) => Snippet;
    /** Custom MonthSelector Content */
    customCalendarMonthSelectorContent?: (option: CalendarMonthOption) => Snippet;

    /** Month Selector Click */
    onMonthSelectorClick?: (option: CalendarMonthOption, e: ButtonClickEvent) => void;
    /** Year Selector Props */
    calendarYearSelectorProps?: Partial<CalendarYearSelectorProps>;
    /** Custom YearSelector */
    customCalendarYearSelector?: (selectedYear: string) => Snippet;
    /** Custom YearSelector Content */
    customCalendarYearSelectorContent?: (selectedYear: string) => Snippet;
    /** Year Selector Click */
    onYearSelectorClick?: (selectedYear: string, e: ButtonClickEvent) => void;

    /** Calendar Navigation Props */
    calendarNavigationProps?: Partial<CalendarYearSelectorProps>;
    /** Navigation Next */
    onCalendarNavigationNextClick?: MouseEventHandler<HTMLButtonElement>;
    /** Navigation Previous */
    onCalendarNavigationPrevClick?: MouseEventHandler<HTMLButtonElement>;
    /** Custom YearSelector */
    customCalendarNavigation?: () => Snippet;
    /** Custom NavigationNext */
    customCalendarNavigationNext?: () => Snippet;
    /** Custom NavigationPrev */
    customCalendarNavigationPrev?: () => Snippet;
    /** Custom NavigationNext Content */
    customCalendarNavigationNextContent?: () => Snippet;
    /** Custom NavigationPrev Content */
    customCalendarNavigationPrevContent?: () => Snippet;
    /** Next disabled state */
    disabledCalendarNavigationNext?: boolean;
    /** Prev disabled state */
    disabledCalendarNavigationPrev?: boolean;

    /** Calendar Month select */
    onselectMonth?: (value: CalendarMonthNames, e: ButtonClickEvent) => void;
    /** Calendar Month cancel */
    oncancelMonth?: (e: ButtonClickEvent) => void;
    /** Custom Calendar Chip Content */
    customCalendarMonthChipContent?: (value: CalendarMonthNames) => Snippet;
    /** Custom Calendar Chip */
    customCalendarMonthChip?: (value: CalendarMonthNames) => Snippet;
    /** disabled Months */
    disabledMonths?: CalendarMonthNames[];
    /** calendarMonthChipProps: calendarMonthChip component props */
    calendarMonthChipProps?: Partial<CalendarMonthChipProps>;
    /** show month list controls */
    showControlsMonthList?: boolean;

    /** calendarYearChipProps: calendarYearChip component props */
    calendarYearChipProps?: Partial<CalendarYearChipProps>;
    /** Calendar Year select */
    onselectYear?: (value: string, e: ButtonClickEvent) => void;
    /** Calendar Year cancel */
    oncancelYear?: (e: ButtonClickEvent) => void;
    /** Custom Calendar Chip Content */
    customCalendarYearChipContent?: (value: string) => Snippet;
    /** Custom Calendar Chip */
    customCalendarYearChip?: (value: string) => Snippet;
    /** show Year list controls */
    showControlsYearList?: boolean;

    /** calendarProps: calendar component props */
    calendarProps?: Partial<CalendarProps>;
    /** calendar Top Content*/
    calendarTopContent?: (activeSection: CalendarActiveSection) => Snippet;
    /** calendar Bottom Content*/
    calendarBottomContent?: (activeSection: CalendarActiveSection) => Snippet;

    /** manipulate date callback */
    manipulateDate?: (
      dateToModify: DateOfMonth,
      settings?: CreateDatesOfMonthSettings,
    ) => DateOfMonth;
  }
</script>

<script lang="ts">
  import InputEnclosure from '$lib/stories/developer tools/components/InputEnclosure/InputEnclosure.svelte';
  import UtilityButton from '$lib/stories/developer tools/components/UtilityButton/UtilityButton.svelte';
  import Icon from '@iconify/svelte';
  import {
    createDateOfMonth,
    DynamicInput,
    getMoment,
    Popper,
    type CalendarDateChipProps,
    type CalendarMonthChipProps,
    type CalendarMonthNames,
    type CalendarMonthOption,
    type CalendarMonthSelectorProps,
    type CalendarWeekNames,
    type CalendarWeekOption,
    type CalendarYearChipProps,
    type CalendarYearSelectorProps,
    type ComponentColor,
    type CreateDatesOfMonthSettings,
    type DateOfMonth,
    type DynamicInputFocusEvent,
    type PaperProps,
    type PopperProps,
    type PositionX,
    type PositionY,
  } from '$lib/index.js';
  import type { TextInputInputEvent } from '../TextInput/TextInput.svelte';
  import type { ButtonClickEvent } from '../Button/Button.svelte';
  import Calendar, {
    type CalendarActiveSection,
    type CalendarProps,
  } from '../../Info/Calendar/Calendar.svelte';

  let {
    size = 'normal',
    roundness = 1,
    outline = true,
    name,
    id,
    class: className = '',
    disabled = false,
    onchange,
    oninput,
    onselect,
    onblur,
    onfocus,
    onpaste,
    oncopy,
    oncut,
    onkeydown,
    onkeypress,
    onkeyup,
    before,
    after,
    error = false,
    value,
    placeholder,
    ref = $bindable<HTMLInputElement | HTMLButtonElement>(),
    readonly = false,
    editable = false,
    clearable = false,
    onclear,
    customInputContent: customInputContentInternal,
    customPopupContent: customPopupContentInternal,
    customCalendarIcon: customCalendarIconInternal,
    paperProps,
    popperProps,
    calendarIconPosition = 'after',
    popupPositionX,
    popupPositionY,
    lockPoistions,
    popperHeightForVerticalPosition,
    color,
    format = 'DD/MM/YYYY',
    formatEditable: formatEditableRaw,
    open = $bindable<boolean>(false),

    startOfWeek = 'sun',
    timezone,
    utc,
    calendarDateChipProps,
    activeMonth,
    showSelected,
    showLastMonth,
    showNextMonth,
    showToday,
    today,
    minDate,
    maxDate,
    excludeDates,
    includeDates,
    customCalendarDateChipContent,
    customCalendarDateChip,
    customCalendarWeekContent,
    customCalendarWeek,
    weekendDays,
    weekendDaysColorDays,
    customCalendarControls,
    showCalendarControls,
    calendarMonthSelectorProps,
    customCalendarMonthSelector,
    customCalendarMonthSelectorContent,
    onMonthSelectorClick,
    calendarYearSelectorProps,
    customCalendarYearSelector,
    customCalendarYearSelectorContent,
    onYearSelectorClick,
    calendarNavigationProps,
    customCalendarNavigation,
    customCalendarNavigationNext,
    customCalendarNavigationPrev,
    customCalendarNavigationNextContent,
    customCalendarNavigationPrevContent,
    onCalendarNavigationNextClick,
    onCalendarNavigationPrevClick,
    disabledCalendarNavigationNext,
    disabledCalendarNavigationPrev,
    showCalendarMonthSelector,
    showCalendarYearSelector,
    showCalendarNavigator,
    onselectMonth,
    customCalendarMonthChipContent,
    customCalendarMonthChip,
    disabledMonths,
    calendarMonthChipProps,
    calendarYearChipProps,
    onselectYear,
    customCalendarYearChipContent,
    customCalendarYearChip,
    oncancelMonth,
    oncancelYear,
    showControlsMonthList,
    showControlsYearList,

    calendarProps,
    calendarTopContent,
    calendarBottomContent,

    manipulateDate,
  }: DatePickerProps = $props();

  const formatEditable = $derived(formatEditableRaw || format);

  let searchText: string = $derived(
    value ? getMoment(value, undefined, { timezone, utc }).format(format) : '',
  );

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let customInputContentTyped = customInputContentInternal as any;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let customPopupContentTyped = customPopupContentInternal as any;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let customCalendarIconTyped = customCalendarIconInternal as any;

  const calenderSize = calendarProps?.size || size;

  function closePopup() {
    open = false;

    ref?.blur();
  }

  function openPopup() {
    open = true;
  }

  function onfocusMod(e: DynamicInputFocusEvent) {
    openPopup();

    if (editable) {
      searchText = getMoment(searchText, format, { timezone, utc }).format(formatEditable);
    }

    if (onfocus) {
      onfocus(e);
    }
  }

  function onblurMod(e: DynamicInputFocusEvent) {
    if (editable) {
      const searchTextrToMoment = getMoment(searchText, formatEditable, { timezone, utc });

      if (searchTextrToMoment.isValid()) {
        const searchTextrToDate = searchTextrToMoment.toDate();
        const dayOfMonth = createDateOfMonth(
          searchTextrToDate,
          {
            startOfWeek,
            showLastMonth,
            showNextMonth,
            today,
            minDate,
            maxDate,
            excludeDates,
            includeDates,
            timezone,
            utc,
          },
          'currentMonth',
        );

        searchText = searchTextrToMoment.format(format);

        onselectMod(searchTextrToDate, dayOfMonth, e as ButtonClickEvent);
      } else {
        searchText = value ? getMoment(value, undefined, { timezone, utc }).format(format) : '';
      }
    }

    if (onblur) {
      onblur(e);
    }
  }

  function onClickOutside() {
    closePopup();
  }

  function onselectMod(val: Date, dayOfMonth: DateOfMonth, e: ButtonClickEvent) {
    closePopup();

    if (onselect) {
      onselect(val, dayOfMonth, e);
    }
  }

  function oninputMod(e: TextInputInputEvent) {
    const target = e.target as HTMLInputElement;

    searchText = target.value;

    if (oninput) {
      oninput(e);
    }
  }

  function onclearMod(e: ButtonClickEvent) {
    closePopup();

    if (onclear) {
      onclear(e);
    }
  }
</script>

{#snippet datePickerCalendarIcon()}
  <UtilityButton {size} title="Dropdown" onclick={onfocusMod}>
    {#if customCalendarIconTyped}
      {@render customCalendarIconTyped(open)}
    {:else if size === 'small'}
      <Icon icon="ic:baseline-calendar-month" width="19" height="19" />
    {:else}
      <Icon icon="ic:baseline-calendar-month" width="24" height="24" />
    {/if}
  </UtilityButton>
{/snippet}

<div class={['dodo-ui-DatePicker', className].join(' ')}>
  <Popper
    {open}
    fullWidth
    popupFullWidth={false}
    {onClickOutside}
    {...popperProps}
    {popupPositionX}
    {popupPositionY}
    {paperProps}
    {lockPoistions}
    {popperHeightForVerticalPosition}
    popupMaxHeight="800px"
  >
    <div
      class:outline
      class:disabled
      class:error
      class={[
        'DatePicker',
        `size--${size}`,
        `${open ? 'focused' : ''}`,
        `roundness--${roundness}`,
        className,
      ].join(' ')}
    >
      <InputEnclosure
        {outline}
        {disabled}
        {error}
        focused={open}
        {size}
        {roundness}
        {before}
        {after}
      >
        {#if calendarIconPosition === 'before'}
          <div class:before class:open class="Calendar">
            {@render datePickerCalendarIcon()}
          </div>
        {/if}

        <DynamicInput
          type="text"
          {name}
          {id}
          {disabled}
          bind:ref
          oninput={oninputMod}
          {onchange}
          onfocus={onfocusMod}
          onblur={onblurMod}
          {onpaste}
          {oncopy}
          {oncut}
          {onkeydown}
          {onkeypress}
          {onkeyup}
          {placeholder}
          value={editable
            ? searchText
            : getMoment(value, undefined, { timezone, utc }).format(format)}
          {readonly}
          variant={editable ? 'input' : 'button'}
        >
          {#snippet customInputContent()}
            {#if customInputContentTyped}
              {@render customInputContentTyped(value)}
            {:else if value}
              {getMoment(value, undefined, { timezone, utc }).format(format)}
            {:else}
              {placeholder}
            {/if}
          {/snippet}
        </DynamicInput>

        {#if value && clearable && !disabled}
          <div class:after class="DatePickerClear">
            <UtilityButton {size} title="Clear" onclick={onclearMod}>
              <Icon icon="material-symbols:close-small" width="24" height="24" />
            </UtilityButton>
          </div>
        {/if}

        {#if calendarIconPosition === 'after'}
          <div class:after class:open class="Calendar">
            {@render datePickerCalendarIcon()}
          </div>
        {/if}
      </InputEnclosure>
    </div>

    {#snippet popupChildren()}
      {#if customPopupContentTyped}
        {@render customPopupContentTyped()}
      {:else}
        <div class="CalendarContainer">
          <Calendar
            {value}
            size={calenderSize}
            {color}
            {startOfWeek}
            {timezone}
            {utc}
            {calendarDateChipProps}
            {activeMonth}
            {showSelected}
            {showLastMonth}
            {showNextMonth}
            {showToday}
            {today}
            {minDate}
            {maxDate}
            {excludeDates}
            {includeDates}
            {customCalendarDateChipContent}
            {customCalendarDateChip}
            {customCalendarWeekContent}
            {customCalendarWeek}
            {weekendDays}
            {weekendDaysColorDays}
            {customCalendarControls}
            {showCalendarControls}
            {calendarMonthSelectorProps}
            {customCalendarMonthSelector}
            {customCalendarMonthSelectorContent}
            {onMonthSelectorClick}
            {calendarYearSelectorProps}
            {customCalendarYearSelector}
            {customCalendarYearSelectorContent}
            {onYearSelectorClick}
            {calendarNavigationProps}
            {customCalendarNavigation}
            {customCalendarNavigationNext}
            {customCalendarNavigationPrev}
            {customCalendarNavigationNextContent}
            {customCalendarNavigationPrevContent}
            {onCalendarNavigationNextClick}
            {onCalendarNavigationPrevClick}
            {disabledCalendarNavigationNext}
            {disabledCalendarNavigationPrev}
            {showCalendarMonthSelector}
            {showCalendarYearSelector}
            {showCalendarNavigator}
            {onselectMonth}
            {customCalendarMonthChipContent}
            {customCalendarMonthChip}
            {disabledMonths}
            {calendarMonthChipProps}
            {calendarYearChipProps}
            {onselectYear}
            {customCalendarYearChipContent}
            {customCalendarYearChip}
            {oncancelMonth}
            {oncancelYear}
            {showControlsMonthList}
            {showControlsYearList}
            onselect={onselectMod}
            {calendarTopContent}
            {calendarBottomContent}
            {manipulateDate}
            {...calendarProps}
          />
        </div>
      {/if}
    {/snippet}
  </Popper>
</div>

<style lang="scss">
  .dodo-ui-DatePicker {
    .DatePicker {
      &.size {
        &--normal {
          .DatePickerClear {
            &.after {
              margin-right: calc(var(--dodo-ui-space-small) * 2);
            }
          }

          .Calendar {
            &.after {
              margin-right: calc(var(--dodo-ui-space-small) * 2);
            }

            &.before {
              margin-right: calc(var(--dodo-ui-space-small) * 2);
            }
          }
        }

        &--small {
          .DatePickerClear {
            &.after {
              margin-right: var(--dodo-ui-space);
            }
          }

          .Calendar {
            &.after {
              margin-right: var(--dodo-ui-space);
            }

            &.before {
              margin-right: var(--dodo-ui-space);
            }
          }
        }

        &--large {
          .DatePickerClear {
            &.after {
              margin-right: calc(var(--dodo-ui-space) * 2);
            }
          }

          .Calendar {
            &.after {
              margin-right: calc(var(--dodo-ui-space) * 2);
            }

            &.before {
              margin-right: calc(var(--dodo-ui-space) * 2);
            }
          }
        }
      }
    }

    .CalendarContainer {
      padding: var(--dodo-ui-space);
    }
  }
</style>
