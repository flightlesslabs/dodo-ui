# @flightlesslabs/dodo-ui-date

An extension for Dodo UI that provides accessible date and time components powered by [Bits UI](https://bits-ui.com/).

## 🔗 Links

- 📚 Docs: https://flightlesslabs.github.io/dodo-ui-date
- 💻 GitHub: https://github.com/flightlesslabs/dodo-ui/tree/main/packages/dodo-ui-date
- 📦 npm: https://www.npmjs.com/package/@flightlesslabs/dodo-ui-date
- 📝 Changelog: https://github.com/flightlesslabs/dodo-ui/blob/main/packages/dodo-ui-date/CHANGELOG.md

## 🚀 Installation

```bash
pnpm add @flightlesslabs/dodo-ui bits-ui @internationalized/date @flightlesslabs/dodo-ui-date
```

## 🎨 Add Styles

Import global styles in your root component. use the root layout (`+layout.svelte`) for SvelteKit.

```ts
// Core (Dodo UI)
import '@flightlesslabs/dodo-ui/styles/global.css';
import '@flightlesslabs/dodo-ui/styles/components.css';

// Addon (dodo-ui-date)
import '@flightlesslabs/dodo-ui-date/styles/main.css';
```

or scss

```ts
// Core (Dodo UI)
import '@flightlesslabs/dodo-ui/styles/global/index.scss';

// Addon (dodo-ui-date)
import '@flightlesslabs/dodo-ui-date/styles/main.scss';
```

## ✨ Usage

Import components from the addon as needed:

```ts
import { DatePicker } '@flightlesslabs/dodo-ui-date';

<DatePicker />
```