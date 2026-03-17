import type { ConfigType } from 'dayjs';
import dayjs from 'dayjs';
import utcPlugin from 'dayjs/plugin/utc.js';
import timezonePlugin from 'dayjs/plugin/timezone.js';
import customParseFormatPlugin from 'dayjs/plugin/customParseFormat.js';
import isBetweenPlugin from 'dayjs/plugin/isBetween.js';

/**
 * Centralized date factory for the application.
 * Prefer this over direct `dayjs()` usage.
 */

// Extend plugins once
dayjs.extend(utcPlugin);
dayjs.extend(timezonePlugin);
dayjs.extend(customParseFormatPlugin);
dayjs.extend(isBetweenPlugin);

export type DayjsInstance = ReturnType<typeof dayjs>;
export type CreateDateInput = ConfigType;
export type CreateDateFormat = string | undefined;

/**
 * Options to control how {@link createDate} parses and returns a date.
 */
export interface CreateDateOptions {
  /**
   * IANA timezone identifier.
   *
   * @example "Asia/Kolkata"
   * @example "America/New_York"
   *
   * @description
   * Converts the parsed date into the specified timezone.
   *
   * @defaultValue undefined
   */
  timezone?: string;

  /**
   * Enables UTC mode.
   *
   * @description
   * Forces the returned instance to be in UTC.
   * Overrides {@link timezone} if both are provided.
   *
   * @defaultValue false
   */
  utc?: boolean;

  /**
   * Enables strict format parsing.
   *
   * @description
   * When `true`, the input must exactly match the provided format.
   * Only applies when `format` is provided.
   *
   * @defaultValue false
   */
  strict?: boolean;

  /**
   * Throw an error if the date is invalid.
   *
   * @description
   * If enabled, `createDate` will throw instead of returning
   * an invalid Dayjs instance.
   *
   * @defaultValue false
   */
  throwOnInvalid?: boolean;
}

/**
 * Create a Dayjs instance with consistent parsing, timezone, and validation.
 *
 * @remarks
 * Priority:
 * `utc` → `timezone` → local
 *
 * Prefer this function over direct `dayjs()` usage
 * to ensure consistent parsing and timezone handling.
 *
 * @example
 * // Current date
 * createDate();
 *
 * @example
 * // Parse with format
 * createDate("01-02-2025", "DD-MM-YYYY");
 *
 * @example
 * // UTC mode
 * createDate("2025-01-01T12:00:00Z", undefined, { utc: true });
 *
 * @example
 * // Timezone
 * createDate("01-01-2025", "DD-MM-YYYY", {
 *   timezone: "Asia/Kolkata",
 * });
 *
 * @example
 * // Strict + validation
 * createDate("32-01-2025", "DD-MM-YYYY", {
 *   strict: true,
 *   throwOnInvalid: true,
 * });
 */

// 🔥 Overloads for better IntelliSense
export function createDate(): DayjsInstance;
export function createDate(
  date: CreateDateInput,
  format?: CreateDateFormat,
  options?: CreateDateOptions,
): DayjsInstance;

export function createDate(
  /** Input date (string, number, Date, etc.) */
  date?: CreateDateInput,

  /** Format like "DD-MM-YYYY" */
  format?: CreateDateFormat,

  /** Parsing + output options */
  options: CreateDateOptions = {},
): DayjsInstance {
  const { timezone, utc, strict = false, throwOnInvalid = false } = options;

  const input = date ?? undefined;

  const parseLocal = () => (format ? dayjs(input, format, strict) : dayjs(input));

  let instance: DayjsInstance;

  if (utc) {
    instance = format ? dayjs.utc(input, format, strict) : dayjs.utc(input);
  } else if (timezone) {
    instance = format ? dayjs.tz(input, format, timezone) : dayjs.tz(input, timezone);
  } else {
    instance = parseLocal();
  }

  if (throwOnInvalid && !instance.isValid()) {
    throw new Error('Invalid date input');
  }

  return instance;
}
