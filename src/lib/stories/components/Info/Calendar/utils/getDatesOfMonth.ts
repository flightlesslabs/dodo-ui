import getMoment from '$lib/stories/developer tools/helpers/Time/getMoment/getMoment.js';
import type dayjs from 'dayjs';
import {
  calendarWeekOptions,
  type CalendarWeekNames,
} from '../CalendarDatesChart/CalendarWeek/CalendarWeek.svelte';
import type { DateOfMonth } from './types.js';

export interface GetDatesOfMonthSettings {
  /** Day considered as start of the week */
  startOfWeek?: CalendarWeekNames;

  /** Include leading days from the previous month */
  showLastMonth?: boolean;

  /** Include trailing days from the next month */
  showNextMonth?: boolean;

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

  /** Optional IANA timezone */
  timezone?: string;

  /** Use UTC time */
  utc?: boolean;
}

/**
 * Divides an array into chunks of a given size.
 *
 * @template T - The type of elements in the array.
 * @param {T[]} arr - The array to be chunked.
 * @param {number} size - The chunk size.
 * @returns {T[][]} - An array of chunks.
 */
function chunkArray<T>(arr: T[], size: number): T[][] {
  const result: T[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}

function dateMoment(date?: Date, settings?: GetDatesOfMonthSettings) {
  return getMoment(date, undefined, {
    timezone: settings?.timezone,
    utc: settings?.utc,
  });
}

function getIsToday(dayMoment: dayjs.Dayjs, todayDate: string, todayManual: string | undefined) {
  const dayDateFormat = dayMoment.format('DD-MM-YYYY');
  let today = false;

  if (todayManual && todayManual === dayDateFormat) {
    today = true;
  } else if (todayDate === dayDateFormat) {
    today = true;
  }

  return today;
}

function getIsDateDisabled(
  dayMoment: dayjs.Dayjs,
  minDate: dayjs.Dayjs | undefined,
  maxDate: dayjs.Dayjs | undefined,
  excludeDates: string[] | undefined,
  includeDates: string[] | undefined,
) {
  const dayDateFormat = dayMoment.format('DD-MM-YYYY');
  let disabled = false;

  if (minDate?.isValid() && dayMoment.isBefore(minDate)) {
    disabled = true;
  }

  if (maxDate?.isValid() && dayMoment.isAfter(maxDate)) {
    disabled = true;
  }

  if (excludeDates?.length && excludeDates.includes(dayDateFormat)) {
    disabled = true;
  }

  if (includeDates?.length && !includeDates.includes(dayDateFormat)) {
    disabled = true;
  }

  return disabled;
}

/**
 * Generates a calendar grid of dates for a given month.
 *
 * @param {Date} date - The base date for the month to generate.
 * @param {GetDatesOfMonthSettings} [settings] - Optional settings for formatting and display.
 * @returns {(DateOfMonth[][] | null)} - A 2D array of DateOfMonth objects representing the calendar, or null if invalid.
 */
export default function getDatesOfMonth(
  date?: Date,
  settings?: GetDatesOfMonthSettings,
): DateOfMonth[][] | null {
  if (!date) {
    return null;
  }

  const monthMoment = dateMoment(date, settings).startOf('month').startOf('day');

  if (!monthMoment.isValid()) {
    return null;
  }

  const todayDate = dateMoment(undefined, settings).format('DD-MM-YYYY');

  const todayManual = settings?.today
    ? dateMoment(settings?.today, settings).format('DD-MM-YYYY')
    : undefined;
  const showNextMonth = settings?.showNextMonth !== false;
  const showLastMonth = settings?.showLastMonth !== false;
  const minDate = settings?.minDate ? dateMoment(settings.minDate, settings) : undefined;
  const maxDate = settings?.maxDate ? dateMoment(settings.maxDate, settings) : undefined;
  const excludeDates = settings?.excludeDates?.length
    ? settings?.excludeDates.map((item) => dateMoment(item, settings).format('DD-MM-YYYY'))
    : undefined;
  const includeDates = settings?.includeDates?.length
    ? settings?.includeDates.map((item) => dateMoment(item, settings).format('DD-MM-YYYY'))
    : undefined;

  const startOfWeek =
    calendarWeekOptions.find((item) => item.abr3 === settings?.startOfWeek) ||
    calendarWeekOptions[0];
  const rawStartOfMonthDay = monthMoment.day();
  const startOfMonthDay = (rawStartOfMonthDay - startOfWeek.value + 7) % 7;

  const daysInMonth = monthMoment.daysInMonth();
  const dates: DateOfMonth[] = [];

  const lastMonth = monthMoment.clone().subtract(startOfMonthDay, 'days');
  const nextMonth = monthMoment.clone().add(1, 'month');

  if (showLastMonth) {
    for (let gap = 0; gap < startOfMonthDay; gap++) {
      const dayMoment = lastMonth.clone().add(gap, 'days');

      dates.push({
        id: `${dayMoment.valueOf()}`,
        date: dayMoment.toDate(),
        isLastMonth: true,
        isCurrentMonth: false,
        disabled: getIsDateDisabled(dayMoment, minDate, maxDate, excludeDates, includeDates),
        today: getIsToday(dayMoment, todayDate, todayManual),
      });
    }
  }

  for (let day = 1; day <= daysInMonth; day++) {
    const dayMoment = monthMoment.clone().set('date', day);

    dates.push({
      id: `${dayMoment.valueOf()}`,
      date: dayMoment.toDate(),
      isCurrentMonth: true,
      disabled: getIsDateDisabled(dayMoment, minDate, maxDate, excludeDates, includeDates),
      today: getIsToday(dayMoment, todayDate, todayManual),
    });
  }

  const datesDivided = chunkArray<DateOfMonth>(dates, 7);

  if (showNextMonth) {
    const lastRow = datesDivided[datesDivided.length - 1];
    const nextMonthDaysRequired = 7 - lastRow.length;

    if (nextMonthDaysRequired > 0) {
      const nextMonthDates: DateOfMonth[] = [];

      for (let gap = 0; gap < nextMonthDaysRequired; gap++) {
        const dayMoment = nextMonth.clone().add(gap, 'days');

        nextMonthDates.push({
          id: `${dayMoment.valueOf()}`,
          date: dayMoment.toDate(),
          isNextMonth: true,
          isCurrentMonth: false,
          disabled: getIsDateDisabled(dayMoment, minDate, maxDate, excludeDates, includeDates),
          today: getIsToday(dayMoment, todayDate, todayManual),
        });
      }

      datesDivided[datesDivided.length - 1] = [...lastRow, ...nextMonthDates];
    }
  }

  return datesDivided;
}
