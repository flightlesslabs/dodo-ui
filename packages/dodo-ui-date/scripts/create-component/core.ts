import fs from 'node:fs';
import path from 'node:path';
import { templates } from './templates/index.ts';
import { log } from '../logger.ts';

function getPaths(category: string, name: string) {
  const rootDir = process.env.FORCE_TEST_DIR || process.cwd();

  const baseDir = path.resolve(rootDir, 'src/lib/components');
  const stylesDir = path.resolve(rootDir, 'src/lib/styles');

  const componentDir = path.join(baseDir, category, name);

  return {
    baseDir,
    stylesDir,
    componentDir,
    svelteFile: path.join(componentDir, `${name}.svelte`),
    scssFile: path.join(componentDir, `${name}.scss`),
    componentsScss: path.join(stylesDir, 'components.scss'),
  };
}

export async function runCreateComponent(category: string, name: string) {
  const paths = getPaths(category, name);

  // ✅ OPTION 2: IDENTITY CHECK (NO FAIL)
  if (fs.existsSync(paths.componentDir)) {
    log.warn(`⚠️ Component already exists, skipping: ${paths.componentDir}`);
    return; // IMPORTANT: graceful exit
  }

  fs.mkdirSync(paths.componentDir, { recursive: true });

  fs.writeFileSync(paths.svelteFile, templates.svelte(name));
  fs.writeFileSync(paths.scssFile, templates.scss(name));

  registerScss(paths, category, name);

  log.info(`✅ Component created: ${category}/${name}`);
}

/* eslint-disable @typescript-eslint/no-explicit-any */
function registerScss(paths: any, category: string, name: string) {
  const importLine = `@use '../components/${category}/${name}/${name}.scss';\n`;

  fs.mkdirSync(paths.stylesDir, { recursive: true });

  if (fs.existsSync(paths.componentsScss)) {
    const existing = fs.readFileSync(paths.componentsScss, 'utf8');

    if (!existing.includes(importLine)) {
      fs.appendFileSync(paths.componentsScss, importLine);
    }
  } else {
    fs.writeFileSync(paths.componentsScss, importLine);
  }
}
