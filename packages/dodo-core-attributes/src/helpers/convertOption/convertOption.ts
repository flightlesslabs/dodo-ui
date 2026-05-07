/**
 * Converts a value from one option set to another.
 *
 * Returns the original value if it exists in the target options,
 * otherwise returns the provided fallback.
 *
 * Useful for safely converting between related option groups.
 *
 * @template TSource Source option set
 * @template TTarget Target option set
 * @template TValue Input value
 * @template TFallback Fallback value
 *
 * @param sourceOptions - Available source options
 * @param targetOptions - Allowed target options
 * @param value - Value to convert
 * @param fallback - Fallback if value is not in target options
 *
 * @returns The original value if compatible with the target options,
 * otherwise the fallback
 */
export function convertOption<
  const TSource extends readonly unknown[],
  const TTarget extends readonly unknown[],
  TValue extends TSource[number],
  TFallback extends TTarget[number],
>(
  sourceOptions: TSource,
  targetOptions: TTarget,
  value: TValue,
  fallback: TFallback,
): TValue extends TTarget[number] ? TValue : TFallback {
  // runtime guard (optional but useful)
  if (!(sourceOptions as readonly unknown[]).includes(value)) {
    return fallback as TValue extends TTarget[number] ? TValue : TFallback;
  }

  return (
    (targetOptions as readonly unknown[]).includes(value) ? value : fallback
  ) as TValue extends TTarget[number] ? TValue : TFallback;
}
