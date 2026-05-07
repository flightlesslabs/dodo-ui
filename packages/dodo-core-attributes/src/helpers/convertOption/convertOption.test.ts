import { describe, it, expect } from 'vitest';
import { convertOption } from './convertOption.ts';

describe('convertOption', () => {
  const source = ['primary', 'secondary', 'default'] as const;
  const target = ['primary', 'secondary'] as const;

  it('returns value when it exists in target options', () => {
    expect(convertOption(source, target, 'primary', 'secondary')).toBe('primary');
    expect(convertOption(source, target, 'secondary', 'primary')).toBe('secondary');
  });

  it('returns fallback when value is not in target options', () => {
    expect(convertOption(source, target, 'default', 'primary')).toBe('primary');
  });

  it('returns fallback when value is not in source options', () => {
    const invalid = 'unknown' as unknown as (typeof source)[number];
    expect(convertOption(source, target, invalid, 'primary')).toBe('primary');
  });

  it('works with numbers', () => {
    const sourceNum = [0, 1, 2, 3] as const;
    const targetNum = [1, 2] as const;

    expect(convertOption(sourceNum, targetNum, 1, 2)).toBe(1);
    expect(convertOption(sourceNum, targetNum, 3, 1)).toBe(1);
  });

  it('works with mixed types', () => {
    const sourceMixed = [0, 1, 'pill'] as const;
    const targetMixed = [0, 1] as const;

    expect(convertOption(sourceMixed, targetMixed, 1, 0)).toBe(1);
    expect(convertOption(sourceMixed, targetMixed, 'pill', 0)).toBe(0);
  });

  it('always returns a valid target option', () => {
    const result = convertOption(source, target, 'default', 'secondary');
    expect(target.includes(result)).toBe(true);
  });
});
