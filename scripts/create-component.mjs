#!/usr/bin/env node
/**
 * dodo-ui Component Scaffolding Script
 */

import fs from 'fs';
import path from 'path';
import { log, isTest } from './logger.mjs';

/**
 * CLI args
 */
const [, , category, componentName] = process.argv;

if (!category || !componentName) {
  log.error('❌ Usage: pnpm create:component <Category> <ComponentName>');
  process.exit(1);
}

/**
 * ENV-aware root
 */
const rootDir = process.env.FORCE_TEST_DIR || process.cwd();

const baseDir = path.resolve(rootDir, 'src/lib/components');
const stylesDir = path.resolve(rootDir, 'src/lib/styles');

/**
 * Target path
 */
const componentDir = path.join(baseDir, category, componentName);

/**
 * EXISTENCE CHECK (silent in test mode)
 */
if (fs.existsSync(componentDir)) {
  log.error(`❌ Component already exists: ${componentDir}`);
  process.exit(1);
}

/**
 * Create structure
 */
fs.mkdirSync(componentDir, { recursive: true });

/**
 * File paths
 */
const svelteFile = path.join(componentDir, `${componentName}.svelte`);
const scssFile = path.join(componentDir, `${componentName}.scss`);
const storyFile = path.join(componentDir, `${componentName}.stories.svelte`);
const testFile = path.join(componentDir, `${componentName}.test.ts`);

/**
 * -----------------------------
 * Templates
 * -----------------------------
 */

const svelteTemplate = `<script lang="ts" module>
  import type { Snippet } from 'svelte';

  export interface ${componentName}Props {
    class?: string;
    disabled?: boolean;
    children?: Snippet;
  }
</script>

<script lang="ts">
  let {
    class: className = '',
    disabled = false,
    children,
    ...restProps
  }: ${componentName}Props = $props();

  const classes = $derived(['dodo-ui-${componentName}', className].filter(Boolean));
</script>

<div
  class={classes.join(' ')}
  aria-disabled={disabled}
  {...restProps}
>
  {@render children?.()}
</div>
`;

const scssTemplate = `// ${componentName}

.dodo-ui-${componentName} {
  display: inline-flex;
  align-items: center;
  justify-content: center;

  font-family: inherit;
  font-size: 1rem;

  padding: var(--dodo-ui-space-small);
  border-radius: var(--dodo-ui-radius-1);

  background: var(--dodo-ui-color-surface);
  color: var(--dodo-ui-color-text);

  &[aria-disabled='true'] {
    opacity: 0.6;
    pointer-events: none;
  }
}
`;

const storyTemplate = `<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import ${componentName} from './${componentName}.svelte';

  const { Story } = defineMeta({
    component: ${componentName},
    tags: ['autodocs'],
  });
</script>

<Story name="Default">
  <${componentName}>Default</${componentName}>
</Story>

<Story name="Disabled" args={{ disabled: true }}>
  <${componentName}>Disabled</${componentName}>
</Story>
`;

const testTemplate = `/**
 * @vitest-environment jsdom
 */

import { render } from '@testing-library/svelte';
import { describe, test, expect } from 'vitest';

import ${componentName} from './${componentName}.svelte';
import TestHost from '../../../test/TestHost.svelte';

describe('${componentName}', () => {
  test('renders component', () => {
    const { container } = render(TestHost, {
      props: {
        Component: ${componentName},
        props: {},
        children: 'Test',
      },
    });

    expect(container).toBeInTheDocument();
  });
});
`;

/**
 * Write files
 */
fs.writeFileSync(svelteFile, svelteTemplate);
fs.writeFileSync(scssFile, scssTemplate);
fs.writeFileSync(storyFile, storyTemplate);
fs.writeFileSync(testFile, testTemplate);

/**
 * -----------------------------
 * SCSS registration
 * -----------------------------
 */
const componentsScssPath = path.join(stylesDir, 'components.scss');

fs.mkdirSync(path.dirname(componentsScssPath), { recursive: true });

if (fs.existsSync(componentsScssPath)) {
  const importLine = `@use '../components/${category}/${componentName}/${componentName}.scss';\n`;
  const existing = fs.readFileSync(componentsScssPath, 'utf8');

  if (!existing.includes(importLine)) {
    fs.appendFileSync(componentsScssPath, importLine);
    log.info('✅ Registered SCSS in styles/components.scss');
  }
} else {
  fs.writeFileSync(
    componentsScssPath,
    `@use '../components/${category}/${componentName}/${componentName}.scss';\n`,
  );

  log.warn('⚠️ Created styles/components.scss');
}

/**
 * FINAL OUTPUT
 */
log.info(
  isTest
    ? `🎉 [TEST MODE] Component created: ${componentDir}`
    : `🎉 Component created: components/${category}/${componentName}`,
);
