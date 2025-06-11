import getMoment from '$lib/stories/developer tools/helpers/Time/getMoment/getMoment.js';
import type dayjs from 'dayjs';
import type { DateOfMonth } from './types.js';
import type { CalendarWeekNames } from '../SubComponents/CalendarDatesChart/CalendarWeek/CalendarWeek.svelte';

export interface CreateDatesOfMonthSettings {
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

export type CreateDateOfMonthType = 'currentMonth' | 'nextMonth' | 'lastMonth';

function dateMoment(date?: Date, settings?: CreateDatesOfMonthSettings) {
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

export default function createDateOfMonth(
  date?: Date,
  settings?: CreateDatesOfMonthSettings,
  monthType: CreateDateOfMonthType = 'currentMonth',
): DateOfMonth {
  const minDate = settings?.minDate ? dateMoment(settings.minDate, settings) : undefined;
  const maxDate = settings?.maxDate ? dateMoment(settings.maxDate, settings) : undefined;
  const excludeDates = settings?.excludeDates?.length
    ? settings?.excludeDates.map((item) => dateMoment(item, settings).format('DD-MM-YYYY'))
    : undefined;
  const includeDates = settings?.includeDates?.length
    ? settings?.includeDates.map((item) => dateMoment(item, settings).format('DD-MM-YYYY'))
    : undefined;

  const todayDate = dateMoment(undefined, settings).format('DD-MM-YYYY');

  const todayManual = settings?.today
    ? dateMoment(settings?.today, settings).format('DD-MM-YYYY')
    : undefined;

  const dayMoment = dateMoment(date, settings);

  const dataToExport: DateOfMonth = {
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

  return dataToExport;
}
