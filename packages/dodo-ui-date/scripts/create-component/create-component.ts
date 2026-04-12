#!/usr/bin/env node

import { runCreateComponent } from './core.ts';
import { log } from '../logger.ts';

const [, , category, componentName] = process.argv;

if (!category || !componentName) {
  log.error('❌ Usage: pnpm create:component <Category> <ComponentName>');
  process.exitCode = 1;
} else {
  try {
    await runCreateComponent(category, componentName);
    process.exitCode = 0;

    /* eslint-disable @typescript-eslint/no-explicit-any */
  } catch (err: any) {
    log.error(err?.message || err);
    process.exitCode = 1;
  }
}
