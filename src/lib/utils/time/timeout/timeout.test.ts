import { describe, it, expect } from 'vitest';
import { timeout } from './timeout.js';

describe('timeout', () => {
  it('resolves after given time', async () => {
    const start = Date.now();
    await timeout(50);
    const end = Date.now();

    expect(end - start).toBeGreaterThanOrEqual(50);
  });

  it('resolves with value', async () => {
    const result = await timeout(10, 'done');
    expect(result).toBe('done');
  });

  it('rejects for negative duration', async () => {
    await expect(timeout(-1)).rejects.toThrow();
  });
});
