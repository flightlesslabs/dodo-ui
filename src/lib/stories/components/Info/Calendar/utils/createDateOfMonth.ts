import getMoment from '$lib/stories/developer tools/helpers/Time/getMoment/getMoment.js';
import type dayjs from 'dayjs';
import type { DateOfMonth } from './types.js';
import type { CalendarWeekNames } from '../SubComponents/CalendarDatesChart/CalendarWeek/CalendarWeek.svelte';

/** Settings for generating calendar dates */
export interface CreateDatesOfMonthSettings {
  startOfWeek?: CalendarWeekNames;
  showLastMonth?: boolean;
  showNextMonth?: boolean;
  today?: Date;
  minDate?: Date;
  maxDate?: Date;
  excludeDates?: Date[];
  includeDates?: Date[];
  timezone?: string;
  utc?: boolean;
}

export type CreateDateOfMonthType = 'currentMonth' | 'nextMonth' | 'lastMonth';

/**
 * Creates a moment object from a Date with optional timezone and UTC settings.
 */
function dateMoment(
  date?: Date,
  settings?: CreateDatesOfMonthSettings,
): ReturnType<typeof getMoment> {
  return getMoment(date, undefined, {
    timezone: settings?.timezone,
    utc: settings?.utc,
  });
}

/**
 * Determines if the given day matches "today" (manual or actual).
 */
function getIsToday(dayMoment: dayjs.Dayjs, todayDate: string, todayManual?: string): boolean {
  const dayDateFormat = dayMoment.format('DD-MM-YYYY');
  return todayManual === dayDateFormat || todayDate === dayDateFormat;
}

/**
 * Determines if a date should be disabled based on limits and included/excluded lists.
 */
function getIsDateDisabled(
  dayMoment: dayjs.Dayjs,
  minDate?: dayjs.Dayjs,
  maxDate?: dayjs.Dayjs,
  excludeDates?: string[],
  includeDates?: string[],
): boolean {
  const dayDateFormat = dayMoment.format('DD-MM-YYYY');

  if (minDate?.isValid() && dayMoment.isBefore(minDate)) return true;
  if (maxDate?.isValid() && dayMoment.isAfter(maxDate)) return true;
  if (excludeDates?.includes(dayDateFormat)) return true;
  if (includeDates && !includeDates.includes(dayDateFormat)) return true;

  return false;
}

/**
 * Generates a DateOfMonth object with metadata for a specific day, including
 * whether it's part of the current month, disabled, or today.
 *
 * @param date - The day to convert.
 * @param settings - Optional configuration settings.
 * @param monthType - Specifies if the day belongs to the current, previous, or next month.
 * @param manipulateDate - Optional function to customize the resulting date object.
 * @returns A DateOfMonth object representing the day.
 */
export default function createDateOfMonth(
  date?: Date,
  settings?: CreateDatesOfMonthSettings,
  monthType: CreateDateOfMonthType = 'currentMonth',
  manipulateDate?: (
    dateToModify: DateOfMonth,
    settings?: CreateDatesOfMonthSettings,
  ) => DateOfMonth,
): DateOfMonth {
  const minDate = settings?.minDate ? dateMoment(settings.minDate, settings) : undefined;
  const maxDate = settings?.maxDate ? dateMoment(settings.maxDate, settings) : undefined;

  const excludeDates = settings?.excludeDates?.map((item) =>
    dateMoment(item, settings).format('DD-MM-YYYY'),
  );
  const includeDates = settings?.includeDates?.map((item) =>
    dateMoment(item, settings).format('DD-MM-YYYY'),
  );

  const todayDate = dateMoment(undefined, settings).format('DD-MM-YYYY');
  const todayManual = settings?.today
    ? dateMoment(settings.today, settings).format('DD-MM-YYYY')
    : undefined;

  const dayMoment = dateMoment(date, settings);

  let dataToExport: DateOfMonth = {
    id: `${dayMoment.valueOf()}`,
    date: dayMoment.toDate(),
    isCurrentMonth: true,
    disabled: getIsDateDisabled(dayMoment, minDate, maxDate, excludeDates, includeDates),
    today: getIsToday(dayMoment, todayDate, todayManual),
  };

  if (monthType === 'lastMonth') {
    dataToExport.isLastMonth = true;
    dataToExport.isCurrentMonth = false;
  } else if (monthType === 'nextMonth') {
    dataToExport.isNextMonth = true;
    dataToExport.isCurrentMonth = false;
  }

  if (manipulateDate) {
    dataToExport = manipulateDate(dataToExport, settings);
  }

  return dataToExport;
}
