import defaultDayjs from './dayjs.js';
import type { CreateDateInput, CreateDateFormat, CreateDateOptions } from './types.js';

type Dayjs = typeof defaultDayjs;

export function createDateFactory(customDayjs?: Dayjs) {
  const d = customDayjs ?? defaultDayjs;

  function createDate(): ReturnType<Dayjs>;
  function createDate(
    date: CreateDateInput,
    format?: CreateDateFormat,
    options?: CreateDateOptions,
  ): ReturnType<Dayjs>;

  function createDate(
    date?: CreateDateInput,
    format?: CreateDateFormat,
    options: CreateDateOptions = {},
  ) {
    const { timezone, utc, strict = false, throwOnInvalid = false } = options;

    const input = date ?? undefined;

    let instance: ReturnType<Dayjs>;

    // 1. UTC takes highest priority
    if (utc) {
      instance = format ? d.utc(input, format, strict) : d.utc(input);
    }

    // 2. Timezone
    else if (timezone) {
      instance = format ? d.tz(input, format, timezone) : d.tz(input, timezone);
    }

    // 3. Local
    else {
      instance = format ? d(input, format, strict) : d(input);
    }

    // 4. Validation
    if (throwOnInvalid && !instance.isValid()) {
      throw new Error('Invalid date input');
    }

    return instance;
  }

  return {
    createDate,
    dayjs: d,
  };
}
