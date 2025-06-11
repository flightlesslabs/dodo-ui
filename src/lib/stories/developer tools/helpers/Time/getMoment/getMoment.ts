import type { ConfigType, OptionType } from 'dayjs';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc.js';
import timezone from 'dayjs/plugin/timezone.js';
import customParseFormat from 'dayjs/plugin/customParseFormat.js';

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(customParseFormat);

/**
 * Acceptable input types for the `getMoment` function, compatible with dayjs.
 */
export type GetMomentDate = ConfigType;

/**
 * Optional formatting string used to parse the date.
 * Refer to dayjs customParseFormat plugin for supported formats.
 */
export type GetMomentFormat = OptionType;

/**
 * Settings to control how the moment is returned (UTC, timezone, or local).
 */
export type GetMomentSettings = {
  /**
   * Timezone string (e.g., "America/New_York").
   */
  timezone?: string;

  /**
   * Whether to return the time in UTC. If true, overrides timezone.
   */
  utc?: boolean;
};

/**
 * A wrapper around dayjs to return a moment-like object with optional formatting,
 * timezone, or UTC handling.
 *
 * @param {GetMomentDate} [date] - The input date, time, or string to be parsed.
 * @param {format} [format] - A custom format string for parsing the input date.
 * @param {GetMomentSettings} [settings] - Optional settings for format, timezone, and UTC.
 * @returns {dayjs.Dayjs} - A dayjs object in local, UTC, or specified timezone.
 *
 * @example
 * getMoment('2025-01-01T12:00:00Z', { utc: true }).format()
 * getMoment('01-01-2025', { format: 'DD-MM-YYYY', timezone: 'Asia/Kolkata' }).format()
 */
export default function getMoment(
  date?: GetMomentDate,
  format?: GetMomentFormat,
  settings?: GetMomentSettings,
): dayjs.Dayjs {
  const timezone = settings?.timezone;
  const utc = settings?.utc ? true : false;

  if (utc) {
    return dayjs.utc(dayjs(date, format));
  } else if (timezone) {
    return dayjs.tz(dayjs(date, format), timezone);
  } else {
    return dayjs(date, format);
  }
}
