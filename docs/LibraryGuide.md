# Library Guide

# 🧩 Creating a New Component

This guide explains how to add a new UI component to the `dodo-ui` library.  
Components are grouped by **category** (e.g. `Form`, `Layout`, `DataDisplay`, etc.).

## Use Scaffolding script

### ▶️ Usage

```bash
pnpm create:component Form Checkbox
```

This will generate:

```txt
src/lib/components/Form/Checkbox/
├── Checkbox.svelte
├── Checkbox.scss
└── Checkbox.stories.svelte
```

And auto-append:

```scss
@use '../components/Form/Checkbox/Checkbox.scss';
```

to:

```txt
src/lib/styles/components.scss
```

---

## 📁 Folder Structure

All components follow this structure:

```txt
components/<Category>/<ComponentName>/
├── ComponentName.svelte
├── ComponentName.stories.svelte
└── ComponentName.scss
```

Examples

```txt
components/Form/TextInput/
components/Form/Button/
components/Layout/Stack/
components/Layout/Container/
```

✅ Rules

- Use PascalCase for component names
- ategory names should be PascalCase (e.g. Form, Layout)
- Folder and file names must match the component name exactly

---

## 🎨 Register Component Styles

All component styles must be imported into:

**styles/components.scss**

```scss
// Form
@use '../components/Form/Button/Button.scss';
@use '../components/Form/InputEnclosure/InputEnclosure.scss';
@use '../components/Form/TextInput/TextInput.scss';

// Layout (future example)
// @use '../components/Layout/Stack/Stack.scss';

// Add new components here
@use '../components/<Category>/<ComponentName>/<ComponentName>.scss';
```

⚠️ If you forget to register the SCSS here, the styles will not be bundled or published.

---

## 🧱 Component Template

Replace `ComponentName` and `<Category>` everywhere.

ComponentName.svelte

```svelte
<script lang="ts" module>
  import type { Snippet } from 'svelte';

  export interface ComponentNameProps {
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
  }: ComponentNameProps = $props();

  const classes = $derived(['dodo-ui-ComponentName', className].filter(Boolean));
</script>

<div class={classes.join(' ')} aria-disabled={disabled} {...restProps}>
  {@render children?.()}
</div>
```

ComponentName.scss

```scss
.dodo-ui-ComponentName {
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
```

ComponentName.stories.svelte

```svelte
<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import ComponentName from './ComponentName.svelte';
  import type { ComponentNameProps } from './ComponentName.svelte';
  import type { ArgTypes } from 'storybook/internal/csf';

  export const componentNameArgTypes: Partial<ArgTypes<ComponentNameProps>> = {
    class: { table: { category: 'API', subcategory: 'Base' } },
    disabled: {
      control: { type: 'boolean' },
      table: { category: 'API', subcategory: 'State', defaultValue: { summary: 'false' } },
    },
  };

  const { Story } = defineMeta({
    component: ComponentName,
    tags: ['autodocs'],
    argTypes: componentNameArgTypes,
  });
</script>

<Story name="Default">
  <ComponentName>Default Component</ComponentName>
</Story>

<Story name="Disabled" args={{ disabled: true }}>
  <ComponentName>Disabled Component</ComponentName>
</Story>
```

## ✅ Checklist

- [ ] Folder created under correct category
- [ ] ComponentName.svelte created
- [ ] ComponentName.scss created
- [ ] ComponentName.stories.svelte created
- [ ] SCSS imported into styles/components.scss
- [ ] Storybook renders correctly
- [ ] publint passes
