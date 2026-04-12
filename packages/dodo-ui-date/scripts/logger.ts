const isTest: boolean = Boolean(process.env.FORCE_TEST_DIR);

type LogArgs = unknown[];

export const log = {
  info: (...args: LogArgs) => {
    if (!isTest) console.log(...args);
  },

  warn: (...args: LogArgs) => {
    if (!isTest) console.warn(...args);
  },

  error: (...args: LogArgs) => {
    // always show errors (important for CI/debugging)
    console.error(...args);
  },
} as const;

export const isTestFlag = isTest;
