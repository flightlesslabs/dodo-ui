#!/usr/bin/env node
/**
 * dodo-ui Component Scaffolding Script
 * -----------------------------------
 *
 * Creates a new component with:
 *  - Svelte component file
 *  - SCSS styles file
 *  - Storybook story file
 *  - Auto-registers SCSS in styles/components.scss
 *
 * Usage:
 *   pnpm create:component <Category> <ComponentName>
 *
 * Example:
 *   pnpm create:component Form TextInput
 *
 * Output:
 *   src/lib/components/Form/TextInput/
 *     ├── TextInput.svelte
 *     ├── TextInput.scss
 *     └── TextInput.stories.svelte
 */

import fs from 'fs';
import path from 'path';

/**
 * CLI arguments
 * @example
 *  process.argv = ['node', 'script.js', 'Form', 'Button']
 */
const [, , category, componentName] = process.argv;

if (!category || !componentName) {
  console.error('❌ Usage: pnpm create:component <Category> <ComponentName>');
  process.exit(1);
}

/**
 * Base components directory
 */
const baseDir = path.resolve('src/lib/components');

/**
 * Target component directory
 */
const componentDir = path.join(baseDir, category, componentName);

if (fs.existsSync(componentDir)) {
  console.error(`❌ Component already exists: ${componentDir}`);
  process.exit(1);
}

/**
 * Create directory structure
 */
fs.mkdirSync(componentDir, { recursive: true });

/**
 * File paths
 */
const svelteFile = path.join(componentDir, `${componentName}.svelte`);
const scssFile = path.join(componentDir, `${componentName}.scss`);
const storyFile = path.join(componentDir, `${componentName}.stories.svelte`);

/**
 * Svelte component template
 */
const svelteTemplate = `<script lang="ts" module>
  import type { Snippet } from 'svelte';

  /**
   * Public props for ${componentName}
   */
  export interface ${componentName}Props {
    /** Custom CSS class names */
    class?: string;

    /** Disabled state */
    disabled?: boolean;

    /** Slot content */
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

  /**
   * Computed class list
   */
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

/**
 * SCSS template
 */
const scssTemplate = `// ----------------------------------------
// ${componentName} styles
// ----------------------------------------

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

/**
 * Storybook template
 */
const storyTemplate = `<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import ${componentName} from './${componentName}.svelte';
  import type { ${componentName}Props } from './${componentName}.svelte';
  import type { ArgTypes } from 'storybook/internal/csf';

  /**
   * Storybook controls for ${componentName}
   */
  export const ${componentName}ArgTypes: Partial<ArgTypes<${componentName}Props>> = {
    class: { table: { category: 'API', subcategory: 'Base' } },
    disabled: {
      control: { type: 'boolean' },
      table: { category: 'API', subcategory: 'State', defaultValue: { summary: 'false' } },
    },
  };

  const { Story } = defineMeta({
    component: ${componentName},
    tags: ['autodocs'],
    argTypes: ${componentName}ArgTypes,
  });
</script>

<!-- ------------------------------ -->
<!-- Stories -->
<!-- ------------------------------ -->

<Story name="Default">
  <${componentName}>Default ${componentName}</${componentName}>
</Story>

<Story name="Disabled" args={{ disabled: true }}>
  <${componentName}>Disabled ${componentName}</${componentName}>
</Story>
`;

/**
 * Write files to disk
 */
fs.writeFileSync(svelteFile, svelteTemplate);
fs.writeFileSync(scssFile, scssTemplate);
fs.writeFileSync(storyFile, storyTemplate);

/**
 * Auto-register component SCSS in styles/components.scss
 */
const componentsScssPath = path.resolve('src/lib/styles/components.scss');

if (fs.existsSync(componentsScssPath)) {
  const importLine = `@use '../components/${category}/${componentName}/${componentName}.scss';\n`;
  const existing = fs.readFileSync(componentsScssPath, 'utf8');

  if (!existing.includes(importLine)) {
    fs.appendFileSync(componentsScssPath, importLine);
    console.log('✅ Registered SCSS in styles/components.scss');
  } else {
    console.log('ℹ️ SCSS already registered');
  }
} else {
  console.warn('⚠️ Could not find styles/components.scss – please add SCSS import manually.');
}

console.log(`🎉 Component created: components/${category}/${componentName}`);
