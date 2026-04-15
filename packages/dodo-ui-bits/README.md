# @flightlesslabs/dodo-ui-bits

An extension for Dodo UI that provides advanced, accessible components powered by [Bits UI](https://bits-ui.com/).

## 🔗 Links

- 📚 Docs: https://flightlesslabs.github.io/dodo-ui-bits
- 💻 GitHub: https://github.com/flightlesslabs/dodo-ui/tree/main/packages/dodo-ui-bits
- 📦 npm: https://www.npmjs.com/package/@flightlesslabs/dodo-ui-bits
- 📝 Changelog: https://github.com/flightlesslabs/dodo-ui/blob/main/packages/dodo-ui-bits/CHANGELOG.md

## 🚀 Installation

```bash
pnpm add @flightlesslabs/dodo-ui bits-ui @flightlesslabs/dodo-ui-bits
```

## 🎨 Add Styles

Import global styles in your root component. use the root layout (`+layout.svelte`) for SvelteKit.

```ts
// Core (Dodo UI)
import '@flightlesslabs/dodo-ui/styles/global.css';
import '@flightlesslabs/dodo-ui/styles/components.css';

// Addon (dodo-ui-bits)
import '@flightlesslabs/dodo-ui-bits/styles/main.css';
```

or scss

```ts
// Core (Dodo UI)
import '@flightlesslabs/dodo-ui/styles/global/index.scss';

// Addon (dodo-ui-bits)
import '@flightlesslabs/dodo-ui-bits/styles/main.scss';
```

## ✨ Usage

Import components from the addon as needed:

```ts
import { Checkbox } '@flightlesslabs/dodo-ui-bits';

<Checkbox />
```