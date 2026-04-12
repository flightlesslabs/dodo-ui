import { describe, it, expect } from 'vitest';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc.js';
import timezone from 'dayjs/plugin/timezone.js';
import customParseFormat from 'dayjs/plugin/customParseFormat.js';

import { createDateFactory } from './createDateFactory.js';

// extend test dayjs (important for factory injection tests)
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(customParseFormat);

describe('createDateFactory', () => {
  it('should create a date with default factory', () => {
    const { createDate } = createDateFactory();

    const date = createDate();

    expect(date.isValid()).toBe(true);
  });

  it('should parse ISO string', () => {
    const { createDate } = createDateFactory();

    const date = createDate('2025-01-01');

    expect(date.isValid()).toBe(true);
    expect(date.year()).toBe(2025);
  });

  it('should parse formatted date', () => {
    const { createDate } = createDateFactory();

    const date = createDate('01-02-2025', 'DD-MM-YYYY');

    expect(date.isValid()).toBe(true);
    expect(date.year()).toBe(2025);
    expect(date.month()).toBe(1);
  });

  it('should respect strict parsing (valid)', () => {
    const { createDate } = createDateFactory();

    const date = createDate('01-02-2025', 'DD-MM-YYYY', {
      strict: true,
    });

    expect(date.isValid()).toBe(true);
  });

  it('should respect strict parsing (invalid)', () => {
    const { createDate } = createDateFactory();

    const date = createDate('1-2-2025', 'DD-MM-YYYY', {
      strict: true,
    });

    expect(date.isValid()).toBe(false);
  });

  it('should throw on invalid date when enabled', () => {
    const { createDate } = createDateFactory();

    expect(() => createDate('invalid-date', undefined, { throwOnInvalid: true })).toThrow(
      'Invalid date input',
    );
  });

  it('should NOT throw on invalid date when disabled', () => {
    const { createDate } = createDateFactory();

    const date = createDate('invalid-date');

    expect(date.isValid()).toBe(false);
  });

  it('should handle UTC mode', () => {
    const { createDate } = createDateFactory();

    const date = createDate('2025-01-01T00:00:00Z', undefined, {
      utc: true,
    });

    expect(date.isUTC()).toBe(true);
  });

  it('should prioritize UTC over timezone', () => {
    const { createDate } = createDateFactory();

    const date = createDate('2025-01-01T00:00:00Z', undefined, {
      utc: true,
      timezone: 'Asia/Kolkata',
    });

    expect(date.isUTC()).toBe(true);
  });

  it('should apply timezone when provided', () => {
    const { createDate } = createDateFactory();

    const date = createDate('01-01-2025', 'DD-MM-YYYY', {
      timezone: 'Asia/Kolkata',
    });

    expect(date.isValid()).toBe(true);
    expect(typeof date.utcOffset()).toBe('number');
  });

  it('should handle timestamp input', () => {
    const { createDate } = createDateFactory();

    const ts = Date.now();
    const date = createDate(ts);

    expect(date.isValid()).toBe(true);
    expect(Math.abs(date.valueOf() - ts)).toBeLessThan(5);
  });

  it('should handle native Date object', () => {
    const { createDate } = createDateFactory();

    const now = new Date();
    const date = createDate(now);

    expect(date.isValid()).toBe(true);
    expect(Math.abs(date.valueOf() - now.valueOf())).toBeLessThan(5);
  });

  it('should work with custom Dayjs instance', () => {
    const custom = dayjs;

    const { createDate } = createDateFactory(custom);

    const date = createDate('2025-01-01');

    expect(date.isValid()).toBe(true);
  });

  it('should return same underlying dayjs instance from factory', () => {
    const { dayjs: d1 } = createDateFactory();
    const { dayjs: d2 } = createDateFactory();

    expect(d1).toBe(d2);
  });
});
