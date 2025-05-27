/**
 * Cleans the input string by removing all characters except numeric digits (0-9) and a single decimal point.
 * Only the first decimal point is retained; all subsequent dots are removed.
 *
 * @param {string} input - The input string to be cleaned.
 * @returns {string} - A string containing only digits and at most one decimal point.
 *
 * @example
 * cleanNumericString("abc123.45.67def"); // returns "123.4567"
 * cleanNumericString("a1b2c3");          // returns "123"
 * cleanNumericString("...12.3.4..5");    // returns "12.345"
 */
export default function cleanNumericString(input: string): string {
  // Remove all characters except digits and dots
  const filtered = input.replace(/[^0-9.]/g, '');

  // Split by dot to separate parts
  const parts = filtered.split('.');

  if (parts.length === 1) {
    // No dot present, just digits
    return parts[0];
  } else {
    // Keep only first dot, join the rest parts without dots
    return parts[0] + '.' + parts.slice(1).join('');
  }
}
