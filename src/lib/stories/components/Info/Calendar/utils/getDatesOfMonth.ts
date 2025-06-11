import getMoment from '$lib/stories/developer tools/helpers/Time/getMoment/getMoment.js';

import type { DateOfMonth } from './types.js';
import { calendarWeekOptions } from '$lib/index.js';
import createDateOfMonth, { type CreateDatesOfMonthSettings } from './createDateOfMonth.js';

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

function dateMoment(date?: Date, settings?: CreateDatesOfMonthSettings) {
  return getMoment(date, undefined, {
    timezone: settings?.timezone,
    utc: settings?.utc,
  });
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
  settings?: CreateDatesOfMonthSettings,
): DateOfMonth[][] | null {
  if (!date) {
    return null;
  }

  const monthMoment = dateMoment(date, settings).startOf('month').startOf('day');

  if (!monthMoment.isValid()) {
    return null;
  }

  const showNextMonth = settings?.showNextMonth !== false;
  const showLastMonth = settings?.showLastMonth !== false;

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

      dates.push(createDateOfMonth(dayMoment.toDate(), settings, 'lastMonth'));
    }
  }

  for (let day = 1; day <= daysInMonth; day++) {
    const dayMoment = monthMoment.clone().set('date', day);

    dates.push(createDateOfMonth(dayMoment.toDate(), settings, 'currentMonth'));
  }

  const datesDivided = chunkArray<DateOfMonth>(dates, 7);

  if (showNextMonth) {
    const lastRow = datesDivided[datesDivided.length - 1];
    const nextMonthDaysRequired = 7 - lastRow.length;

    if (nextMonthDaysRequired > 0) {
      const nextMonthDates: DateOfMonth[] = [];

      for (let gap = 0; gap < nextMonthDaysRequired; gap++) {
        const dayMoment = nextMonth.clone().add(gap, 'days');

        nextMonthDates.push(createDateOfMonth(dayMoment.toDate(), settings, 'nextMonth'));
      }

      datesDivided[datesDivided.length - 1] = [...lastRow, ...nextMonthDates];
    }
  }

  return datesDivided;
}
