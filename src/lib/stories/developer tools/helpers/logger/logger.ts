export type LogLevel = 'info' | 'warn' | 'error';

export interface LoggerOptions {
  /**
   * Optional label to prefix log entries.
   */
  label?: string;

  /**
   * Whether to actually show logs.
   * Defaults to true.
   */
  show?: boolean;
}

/**
 * Formats the log message with timestamp, label, and level.
 */
export function formatPrefix(level: LogLevel, label?: string): string {
  const timestamp = new Date().toISOString();
  const labelPart = label ? `[${label}]` : '';
  return `[${timestamp}] ${labelPart} [${level.toUpperCase()}]`;
}

/**
 * Creates a logger that logs every call unless disabled by show=false.
 */
export default function createLogger(options: LoggerOptions = {}) {
  const { label, show = true } = options;

  function shouldLog() {
    return show;
  }

  return {
    info: (msg: unknown, ...optionalParams: unknown[]) => {
      if (shouldLog()) console.info(formatPrefix('info', label), msg, ...optionalParams);
    },
    warn: (msg: unknown, ...optionalParams: unknown[]) => {
      if (shouldLog()) console.warn(formatPrefix('warn', label), msg, ...optionalParams);
    },
    error: (msg: unknown, ...optionalParams: unknown[]) => {
      if (shouldLog()) console.error(formatPrefix('error', label), msg, ...optionalParams);
    },
  };
}
