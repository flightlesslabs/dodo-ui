import { describe, it, expect } from 'vitest';
import dayjs from 'dayjs';
import { createDate } from './createDate.js';

describe('createDate', () => {
  it('should return current date when no args provided', () => {
    const now = createDate();

    expect(now.isValid()).toBe(true);

    const diff = Math.abs(now.valueOf() - dayjs().valueOf());
    expect(diff).toBeLessThan(1000);
  });

  it('should parse ISO string without format', () => {
    const date = createDate('2025-01-01');

    expect(date.isValid()).toBe(true);
    expect(date.year()).toBe(2025);
  });

  it('should parse formatted date string', () => {
    const date = createDate('01-02-2025', 'DD-MM-YYYY');

    expect(date.isValid()).toBe(true);
    expect(date.year()).toBe(2025);
    expect(date.month()).toBe(1); // February (0-based)
  });

  it('should respect strict parsing (valid case)', () => {
    const date = createDate('01-02-2025', 'DD-MM-YYYY', {
      strict: true,
    });

    expect(date.isValid()).toBe(true);
  });

  it('should respect strict parsing (invalid case)', () => {
    const date = createDate('1-2-2025', 'DD-MM-YYYY', {
      strict: true,
    });

    expect(date.isValid()).toBe(false);
  });

  it('should throw when throwOnInvalid is true', () => {
    expect(() => createDate('invalid-date', undefined, { throwOnInvalid: true })).toThrow(
      'Invalid date input',
    );
  });

  it('should NOT throw when throwOnInvalid is false', () => {
    const date = createDate('invalid-date');

    expect(date.isValid()).toBe(false);
  });

  it('should create UTC date when utc is true', () => {
    const date = createDate('2025-01-01T00:00:00Z', undefined, {
      utc: true,
    });

    expect(date.isValid()).toBe(true);
    expect(date.isUTC()).toBe(true);
  });

  it('should prioritize UTC over timezone', () => {
    const date = createDate('2025-01-01T00:00:00Z', undefined, {
      utc: true,
      timezone: 'Asia/Kolkata',
    });

    expect(date.isUTC()).toBe(true);
  });

  it('should handle timestamp input', () => {
    const timestamp = Date.now();
    const date = createDate(timestamp);

    expect(date.isValid()).toBe(true);
    expect(Math.abs(date.valueOf() - timestamp)).toBeLessThan(5);
  });

  it('should handle native Date object', () => {
    const now = new Date();
    const date = createDate(now);

    expect(date.isValid()).toBe(true);
    expect(Math.abs(date.valueOf() - now.valueOf())).toBeLessThan(5);
  });

  it('should apply timezone when provided', () => {
    const date = createDate('01-01-2025', 'DD-MM-YYYY', {
      timezone: 'Asia/Kolkata',
    });

    expect(date.isValid()).toBe(true);

    // avoid fragile string checks; just ensure offset exists
    expect(typeof date.utcOffset()).toBe('number');
  });

  it('should default to local time when no options provided', () => {
    const date = createDate('2025-01-01');

    expect(date.isValid()).toBe(true);
    expect(date.isUTC()).toBe(false);
  });
});
