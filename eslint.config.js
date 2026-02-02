// eslint.config.js
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import svelte from 'eslint-plugin-svelte';
import storybook from 'eslint-plugin-storybook';
import prettier from 'eslint-config-prettier';
import { includeIgnoreFile } from '@eslint/compat';
import globals from 'globals';
import { fileURLToPath } from 'node:url';
import svelteConfig from './svelte.config.js';

const gitignorePath = fileURLToPath(new URL('./.gitignore', import.meta.url));

export default [
  // Respect .gitignore
  includeIgnoreFile(gitignorePath),

  // Base JS + TS + Svelte
  js.configs.recommended,
  ...tseslint.configs.recommended,

  // 👇 flatten Svelte plugin configs
  ...svelte.configs.recommended.flat(),

  // Prettier should come after rule presets
  prettier,
  ...svelte.configs.prettier.flat(),

  // Global environments
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },

  // Svelte + TS integration
  {
    files: ['**/*.svelte', '**/*.svelte.ts', '**/*.svelte.js'],
    ignores: ['eslint.config.js', 'svelte.config.js'],
    languageOptions: {
      parserOptions: {
        projectService: true,
        extraFileExtensions: ['.svelte'],
        parser: tseslint.parser,
        svelteConfig,
      },
    },
  },

  // 👇 flatten Storybook flat config
  ...storybook.configs['flat/recommended'].flat(),
];
