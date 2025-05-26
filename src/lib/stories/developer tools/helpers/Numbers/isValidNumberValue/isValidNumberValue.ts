import createLogger from '../../logger/logger.js';

export type IsValidNumberValueSettings = {
  /**
   * Minimum allowed numeric value (inclusive).
   */
  min?: number;

  /**
   * Maximum allowed numeric value (inclusive).
   */
  max?: number;

  /**
   * Whether negative numbers are allowed.
   * Defaults to false.
   */
  allowNegativeValues?: boolean;

  /**
   * Maximum allowed decimal places.
   * Defaults to 0 (no decimals allowed).
   */
  decimalPlaces?: number;

  /**
   * Whether to enable logging.
   * Defaults to false.
   */
  log?: boolean;
};

/**
 * Checks if the input string is a valid numeric string.
 * Allows integers, decimals, negative numbers, and scientific notation.
 *
 * @param str - Input string to validate.
 * @returns True if string is numeric, false otherwise.
 */
export function isNumericString(str: string): boolean {
  if (typeof str !== 'string') return false;
  const trimmed = str.trim();
  if (trimmed === '') return false;
  const num = Number(trimmed);
  return !isNaN(num) && isFinite(num);
}

/**
 * Validates whether a string represents a valid number based on provided settings.
 *
 * @param value - The string to validate as a number.
 * @param settings - Optional validation settings.
 * @param settings.min - Minimum allowed value (inclusive).
 * @param settings.max - Maximum allowed value (inclusive).
 * @param settings.allowNegativeValues - Whether negative numbers are allowed.
 * @param settings.decimalPlaces - Maximum allowed decimal places.
 * @param settings.log - Whether to enable detailed logging.
 *
 * @returns True if the value is a valid number according to the settings; otherwise false.
 *
 * @example
 * ```ts
 * isValidNumberValue("123.45", { decimalPlaces: 2, log: true });
 * isValidNumberValue("-50", { allowNegativeValues: true, min: -100 });
 * ```
 */
export default function isValidNumberValue(
  value: string,
  settings?: IsValidNumberValueSettings,
): boolean {
  const allowNegativeValues = settings?.allowNegativeValues || false;
  const decimalPlaces = settings?.decimalPlaces || 0;
  const valueFormatted = value.trim();
  const log = settings?.log || false;
  const logger = createLogger({
    label: 'isValidNumberValue',
    show: log,
  });
  const min = settings?.min;
  const max = settings?.max;

  logger.info(`Validating value: "${valueFormatted}"`);

  if (valueFormatted === '') {
    logger.info('Valid input: Blank value');
    return true;
  }

  if (valueFormatted === '0') {
    logger.warn(`Invalid input: Value cannot start with 0`);
    return false;
  }

  if (allowNegativeValues && valueFormatted === '-') {
    logger.info(`Valid input: Single '-' sign allowed as a negative placeholder.`);
    return true;
  }

  if (!decimalPlaces && valueFormatted.includes('.')) {
    logger.warn('Invalid input: Decimals not allowed');
    return false;
  }

  const dotCount = (valueFormatted.match(/\./g) || []).length;

  if (dotCount > 1) {
    logger.warn('Invalid input: More than one decimal point detected.');
    return false;
  }

  const parts = valueFormatted.split('.');

  if (parts[1]?.length > decimalPlaces) {
    logger.warn(
      `Invalid input: Number has ${parts[1].length} decimal places, exceeding the allowed limit of ${decimalPlaces}.`,
    );
    return false;
  }

  if (!isNumericString(valueFormatted)) {
    logger.warn('Invalid input: String is not a valid number.');
    return false;
  }

  const numericValue = Number(valueFormatted);

  if (!allowNegativeValues && numericValue < 0) {
    logger.warn('Invalid input: Negative numbers are not allowed.');
    return false;
  }

  if (min !== undefined && numericValue < min) {
    logger.warn(
      `Invalid input: Number ${numericValue} is less than the minimum allowed value of ${min}.`,
    );
    return false;
  }

  if (max !== undefined && numericValue > max) {
    logger.warn(
      `Invalid input: Number ${numericValue} exceeds the maximum allowed value of ${max}.`,
    );
    return false;
  }

  logger.info('Validation passed: Input is a valid number according to the provided settings.');
  return true;
}
