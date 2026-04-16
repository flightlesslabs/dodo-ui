import { describe, it, expect } from 'vitest';
import { compareValueWithThreshold } from './compareValueWithThreshold.ts';

describe('compareValueWithThreshold', () => {
  it('returns "above" when value is greater than threshold', () => {
    expect(compareValueWithThreshold(10, 5)).toBe('above');
    expect(compareValueWithThreshold(1, 0)).toBe('above');
  });

  it('returns "below" when value is less than threshold', () => {
    expect(compareValueWithThreshold(2, 5)).toBe('below');
    expect(compareValueWithThreshold(-1, 0)).toBe('below');
  });

  it('returns "at" when value equals threshold', () => {
    expect(compareValueWithThreshold(5, 5)).toBe('at');
    expect(compareValueWithThreshold(0, 0)).toBe('at');
  });

  it('works with negative numbers', () => {
    expect(compareValueWithThreshold(-10, -5)).toBe('below');
    expect(compareValueWithThreshold(-5, -5)).toBe('at');
    expect(compareValueWithThreshold(-2, -5)).toBe('above');
  });

  it('handles floating point numbers (strict equality)', () => {
    expect(compareValueWithThreshold(0.1 + 0.2, 0.3)).toBe('above');
    // due to floating point precision: 0.30000000000000004 > 0.3
  });
});
