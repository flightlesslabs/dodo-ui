import path from 'node:path';
import { includeIgnoreFile } from '@eslint/compat';
import js from '@eslint/js';
import { defineConfig } from 'eslint/config';
import prettier from 'eslint-config-prettier';
import eslintPluginAstro from 'eslint-plugin-astro';
import svelte from 'eslint-plugin-svelte';
import globals from 'globals';
import ts from 'typescript-eslint';

// Resolve your .gitignore path
const gitignorePath = path.resolve(import.meta.dirname, '.gitignore');

export default defineConfig(
  // 1. Inherit ignores from your .gitignore file
  includeIgnoreFile(gitignorePath),

  // 2. Load global recommended configurations
  js.configs.recommended,
  ...ts.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  ...svelte.configs.recommended,

  // 3. Apply Prettier layout compatibility rules last to avoid lint style conflicts
  prettier,
  ...svelte.configs['flat/prettier'], // Flat config variant for Svelte Prettier rules

  // 4. Global Language Settings
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      // typescript-eslint strongly recommends turning off 'no-undef' on TS/Framework projects
      'no-undef': 'off',
    },
  },

  // 5. TypeScript Project & Parsing handling for Framework components
  {
    files: ['**/*.{ts,tsx,astro,svelte}'],
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
        // Allows the TS compiler to safely traverse inside framework markup structures
        extraFileExtensions: ['.astro', '.svelte'],
        parser: ts.parser,
      },
    },
  },

  // 6. Project Custom Rule Overrides Zone
  {
    rules: {
      // Add or override rules here:
      // "astro/no-set-html-directive": "error",
      // "svelte/button-has-type": "error"
    },
  },
);
