export type ThresholdStatus = 'below' | 'at' | 'above';

/**
 * Compares a numeric value against a threshold and returns its relative status.
 *
 * This is a small utility intended for UI and logic branching where values
 * need to be categorized as below, equal to, or above a given threshold.
 *
 * @param value - The numeric value to evaluate.
 * @param threshold - The reference value to compare against.
 *
 * @returns {ThresholdStatus}
 * - `'below'` if `value < threshold`
 * - `'at'` if `value === threshold`
 * - `'above'` if `value > threshold`
 *
 * @example
 * ```ts
 * compareValueWithThreshold(10, 5); // 'above'
 * compareValueWithThreshold(5, 5);  // 'at'
 * compareValueWithThreshold(2, 5);  // 'below'
 * ```
 *
 * @remarks
 * This function performs a strict equality check (`===`) for determining
 * the `'at'` state. Be mindful when working with floating point numbers,
 * as precision issues may affect equality comparisons.
 */
export function compareValueWithThreshold(value: number, threshold: number): ThresholdStatus {
  if (value === threshold) {
    return 'at';
  }

  if (value > threshold) {
    return 'above';
  }

  return 'below';
}
