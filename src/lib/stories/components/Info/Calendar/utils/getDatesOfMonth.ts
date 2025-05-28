import getMoment, {
  type GetMomentFormat,
} from '$lib/stories/developer tools/helpers/Time/getMoment/getMoment.js';
import type { DateOfMonth, DAYS_OF_WEEK } from './types.js';

export interface GetDatesOfMonthSettings {
  /** Optional moment.js format string */
  format?: GetMomentFormat;

  /** Day considered as start of the week (0 = Sunday, 1 = Monday, etc.) */
  startOfWeek?: DAYS_OF_WEEK;

  /** Include leading days from the previous month */
  showLastMonth?: boolean;

  /** Include trailing days from the next month */
  showNextMonth?: boolean;

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

/**
 * Generates a calendar grid of dates for a given month.
 *
 * @param {Date} date - The base date for the month to generate.
 * @param {GetDatesOfMonthSettings} [settings] - Optional settings for formatting and display.
 * @returns {(DateOfMonth[][] | null)} - A 2D array of DateOfMonth objects representing the calendar, or null if invalid.
 */
export default function getDatesOfMonth(
  date: Date,
  settings?: GetDatesOfMonthSettings,
): DateOfMonth[][] | null {
  const showNextMonth = settings?.showNextMonth !== false;
  const showLastMonth = settings?.showLastMonth !== false;

  const monthMoment = getMoment(date, settings?.format, {
    timezone: settings?.timezone,
    utc: settings?.utc,
  }).startOf('month');

  if (!monthMoment.isValid()) {
    return null;
  }

  const startOfMonthDay = monthMoment.day();
  const daysInMonth = monthMoment.daysInMonth();
  const dates: DateOfMonth[] = [];

  const lastMonth = monthMoment.clone().subtract(startOfMonthDay, 'days');
  const nextMonth = monthMoment.clone().add(1, 'month');

  if (showLastMonth) {
    for (let gap = 0; gap < startOfMonthDay; gap++) {
      const dayMoment = lastMonth.clone().add(gap, 'days');
      dates.push({
        id: `${dayMoment.valueOf()}`,
        dayNumber: Number(dayMoment.format('D')),
        date: dayMoment.toDate(),
        isLastMonth: true,
        isCurrentMonth: false,
      });
    }
  }

  for (let day = 1; day <= daysInMonth; day++) {
    const dayMoment = monthMoment.clone().set('date', day); // changed from 'day' to 'date'
    dates.push({
      id: `${dayMoment.valueOf()}`,
      dayNumber: day,
      date: dayMoment.toDate(),
      isCurrentMonth: true,
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
          dayNumber: Number(dayMoment.format('D')),
          date: dayMoment.toDate(),
          isNextMonth: true,
          isCurrentMonth: false,
        });
      }

      datesDivided[datesDivided.length - 1] = [...lastRow, ...nextMonthDates];
    }
  }

  return datesDivided;
}
