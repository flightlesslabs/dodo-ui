import { describe, it, expect } from 'vitest';
import dayjs from 'dayjs';
import { createDate } from './createDate.js';

describe('createDate', () => {
  it('should return current date when no args provided', () => {
    const now = createDate();
    expect(now.isValid()).toBe(true);

    // Rough check (within 1 second)
    const diff = Math.abs(now.valueOf() - dayjs().valueOf());
    expect(diff).toBeLessThan(1000);
  });

  it('should parse date without format', () => {
    const date = createDate('2025-01-01');
    expect(date.isValid()).toBe(true);
    expect(date.year()).toBe(2025);
  });

  it('should parse date with format', () => {
    const date = createDate('01-02-2025', 'DD-MM-YYYY');
    expect(date.isValid()).toBe(true);
    expect(date.month()).toBe(1); // Feb (0-indexed)
  });

  it('should respect strict parsing', () => {
    const valid = createDate('01-02-2025', 'DD-MM-YYYY', { strict: true });
    const invalid = createDate('1-2-2025', 'DD-MM-YYYY', { strict: true });

    expect(valid.isValid()).toBe(true);
    expect(invalid.isValid()).toBe(false);
  });

  it('should throw on invalid when throwOnInvalid is true', () => {
    expect(() => createDate('invalid-date', undefined, { throwOnInvalid: true })).toThrowError(
      'Invalid date input',
    );
  });

  it('should not throw when throwOnInvalid is false', () => {
    const date = createDate('invalid-date');
    expect(date.isValid()).toBe(false);
  });

  it('should return UTC date when utc is true', () => {
    const date = createDate('2025-01-01T00:00:00Z', undefined, { utc: true });
    expect(date.isUTC()).toBe(true);
  });

  it('should apply timezone when provided', () => {
    const date = createDate('01-01-2025', 'DD-MM-YYYY', {
      timezone: 'Asia/Kolkata',
    });

    expect(date.isValid()).toBe(true);
    expect(date.format()).toContain('+05:30');
  });

  it('should prioritize utc over timezone', () => {
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
  });

  it('should handle Date object input', () => {
    const dateObj = new Date();
    const date = createDate(dateObj);

    expect(date.isValid()).toBe(true);
  });
});
