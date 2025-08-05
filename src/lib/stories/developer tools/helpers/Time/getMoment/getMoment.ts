import type { ConfigType, OptionType } from 'dayjs';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc.js';
import timezone from 'dayjs/plugin/timezone.js';
import customParseFormat from 'dayjs/plugin/customParseFormat.js';

type Dayjs = ReturnType<typeof dayjs>;

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(customParseFormat);

/**
 * Acceptable input types for the `getMoment` function, compatible with dayjs.
 */
export type GetMomentDate = ConfigType;

/**
 * Optional formatting string used to parse the date.
 */
export type GetMomentFormat = OptionType;

/**
 * Settings to control how the moment is returned (UTC, timezone, or local).
 */
export interface GetMomentSettings {
  /**
   * Timezone string (e.g., "America/New_York").
   */
  timezone?: string;

  /**
   * Whether to return the time in UTC. If true, overrides timezone.
   */
  utc?: boolean;
}

/**
 * A wrapper around dayjs to return a moment-like object with optional formatting,
 * timezone, or UTC handling.
 *
 * @param date - The input date, time, or string to be parsed.
 * @param format - A custom format string for parsing the input date.
 * @param settings - Optional settings for timezone or UTC output.
 * @returns A dayjs object in local, UTC, or specified timezone.
 *
 * @example
 * getMoment('2025-01-01T12:00:00Z', undefined, { utc: true }).format()
 * getMoment('01-01-2025', 'DD-MM-YYYY', { timezone: 'Asia/Kolkata' }).format()
 */
export default function getMoment(
  date?: GetMomentDate,
  format?: GetMomentFormat,
  settings?: GetMomentSettings,
): Dayjs {
  const timezone = settings?.timezone;
  const utc = settings?.utc ?? false;

  if (utc) {
    return dayjs.utc(dayjs(date, format));
  } else if (timezone) {
    return dayjs.tz(dayjs(date, format), timezone);
  } else {
    return dayjs(date, format);
  }
}
