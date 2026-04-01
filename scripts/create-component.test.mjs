import { describe, test, expect, beforeEach, afterEach } from 'vitest';
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const TEST_DIR = path.resolve('tmp-test-components');

/**
 * Run CLI in isolated test mode
 */
const runCLI = (category, name) => {
  return execSync(`node scripts/create-component.mjs ${category} ${name}`, {
    stdio: 'pipe', // ✅ FIX: DO NOT use inherit
    encoding: 'utf8',
    env: {
      ...process.env,
      FORCE_TEST_DIR: TEST_DIR,
    },
  });
};

beforeEach(() => {
  fs.rmSync(TEST_DIR, { recursive: true, force: true });
  fs.mkdirSync(TEST_DIR, { recursive: true });
});

afterEach(() => {
  fs.rmSync(TEST_DIR, { recursive: true, force: true });
});

describe('create-component CLI', () => {
  test('creates full component structure', () => {
    runCLI('Form', 'Button');

    const base = path.join(TEST_DIR, 'src/lib/components/Form/Button');

    expect(fs.existsSync(base)).toBe(true);
    expect(fs.existsSync(path.join(base, 'Button.svelte'))).toBe(true);
    expect(fs.existsSync(path.join(base, 'Button.scss'))).toBe(true);
    expect(fs.existsSync(path.join(base, 'Button.stories.svelte'))).toBe(true);
    expect(fs.existsSync(path.join(base, 'Button.test.ts'))).toBe(true);
  });

  test('registers SCSS import', () => {
    const stylesFile = path.join(TEST_DIR, 'src/lib/styles/components.scss');

    fs.mkdirSync(path.dirname(stylesFile), { recursive: true });
    fs.writeFileSync(stylesFile, '');

    runCLI('Form', 'Button');

    const content = fs.readFileSync(stylesFile, 'utf8');

    expect(content).toContain("@use '../components/Form/Button/Button.scss';");
  });

  test('fails if component already exists', () => {
    runCLI('Form', 'Button');

    expect(() => {
      runCLI('Form', 'Button');
    }).toThrow();
  });
});
