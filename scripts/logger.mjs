const isTest = !!process.env.FORCE_TEST_DIR;

const log = {
  info: (...args) => {
    if (!isTest) console.log(...args);
  },

  warn: (...args) => {
    if (!isTest) console.warn(...args);
  },

  error: (...args) => {
    // always show errors (important for CI/debugging)
    console.error(...args);
  },
};

export { log, isTest };
